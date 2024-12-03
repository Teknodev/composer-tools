import React from "react";
import { Location } from "../../EditorComponent";
import styles from "./location5.module.scss";
import ComposerMap from "../../../composer-base-components/map/map";
import { Base } from "../../../composer-base-components/base/base";

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
      key: "centerZoom",
      displayer: "Center Zoom Value",
      value: 3,
    });

    this.addProp({
      type: "number",
      key: "markerZoom",
      displayer: "Marker Zoom Value",
      value: 15,
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
              value: "Rua Fernando Palha, 47A, 1950-130",
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
                      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6710dfcc97fe08002c76d871?alt=media",
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
                        lng: 30.295981663697482,
                      },
                    },
                    {
                      type: "image",
                      key: "marker-image",
                      displayer: "Marker Image",
                      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6710dfcc97fe08002c76d871?alt=media",
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

    const markerZoom = this.getPropValue("markerZoom");
    const centerZoom = this.getPropValue("centerZoom");

    const theme = this.getPropValue("theme");
    const mapStyle = this.selectTheme(theme);

    const createMarkers = (address: any) => {
      const locData = address.value.find((a: any) => a.key === "loc")?.value;

      if (!locData) return [];

      return locData
        .map((loc: any) => {
          const coordinateData = loc.value.find((a: any) => a.key === "coordinate")?.value;
          const markerImage = loc.value.find((a: any) => a.key === "marker-image")?.value || "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6710dfcc97fe08002c76d871?alt=media";

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
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {this.castToString(this.getPropValue("title")) && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
          <div className={this.decorateCSS("wrapper")}>
            <section className={this.decorateCSS("map-container")}>
              {locationAddresses.map((location: any, index: number) => {
                const markers = createMarkers(location);

                const city = location.getPropValue("city");
                const adress = location.getPropValue("adress");
                const description = location.getPropValue("description");
                const locationIndex = location.getPropValue("index");

                const cityExist = this.castToString(city);
                const adressExist = this.castToString(adress);
                const descriptionExist = this.castToString(description);

                const hasItemsExist = cityExist || adressExist || descriptionExist || locationIndex;

                return (
                  <div key={index} className={this.decorateCSS("location-item")}>
                    {hasItemsExist && (
                      <Base.VerticalContent className={this.decorateCSS("location-items")}>
                        {locationIndex && <Base.H2 className={this.decorateCSS("location-index")}>{locationIndex}</Base.H2>}
                        {cityExist && <Base.P className={this.decorateCSS("location-city")}>{city}</Base.P>}
                        {adressExist && <Base.P className={this.decorateCSS("location-adress")}>{adress}</Base.P>}
                        {descriptionExist && <Base.P className={this.decorateCSS("location-description")}>{description}</Base.P>}
                      </Base.VerticalContent>
                    )}
                    <ComposerMap markers={markers} styles={mapStyle.colors} className={hasItemsExist ? this.decorateCSS("location-map") : this.decorateCSS("location-map-full-width")} defaultZoom={centerZoom} handleMarkerZoom={markerZoom} />
                  </div>
                );
              })}
            </section>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default LocationComponent5;
