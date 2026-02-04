import React from "react";
import { Location } from "../../EditorComponent";
import styles from "./location1.module.scss";
import ComposerMap from "../../../composer-base-components/map/map";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
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

type ButtomType = {
  description: string;
  phoneNumber: string;
  path: string;
};

class Location1 extends Location {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Connect with social media",
    });

    this.addProp({
      type: "string",
      key: "headerDescription",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "boolean",
      key: "line",
      displayer: "Line",
      value: true,
    });




    this.addProp({
      type: "array",
      key: "icons",
      displayer: "Social Media Items",
      value: [
        {
          type: "object",
          key: "icon_item",
          displayer: "Icon",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "FaLinkedinIn",
              },
            },

            {
              type: "page",
              key: "path",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "icon_item",
          displayer: "Icon",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "FaTwitter",
              },
            },

            {
              type: "page",
              key: "path",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "icon_item",
          displayer: "Icon",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "FaFacebookF",
              },
            },

            {
              type: "page",
              key: "path",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "icon_item",
          displayer: "Icon",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "IoBasketballOutline",
              },
            },

            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "icon_item",
          displayer: "Icon",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "FaInstagram",
              },
            },

            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
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
              type: "string",
              displayer: "Popup Title",
              key: "popupTitle",
              value: "Crafto Resort",
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
                url: "",
              },
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
              value: "View Map",
            },
            {
              type: "media",
              key: "popupButtonIcon",
              displayer: "Popup Button Icon",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "",
              },
            },
            {
              type: "page",
              key: "navigateTo",
              displayer: "Popup Navigate To",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "button_row",
      displayer: "Contact",
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
          key: "navigateTo",
          displayer: "Navigate To",
          value: "",
        },
      ],
    });

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Animation",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1"]
      }
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

    this.removeProp("theme");
    this.addProp({
      type: "select",
      key: "theme",
      displayer: "Map Theme",
      value: "",
      additionalParams: {
        selectItems: [
          "Theme-0",
          "Theme-1",
          "Theme-2",
          "Theme-3",
          "Theme-4",
          "Theme-5",
        ],
      },
    });
    this.setComponentState("isCardVisible", true);
  }

  static getName(): string {
    return "Location 1";
  }

  render() {
    const addresses: Address[] = this.getPropValue("addresses");

    const theme = this.getPropValue("theme");

    const selectedTheme = theme || "Theme-2";

    const defaultMarkerIcon = "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675acbf30655f8002ca64e33?alt=media";

    const mapStyle = this.selectTheme(selectedTheme);

    const markers = addresses.reduce((acc: MarkerObject[], address: any) => {
      if (address.type === "object" && Array.isArray(address.value)) {
        const markerData = address.value.find((addr: any) => addr.type === "location");
        const lat = markerData?.value.lat;
        const lng = markerData?.value.lng;
        const description = this.castToString(address.getPropValue("description"));
        const popupTitle = this.castToString(address.getPropValue("popupTitle"));

        const popupButtonText = this.castToString(address.getPropValue("popupButtonText"));
        const popupButtonIcon = address.getPropValue("popupButtonIcon");
        const popupButtonIconExist = popupButtonIcon && (popupButtonIcon.name || popupButtonIcon.url);

        const popupButtonUrl = address.getPropValue("popupButtonUrl");

        const markerMedia = address.getPropValue("marker-image");

        const width = address.getPropValue("marker-width") || 32;
        const height = address.getPropValue("marker-height") || 32;

        let iconUrl: string | undefined =
          markerMedia && typeof markerMedia === "object" && markerMedia.type === "image"
            ? markerMedia.url
            : markerMedia;

        if (lat !== undefined && lng !== undefined) {
          const content =
            (description || popupTitle || popupButtonText) && (
              <div className={this.decorateCSS("popup")}>
                {(popupTitle || description) && (
                  <div className={this.decorateCSS("popup-header")}>
                    {popupTitle && <Base.P className={this.decorateCSS("popup-title")}>{typeof popupTitle === "string" ? popupTitle.charAt(0).toUpperCase() + popupTitle.slice(1) : popupTitle}</Base.P>}
                    {description && <Base.P className={this.decorateCSS("popup-content")}>{typeof description === "string" ? description.charAt(0).toUpperCase() + description.slice(1) : description}</Base.P>}
                  </div>
                )}
                {popupButtonText && (
                  <div className={this.decorateCSS("popup-link")}>
                    <ComposerLink path={popupButtonUrl}>
                      <div className={this.decorateCSS("popup-button")}>
                        {popupButtonText && (typeof popupButtonText === "string" ? popupButtonText.charAt(0).toUpperCase() + popupButtonText.slice(1) : popupButtonText)}
                        {popupButtonIconExist && <Base.Media value={popupButtonIcon} className={this.decorateCSS("popup-button-icon")} />}
                      </div>
                    </ComposerLink>
                  </div>
                )}
              </div>
            );

          acc.push({
            content,
            lat,
            lng,
            icon: {
              url: iconUrl || defaultMarkerIcon,
              scaledSize: new google.maps.Size(width, height),
              width,
              height,
            },
          });
        }
      }
      return acc;
    }, []);

    const title = this.getPropValue("title");
    const hasTitle = this.castToString(title);
    const subtitle = this.getPropValue("subtitle");
    const hasSubtitle = this.castToString(subtitle);
    const buttom = this.castToObject<ButtomType>("button_row");
    const icons = this.getPropValue("icons");
    const line = this.getPropValue("line");
    const description = buttom.description;
    const phone = buttom.phoneNumber;
    const headerDescription = this.getPropValue("headerDescription");
    const headerDescriptionExist = this.castToString(headerDescription);
    const markerZoom = this.getPropValue("markerZoom");
    const centerZoom = this.getPropValue("centerZoom");

    const alignment = Base.getContentAlignment();

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("wrapper")}>
            {(hasTitle || icons.length > 0) && (
              <div className={this.decorateCSS("header")}>
                <Base.VerticalContent className={`${this.decorateCSS("title-block")} ${this.decorateCSS(alignment)}`}>
                  {hasSubtitle && (
                    <div className={this.decorateCSS("subtitle-wrapper")}>
                      <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>
                    </div>
                  )}
                  {hasTitle && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
                  {headerDescriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{headerDescription}</Base.SectionDescription>}
                </Base.VerticalContent>
                {hasTitle && icons.length > 0 && line && <div className={this.decorateCSS("divider")} />}
                {icons.length > 0 && (
                  <div className={this.decorateCSS("icon-container")}>
                    {icons.map((icon: any, index: number) => {
                      const iconValue = icon.getPropValue && icon.getPropValue("icon");
                      if (!iconValue) return null;
                      return (
                        <div className={this.decorateCSS("icon-wrapper")} key={index} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                          <ComposerLink path={icon.getPropValue("path")}>
                            <Base.Media value={iconValue} className={this.decorateCSS("icon")} />
                          </ComposerLink>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            <section className={this.decorateCSS("map-container")}>
              <ComposerMap allContentShow={true} defaultMarkerIcon={defaultMarkerIcon} defaultZoom={centerZoom} handleMarkerZoom={markerZoom} markers={markers} className={this.decorateCSS("map")} styles={mapStyle?.colors} />
            </section>

            {(description || phone) && (
              <div className={`${this.decorateCSS("bottom-container")} ${alignment === "center" && this.decorateCSS("center")} ${alignment === "left" && this.decorateCSS("left")}`}>
                {description && <Base.H5 className={this.decorateCSS("bottom-title")}>{buttom.description}</Base.H5>}
                {phone && (
                  <Base.VerticalContent>
                    <ComposerLink path={buttom.path}>
                      <Base.H5 className={this.decorateCSS("phone")}>{buttom.phoneNumber}</Base.H5>
                    </ComposerLink>
                  </Base.VerticalContent>
                )}
              </div>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Location1;
