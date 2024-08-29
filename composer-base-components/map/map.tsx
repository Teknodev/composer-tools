import { Map, Marker } from '@vis.gl/react-google-maps';
import React, { useEffect, useState } from 'react';

interface ComposerMapProps {
  markers: { lat: number; lng: number; }[];
  className: string;
};

function ComposerMap({ markers, className }: ComposerMapProps) {
  const [center, setCenter] = useState({ lat: 36.8968908, lng: 30.7133233 }); // Default center (Antalya)
  const [restriction, setRestriction] = useState(null);
  const [defaultBounds, setDefaultBounds] = useState(null);

  useEffect(() => {
    setCenter(null);
  }, [center]);

  useEffect(() => {
    setTimeout(() => {
      setRestriction(null);
    }, 100);
  }, [restriction]);

  useEffect(() => {
    if (markers.length > 0) {
      if (markers.length === 1) {
        setCenter({
          lat: markers[0].lat,
          lng: markers[0].lng
        });
        setRestriction(null);
      } else {
        const restrictions = getRestrictions();
        const calculatedCenter = getCenter(restrictions);

        setCenter(calculatedCenter);
        setRestriction({
          latLngBounds: restrictions
        });
        setDefaultBounds({
          latLngBounds: restrictions
        });
      }
    }
  }, [markers]);

  const getCenter = (bounds: { north: number; south: number; east: number; west: number; }) => {
    const lat = (bounds.north + bounds.south) / 2;
    const lng = (bounds.east + bounds.west) / 2;
    return { lat, lng };
  };

  const getRestrictions = () => {
    const lngs = markers.map(marker => marker.lng);
    const lats = markers.map(marker => marker.lat);

    const north = Math.max(...lats);
    const south = Math.min(...lats);
    const east = Math.max(...lngs);
    const west = Math.min(...lngs);

    return { north, south, east, west };
  };

  return (
    <Map
      className={className}
      center={center}
      restriction={restriction}
      defaultBounds={defaultBounds}
    >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={{
            lat: marker.lat,
            lng: marker.lng
          }}
          title="Location"
        />
      ))}
    </Map>
  );
}

export default ComposerMap;
