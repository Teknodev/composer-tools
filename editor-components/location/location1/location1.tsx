import React from "react";
import { Location } from "../../EditorComponent";
import styles from "./location1.module.scss";
import ComposerMap from "../../../composer-base-components/map/map";
import { ComposerIcon } from '../../../composer-base-components/icon/icon';

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


type ButtomType = {
  description: JSX.Element,
  phone_number: JSX.Element,
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
      value: 'See Our Location',
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
          key: "phone_number",
          displayer: "Phone Number",
          value: "+90 123 456 78 90",
        },
        {
          type: "page",
          key: "number_url",
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
          key: "popup-title",
          displayer: "Popup Title",
          value: "Crafto Resort"
        },
        {
          type: "string",
          key: "popup-address",
          displayer: "Popup Address",
          value: ""
        }
      ]

    });

    this.setComponentState("isCardVisible", true);
  }

  getName(): string {
    return "Location 1";
  }

  popupContent = (marker: Coordinate) => {
    return (
      <div className={this.decorateCSS("popup")}>
        <h4 className={this.decorateCSS("popup-title")}>Popup Title</h4>
        <p className={this.decorateCSS("popup-content")}>Popup Content: {marker.address || "No address"}</p>
        <button className={this.decorateCSS("popup-button")}>Custom Button</button>
      </div>
    );
  };

  render() {
    const { markers } = this.getPropValue('location');
    const title = this.castToString(this.getPropValue('title'))
    const buttom = this.castToObject<ButtomType>("buttom_row");
    const icons = this.getPropValue("icons")

    return (
      <div className={this.decorateCSS('container')}>
        <div className={this.decorateCSS('max-content')}>
          <div className={this.decorateCSS('wrapper')}>
            <div className={this.decorateCSS("connect")}>
              <h1 className={this.decorateCSS('title')}>
                {title}
              </h1>
              <div className={this.decorateCSS("icon-container")}>
                {icons.map((icon: any, index: number) => {
                  return (
                    <div className={this.decorateCSS("icon-wrapper")}>
                      <div className={this.decorateCSS("icon")}>
                        <ComposerIcon key={index} propsIcon={{ size: "20px" }}
                          name={icon.getPropValue("icon")} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <section className={this.decorateCSS("map-container")}>
              <ComposerMap markers={markers} className={this.decorateCSS("map")}
                popupContent={this.popupContent} />
            </section>
            <div className={this.decorateCSS("bottom-container")}>
              <div className={this.decorateCSS("bottom-title")}>
                {buttom.description}
              </div>
              <div className={this.decorateCSS("phone")}>
                {buttom.phone_number}
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default LocationComponent1;
