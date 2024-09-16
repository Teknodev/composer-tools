import React from "react";
import { Location } from "../../EditorComponent";
import styles from "./location3.module.scss";
import ComposerMap from "../../../composer-base-components/map/map";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class LocationComponent3 extends Location {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "icon",
      key: "icon",
      displayer: "Icon",
      value: "BiWorld",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "TOP DESTINATION",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Explore the world with us",
    });

    this.addProp({
      type: "array",
      key: "continents",
      displayer: "Continents",
      value: [
        {
          type: "object",
          key: "continent",
          displayer: "Continent",
          value: [
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "EUROPE",
            },
            {
              type: "number",
              key: "count",
              displayer: "Count",
              value: 12,
            },
          ],
        },
        {
          type: "object",
          key: "continent",
          displayer: "Continent",
          value: [
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "AFRICA",
            },
            {
              type: "number",
              key: "count",
              displayer: "Count",
              value: 2,
            },
          ],
        },
        {
          type: "object",
          key: "continent",
          displayer: "Continent",
          value: [
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "ASIA",
            },
            {
              type: "number",
              key: "count",
              displayer: "Count",
              value: 1,
            },
          ],
        },
        {
          type: "object",
          key: "continent",
          displayer: "Continent",
          value: [
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "OCEANIA",
            },
            {
              type: "number",
              key: "count",
              displayer: "Count",
              value: 1,
            },
          ],
        },
        {
          type: "object",
          key: "continent",
          displayer: "Continent",
          value: [
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "NORTH AMERICA",
            },
            {
              type: "number",
              key: "count",
              displayer: "Count",
              value: 6,
            },
          ],
        },
        {
          type: "object",
          key: "continent",
          displayer: "Continent",
          value: [
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "SOUTH AMERICA",
            },
            {
              type: "number",
              key: "count",
              displayer: "Count",
              value: 21,
            },
          ],
        },
      ],
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
    return "Location 3";
  }

  render() {
    const { markers } = this.getPropValue("location");
    const continents = this.getPropValue("continents");

    const mapStyles: google.maps.MapTypeStyle[] = [
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
    ];

    return (
      <div className={styles["container"]}>
        <div className={styles["max-content"]}>
          <div className={styles["wrapper"]}>
            <div className={styles["icon-wrapper"]}>
              <ComposerIcon propsIcon={{ size: "25px" }} name={this.getPropValue("icon")} />
            </div>
            <p className={styles["title"]}>{this.getPropValue("title")}</p>
            <p className={styles["description"]}>{this.getPropValue("description")}</p>
            <div className={styles["continents-wrapper"]}>
              {continents.map((continentObj: any, index: number) => {
                const continent = continentObj.value;
                const name = continent.find((item: any) => item.key === "name")?.value;
                const count = continent.find((item: any) => item.key === "count")?.value;

                return (
                  <div key={index} className={styles["continent-item"]}>
                    <p className={styles["continent-name"]}>{name}</p>
                    <p className={styles["continent-count"]}>{count}</p>
                  </div>
                );
              })}
            </div>
            <section className={styles["map-container"]}>
              <ComposerMap markers={markers} className={styles["map"]} styles={mapStyles} />
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationComponent3;
