import { Map, Marker, useMap } from "@vis.gl/react-google-maps";
import React, { memo, useEffect } from "react";

type Coordinate = {
  lat: number;
  lng: number;
  icon?: {
    url: string;
    width?: number;
    height?: number;
  };
};

interface ComposerMapProps {
  markers: Coordinate[];
  className: string;
}

const ComposerMap = memo(({ markers, className }: ComposerMapProps) => {
  const map = useMap(className);

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
    if (!map || !markers.length) return;

    setTimeout(() => {
      if (markers.length === 1) {
        const center = {
          lat: markers[0].lat,
          lng: markers[0].lng,
        };
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

  const defaultMarker = "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66dffd65343034002c462ded?alt=media&timestamp=1725955430378";

  return (
    <Map id={className} className={className}>
      {markers.length > 0 &&
        markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker}
            title="Location"
            icon={{
              url: marker.icon.url || defaultMarker,
              scaledSize: new google.maps.Size(marker.icon.width || 32, marker.icon.height || 32),
            }}
          />
        ))}
    </Map>
  );
});

export default ComposerMap;
