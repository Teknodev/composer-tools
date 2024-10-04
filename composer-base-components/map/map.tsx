import { Map, Marker, useMap } from "@vis.gl/react-google-maps";
import React, { memo, useEffect, useState, useRef, useMemo } from "react";
import { createRoot } from "react-dom/client";

type Coordinate = {
  lat: number;
  lng: number;
  icon?: {
    url: string;
    width?: number;
    height?: number;
  };
  address?: string;
};

interface ComposerMapProps {
  markers: Coordinate[];
  className: string;
  popupContent?: (marker: Coordinate) => React.ReactNode;
  defaultMarkerIcon?: string;
  styles?: google.maps.MapTypeStyle[];
}

const ComposerMap = memo(({ markers, className, popupContent, defaultMarkerIcon, styles }: ComposerMapProps) => {
  const uniqueMapIdRef = useRef<string>(Math.random().toString());
  const uniqueMapId = uniqueMapIdRef.current;
  const map = useMap(uniqueMapId);
  const [selectedMarker, setSelectedMarker] = useState<Coordinate | null>(null);
  const overlayRef = useRef<any>(null);

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
    if (!map) return;

    setTimeout(() => {
      if (markers.length === 0) return;

      if (markers.length === 1) {
        const center = { lat: markers[0].lat, lng: markers[0].lng };
        map.setCenter(center);
        map.setZoom(14);
        return;
      }

      const bounds = getBounds();
      const calculatedCenter = getCenter(bounds);
      map.fitBounds(bounds);
      map.setCenter(calculatedCenter);
      map.panTo(calculatedCenter);
    }, 1);
  }, [markers, map]);

  const defaultMarker = defaultMarkerIcon || "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66dffd65343034002c462ded?alt=media&timestamp=1725955430378";

  const createOverlayView = () => {
    const customStyle: React.CSSProperties = {
      position: "absolute",
      zIndex: 1000,
      pointerEvents: "auto",
      maxWidth: "300px",
      wordWrap: "break-word",
      wordBreak: "break-word",
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

        const content = <div>{popupContent ? popupContent(selectedMarker!) : <div></div>}</div>;

        const root = createRoot(this.div);
        root.render(content);
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
          const root = createRoot(this.div);
          root.unmount();
        }
      }
    }

    return CustomOverlay;
  };

  useEffect(() => {
    if (overlayRef.current) {
      overlayRef.current.setMap(null);
    }
    if (selectedMarker && map) {
      const overlayClass = createOverlayView();
      overlayRef.current = new overlayClass(new google.maps.LatLng(selectedMarker.lat, selectedMarker.lng));
      overlayRef.current.setMap(map);

      map.setCenter({ lat: selectedMarker.lat, lng: selectedMarker.lng });
      map.setZoom(6);
    }
  }, [selectedMarker, map]);

  useEffect(() => {
    if (map) {
      map.setOptions({ styles });
    }
  }, [map, styles]);

  const handleMarkerClick = (marker: Coordinate) => {
    const shouldSetMarkerNull = selectedMarker && selectedMarker.lat === marker.lat && selectedMarker.lng === marker.lng;
    setSelectedMarker(shouldSetMarkerNull ? null : marker);

    map.setCenter({ lat: marker.lat, lng: marker.lng });
    map.setZoom(6);
  };

  return (
    <Map id={uniqueMapId} className={className}>
      {markers.length > 0
        ? markers.map((marker, index) => (
            <div key={index}>
              <Marker
                position={marker}
                title="Location"
                icon={{
                  url: defaultMarker || marker.icon?.url,
                  scaledSize: new google.maps.Size(marker.icon?.width || 32, marker.icon?.height || 32),
                }}
                onClick={() => handleMarkerClick(marker)}
              />
            </div>
          ))
        : null}
    </Map>
  );
});

export default ComposerMap;
