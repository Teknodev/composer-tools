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

type PopupContent = {
  [key: number]: React.ReactNode;
};

const popupContents: PopupContent = [
  <div className={styles["first-marker"]}>
    <h4>Marker 1 Title</h4>
    <p>Custom content for the first marker.</p>
    <button>Details</button>
  </div>,
  <div className={styles["second-marker"]}>
    <h4>Marker 2 Title</h4>
    <p>Custom content for the second marker.</p>
    <button>More Info</button>
  </div>,
];

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

  popupContent = (marker: Coordinate, index: number) => {
    const content = popupContents[index];
    return content || null;
  };

  render() {
    const { markers } = this.getPropValue("location");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
            <section className={this.decorateCSS("map-container")}>
              <ComposerMap
                markers={markers.map((marker: any, index: number) => ({
                  ...marker,
                  contentIndex: index,
                }))}
                className={this.decorateCSS("map")}
                popupContent={(marker: any, index: number) => this.popupContent(marker, index)}
              />
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationComponent1;
