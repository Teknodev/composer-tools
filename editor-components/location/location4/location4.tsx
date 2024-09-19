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

class LocationComponent4 extends Location {
  constructor(props?: any) {
    super(props, styles);

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
    this.addProp({
      type: "object",
      key: "popup",
      displayer: "Popup",
      value: [
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
      ]
    })
  }

  getName(): string {
    return "Location 4";
  }

  render() {
    const { markers } = this.getPropValue("location");
    const bottom = this.castToObject<BottomType>("bottom");
    const title = this.castToString(bottom.title);
    const content = this.castToString(bottom.content);
    const isLineActive = bottom.isLineActive;
    const popup = this.castToObject<PopupType>("popup");
    const popupTitle = this.castToString(popup.title);
    const popupContent = this.castToString(popup.content);
    const popupDate = this.castToString(popup.date);
    const closeIcon = popup.icon;
    const isPopupActive = popup.isPopupActive;
    console.log(popup.popupImage)

    const mapStyles: google.maps.MapTypeStyle[] = [
      {
        featureType: "all",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },

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
        stylers: [{ visibility: "on" }, { color: "#4d4d4d" }],
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
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ visibility: "on" }, { color: "#f2f2f2" }],
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
        featureType: "administrative.locality",
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
                zoomValue={4}
                markers={markers}
                className={this.decorateCSS("map")}
                styles={mapStyles}
                popupContent={isPopupActive ? (
                  (marker: Coordinate) => (
                    <div className={this.decorateCSS("popup")}>
                      <div className={this.decorateCSS("top-container")}>
                        <img src={popup.popupImage} className={this.decorateCSS("image")}></img>
                        <button className={this.decorateCSS("popup-close-button")}>
                          <ComposerIcon
                            propsIcon={{
                              className: this.decorateCSS("icon")
                            }}
                            name={closeIcon}
                          />
                        </button>
                      </div>
                      <h4 className={this.decorateCSS("popup-title")}>{popupTitle}</h4>
                      <div className={this.decorateCSS("popup-date")}>{popupDate}</div>
                      <p className={this.decorateCSS("popup-content")}>{popupContent}</p>
                    </div>
                  )
                ) : null}
              />

            </div>
            <div className={this.decorateCSS("bottom-container")}>
              <div className={`${this.decorateCSS("title")} ${isLineActive ? this.decorateCSS("line-title") : ""}`}>
                {title}
              </div>
              <div className={this.decorateCSS("content")}>
                {content}
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationComponent4;