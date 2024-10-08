import React from "react";
import { Location } from "../../EditorComponent";
import styles from "./location1.module.scss";
import ComposerMap from "../../../composer-base-components/map/map";

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
              type: "string",
              displayer: "Office",
              key: "office",
              value: "Arapsuyu 601 Sokak",
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
        {
          type: "object",
          key: "marker",
          displayer: "Marker",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Second Location",
            },
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
              type: "string",
              displayer: "Office",
              key: "office",
              value: "Arapsuyu 601 Sokak",
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
    const addresses = this.getPropValue("addresses");

    const markers = addresses.reduce((acc: any[], address: any) => {
      if (address.type === "object" && Array.isArray(address.value)) {
        const markerData = address.value.find((addr: any) => addr.type === "location");
        const lat = markerData?.value.lat;
        const lng = markerData?.value.lng;
        const officeAddress = address.value.find((a: any) => a.key.startsWith("office"))?.value || "";
        const description = address.value.find((a: any) => a.key.startsWith("description"))?.value || "";
        const popupTitle = address.value.find((a: any) => a.key.startsWith("popupTitle"))?.value || "";
        const markerImage = address.value.find((a: any) => a.key.startsWith("marker-image"))?.value;
        const width = address.value.find((a: any) => a.key.startsWith("marker-width"))?.value || 32;
        const height = address.value.find((a: any) => a.key.startsWith("marker-height"))?.value || 32;

        console.log(markerImage, "markerImage");

        if (lat !== undefined && lng !== undefined) {
          const content =
            officeAddress || description || popupTitle ? (
              <div style={{ backgroundColor: "white", padding: "10px" }}>
                {officeAddress && <p>{officeAddress}</p>}
                {description && <p>{description}</p>}
                {popupTitle && <p>{popupTitle}</p>}
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
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationComponent1;
