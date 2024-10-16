import React from "react";
import { Location } from "../../EditorComponent";
import styles from "./location5.module.scss";
import ComposerMap from "../../../composer-base-components/map/map";

class LocationComponent5 extends Location {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Header Title",
      value: "OFFICES",
    });
    this.addProp({
        type: "number",
        key: "zoom",
        displayer: "Zoom",
        value: 17,
      });  
    this.addProp({
      type: "array",
      displayer: "Location Addresses",
      key: "locationAddresses",
      value: [
        {
          type: "object",
          key: "firstadress",
          displayer: "First Location",
          value: [
            {
              type: "number",
              key: "index",
              displayer: "Index",
              value: 1,
            },
            {
              type: "string",
              key: "city",
              displayer: "City",
              value: "Lisbon, Portugal",
            },
            {
              type: "string",
              key: "adress",
              displayer: "Enter the address",
              value: "Rua Fernando Palha, 47A, 1950-130"
            },
            {
              type: "string",
              key: "description",
              displayer: "Enter the description",
              value: "(We work by appointment)",
            },
            {
              type: "array",
              key: "loc",
              displayer: "Map And Markers",
              value: [
                {
                  type: "object",
                  key: "loca",
                  displayer: "Location",
                  value: [
                    {
                      type: "location",
                      displayer: "Coordinate",
                      key: "coordinate",
                      value: {
                        lat: 38.7460309892659, 
                        lng: -9.100576929254501,
                      },
                    },
                    {
                      type: "image",
                      key: "marker-image",
                      displayer: "Marker Image",
                      value: "https://cdn3.iconfinder.com/data/icons/flat-pro-basic-set-1-1/32/location-gray-1024.png",
                    },
                  ],
                  
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "secondadress",
          displayer: "Second Location",
          value: [
            {
              type: "number",
              key: "index",
              displayer: "Index",
              value: 2,
            },
            {
              type: "string",
              key: "city",
              displayer: "City",
              value: "St. Petersburg, Russia",
            },
            {
              type: "string",
              key: "adress",
              displayer: "Enter the address",
              value: "Lermontovsky prospect, 35A",
            },
            {
              type: "string",
              key: "description",
              displayer: "Enter the description",
              value: "(We work by appointment)",
            },
            {
              type: "array",
              key: "loc",
              displayer: "Map And Markers",
              value: [
                {
                  type: "object",
                  key: "loca",
                  displayer: "Location",
                  value: [
                    {
                      type: "location",
                      displayer: "Coordinate",
                      key: "coordinate",
                      value: {
                        lat: 59.914732153022356,
                        lng:  30.295981663697482,
                      },
                    },
                    {
                      type: "image",
                      key: "marker-image",
                      displayer: "Marker Image",
                      value: "https://cdn3.iconfinder.com/data/icons/flat-pro-basic-set-1-1/32/location-gray-1024.png",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Location 5";
  }

  render() {
    const locationAddresses = this.getPropValue("locationAddresses") || [];

    const mapStyles: google.maps.MapTypeStyle[] = [
        {
          elementType: "geometry",
          stylers: [{ color: "#bfbfbf" }], 
        },
        {
          elementType: "labels.text.fill",
          stylers: [{ color: "#707070" }], 
        },
        {
          elementType: "labels.text.stroke",
          stylers: [{ color: "#F0F0F0" }], 
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
          elementType: "geometry.fill",
          stylers: [{ color: "#e0e0e0" }],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [{ color: "#D0E4F7" }], 
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#F0F0F0" }], 
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#F0F0F0" }], 
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#bdbdbd" }], 
        },
      ];

    const createMarkers = (address: any) => {
      const locData = address.value.find((a: any) => a.key === "loc")?.value;

      if (!locData) return [];

      return locData
        .map((loc: any) => {
          const coordinateData = loc.value.find(
            (a: any) => a.key === "coordinate"
          )?.value;
          const markerImage = loc.value.find(
            (a: any) => a.key === "marker-image"
          )?.value || "https://cdn3.iconfinder.com/data/icons/flat-pro-basic-set-1-1/32/location-gray-1024.png"; 

          const lat = coordinateData?.lat;
          const lng = coordinateData?.lng;
          const width = 32;
          const height = 32;


          if (lat !== undefined && lng !== undefined) {
            return {
              lat,
              lng,
              icon: {
                url: markerImage,
                scaledSize: new google.maps.Size(width, height),
              },
            };
          }
          return null;
        })
        .filter((marker: any) => marker !== null);
    };

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("header")}>
            {this.castToString(this.getPropValue("title")) && (
              <h1 className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </h1>
            )}
          </div>
          <div className={this.decorateCSS("wrapper")}>
            <section className={this.decorateCSS("map-container")}>
              {locationAddresses.map((location: any, index: number) => {
                const markers = createMarkers(location);

                const city = location.getPropValue("city");
                const adress = location.getPropValue("adress");
                const description = location.getPropValue("description");
                const locationIndex = location.getPropValue("index");

                return (
                  <div
                    key={index}
                    className={this.decorateCSS("location-item")}
                  >
                    <div className={this.decorateCSS("location-items")}>
                      <h2 className={this.decorateCSS("location-index")}>
                        {locationIndex}
                      </h2>
                      <p className={this.decorateCSS("location-city")}>
                        {city}
                      </p>
                      <p className={this.decorateCSS("location-adress")}>
                        {adress}
                      </p>
                      <p className={this.decorateCSS("location-description")}>
                        {description}
                      </p>
                    </div>
                    <ComposerMap
                      markers={markers}
                      styles={mapStyles}
                      className={this.decorateCSS("location-map")}
                      defaultZoom={this.getPropValue("zoom")}
                    />
                  </div>
                );
              })}
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationComponent5;

