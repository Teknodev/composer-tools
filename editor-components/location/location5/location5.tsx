import React from "react";
import { Location } from "../../EditorComponent";
import styles from "./location5.module.scss";
import ComposerMap from "../../../composer-base-components/map/map";
import { Base } from "../../../composer-base-components/base/base";

class Location5 extends Location {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Header Title",
      value: "Offices",
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
              displayer: "Address",
              value: "Rua Fernando Palha, 47A, 1950-130",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
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
              displayer: "Address",
              value: "Lermontovsky prospect, 35A",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
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

  static getName(): string {
    return "Location 5";
  }

  render() {
    const locationAddresses = this.getPropValue("locationAddresses") || [];

    const subtitle = this.getPropValue("subtitle");
    const subtitleExist = this.castToString(subtitle);
    const markerZoom = this.getPropValue("markerZoom");
    const centerZoom = this.getPropValue("centerZoom");

    const theme = this.getPropValue("theme");

    const selectedTheme = theme || "Theme-2";

    const mapStyle = this.selectTheme(selectedTheme);

    const createMarkers = (address: any) => {
      const locData = address.getPropValue("loc");

      if (!locData) return [];

      return locData
        .map((loc: any) => {
          const coordinateData = loc.getPropValue("coordinate");
          const markerImage = loc.getPropValue("marker-image");

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

    const defaultMarkerIcon = "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6710dfcc97fe08002c76d871?alt=media";

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
        <Base.VerticalContent className={this.decorateCSS("title-block")}>
          {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>}
          {this.castToString(this.getPropValue("title")) && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
          </Base.VerticalContent>
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
                    <ComposerMap
                      defaultMarkerIcon={defaultMarkerIcon}
                      markers={markers}
                      styles={mapStyle.colors}
                      className={`${this.decorateCSS("location-map")} ${!hasItemsExist && this.decorateCSS("full-width")}`}
                      defaultZoom={centerZoom}
                      handleMarkerZoom={markerZoom}
                    />
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

export default Location5;
