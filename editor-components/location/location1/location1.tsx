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
      type: "location",
      key: "location",
      displayer: "Location",
      value: {
        markers: [
          {
            lat: 36.8968908,
            lng: 30.7133233,
            icon: {
              url: "",
              height: 50,
              width: 50,
            },
          },
        ],
      },
    });
  }

  getName(): string {
    return "Location 1";
  }

  renderPopupContent = (marker: Coordinate) => {
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
              <ComposerMap markers={markers} className={this.decorateCSS("map")} renderPopupContent={this.renderPopupContent} />
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationComponent1;
