import React from "react";
import { Location } from "../../EditorComponent";
import styles from "./location3.module.scss";
import ComposerMap from "../../../composer-base-components/map/map";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { WButton } from "../../../../components/wrappers/wrapper";

type Coordinate = {
  customIcon: {
    url: string;
  };
  button?: {
    text?: string;
    url?: string;
  };
  photo: string;
  title: string;
  content: string;
  lat: number;
  lng: number;
  icon?: {
    url: string;
    width?: number;
    height?: number;
  };
  address?: string;
};

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
              height: 32,
              width: 32,
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
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

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

    const defaultMarkerIcon = "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66ffb3d4cf1798002cc7f505?alt=media&timestamp=1728033800047";

    const popupContent = (marker: Coordinate) => {
      const completeUrl = marker.button?.url ? (marker.button.url.startsWith("http") ? marker.button.url : "http://${marker.button.url}") : null;

      if (marker.photo || marker.title || marker.content || marker.button?.text || marker.customIcon?.url) {
        return (
          <div className={styles["popup-content"]}>
            <div style={{ position: "absolute", right: 20, cursor: "pointer" }}>
              <a href={"www.google.com"} target="_blank" rel="noopener noreferrer">
                <ComposerIcon name={marker.customIcon?.url} />
              </a>
            </div>
            {marker.photo && <img className={styles["popup-image"]} src={marker.photo} alt="Marker" />}
            {marker.title && <h4 className={this.decorateCSS("popup-title")}>{marker.title}</h4>}
            {marker.content && <p className={this.decorateCSS("popup-content")}>{marker.content}</p>}
            {marker.button?.text && (
              <a href={completeUrl || "#"} target="_blank" rel="noopener noreferrer">
                <WButton className={styles["popup-button"]}>{marker.button?.text}</WButton>
              </a>
            )}
          </div>
        );
      }

      return null;
    };

    return (
      <div className={styles["container"]}>
        <div className={styles["max-content"]}>
          <div className={styles["wrapper"]}>
            {this.getPropValue("icon") && (
              <div className={styles["icon-wrapper"]}>
                <ComposerIcon propsIcon={{ size: "40px" }} name={this.getPropValue("icon")} />
              </div>
            )}

            {title && <p className={styles["title"]}>{title}</p>}

            {description && <p className={styles["description"]}>{description}</p>}

            {continents.length > 0 && (
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
            )}

            <section className={styles["map-container"]}>
              <ComposerMap defaultMarkerIcon={defaultMarkerIcon} popupContent={popupContent} markers={markers} className={styles["map"]} styles={mapStyles} />
            </section>
          </div>
        </div>
      </div>
    );
  }
}
export default LocationComponent3;
