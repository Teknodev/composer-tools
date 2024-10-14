import React from "react";
import { Location } from "../../EditorComponent";
import styles from "./location1.module.scss";
import ComposerMap from "../../../composer-base-components/map/map";
import { ComposerIcon } from '../../../composer-base-components/icon/icon';
import { dividerClasses } from "@mui/material";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Visibility } from "@mui/icons-material";

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
  popupButtonUrl: JSX.Element,
  popupButtonText: JSX.Element,

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
              displayer: "Popup Title",
              key: "popupTitle",
              value: "Crafto Resort",
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
              value: "16122 Collins street, Melbourne, Australia",
            },
            {
              type: "string",
              key: "popupButtonText",
              displayer: "Popup Button Text",
              value: "View Map"
            },
            {
              type: "page",
              key: "popupButtonUrl",
              displayer: "Popup Button Url",
              value: ""
            },
          ],
        }
      ],
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
    this.setComponentState("isCardVisible", true);
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
        const popupButtonText = address.value.find((a) => a.key.startsWith("popupButtonText"))?.value || "";
        const popupButtonUrl = address.value.find((a) => a.key.startsWith("popupButtonUrl"))?.value || "";
        const markerImage = address.value.find((a) => a.key.startsWith("marker-image"))?.value;
        const width = address.value.find((a) => a.key.startsWith("marker-width"))?.value || 32;
        const height = address.value.find((a) => a.key.startsWith("marker-height"))?.value || 32;

        if (lat !== undefined && lng !== undefined) {
          const content =
            description || popupTitle ? (
              <div className={this.decorateCSS("popup")}>
                {popupTitle && <h1 className={this.decorateCSS("popup-title")}>{popupTitle} </h1>}
                {description && <p className={this.decorateCSS("popup-content")}>{description}</p>}
                {popupButtonText && <ComposerLink path={popupButtonUrl} className={this.decorateCSS("popup-link")}>
                  <div className={this.decorateCSS("popup-button")}>
                    {popupButtonText}
                  </div>
                </ComposerLink>}
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

    const title = this.getPropValue('title', { as_string: true });
    const buttom = this.castToObject<ButtomType>("buttom_row");
    const icons = this.getPropValue("icons");
    const description = this.castToString(buttom.description);
    const phone = this.castToString(buttom.phoneNumber);
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
              <ComposerMap markers={markers} className={this.decorateCSS("map")} styles={mapStyles} />
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