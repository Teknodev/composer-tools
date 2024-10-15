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
  allContentShow?: boolean;
  styles?: google.maps.MapTypeStyle[];
}

const ComposerMap = memo(({ markers, className, defaultMarkerIcon, defaultZoom, allContentShow, styles }: ComposerMapProps) => {
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
    }
  }, []);

  useEffect(() => {
    if (!map) return;

    const isNewMarkerAdded = markers.length > prevMarkersRef.current.length;

    if (isNewMarkerAdded) {
      const bounds = getBounds();
      const calculatedCenter = getCenter(bounds);
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
              this.div.style.left = `${point.x - this.div.clientWidth / 2}px`;
              this.div.style.top = `${point.y - this.div.clientHeight - 30}px`;
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

  useEffect(() => {
    if (map) {
      map.setOptions({ styles });
      overlayRefs.current.forEach((overlay) => overlay && overlay.setMap(null));
      overlayRefs.current = [];

      selectedMarkers.forEach((marker) => {
        const overlayClass = createOverlayView(marker);
        const overlay = new overlayClass(new google.maps.LatLng(marker.lat, marker.lng));
        overlay.setMap(map);

        overlayRefs.current.push(overlay);
      });
    }
  }, [selectedMarkers, map, styles]);

  const handleMarkerClick = (marker: Coordinate) => {
    setSelectedMarkers((prevSelectedMarkers) => {
      const isMarkerSelected = prevSelectedMarkers.some((m) => m.lat === marker.lat && m.lng === marker.lng);
      if (isMarkerSelected) {
        return prevSelectedMarkers.filter((m) => !(m.lat === marker.lat && m.lng === marker.lng)); // Close
      } else {
        return [...prevSelectedMarkers, marker];
      }
    });

    map.setCenter({ lat: marker.lat, lng: marker.lng });
    map.setZoom(6);
  };

  return (
    <Map id={uniqueMapId} className={className}>
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={{ lat: marker.lat, lng: marker.lng }}
          title="Location"
          icon={{
            url: marker.icon?.url || defaultMarker,
            scaledSize: new google.maps.Size(marker.icon?.scaledSize.width || 32, marker.icon?.scaledSize.height || 32),
          }}
          onClick={() => handleMarkerClick(marker)}
        />
      ))}
    </Map>
  );
});

export default ComposerMap;
