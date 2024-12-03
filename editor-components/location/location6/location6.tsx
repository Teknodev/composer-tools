import React from "react";
import { Location } from "../../EditorComponent";
import styles from "./location6.module.scss";
import ComposerMap from "../../../composer-base-components/map/map";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

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

type Buttons = {
  info?: string;
  text?: string;
  icon?: string;
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

class LocationComponent6 extends Location {
  constructor(props?: Buttons) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "NEARBY PLACES OF THE PROPERTY",
    });

    this.addProp({
      type: "string",
      key: "badge",
      displayer: "Badge",
      value: "Nearby places",
    });

    this.addProp({
      type: "number",
      key: "centerZoom",
      displayer: "Center Zoom Value",
      value: 3,
    });

    this.addProp({
      type: "number",
      key: "markerZoom",
      displayer: "Marker Zoom Value",
      value: 15,
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "SCHOOL",
            },
            {
              type: "string",
              displayer: "Info",
              key: "info",
              value: "1.8 KM",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaArrowRight",
            },
          ],
        },
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "RESTAURANT",
            },
            {
              type: "string",
              displayer: "Info",
              key: "info",
              value: "1.6 KM",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaArrowRight",
            },
          ],
        },
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "MOSQUE",
            },
            {
              type: "string",
              displayer: "Info",
              key: "info",
              value: "2.0 KM",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaArrowRight",
            },
          ],
        },
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "PARK",
            },
            {
              type: "string",
              displayer: "Info",
              key: "info",
              value: "0.96 KM",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaArrowRight",
            },
          ],
        },
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "HOSPITAL",
            },
            {
              type: "string",
              displayer: "Info",
              key: "info",
              value: "1.6 KM",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaArrowRight",
            },
          ],
        },
      ],
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
                lng: -55.978,
              },
            },
            {
              type: "image",
              key: "marker-image",
              displayer: "Marker Image",
              value: "https://wpocean.com/html/tf/suqat-live/assets/images/nearby/1.svg",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Corpus Christi School",
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
                lat: 31.8529,
                lng: -24.978,
              },
            },
            {
              type: "image",
              key: "marker-image",
              displayer: "Marker Image",
              value: "https://wpocean.com/html/tf/suqat-live/assets/images/nearby/2.svg",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "KFC Resturent",
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
                lat: 39.8529,
                lng: -39.978,
              },
            },
            {
              type: "image",
              key: "marker-image",
              displayer: "Marker Image",
              value: "https://wpocean.com/html/tf/suqat-live/assets/images/nearby/3.svg",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Baitun Nor mosque",
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
                lat: 13.8529,
                lng: -14.978,
              },
            },
            {
              type: "image",
              key: "marker-image",
              displayer: "Marker Image",
              value: "https://wpocean.com/html/tf/suqat-live/assets/images/nearby/4.svg",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Central Park",
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
                lat: 25.8529,
                lng: -32.978,
              },
            },
            {
              type: "image",
              key: "marker-image",
              displayer: "Marker Image",
              value: "https://wpocean.com/html/tf/suqat-live/assets/images/nearby/5.svg",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Central Hospital",
            },
          ],
        },
      ],
    });

    this.setComponentState("customSelectedMarker", null);
  }

  getName(): string {
    return "Location 6";
  }

  render() {
    const addresses: Address[] = this.getPropValue("addresses");
    const buttons = this.castToObject<Buttons[]>("buttons");

    const markerZoom = this.getPropValue("markerZoom");
    const centerZoom = this.getPropValue("centerZoom");

    const theme = this.getPropValue("theme");

    const mapStyle = this.selectTheme(theme);

    const markers = addresses.reduce((acc: MarkerObject[], address: Address) => {
      if (address.type === "object" && Array.isArray(address.value)) {
        const markerData = address.value.find((addr) => addr.type === "location");
        const lat = markerData?.value.lat;
        const lng = markerData?.value.lng;
        const description = address.value.find((a) => a.key.startsWith("description"))?.value || "";
        const markerImage = address.value.find((a) => a.key.startsWith("marker-image"))?.value;
        const width = address.value.find((a) => a.key.startsWith("marker-width"))?.value || 32;
        const height = address.value.find((a) => a.key.startsWith("marker-height"))?.value || 32;

        if (lat !== undefined && lng !== undefined) {
          const content = description ? (
            <div className={this.decorateCSS("popup")}>
              {description && <p>{description}</p>}
              <div className={this.decorateCSS("popup-balloon")} />
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
    const customSelectedMarker = this.getComponentState("customSelectedMarker");

    const handleButtonClick = (index: number) => {
      const marker = markers[index];
      if (marker) {
        this.setComponentState("customSelectedMarker", marker);
      }
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("left-side")}>
              {this.getPropValue("badge") && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("badge")}</Base.SectionSubTitle>}
              {this.getPropValue("title") && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}

              <div>
                {buttons?.length > 0 && (
                  <Base.VerticalContent className={this.decorateCSS("button-container")}>
                    {buttons.map((button: any, index: number) => {
                      const buttonTextExist = this.castToString(button?.text);
                      const buttonInfoExist = this.castToString(button?.info);

                      if (buttonTextExist || buttonInfoExist || button.icon)
                        return (
                          <div key={index} className={this.decorateCSS("button")} onClick={() => handleButtonClick(index)}>
                            <ComposerLink path={button.link}>
                              <div className={this.decorateCSS("button-element")}>
                                <div className={this.decorateCSS("button-text")}>
                                  <Base.P className={this.decorateCSS("text")}>{buttonTextExist && button?.text}</Base.P>
                                  <Base.P className={this.decorateCSS("info")}>{buttonInfoExist && button?.info}</Base.P>
                                </div>
                                {button.icon && <ComposerIcon name={button.icon} propsIcon={{ className: this.decorateCSS("icon") }} />}
                              </div>
                            </ComposerLink>
                          </div>
                        );

                      return <></>;
                    })}
                  </Base.VerticalContent>
                )}
              </div>
            </div>
            <div className={this.decorateCSS("map-container")}>
              <ComposerMap defaultZoom={centerZoom} customSelectedMarker={customSelectedMarker} styles={mapStyle.colors} markers={markers} className={this.decorateCSS("map")} handleMarkerZoom={markerZoom} />
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default LocationComponent6;
