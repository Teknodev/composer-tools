import { Map, Marker, useMap } from "@vis.gl/react-google-maps";
import React, { memo, useEffect, useState, useRef } from "react";
import { createRoot } from "react-dom/client";

type Coordinate = {
  icon: {
    url: string;
    scaledSize: {
      width: number;
      height: number;
    };
  };
  content?: React.ReactNode;
  lat: number;
  lng: number;
};

interface ComposerMapProps {
  markers: Coordinate[];
  className: string;
  defaultMarkerIcon?: string;
  defaultZoom?: number;
  handleMarkerZoom?: number;
  allContentShow?: boolean;
  styles?: google.maps.MapTypeStyle[];
  customSelectedMarker?: any;
}

const ComposerMap = memo(({ markers, className, defaultMarkerIcon, defaultZoom, allContentShow, handleMarkerZoom, styles, customSelectedMarker }: ComposerMapProps) => {
  const uniqueMapIdRef = useRef<string>(Math.random().toString());
  const uniqueMapId = uniqueMapIdRef.current;
  const map = useMap(uniqueMapId);

  const [selectedMarkers, setSelectedMarkers] = useState<Coordinate[]>([]);
  const overlayRefs = useRef<(any | null)[]>([]);
  const prevMarkersRef = useRef<Coordinate[]>([]);

  const getCenter = (bounds: { north: number; south: number; east: number; west: number }) => {
    const lat = (bounds.north + bounds.south) / 2;
    const lng = (bounds.east + bounds.west) / 2;
    return { lat, lng };
  };

  const getBounds = () => {
    if (markers.length === 0) return null;

    const lngs = markers.map((marker) => marker.lng);
    const lats = markers.map((marker) => marker.lat);

    const north = Math.max(...lats);
    const south = Math.min(...lats);
    const east = Math.max(...lngs);
    const west = Math.min(...lngs);

    return { north, south, east, west };
  };

  useEffect(() => {
    if (allContentShow) {
      setSelectedMarkers(markers);
    } else {
      setSelectedMarkers([]);
    }
  }, [allContentShow]);

  useEffect(() => {
    if (!map || markers.length === 0) return;

    const fitMapToMarkers = () => {
      const bounds = new google.maps.LatLngBounds();
      markers.forEach((marker) => bounds.extend(new google.maps.LatLng(marker.lat, marker.lng)));

      map.fitBounds(bounds);

      google.maps.event.addListenerOnce(map, "idle", () => {
        const currentZoom = map.getZoom();
        if (markers.length > 1) {
          map.setZoom(defaultZoom !== undefined ? defaultZoom : currentZoom);
        } else {
          map.setZoom(defaultZoom !== undefined ? defaultZoom : 5);
        }
      });
    };

    fitMapToMarkers();

    return () => {
      google.maps.event.clearListeners(map, "idle");
    };
  }, [map, defaultZoom, JSON.stringify(markers.map((marker) => ({ lat: marker.lat, lng: marker.lng })))]);

  useEffect(() => {
    if (map) {
      if (markers.length === 0) {
        map.setCenter({ lat: 0, lng: 0 });
        map.setZoom(1);
      }
    }
  }, [map, markers]);

  useEffect(() => {
    if (map && defaultZoom !== undefined) {
      const currentZoom = map.getZoom();
      if (defaultZoom !== currentZoom) {
        map.setZoom(defaultZoom || 5);
      }
    }
  }, [map, defaultZoom]);

  useEffect(() => {
    if (!map) return;

    const bounds = getBounds();
    if (!bounds) return;

    const calculatedCenter = getCenter(bounds);

    const hasMarkersChanged = (markers: Coordinate[], prevMarkers: Coordinate[]) => {
      if (markers.length !== prevMarkers.length) {
        return true;
      }

      return markers.some((marker, index) => {
        const prevMarker = prevMarkers[index];
        return prevMarker && (marker.lat !== prevMarker.lat || marker.lng !== prevMarker.lng);
      });
    };

    if (hasMarkersChanged(markers, prevMarkersRef.current)) {
      map.fitBounds(bounds);
      map.setCenter(calculatedCenter);
      map.panTo(calculatedCenter);
    }

    prevMarkersRef.current = markers;
  }, [map, markers]);

  const defaultMarker = defaultMarkerIcon || "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66dffd65343034002c462ded?alt=media&timestamp=1725955430378";

  const createOverlayView = (marker: Coordinate) => {
    const customStyle: React.CSSProperties = {
      position: "absolute",
      zIndex: 1000,
      pointerEvents: "auto",
      transform: "translate(-50%, -100%)",
    };

    class CustomOverlay extends google.maps.OverlayView {
      div: HTMLDivElement | null = null;
      position: google.maps.LatLng;

      constructor(position: google.maps.LatLng) {
        super();
        this.position = position;
      }

      onAdd() {
        this.div = document.createElement("div");
        Object.assign(this.div.style, customStyle);

        const root = createRoot(this.div);
        if (marker.content) {
          root.render(marker.content);
        }

        const panes = this.getPanes();
        if (panes) panes.overlayMouseTarget.appendChild(this.div);
      }

      draw() {
        if (this.div) {
          const projection = this.getProjection();
          if (projection) {
            const point = projection.fromLatLngToDivPixel(this.position);
            if (point) {
              this.div.style.left = `${point.x}px`;
              this.div.style.top = `${point.y - 35}px`;
            }
          }
        }
      }

      onRemove() {
        if (this.div && this.div.parentNode) {
          this.div.parentNode.removeChild(this.div);
          const root = createRoot(this.div);
          root.unmount();
        }
      }
    }

    return CustomOverlay;
  };

  const prevSelectedMarkersCountRef = useRef<number>(0);

  useEffect(() => {
    if (map) {
      map.setOptions({ styles });

      if (selectedMarkers.length !== prevSelectedMarkersCountRef.current) {
        overlayRefs.current.forEach((overlay) => overlay && overlay.setMap(null));
        overlayRefs.current = [];

        selectedMarkers.forEach((marker) => {
          const overlayClass = createOverlayView(marker);
          const overlay = new overlayClass(new google.maps.LatLng(marker.lat, marker.lng));
          overlay.setMap(map);
          overlayRefs.current.push(overlay);
        });

        prevSelectedMarkersCountRef.current = selectedMarkers.length;
      }
    }
  }, [selectedMarkers, map, styles]);

  useEffect(() => {
    const activeMarkers = new Set(markers.map((m) => `${m.lat},${m.lng}`));

    setSelectedMarkers((prev) => prev.filter((marker) => activeMarkers.has(`${marker.lat},${marker.lng}`)));
  }, [markers]);

  const handleMarkerClick = (marker: Coordinate) => {
    setSelectedMarkers((prevSelectedMarkers) => {
      const isMarkerSelected = prevSelectedMarkers.some((m) => m.lat === marker.lat && m.lng === marker.lng);
      if (isMarkerSelected) {
        return prevSelectedMarkers.filter((m) => !(m.lat === marker.lat && m.lng === marker.lng)); // Close
      } else {
        return [...prevSelectedMarkers, marker];
      }
    });

    const offsetLat = -0.005;

    map.setCenter({ lat: marker.lat - offsetLat, lng: marker.lng });
    map.setZoom(handleMarkerZoom || 15);
  };

  useEffect(() => {
    if (customSelectedMarker && map) {
      const markerToSelect = markers.find((marker) => marker.lat === customSelectedMarker.lat && marker.lng === customSelectedMarker.lng);

      if (markerToSelect) {
        handleMarkerClick(markerToSelect);
      }
    }
  }, [customSelectedMarker]);

  return (
    <Map id={uniqueMapId} className={className} restriction={{
      latLngBounds: { north: 85, south: -85, west: -180, east: 180 },
      strictBounds: true,
    }} minZoom={2}>
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={{ lat: marker.lat, lng: marker.lng }}
          title="Location"
          icon={{
            url: marker.icon.url || defaultMarker,
            scaledSize: new google.maps.Size(marker.icon?.scaledSize.width || 32, marker.icon?.scaledSize.height || 32),
          }}
          onClick={() => handleMarkerClick(marker)}
        />
      ))}
    </Map>
  );
});

export default ComposerMap;
