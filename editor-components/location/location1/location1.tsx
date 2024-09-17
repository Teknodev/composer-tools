import React from "react";
import { Location } from "../../EditorComponent";
import styles from "./location1.module.scss";
import ComposerMap from "../../../composer-base-components/map/map";
import { ComposerIcon } from '../../../composer-base-components/icon/icon';
import { dividerClasses } from "@mui/material";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Visibility } from "@mui/icons-material";

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
type PopupType = {
  popupTitle: JSX.Element,
  popupAddress: JSX.Element,

}
type ButtomType = {
  description: JSX.Element,
  phoneNumber: JSX.Element,
  phoneUrl: string,
}
interface ExtendedCSSProperties extends React.CSSProperties {
  '--hover-color'?: string;
  '--hover-background-color'?: string;
}

class LocationComponent1 extends Location {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: 'string',
      key: 'title',
      displayer: 'Title',
      value: 'Connect with socail media',
    });
    this.addProp({
      type: 'array',
      key: 'icons',
      displayer: 'Icons',
      value: [
        {
          type: 'object',
          key: 'icon_item',
          displayer: 'Icon',
          value: [
            {
              type: 'icon',
              key: 'icon',
              displayer: 'Icon',
              value: 'FaLinkedinIn'
            },
            {
              type: 'color',
              key: 'color',
              displayer: 'color',
              value: ''
            },
            {
              type: 'page',
              key: 'url',
              displayer: 'URL',
              value: ''
            },
          ]
        },
        {

          type: 'object',
          key: 'icon_item',
          displayer: 'Icon',
          value: [
            {
              type: 'icon',
              key: 'icon',
              displayer: 'Icon',
              value: 'FaTwitter'
            },
            {
              type: 'color',
              key: 'color',
              displayer: 'color',
              value: ''
            },
            {
              type: 'page',
              key: 'url',
              displayer: 'URL',
              value: ''
            },
          ]

        },
        {

          type: 'object',
          key: 'icon_item',
          displayer: 'Icon',
          value: [
            {
              type: 'icon',
              key: 'icon',
              displayer: 'Icon',
              value: 'FaFacebookF'
            },
            {
              type: 'color',
              key: 'color',
              displayer: 'color',
              value: ''
            },
            {
              type: 'page',
              key: 'url',
              displayer: 'URL',
              value: ''
            },
          ]

        },
        {

          type: 'object',
          key: 'icon_item',
          displayer: 'Icon',
          value: [
            {
              type: 'icon',
              key: 'icon',
              displayer: 'Icon',
              value: 'IoBasketballOutline'
            },
            {
              type: 'color',
              key: 'color',
              displayer: 'color',
              value: ''
            },
            {
              type: 'page',
              key: 'url',
              displayer: 'URL',
              value: ''
            },
          ]

        },
        {

          type: 'object',
          key: 'icon_item',
          displayer: 'Icon',
          value: [
            {
              type: 'icon',
              key: 'icon',
              displayer: 'Icon',
              value: 'FaInstagram'
            },
            {
              type: 'color',
              key: 'color',
              displayer: 'color',
              value: ''
            },
            {
              type: 'page',
              key: 'url',
              displayer: 'URL',
              value: ''
            },
          ]

        }
      ]

    })
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
      key: "buttom_row",
      displayer: "Buttom Row",
      value: [
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "Have any questions about booking?",
        },
        {
          type: "string",
          key: "phoneNumber",
          displayer: "Phone Number",
          value: "+90 123 456 78 90",
        },
        {
          type: "page",
          key: "phoneUrl",
          displayer: "Number Url",
          value: "",
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "popup",
      displayer: "Popup",
      value: [
        {
          type: "string",
          key: "popupTitle",
          displayer: "Popup Title",
          value: "Crafto Resort"
        },
        {
          type: "string",
          key: "popupAddress",
          displayer: "Popup Address",
          value: "16122 Collins street, Melbourne, Australia"
        }
      ]
    });
    this.setComponentState("isCardVisible", true);
  }

  getName(): string {
    return "Location 1";
  }

  render() {
    const { markers } = this.getPropValue('location');
    const title = this.getPropValue('title', { as_string: true });
    const buttom = this.castToObject<ButtomType>("buttom_row");
    const icons = this.getPropValue("icons");
    const popupData = this.castToObject<PopupType>("popup");
    const popupTitle = popupData.popupTitle;
    const popupAddress = popupData.popupAddress;
    const stringAddress = this.castToString(popupAddress);
    const description = this.castToString(buttom.description);
    const phone = this.castToString(buttom.phoneNumber);
    const markerIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij4KICA8cGF0aCBmaWxsPSJibGFjayIgZD0iTTEyIDJDOC4xMyAyIDUgNS4xMyA1IDljMCA1LjI1IDcgMTMgNyAxM3M3LTcuNzUgNy0xM2MwLTMuODctMy4xMy03LTctN3ptMCA5LjVjLTEuMzggMC0yLjUtMS4xMi0yLjUtMi41czEuMTItMi41IDIuNS0yLjUgMi41IDEuMTIgMi41IDIuNS0xLjEyIDIuNS0yLjUgMi41eiIvPgo8L3N2Zz4=";

    const mapStyles: google.maps.MapTypeStyle[] = [
      {
        elementType: "geometry",
        stylers: [{ color: "#FFFFFF" }],
      },
      {
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [{ color: "#FFFFFF" }],
      },
      {
        featureType: "administrative.country",
        elementType: "geometry.stroke",
        stylers: [{ color: "#FFFFFF" }],
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{ color: "#FFFFFF" }],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "poi.airport",
        elementType: "geometry",
        stylers: [{ color: "#f1f1f1" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: " #D3D3D3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#D3D3D3" }],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{ color: "#D3D3D3" }],
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [{ Visibility: "off" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#D3D3D3" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#C0C0C0" }],
      },
    ];

    return (
      <div className={this.decorateCSS('container')} >
        <div className={this.decorateCSS('max-content')}>
          <div className={this.decorateCSS('wrapper')}>
            {(title || icons.length > 0) && (
              <div className={`${this.decorateCSS("connect")} ${(icons.length > 0 && title) ? this.decorateCSS('with-before') : ''}`}>
                {title && (
                  <h1 className={`${this.decorateCSS('title')} ${(icons.length > 0) ? '' : this.decorateCSS("no-icon")}`}>
                    {title}
                  </h1>
                )}
                {icons.length > 0 && (
                  <div className={this.decorateCSS("icon-container")}>
                    {icons.map((icon: any, index: number) => {
                      const iconColor = icon.getPropValue("color");
                      return (
                        <ComposerLink path={icon.getPropValue("url")}>
                          <div
                            className={this.decorateCSS("icon-wrapper")}
                            key={index}
                            style={{ '--hover-color': iconColor } as React.CSSProperties}
                          >
                            <div className={this.decorateCSS("icon")}>
                              <ComposerIcon
                                propsIcon={{ size: "25px" }}
                                name={icon.getPropValue("icon")}
                              />
                            </div>
                          </div>

                        </ComposerLink>

                      )
                    })}
                  </div>

                )}
              </div>
            )}
            <section className={this.decorateCSS("map-container")}>
              <ComposerMap defaultMarkerIcon={markerIcon} markers={markers} className={this.decorateCSS("map")} styles={mapStyles}
                popupContent={(marker: Coordinate) => {
                  return (
                    <div className={this.decorateCSS("popup")}>
                      <h4 className={this.decorateCSS("popup-title")}>{popupTitle}</h4>
                      <p className={this.decorateCSS("popup-content")}> {stringAddress}</p>
                      <button className={this.decorateCSS("popup-button")}>Custom Button</button>
                    </div>
                  );
                }} />
            </section>
            {(description || phone) && (
              <div className={this.decorateCSS("bottom-container")}>
                {description && (
                  <div className={this.decorateCSS("bottom-title")}>
                    {buttom.description}
                  </div>
                )}
                {phone && (
                  <ComposerLink path={buttom.phoneUrl}>
                    <div className={this.decorateCSS("phone-container")}>
                      <div className={this.decorateCSS("phone")}>
                        {buttom.phoneNumber}
                      </div>
                    </div>
                  </ComposerLink>


                )}
              </div>
            )}
          </div>
        </div>
      </div >
    );
  }
}

export default LocationComponent1;
