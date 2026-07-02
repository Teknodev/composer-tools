import React from "react";
import { Location, TypeMediaInputValue, TypeUsableComponentProps, TypeLocation } from "../../EditorComponent";
import styles from "./location6.module.scss";
import ComposerMap from "../../../composer-base-components/map/map";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { iconLibraries } from "../../../composer-base-components/base/utitilities/iconList";
import { renderToStaticMarkup } from "react-dom/server";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Address = {
  type: string;
  key: string;
  value: Array<TypeUsableComponentProps>;
  getPropValue: (key: string) => string | number | boolean | TypeMediaInputValue | TypeLocation | undefined;
};

type Buttons = {
  info?: string;
  text?: string;
  icon?: TypeMediaInputValue | string;
  "separator-icon"?: TypeMediaInputValue | string;
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

type mapSettings = {
  centerZoom: number;
  markerZoom: number;
}

function getMarkerIconUrl(markerImage: TypeMediaInputValue | string | null | undefined, width: number, height: number): string | undefined {
  if (!markerImage) return undefined;
  if (typeof markerImage === "string") return markerImage;
  if (typeof markerImage !== "object") return undefined;

  if (markerImage.type === "image") {
    return markerImage.url;
  }

  if (markerImage.type === "icon") {
    try {
      const iconName = markerImage.name;
      const lib = iconLibraries.find((l) => iconName in l);
      const ElementIcon = lib ? lib[iconName] : null;
      if (ElementIcon) {
        const svgString = renderToStaticMarkup(<ElementIcon size={Math.max(width, height)} />);
        return `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`;
      }
    } catch (e) {
      return undefined;
    }
  }

  return undefined;
}

class Location6 extends Location {
  constructor(props?: any) {
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
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "array",
      key: "actionButtons",
      displayer: "Action Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
      ],
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
              key: "separator-icon",
              displayer: "Separator Icon",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "FiMinus",
              },
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
                name: "FiArrowRight",
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
              type: "media",
              key: "separator-icon",
              displayer: "Separator Icon",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "FiMinus",
              },
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "FiArrowRight",
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
              value: "MOSQUE",
            },
            {
              type: "string",
              displayer: "Distance",
              key: "info",
              value: "2.0 KM",
            },
            {
              type: "media",
              key: "separator-icon",
              displayer: "Separator Icon",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "FiMinus",
              },
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "FiArrowRight",
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
              value: "PARK",
            },
            {
              type: "string",
              displayer: "Distance",
              key: "info",
              value: "0.96 KM",
            },
            {
              type: "media",
              key: "separator-icon",
              displayer: "Separator Icon",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "FiMinus",
              },
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "FiArrowRight",
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
              value: "HOSPITAL",
            },
            {
              type: "string",
              displayer: "Distance",
              key: "info",
              value: "1.6 KM",
            },
            {
              type: "media",
              key: "separator-icon",
              displayer: "Separator Icon",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "FiMinus",
              },
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "FiArrowRight",
              },
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

    this.addProp({
      type: "object",
      key: "mapSettings",
      displayer: "Map Settings",
      value: [
        {
          type: "number",
          key: "centerZoom",
          displayer: "Center Zoom Value",
          value: 2,
        },
        {
          type: "number",
          key: "markerZoom",
          displayer: "Marker Zoom Value",
          value: 15,
        },
      ]
    })
  }

  static getName(): string {
    return "Location 6";
  }

  render() {
    const addresses: Address[] = this.getPropValue("addresses");
    const buttons = this.castToObject<Buttons[]>("buttons");
    const actionButtons = this.castToObject<INPUTS.CastedButton[]>("actionButtons") || [];
    const visibleActionButtons = actionButtons.filter(btn => this.castToString(btn.text));

    const mapSettings = this.castToObject<mapSettings>("mapSettings");
    const markerZoom = mapSettings?.markerZoom;
    const centerZoom = mapSettings?.centerZoom;

    const theme = this.getPropValue("theme");

    const selectedTheme = theme || "Theme-1";

    const mapStyle = this.selectTheme(selectedTheme);

    const defaultMarkerIcon = "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c1b5c0655f8002ca6cccb?alt=media";

    const markers = addresses.reduce((acc: MarkerObject[], address: Address) => {
      if (address.type === "object" && Array.isArray(address.value)) {
        const markerData = address.getPropValue("coordinate") as TypeLocation | undefined;
        const lat = markerData?.lat;
        const lng = markerData?.lng;

        const markerImage = address.getPropValue("marker-image") as TypeMediaInputValue | undefined;
        const width = (address.getPropValue("marker-width") as number) || 32;
        const height = (address.getPropValue("marker-height") as number) || 32;

        const iconUrl = getMarkerIconUrl(markerImage, width, height);

        const description = address.getPropValue("description") as string | undefined;
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
    const description = this.getPropValue("description");

    const hasSubtitle = this.castToString(subtitle);
    const hasTitle = this.castToString(title);
    const hasDescription = this.castToString(description);

    const hasButtons = buttons && buttons.length > 0;
    const alignment = Base.getContentAlignment();
    const isFullWidth = Base.getContentWidth() === '100%';

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <div className={`${this.decorateCSS("wrapper")} ${!hasButtons ? this.decorateCSS("no-buttons") : ""}`}>
          <div className={this.decorateCSS("left-container")}>
            <Base.MaxContent className={`${this.decorateCSS("max-content")} ${isFullWidth && this.decorateCSS("full-width")}`}>
              <Base.VerticalContent className={`${this.decorateCSS("header")} ${alignment === "center" && this.decorateCSS("center")} ${alignment === "left" && this.decorateCSS("left")}`}>
                {hasSubtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>}
                {hasTitle && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
                {hasDescription && <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>}
                {visibleActionButtons.length > 0 && (
                  <div className={this.decorateCSS("button-container")}>
                    {visibleActionButtons.map((item: INPUTS.CastedButton, index: number) => {
                      return this.castToString(item.text) && (
                        <ComposerLink key={`button-${index}`} path={item.url}>
                          <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                            <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                          </Base.Button>
                        </ComposerLink>
                      );
                    })}
                  </div>
                )}
              </Base.VerticalContent>
              {hasButtons ? (
                <Base.VerticalContent className={this.decorateCSS("tab-container")}>
                   {buttons.map((button: Buttons, index: number) => {
                    const buttonTextExist = this.castToString(button?.text);
                    const buttonInfoExist = this.castToString(button?.info);
                    const rawIcon = button?.icon;
                    const normalizedIcon = typeof rawIcon === "string" ? ({ type: "icon", name: rawIcon } as TypeMediaInputValue) : (rawIcon as TypeMediaInputValue | undefined);

                    const rawSeparatorIcon = button?.["separator-icon"];
                    const normalizedSeparatorIcon = typeof rawSeparatorIcon === "string" ? ({ type: "icon", name: rawSeparatorIcon } as TypeMediaInputValue) : (rawSeparatorIcon as TypeMediaInputValue | undefined);
                    const separatorIconExist = Boolean(
                      normalizedSeparatorIcon && (
                        (normalizedSeparatorIcon.type === "image" && normalizedSeparatorIcon.url) ||
                        (normalizedSeparatorIcon.type === "icon" && normalizedSeparatorIcon.name)
                      )
                    );

                    const buttonExist = buttonTextExist || buttonInfoExist || normalizedIcon;

                    return (
                      buttonExist && (
                        <div key={index} className={this.decorateCSS("tab")} onClick={() => handleButtonClick(index)}>
                          <ComposerLink path={button.link}>
                            <div className={this.decorateCSS("tab-element")}>
                              <div className={this.decorateCSS("tab-text")}>
                                {buttonTextExist && <Base.P className={this.decorateCSS("text")}>{button?.text}</Base.P>}
                                {buttonTextExist && buttonInfoExist && separatorIconExist && (
                                  <Base.Media className={this.decorateCSS("separator-icon")} value={normalizedSeparatorIcon} />
                                )}
                                {buttonInfoExist && <Base.P className={this.decorateCSS("info")}>{button?.info}</Base.P>}
                              </div>
                              {normalizedIcon && <Base.Media value={normalizedIcon} className={this.decorateCSS("icon")} />}
                            </div>
                          </ComposerLink>
                        </div>
                      )
                    );
                  })}
                </Base.VerticalContent>
              ) : (
                <div className={this.decorateCSS("map-container")}>
                  <ComposerMap defaultZoom={centerZoom} customSelectedMarker={customSelectedMarker} styles={mapStyle?.colors} markers={markers} className={this.decorateCSS("map")} handleMarkerZoom={markerZoom} />
                </div>
              )}
            </Base.MaxContent>
          </div>

          {hasButtons && (
            <div className={this.decorateCSS("right-container")}>
              <div className={this.decorateCSS("map-container")}>
                <ComposerMap defaultZoom={centerZoom} customSelectedMarker={customSelectedMarker} styles={mapStyle?.colors} markers={markers} className={this.decorateCSS("map")} handleMarkerZoom={markerZoom} />
              </div>
            </div>
          )}
        </div>
      </Base.Container>
    );
  }
}

export default Location6;
