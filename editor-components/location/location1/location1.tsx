import React, { useState, useCallback } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Location } from "../../EditorComponent";
import styles from "./location1.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

const mapStyles = [
  {
    featureType: "all",
    stylers: [{ saturation: -100 }, { lightness: 50 }],
  },
];

class LocationComponent1 extends Location {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "top_row",
      displayer: "Top Row",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Connect with social media",
        },
        {
          type: "array",
          key: "social_media",
          displayer: "Social Media",
          value: [
            {
              type: "object",
              key: "social_media_item",
              displayer: "Social Media Item",
              value: [
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "FaFacebookF",
                },
                {
                  type: "page",
                  key: "icon_url",
                  displayer: "Icon Url",
                  value: "https://www.google.com/",
                },
              ],
            },
            {
              type: "object",
              key: "social_media_item",
              displayer: "Social Media Item",
              value: [
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "FaDribbble",
                },
                {
                  type: "page",
                  key: "icon_url",
                  displayer: "Icon Url",
                  value: "https://www.google.com/",
                },
              ],
            },
            {
              type: "object",
              key: "social_media_item",
              displayer: "Social Media Item",
              value: [
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "FaTwitter",
                },
                {
                  type: "page",
                  key: "icon_url",
                  displayer: "Icon Url",
                  value: "https://www.google.com/",
                },
              ],
            },
            {
              type: "object",
              key: "social_media_item",
              displayer: "Social Media Item",
              value: [
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "FaInstagram",
                },
                {
                  type: "page",
                  key: "icon_url",
                  displayer: "Icon Url",
                  value: "https://www.google.com/",
                },
              ],
            },
            {
              type: "object",
              key: "social_media_item",
              displayer: "Social Media Item",
              value: [
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "FaLinkedinIn",
                },
                {
                  type: "page",
                  key: "icon_url",
                  displayer: "Icon Url",
                  value: "https://www.google.com/",
                },
              ],
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "mapConfig",
      displayer: "Google Map Configuration",
      value: [
        {
          key: "lat",
          displayer: "Lat",
          type: "number",
          value: 36.900054,
        },
        {
          key: "lng",
          displayer: "LNG",
          type: "number",
          value: 30.646022,
        },
        {
          key: "zoom",
          displayer: "Zoom",
          type: "number",
          value: 15,
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "card",
      displayer: "Card",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Crafto Resort",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "16122 Collins street, Melbourne, Australia",
        },
        {
          type: "string",
          key: "button_text",
          displayer: "Button Text",
          value: "VIEW LARGER MAP",
        },
        {
          type: "string",
          key: "url",
          displayer: "Url",
          value: "https://www.google.com/",
        },
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
          key: "phone_number",
          displayer: "Phone Number",
          value: "+90 123 456 78 90",
        },
        {
          type: "page",
          key: "number_url",
          displayer: "Number Url",
          value: "https://www.google.com/",
        },
      ],
    });
  }

  getName(): string {
    return "Logo Compaa 1";
  }

  render() {
    const topRow = this.castToObject<{
      title: JSX.Element;
      social_media: any[];
    }>("top_row");

    const mapConfig = this.getPropValue("mapConfig");

    const card = this.castToObject<{
      title: JSX.Element;
      description: JSX.Element;
      button_text: JSX.Element;
      url: string;
    }>("card");

    const buttomRow = this.castToObject<{
      description: JSX.Element;
      phone_number: JSX.Element;
      number_url: string;
    }>("buttom_row");

    const isSocialIconsVisible = topRow.social_media.length > 0;
    const isTopRowVisible = this.castToString(topRow.title) || isSocialIconsVisible;
    const isButtomRowVisible = this.castToString(buttomRow.description) || this.castToString(buttomRow.phone_number);

    const isCardVisible = this.castToString(card.title) || this.castToString(card.description) || this.castToString(card.button_text);

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("logo-comp1-page")}>
            {isTopRowVisible && (
              <div className={this.decorateCSS("top_row")}>
                <h6 className={this.decorateCSS("title")}>{topRow.title}</h6>
                <div className={this.decorateCSS("social-media")}>
                  {topRow.social_media.map((item: any, index: number) => (
                    <ComposerLink key={index} path={item.value[1].value}>
                      <ComposerIcon
                        propsIcon={{
                          className: this.decorateCSS("icon"),
                        }}
                        name={item.value[0].value}
                      />
                    </ComposerLink>
                  ))}
                </div>
              </div>
            )}
            <section style={{ position: "relative" }}>
              <center>
                <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY ?? ""}>
                  <GoogleMap
                    mapContainerStyle={{ width: "100%", height: "400px", position: "relative" }}
                    center={{ lat: mapConfig[0]?.value, lng: mapConfig[1]?.value }}
                    zoom={mapConfig[2]?.value}
                    options={{ styles: mapStyles }}
                  >
                    <Marker position={{ lat: mapConfig[0]?.value, lng: mapConfig[1]?.value }} title="Location" />
                  </GoogleMap>
                </LoadScript>
                <div className={styles.card}>
                  <h4 className={styles.title}>{card.title}</h4>
                  <p className={styles.description}>{card.description}</p>
                  <button className={styles.button_text} onClick={() => window.open(card.url, "_blank")}>
                    {card.button_text}
                  </button>
                </div>
              </center>
            </section>

            {isButtomRowVisible && (
              <div className={this.decorateCSS("buttom_row")}>
                <div className={this.decorateCSS("description")}>{buttomRow.description}</div>
                <div className={this.decorateCSS("phone_number")}>{buttomRow.phone_number}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default LocationComponent1;