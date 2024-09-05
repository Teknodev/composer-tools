import React from 'react';
import { Location } from '../../EditorComponent';
import styles from './location1.module.scss';
import ComposerMap from '../../../composer-base-components/map/map';
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
      value: 'Connect with social media',
    });
    this.addProp({
      type: "array",
      key: "icons",
      displayer: "Icons",
      value: [
        {
          type: "object",
          key: "icon",
          displayer: "Icon",
          value: [
            {
              type: "icon",
              key: "iconItem",
              displayer: "Icon",
              value: "ImFacebook"
            },
            {
              type: "color",
              displayer: "Color",
              key: "color",
              value: ""
            },
            {
              type: "page",
              displayer: "Url",
              key: "url",
              value: "url"
            }
          ]
        },
        {
          type: "object",
          key: "icon",
          displayer: "Icon",
          value: [
            {
              type: "icon",
              key: "iconItem",
              displayer: "Icon",
              value: "ImTwitter"
            },
            {
              type: "color",
              displayer: "Color",
              key: "color",
              value: ""
            },
            {
              type: "page",
              displayer: "Url",
              key: "url",
              value: "url"
            }
          ]
        },
        {
          type: "object",
          key: "icon",
          displayer: "Icon",
          value: [
            {
              type: "icon",
              key: "iconItem",
              displayer: "Icon",
              value: "ImInstagram"
            },
            {
              type: "color",
              displayer: "Color",
              key: "color",
              value: ""
            },
            {
              type: "page",
              displayer: "Url",
              key: "url",
              value: "url"
            }

          ]
        },
        {
          type: "object",
          key: "icon",
          displayer: "Icon",
          value: [
            {
              type: "icon",
              key: "iconItem",
              displayer: "Icon",
              value: "ImLinkedin2"
            },

            {
              type: "color",
              displayer: "Color",
              key: "color",
              value: ""
            },
            {
              type: "page",
              displayer: "Url",
              key: "url",
              value: "url"
            }
          ]
        },]
    })

    this.addProp({
      type: 'location',
      key: 'location',
      displayer: "Location",
      value: {
        markers: [
          {
            lat: 36.8968908,
            lng: 30.7133233,
          }
        ],
      }
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
    return 'Location 1';
  }

  toggleCardVisible = () => {
    const currentState = this.getComponentState("isCardVisible");
    this.setComponentState("isCardVisible", !currentState);
  };

  render() {
    const { markers } = this.getPropValue('location');
    const icons = this.getPropValue("icons");
    console.log("icons", icons)
    const buttomRow = this.castToObject<ButtomType>("buttom_row");
    const description = this.castToString(buttomRow.description);
    const phoneNumber = this.castToString(buttomRow.phone_number);


    const styles = icons
      .map((icon: any, i: number) => `.icon-hover-${i}:hover { color: ${icon.getPropValue('color')}; }`)
      .join("\n");

    return (
      <div className={this.decorateCSS('container')}>
        <div className={this.decorateCSS('max-content')}>
          <div className={this.decorateCSS('wrapper')}>
            <div className={this.decorateCSS("connect")}>
              <div className={this.decorateCSS("title")}>{this.getPropValue("title")}</div>
              <div className={this.decorateCSS("icon-container")}>
                {icons.map((icon: any, i: number) => (
                  <div className={this.decorateCSS("icon-wrapper")}
                    style={{
                      '--hover-background-color': icon.getPropValue("color"),
                      '--hover-color': "white"
                    } as React.CSSProperties}>
                    <ComposerIcon
                      key={i}
                      name={icon.getPropValue("iconItem")}
                      propsIcon={{
                        className: this.decorateCSS("icon")
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <section className={this.decorateCSS("map-container")}>
              <ComposerMap markers={markers} className={this.decorateCSS("map")} />
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
