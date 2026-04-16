import React from "react";
import { Location } from "../../EditorComponent";
import styles from "./location2.module.scss";
import ComposerMap from "../../../composer-base-components/map/map";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { iconLibraries } from "../../../composer-base-components/base/utitilities/iconList";
import { INPUTS } from "../../../custom-hooks/input-templates";
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

type ContentItemType = {
  contentIcon: any;
  contentTitle: React.JSX.Element;
  contentDescriptionArray: {
    text: React.JSX.Element;
  }[];
};

type mapSettings = {
  centerZoom: number;
  markerZoom: number;
};

type SocialMediaItemType = {
  icon: any;
};

class Location2 extends Location {
  constructor(props?: any) {
    super(props, styles);

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
      value: "Connect with us",
    });

    this.addProp({
      type: "string",
      key: "headerDescription",
      displayer: "Description",
      value:
        "Each template in our ever growing studio library can be added and moved around within any page effortlessly with one click. Combine them, rearrange them and customize them further as much as you desire. Welcome to the future of building with WordPress.",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
      ],
    });

    this.addProp({
      type: "array",
      key: "socials",
      displayer: "Social Media Items",
      value: [
        {
          type: "object",
          key: "content",
          displayer: "Social Media Item",
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
          key: "content",
          displayer: "Social Media Item",
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
              key: "path",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "content",
          displayer: "Social Media Item",
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
                name: "FaXTwitter",
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
      ],
    });

    this.addProp({
      type: "array",
      key: "middle-content",
      displayer: "Feature Items",
      value: [
        {
          type: "object",
          key: "content",
          displayer: "Feature Elements",
          value: [
            {
              type: "media",
              key: "contentIcon",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "SlLocationPin",
              },
            },
            {
              type: "string",
              key: "contentTitle",
              displayer: "Feature Title",
              value: "Address",
            },
            {
              type: "array",
              key: "contentDescriptionArray",
              displayer: "Feature Description",
              value: [
                {
                  type: "object",
                  key: "description",
                  displayer: "Description",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "410-1122 Holmes Ave, Springfield, IL, V6B 5L1 ",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "content",
          displayer: "Feature Elements",
          value: [
            {
              type: "media",
              key: "contentIcon",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "Ri24HoursLine",
              },
            },
            {
              type: "string",
              key: "contentTitle",
              displayer: "Feature Title",
              value: "Bussiness Hours",
            },
            {
              type: "array",
              key: "contentDescriptionArray",
              displayer: "Feature Description",
              value: [
                {
                  type: "object",
                  key: "description",
                  displayer: "Description",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "Monday - Friday",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "description",
                  displayer: "Description",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "8:30 AM - 5:00 PM",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "content",
          displayer: "Feature Elements",
          value: [
            {
              type: "media",
              key: "contentIcon",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "HiOutlinePhone",
              },
            },
            {
              type: "string",
              key: "contentTitle",
              displayer: "Feature Title",
              value: "Phone",
            },
            {
              type: "array",
              key: "contentDescriptionArray",
              displayer: "Feature Description",
              value: [
                {
                  type: "object",
                  key: "description",
                  displayer: "Description Array Item",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "T: 703-856-8468",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "description",
                  displayer: "Description Array Item",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "F: 703-856-8464",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "content",
          displayer: "Feature Elements",
          value: [
            {
              type: "media",
              key: "contentIcon",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "SiMinutemailer",
              },
            },
            {
              type: "string",
              key: "contentTitle",
              displayer: "Feature Title",
              value: "Email",
            },
            {
              type: "array",
              key: "contentDescriptionArray",
              displayer: "Feature Description",
              value: [
                {
                  type: "object",
                  key: "description",
                  displayer: "Description",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "info@godsmen.law",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "number",
      key: "itemsInRow",
      displayer: "Item Count In A Row",
      value: 4,
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66dffd65343034002c462ded?alt=media&timestamp=1725955430378",
              },
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
                lat: 37.1234,
                lng: -2.9876,
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66dffd65343034002c462ded?alt=media&timestamp=1725955430378",
              },
            },
          ],
        },
      ],
    });

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
      ],
    });
  }

  static getName(): string {
    return "Location 2";
  }

  render() {
    const addresses: Address[] = this.getPropValue("addresses");

    const mapSettings = this.castToObject<mapSettings>("mapSettings");
    const markerZoom = mapSettings.markerZoom;
    const centerZoom = mapSettings.centerZoom;

    const headerTitle = this.getPropValue("title");
    const headerDescription = this.getPropValue("headerDescription");
    const isTitleExist = this.castToString(headerTitle);
    const isDescriptionExist = this.castToString(headerDescription);

    const theme = this.getPropValue("theme");

    const selectedTheme = theme || "Theme-4";

    const mapStyle = this.selectTheme(selectedTheme);

    const defaultMarkerIcon = "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675acbf30655f8002ca64e33?alt=media";

    const alignmentValue = Base.getContentAlignment();

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

        if (lat !== undefined && lng !== undefined) {
          const content = <></>;
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

    const socials = this.castToObject<SocialMediaItemType[]>("socials");
    const subtitle = this.getPropValue("subtitle");
    const hasSubtitle = this.castToString(subtitle);
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const visibleButtons = buttons.filter(btn => this.castToString(btn.text));
    const headerExist = isTitleExist || isDescriptionExist || socials.length > 0 || hasSubtitle || visibleButtons.length > 0;
    const socialNodes = socials.length > 0 ? (
      <div className={this.decorateCSS("socials")}>
        {socials.map((item: any, idx: number) => {
          return (
            item.getPropValue("icon") && (
              <Base.VerticalContent key={idx} className={this.decorateCSS("socials-container")}>
                <ComposerLink path={item.getPropValue("path")}>
                  <Base.Row className={this.decorateCSS("social-button")}>
                    <Base.Media value={item.getPropValue("icon")} className={this.decorateCSS("icon")} />
                  </Base.Row>
                </ComposerLink>
              </Base.VerticalContent>
            )
          );
        })}
      </div>
    ) : null;
    const socialPlacement = isDescriptionExist ? "description" : isTitleExist ? "title" : hasSubtitle ? "subtitle" : null;
    return (
      <div className={this.decorateCSS("container")}>
        {headerExist && (
          <Base.Container className={this.decorateCSS("content-container")}>
            <Base.MaxContent className={this.decorateCSS("max-content")}>
              <Base.VerticalContent className={`${this.decorateCSS("header")} ${this.decorateCSS(alignmentValue)} ${!isDescriptionExist && isTitleExist && this.decorateCSS("no-description-title")} ${!isDescriptionExist && !isTitleExist && this.decorateCSS("no-description-no-title")}`}>
                {hasSubtitle && (
                  <div className={this.decorateCSS("subtitle-row")}>
                    <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>
                    {socialPlacement === "subtitle" && socialNodes}
                  </div>
                )}

                {isTitleExist && (
                  <div className={this.decorateCSS("title-with-socials")}>
                    <Base.SectionTitle className={this.decorateCSS("title")}>{headerTitle}</Base.SectionTitle>
                    {socialPlacement === "title" && socialNodes}
                  </div>
                )}

                {(isDescriptionExist || socialPlacement === "description") && (
                  <div className={`${this.decorateCSS("description-container")} ${this.decorateCSS(alignmentValue)} ${!isDescriptionExist && isTitleExist && this.decorateCSS("no-description-right")} ${!isDescriptionExist && !isTitleExist && this.decorateCSS("no-description-left")}`}>
                    {isDescriptionExist && <Base.SectionDescription className={this.decorateCSS("description-text")}>{headerDescription}</Base.SectionDescription>}
                    {socialPlacement === "description" && socialNodes}
                  </div>
                )}

                {visibleButtons.length > 0 && (
                  <Base.Row className={this.decorateCSS("button-wrapper")}>
                    {visibleButtons.map((item: INPUTS.CastedButton, index: number) => {
                      return this.castToString(item.text) && (
                        <ComposerLink key={`button-${index}`} path={item.url}>
                          <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                            <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                          </Base.Button>
                        </ComposerLink>
                      );
                    })}
                  </Base.Row>
                )}
                {!socialPlacement && socialNodes}
              </Base.VerticalContent>
            </Base.MaxContent>
          </Base.Container>
        )}

        {this.castToObject<ContentItemType[]>("middle-content").length > 0 && (
          <div className={this.decorateCSS("middle-content")}>
            <Base.ListGrid
              className={this.decorateCSS("middle-grid")}
              gridCount={{ pc: this.getPropValue("itemsInRow"), tablet: 4, phone: 1 }}
            >
              {this.castToObject<ContentItemType[]>("middle-content").map((item: ContentItemType, idx: number) => {
                const isContTitleExist = this.castToString(item.contentTitle);
                const isContIconExist = item.contentIcon;
                const isDesExist = item.contentDescriptionArray.some((desc) => this.castToString(desc.text));

                if (isContTitleExist || isContIconExist || isDesExist) {
                  return (
                    <div key={idx} className={this.decorateCSS("element-container")}>
                      {isContIconExist && <Base.Media value={item.contentIcon} className={this.decorateCSS("icon")} />}
                      {isContTitleExist && (
                        <div className={this.decorateCSS("content-title-container")}>
                          <Base.H5 className={this.decorateCSS("content-title")}>{item.contentTitle}</Base.H5>
                        </div>
                      )}
                      {isDesExist && (
                        <div className={this.decorateCSS("description-wrapper")}>
                          {item.contentDescriptionArray.map((descItem: any, descIdx: number) => {
                            const hasText = this.castToString(descItem.text);
                            return hasText && (
                              <div key={descIdx} className={this.decorateCSS("description-item")}>
                                <Base.P className={this.decorateCSS("content-description")}>{descItem.text}</Base.P>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }
                return null;
              })}
            </Base.ListGrid>
          </div>
        )}

        <div className={this.decorateCSS("map-container")}>
          <ComposerMap styles={mapStyle?.colors} handleMarkerZoom={markerZoom} defaultZoom={centerZoom} markers={markers} className={this.decorateCSS("map")} />
        </div>
      </div>
    );
  }
}

export default Location2;