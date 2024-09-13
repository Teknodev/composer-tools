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
import { ComposerIcon } from '../../../composer-base-components/icon/icon';

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

    this.setComponentState("isCardVisible", true);
  }

  getName(): string {
    return "Location 1";
  }

  render() {
    const { markers } = this.getPropValue('location');

    return (
      <div className={this.decorateCSS('container')}>
        <div className={this.decorateCSS('max-content')}>
          <div className={this.decorateCSS('wrapper')}>
            <h1 className={this.decorateCSS('title')}>{this.getPropValue('title')}</h1>
            <section className={this.decorateCSS("map-container")}>
              <ComposerMap markers={markers} className={this.decorateCSS("map")} popupContent={this.popupContent} />
            </section>
            <div className={this.decorateCSS("bottom-container")}>
              <div className={this.decorateCSS("bottom-title")}>
                {description}
              </div>
              <div className={this.decorateCSS("phone")}>
                {phoneNumber}
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default LocationComponent1;
