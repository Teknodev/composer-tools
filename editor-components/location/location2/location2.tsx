import React from "react";
import { Location } from "../../EditorComponent";
import styles from "./location2.module.scss";
import ComposerMap from "../../../composer-base-components/map/map";

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

type ContentItemType = {
  contentIcon: string;
  contentTitle: React.JSX.Element;
  contentDescriptionArray: {
    text: React.JSX.Element;
  }[];
};

type SocialMediaItemType = {
  icon: string;
};

class Location2 extends Location {
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
      displayer: "Header Title",
      value: "Connect with us",
    });

    this.addProp({
      type: "string",
      key: "headerDescription",
      displayer: "Header Description",
      value:
        "Each template in our ever growing studio library can be added and moved around within any page effortlessly with one click. Combine them, rearrange them and customize them further as much as you desire. Welcome to the future of building with WordPress.",
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
      key: "socials",
      displayer: "Social Media Items",
      value: [
        {
          type: "object",
          key: "content",
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
              key: "url",
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
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaInstagram",
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
          key: "content",
          displayer: "Social Media Item",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaXTwitter",
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
      key: "middle-content",
      displayer: "Feature Items",
      value: [
        {
          type: "object",
          key: "content",
          displayer: "Feature Elements",
          value: [
            {
              type: "icon",
              key: "contentIcon",
              displayer: "Icon",
              value: "SlLocationPin",
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
              type: "icon",
              key: "contentIcon",
              displayer: "Icon",
              value: "Ri24HoursLine",
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
                      value: "Monda - Friday",
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
              type: "icon",
              key: "contentIcon",
              displayer: "Icon",
              value: "HiOutlinePhone",
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
              type: "icon",
              key: "contentIcon",
              displayer: "Icon",
              value: "SiMinutemailer",
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
              type: "image",
              key: "marker-image",
              displayer: "Marker Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66dffd65343034002c462ded?alt=media&timestamp=1725955430378",
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
              type: "image",
              key: "marker-image",
              displayer: "Marker Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66dffd65343034002c462ded?alt=media&timestamp=1725955430378",
            },
          ],
        },
      ],
    });
  }

  static getName(): string {
    return "Location 2";
  }

  render() {
    const addresses: Address[] = this.getPropValue("addresses");
    const markerZoom = this.getPropValue("markerZoom");
    const centerZoom = this.getPropValue("centerZoom");

    const headerTitle = this.getPropValue("title");
    const headerDescription = this.getPropValue("headerDescription");
    const isTitleExist = this.castToString(headerTitle);
    const isDescriptionExist = this.castToString(headerDescription);

    const theme = this.getPropValue("theme");

    const selectedTheme = theme || "Theme-4";

    const mapStyle = this.selectTheme(selectedTheme);

    const alignmentValue = Base.getContentAlignment();

    const markers = addresses.reduce((acc: MarkerObject[], address: any) => {
      if (address.type === "object" && Array.isArray(address.value)) {
        const markerData = address.getPropValue("coordinate");
        const lat = markerData?.lat;
        const lng = markerData?.lng;
        const markerImage = address.getPropValue("marker-image");
        const width = address.getPropValue("marker-width") || 32;
        const height = address.getPropValue("marker-height") || 32;

        if (lat !== undefined && lng !== undefined) {
          const content = <></>;

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

    const socials = this.castToObject<SocialMediaItemType[]>("socials");
    const headerExist = isTitleExist || isDescriptionExist || socials.length > 0;
    const subtitle = this.getPropValue("subtitle");
    const subtitleExist = this.castToString(subtitle);
    return (
      <div className={this.decorateCSS("container")}>
        {headerExist && (
          <Base.Container className={this.decorateCSS("content-container")}>
            <Base.MaxContent className={this.decorateCSS("max-content")}>
              <Base.VerticalContent className={this.decorateCSS("header")}>
                {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>}
                {isTitleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{headerTitle}</Base.SectionTitle>}

                <div className={`${this.decorateCSS("description-container")} ${alignmentValue === "center" && this.decorateCSS("center")}`}>
                  {isDescriptionExist && <Base.SectionDescription className={this.decorateCSS("description-text")}>{headerDescription}</Base.SectionDescription>}
                  {socials.length > 0 && (
                    <div className={this.decorateCSS("socials")}>
                      {socials.map((item: SocialMediaItemType, index: number) => {
                        return (
                          item.icon && (
                            <div className={this.decorateCSS("socials-container")}>
                              <div className={this.decorateCSS("social-button")}>
                                <Base.Icon name={item.icon} />
                              </div>
                            </div>
                          )
                        );
                      })}
                    </div>
                  )}
                </div>
              </Base.VerticalContent>
            </Base.MaxContent>
          </Base.Container>
        )}

        {this.castToObject<ContentItemType[]>("middle-content").length > 0 && (
          <div className={this.decorateCSS("middle-content")}>
            <div className={this.decorateCSS("middle-content-container")}>
              {this.castToObject<ContentItemType[]>("middle-content").map((item: ContentItemType, index: number) => {
                const isContTitleExist = this.castToString(item.contentTitle);
                const isContIconExist = item.contentIcon;
                const isDesExist = item.contentDescriptionArray.some((desc) => this.castToString(desc.text));

                if (isContTitleExist || isContIconExist || isDesExist) {
                  return (
                    <div className={this.decorateCSS("element-container")}>
                      {isContIconExist && <Base.Icon propsIcon={{ className: this.decorateCSS("icon") }} name={item.contentIcon} />}
                      {isContTitleExist && (
                        <div className={this.decorateCSS("content-title-container")}>
                          <Base.H3 className={this.decorateCSS("content-title")}>{item.contentTitle}</Base.H3>
                        </div>
                      )}
                      {item.contentDescriptionArray.map((item, index: number) => {
                        const isDesExist = this.castToString(item.text);
                        return isDesExist && <Base.P className={this.decorateCSS("content-description")}>{item.text}</Base.P>;
                      })}
                    </div>
                  );
                }
              })}
            </div>
          </div>
        )}

        <div className={this.decorateCSS("map-container")}>
          <ComposerMap styles={mapStyle.colors} handleMarkerZoom={markerZoom} defaultZoom={centerZoom} markers={markers} className={this.decorateCSS("map")} />
        </div>
      </div>
    );
  }
}

export default Location2;
