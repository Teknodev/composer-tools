import React from "react";
import { Location } from "../../EditorComponent";
import styles from "./location6.module.scss";
import ComposerMap from "../../../composer-base-components/map/map";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { Base } from "../../../composer-base-components/base/base";
import { iconLibraries } from "../../../composer-base-components/base/utitilities/iconList";
import { renderToStaticMarkup } from "react-dom/server";

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

class Location6 extends Location {
  constructor(props?: Buttons) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Nearby places",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Nearby Places of the Property",
    });

    this.addProp({
      type: "number",
      key: "centerZoom",
      displayer: "Center Zoom Value",
      value: 2,
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
              displayer: "Distance",
              key: "info",
              value: "1.8 KM",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "FaArrowRight",
              },
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
              displayer: "Distance",
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
              displayer: "Distance",
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
              displayer: "Distance",
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
              displayer: "Distance",
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
                lng: -75.978,
              },
            },
            {
              type: "media",
              key: "marker-image",
              displayer: "Marker Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "image",
                url: "https://wpocean.com/html/tf/suqat-live/assets/images/nearby/1.svg",
              },
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
                lat: 11.8529,
                lng: 4.978,
              },
            },
            {
              type: "media",
              key: "marker-image",
              displayer: "Marker Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "image",
                url: "https://wpocean.com/html/tf/suqat-live/assets/images/nearby/2.svg",
              },
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "KFC Restaurant",
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
                lng: 2.978,
              },
            },
            {
              type: "media",
              key: "marker-image",
              displayer: "Marker Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "image",
                url: "https://wpocean.com/html/tf/suqat-live/assets/images/nearby/3.svg",
              },
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Baitun Nor Mosque",
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
                lng: -4.978,
              },
            },
            {
              type: "media",
              key: "marker-image",
              displayer: "Marker Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "image",
                url: "https://wpocean.com/html/tf/suqat-live/assets/images/nearby/4.svg",
              },
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
                lng: -2.978,
              },
            },
            {
              type: "media",
              key: "marker-image",
              displayer: "Marker Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "image",
                url: "https://wpocean.com/html/tf/suqat-live/assets/images/nearby/5.svg",
              },
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

  static getName(): string {
    return "Location 6";
  }

  render() {
    const addresses: Address[] = this.getPropValue("addresses");
    const buttons = this.castToObject<Buttons[]>("buttons");

    const markerZoom = this.getPropValue("markerZoom");
    const centerZoom = this.getPropValue("centerZoom");

    const theme = this.getPropValue("theme");

    const selectedTheme = theme || "Theme-1";

    const mapStyle = this.selectTheme(selectedTheme);

    const defaultMarkerIcon = "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c1b5c0655f8002ca6cccb?alt=media";

    const markers = addresses.reduce((acc: MarkerObject[], address: any) => {
      if (address.type === "object" && Array.isArray(address.value)) {
        const markerData = address.getPropValue("coordinate");
        const lat = markerData?.lat;
        const lng = markerData?.lng;

        const markerImage = address.getPropValue("marker-image");
        const width = address.getPropValue("marker-width") || 32;
        const height = address.getPropValue("marker-height") || 32;

        let iconUrl: string | undefined =
          markerImage && typeof markerImage === "object" && markerImage.type === "image"
            ? markerImage.url
            : markerImage;

        if (markerImage && typeof markerImage === "object" && markerImage.type === "icon") {
          try {
            const iconName = (markerImage as any).name;
            let ElementIcon: any = null;
            for (const lib of iconLibraries) {
              if (ElementIcon) break;
              for (const [name, Comp] of Object.entries(lib)) {
                if (name === iconName) {
                  ElementIcon = Comp;
                  break;
                }
              }
            }

            if (ElementIcon) {
              const svgString = renderToStaticMarkup(<ElementIcon size={Math.max(width, height)} />);
              iconUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`;
            }
          } catch (e) {
            iconUrl = undefined;
          }
        }

        const description = address.getPropValue("description");
        const hasDescription = this.castToString(description);

        if (lat !== undefined && lng !== undefined) {
          const content = hasDescription ? (
            <div className={this.decorateCSS("popup")}>
              {hasDescription && <Base.P className={this.decorateCSS("popup-content")}>{description}</Base.P>}
              <div className={this.decorateCSS("popup-balloon")} />
            </div>
          ) : null;

          const finalIconUrl = iconUrl || defaultMarkerIcon;
          acc.push({
            content,
            lat,
            lng,
            icon: {
              url: finalIconUrl,
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

    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");

    const hasSubtitle = this.castToString(subtitle);
    const hasTitle = this.castToString(title);

    const headerExist = hasSubtitle || hasTitle;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        {headerExist && (
          <Base.MaxContent className={this.decorateCSS("max-content-header")}>
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {hasSubtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>}
              {hasTitle && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
            </Base.VerticalContent>
          </Base.MaxContent>
        )}
        <div className={this.decorateCSS("wrapper")}>
          <Base.MaxContent className={this.decorateCSS("max-content")}>
            <div className={this.decorateCSS("left-side")}>
              <div>
                {buttons?.length > 0 && (
                  <Base.VerticalContent className={this.decorateCSS("button-container")}>
                    {buttons.map((button: any, index: number) => {
                      const buttonTextExist = this.castToString(button?.text);
                      const buttonInfoExist = this.castToString(button?.info);
                      const buttonExist = buttonTextExist || buttonInfoExist || button.icon;

                      return (
                        buttonExist && (
                          <div key={index} className={this.decorateCSS("button")} onClick={() => handleButtonClick(index)}>
                            <ComposerLink path={button.link}>
                              <div className={this.decorateCSS("button-element")}>
                                <div className={this.decorateCSS("button-text")}>
                                  {buttonTextExist && <Base.P className={this.decorateCSS("text")}>{button?.text}</Base.P>}
                                  {buttonInfoExist && <Base.P className={this.decorateCSS("info")}>{button?.info}</Base.P>}
                                </div>
                                {button.icon && <Base.Media value={button.icon} className={this.decorateCSS("icon")} />}
                              </div>
                            </ComposerLink>
                          </div>
                        )
                      );
                    })}
                  </Base.VerticalContent>
                )}
              </div>
            </div>
          </Base.MaxContent>

          <div className={this.decorateCSS("map-container")}>
            <ComposerMap defaultZoom={centerZoom} customSelectedMarker={customSelectedMarker} styles={mapStyle?.colors} markers={markers} className={this.decorateCSS("map")} handleMarkerZoom={markerZoom} />
          </div>
        </div>
      </Base.Container>
    );
  }
}

export default Location6;
