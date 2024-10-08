import React from "react";
import { Location } from "../../EditorComponent";
import styles from "./location1.module.scss";
import ComposerMap from "../../../composer-base-components/map/map";

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

class LocationComponent1 extends Location {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "See Our Location",
    });

    this.addProp({
      type: "array",
      displayer: "addresses",
      key: "addresses",
      value: [
        {
          type: "object",
          key: "marker",
          displayer: "Marker",
          value: [
            {
              type: "location",
              displayer: "Coordinate",
              key: "coordinate",
              value: {
                lat: 36.8529,
                lng: -75.978,
              },
            },
            {
              type: "string",
              displayer: "Office",
              key: "office",
              value: "Arapsuyu 600 Sokak",
            },
            {
              type: "image",
              key: "marker-image1",
              displayer: "Marker Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66dffd65343034002c462ded?alt=media&timestamp=1725955430378",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Bu, birinci lokasyonun açıklamasıdır.",
            },
            {
              type: "string",
              displayer: "Popup Title",
              key: "popupTitle",
              value: "Birinci Lokasyon",
            },
          ],
        },
        {
          type: "object",
          key: "marker",
          displayer: "Marker",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title2",
              value: "Second Location",
            },
            {
              type: "location",
              displayer: "Coordinate",
              key: "coordinate2",
              value: {
                lat: 37.1234,
                lng: -76.9876,
              },
            },
            {
              type: "string",
              displayer: "Office",
              key: "office2",
              value: "Arapsuyu 601 Sokak",
            },
            {
              type: "image",
              key: "marker-image2",
              displayer: "Marker Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66dffd65343034002c462ded?alt=media&timestamp=1725955430378",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description2",
              value: "Bu, ikinci lokasyonun açıklamasıdır.",
            },
            {
              type: "string",
              displayer: "Popup Title",
              key: "popupTitle2",
              value: "İkinci Lokasyon",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Location 1";
  }

  popupContent = (marker: Coordinate) => {
    return (
      <div className={this.decorateCSS("popup")}>
        <h4 className={this.decorateCSS("popup-title")}>Popup Title</h4>
        <p className={this.decorateCSS("popup-content")}>Popup Content: {marker.address || "No address"}</p>
        <button className={this.decorateCSS("popup-button")}>Custom Button</button>
      </div>
    );
  };

  render() {
    const { markers } = this.getPropValue("location");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
            <section className={this.decorateCSS("map-container")}>
              <ComposerMap markers={markers} className={this.decorateCSS("map")} />
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationComponent1;
