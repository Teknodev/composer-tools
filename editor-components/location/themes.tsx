export type TTheme = {
  name: string;
  colors: {
    featureType?: string;
    elementType?: string;
    stylers: { color?: string; visibility?: string }[];
  }[];
};

export const THEMES = [
  {
    name: "Theme-0",
    colors: [],
  },
  {
    name: "Theme-1",
    colors: [
      {
        elementType: "geometry",
        stylers: [{ color: "#1d2c4d" }],
      },
      {
        elementType: "labels.text.fill",
        stylers: [{ color: "#8ec3b9" }],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [{ color: "#1a3646" }],
      },
      {
        featureType: "administrative.country",
        elementType: "geometry.stroke",
        stylers: [{ color: "#333" }],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [{ color: "#333" }],
      },
      {
        featureType: "administrative.province",
        elementType: "geometry.stroke",
        stylers: [{ color: "#333" }],
      },
      {
        featureType: "landscape.man_made",
        elementType: "geometry.stroke",
        stylers: [{ color: "#334e87" }],
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [{ color: "#023e58" }],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#283d6a" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [{ color: "#023e58" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#304a7d" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#98a5be" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#1d2c4d" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#2c6675" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#255763" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#0e1626" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#4e6d70" }],
      },
    ],
  },
  {
    name: "Theme-2",
    colors: [
      {
        elementType: "geometry",
        stylers: [{ color: "#212121" }],
      },
      {
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [{ color: "#757575" }],
      },
      {
        featureType: "administrative.country",
        elementType: "geometry.stroke",
        stylers: [{ color: "#bdbdbd" }],
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{ color: "#F9F9F9" }],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#eeeeee" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#ffffff" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#F1F1F1" }],
      },
    ],
  },
  {
    name: "Theme-3",
    colors: [
      {
        elementType: "geometry",
        stylers: [{ color: "#fbe4d3" }],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#ffcba4" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#a4d4ff" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#f9dcc4" }],
      },
      {
        elementType: "labels.text.fill",
        stylers: [{ color: "#704214" }],
      },
    ],
  },
  {
    name: "Theme-4",
    colors: [
      {
        elementType: "geometry",
        stylers: [{ color: "#eaeaea" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#a2d9ff" }],
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{ color: "#d6e6c3" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#ffffff" }],
      },
      {
        elementType: "labels.text.fill",
        stylers: [{ color: "#333" }],
      },
    ],
  },
  {
    name: "Theme-5",
    colors: [
      {
        elementType: "geometry",
        stylers: [{ color: "#e8f8f5" }],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#d5f4e6" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#cce5ff" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#ffffff" }],
      },
      {
        elementType: "labels.text.fill",
        stylers: [{ color: "#2c3e50" }],
      },
    ],
  },
];
