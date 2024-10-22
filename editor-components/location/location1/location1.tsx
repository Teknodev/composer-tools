import React from "react";
import { Location } from "../../EditorComponent";
import styles from "./location1.module.scss";
import ComposerMap from "../../../composer-base-components/map/map";


type Address = {
  type: string;
  key: string;
  value: Array<Marker>;
};

type Marker = {
  type: string;
  key: string;
  value: any;
};

type MarkerObject = {
  content: React.ReactNode;
  lat: number;
  lng: number;
  icon: {
    url: string;
    scaledSize: google.maps.Size;
    width: number;
    height: number;
  };
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
              type: "image",
              key: "marker-image",
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
              type: "location",
              displayer: "Coordinate",
              key: "coordinate",
              value: {
                lat: 37.1234,
                lng: -76.9876,
              },
            },
            {
              type: "image",
              key: "marker-image",
              displayer: "Marker Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66dffd65343034002c462ded?alt=media&timestamp=1725955430378",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Bu, ikinci lokasyonun açıklamasıdır.",
            },
            {
              type: "string",
              displayer: "Popup Title",
              key: "popupTitle",
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

  render() {
    const addresses: Address[] = this.getPropValue("addresses");

    const markers = addresses.reduce((acc: MarkerObject[], address: Address) => {
      if (address.type === "object" && Array.isArray(address.value)) {
        const markerData = address.value.find((addr) => addr.type === "location");
        const lat = markerData?.value.lat;
        const lng = markerData?.value.lng;
        const description = address.value.find((a) => a.key.startsWith("description"))?.value || "";
        const popupTitle = address.value.find((a) => a.key.startsWith("popupTitle"))?.value || "";
        const markerImage = address.value.find((a) => a.key.startsWith("marker-image"))?.value;
        const width = address.value.find((a) => a.key.startsWith("marker-width"))?.value || 32;
        const height = address.value.find((a) => a.key.startsWith("marker-height"))?.value || 32;

        if (lat !== undefined && lng !== undefined) {
          const content =
            description || popupTitle ? (
              <div style={{ backgroundColor: "white", padding: "10px", maxWidth: "400px" }}>
                {popupTitle && <p>{popupTitle} </p>}
                {description && <p>{description}</p>}
              </div>
            ) : null;

          acc.push({
            content,
            lat,
            lng,
            icon: {
              url: markerImage,
              scaledSize: new google.maps.Size(width, height),
              width,
              height,
            },
          });
        }
      }
      return acc;
    }, []);


    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
            <section className={this.decorateCSS("map-container")}>
              <ComposerMap markers={markers} className={this.decorateCSS("map")} />
              <ComposerMap markers={markers} className={this.decorateCSS("map")} />
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationComponent1;
