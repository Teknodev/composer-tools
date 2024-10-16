import React from "react";
import { Location } from "../../EditorComponent";
import styles from "./location4.module.scss";
import ComposerMap from "../../../composer-base-components/map/map";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

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
type BottomType = {
  title: JSX.Element;
  content: JSX.Element;
  isLineActive: boolean;
}
type PopupType = {
  title: JSX.Element,
  date: JSX.Element,
  content: JSX.Element,
  icon: string,
  isPopupActive: boolean,
  popupImage: string;

}
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

class LocationComponent4 extends Location {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "number",
      key: "zoom",
      displayer: "Zoom",
      value: 1
    })
    this.addProp({
      type: "number",
      key: "marker-zoom",
      displayer: "Marker Zoom",
      value: 1
    })
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
                lat: 41.9028,
                lng: 12.4964,
              },
            },

            {
              type: "image",
              key: "marker-image",
              displayer: "Marker Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66dffd65343034002c462ded?alt=media&timestamp=1725955430378",
            },
            {
              type: "boolean",
              key: "isPopupActive",
              displayer: "Popup Active",
              value: true,
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "5 REASONS YOU NEED TO VISIT BUDAPEST",

            },
            {
              type: "string",
              key: "date",
              displayer: "Date",
              value: "JULY 6, 2017",

            },
            {
              type: "string",
              key: "content",
              displayer: "Content",
              value: "Phasellus rhoncus metus sed neque efficitur vestibulum. Suspendisse lacinia lacus vel ante scelerisqu.",

            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "IoCloseSharp",
            },
            {
              type: "image",
              key: "popupImage",
              displayer: "Image",
              value: "https://wpvoyager.purethe.me/wp-content/uploads/2015/06/photo-1437747941115-61870b18ede5-420x400.jpg",
            }
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
                lat: 44.4268,
                lng: 26.1025,
              },
            },
            {
              type: "image",
              key: "marker-image",
              displayer: "Marker Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66dffd65343034002c462ded?alt=media&timestamp=1725955430378",
            },
            {
              type: "boolean",
              key: "isPopupActive",
              displayer: "Popup Active",
              value: true,
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "5 REASONS YOU NEED TO VISIT BUDAPEST",

            },
            {
              type: "string",
              key: "date",
              displayer: "Date",
              value: "JULY 6, 2017",

            },
            {
              type: "string",
              key: "content",
              displayer: "Content",
              value: "Phasellus rhoncus metus sed neque efficitur vestibulum. Suspendisse lacinia lacus vel ante scelerisqu.",

            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "IoCloseSharp",
            },
            {
              type: "image",
              key: "popupImage",
              displayer: "Image",
              value: "https://wpvoyager.purethe.me/wp-content/uploads/2015/06/photo-1437747941115-61870b18ede5-420x400.jpg",
            }
          ],
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "bottom",
      displayer: "Bottom",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "WELCOME",

        },
        {
          type: "string",
          key: "content",
          displayer: "Content",
          value: "Hello! My name's Matthew, I'm the traveller, writer and photographer behinf WPVoyager, a travel and lifestyle blog!",

        },
        {
          type: "boolean",
          key: "isLineActive",
          displayer: "Line Active",
          value: true,

        }
      ]
    })
  }

  getName(): string {
    return "Location 4";
  }

  render() {
    const addresses: Address[] = this.getPropValue("addresses");

    const markers = addresses.reduce((acc: MarkerObject[], address: Address) => {
      if (address.type === "object" && Array.isArray(address.value)) {
        const markerData = address.value.find((addr) => addr.type === "location");
        const lat = markerData?.value.lat;
        const lng = markerData?.value.lng;
        const description = address.value.find((a) => a.key.startsWith("content"))?.value || "";
        const title = address.value.find((a) => a.key.startsWith("title"))?.value || "";
        const date = address.value.find((a) => a.key.startsWith("date"))?.value || "";
        const popupImage = address.value.find((a) => a.key.startsWith("popupImage"))?.value || "";
        const markerImage = address.value.find((a) => a.key.startsWith("marker-image"))?.value;
        const width = address.value.find((a) => a.key.startsWith("marker-width"))?.value || 32;
        const height = address.value.find((a) => a.key.startsWith("marker-height"))?.value || 32;

        if (lat !== undefined && lng !== undefined) {
          const content =
            description || title ? (
              <div className={this.decorateCSS("popup")}>
                {title && <h1 className={this.decorateCSS("popup-title")}>{title} </h1>}
                {date && <div className={this.decorateCSS("popup-date")}>{date}</div>}
                {description && <p className={this.decorateCSS("popup-content")}>{description}</p>}

                {/* {popupImage && <img className={this.decorateCSS("image")} src={popupImage}></img>} */}

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

    const bottom = this.castToObject<BottomType>("bottom");
    const title = bottom.title;
    const content = bottom.content;
    const isLineActive = bottom.isLineActive;

    const mapStyles: google.maps.MapTypeStyle[] = [
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "administrative.country",
        elementType: "geometry.stroke",
        stylers: [{ visibility: "on" }, { color: "#ffffff" }, { weight: 1 }],
      },
      {
        featureType: "administrative.country",
        elementType: "labels.text",
        stylers: [{ visibility: "on" }, { color: "#4d4d4d" }],
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "administrative.neighborhood",
        elementType: "labels.text",
        stylers: [{ visibility: "on" }, { color: "#4d4d4d" }, { weight: 1 }],
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{ visibility: "on" }, { color: "#f5f5f5" }],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ visibility: "on" }, { color: "#dcdcdc" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ visibility: "on" }, { color: "#000000" }],
      },
      {
        featureType: "administrative.country",
        elementType: "labels.text",
        stylers: [
          { visibility: "on" },
          { color: "#4d4d4d" },
          { weight: 1 },
          { lightness: 50 },
        ],
      },
      {
        featureType: "administrative.neighborhood",
        elementType: "labels.text",
        stylers: [
          { visibility: "on" },
          { color: "#4d4d4d" },
          { weight: 1 },
          { lightness: 50 },
        ],
      },
    ];

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("map-container")}>
              <ComposerMap
                markers={markers}
                className={this.decorateCSS("map")}
                styles={mapStyles}
                defaultZoom={this.getPropValue("zoom")}
                handleMarkerZoom={this.getPropValue("marker-zoom")}
              />
            </div>
            <div className={this.decorateCSS("bottom-container")}>
              <div className={`${this.decorateCSS("title")} ${isLineActive ? this.decorateCSS("line-title") : ""}`}>
                {title}
              </div>
              <div className={this.decorateCSS("content")}>
                <div className={this.decorateCSS("content-text")}>
                  {content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationComponent4;