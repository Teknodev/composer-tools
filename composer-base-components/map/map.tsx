import { Map, Marker } from '@vis.gl/react-google-maps';
import React, { useEffect, useState } from 'react';

interface ComposerMapProps {
  markers: { lat: number; lng: number; }[];
  zoom: number;
  className: string;
};

function ComposerMap({ markers, zoom: zoomProp, className }: ComposerMapProps) {
  // const [zoom, setZoom] = useState(null);
  const [center, setCenter] = useState({ lat: 36.8968908, lng: 30.7133233 }); // Default center (Antalya)
  const [restriction, setRestriction] = useState(null);
  const [defaultBounds, setDefaultBounds] = useState(null);

  // useEffect(() => {
  //   setZoom(null);
  // }, [zoom]);

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
        // setZoom(zoom);
        setCenter({
          lat: markers[0].lat,
          lng: markers[0].lng
        });
        setRestriction(null);
        // setZoom(zoomProp);
      } else {
        // setZoom(null);
        const restrictions = getRestrictions();
        // const calculatedZoom = calculateZoom(restrictions);
        const calculatedCenter = getCenter(restrictions);

        // setZoom(calculatedZoom);
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

  // const calculateZoom = (bounds: { north: number; south: number; east: number; west: number; }) => {
  //   const latDiff = bounds.north - bounds.south;
  //   const lngDiff = bounds.east - bounds.west;

  //   const maxDiff = Math.max(latDiff, lngDiff);
  //   if (maxDiff > 150) return 1;
  //   if (maxDiff > 5) return 2;
  //   if (maxDiff > 30) return 3;
  //   if (maxDiff > 1) return 4;
  //   if (maxDiff > 0.5) return 6;
  //   if (maxDiff > 0.25) return 8;
  //   return 8;
  // };

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
      // zoom={zoom}
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
