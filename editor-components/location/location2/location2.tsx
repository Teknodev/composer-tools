import React from "react";
import { Location } from "../../EditorComponent";
import styles from "./location2.module.scss";
import ComposerMap from "../../../composer-base-components/map/map";
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
  contentTitle: JSX.Element;
  contentDescriptionArray: {
    text: JSX.Element;
  }[];
};

type SocialMediaItemType = {
  icon: string;
};

class LocationComponent2 extends Location {
  constructor(props?: any) {
    super(props, styles);

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
      key: "socials",
      displayer: "Social Media Items",
      value: [
        {
          type: "object",
          key: "content",
          displayer: "Content Elements",
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
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "content",
          displayer: "Content Elements",
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
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "content",
          displayer: "Content Elements",
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
              displayer: "Url",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "middle-content",
      displayer: "Content Items",
      value: [
        {
          type: "object",
          key: "content",
          displayer: "Content Elements",
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
              displayer: "Title",
              value: "Address",
            },
            {
              type: "array",
              key: "contentDescriptionArray",
              displayer: "Content Description",
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
          displayer: "Content Elements",
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
              displayer: "Title",
              value: "Bussiness Hours",
            },
            {
              type: "array",
              key: "contentDescriptionArray",
              displayer: "Content Description",
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
          displayer: "Content Elements",
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
              displayer: "Title",
              value: "Phone",
            },
            {
              type: "array",
              key: "contentDescriptionArray",
              displayer: "Content Description",
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
          displayer: "Content Elements",
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
              displayer: "Title",
              value: "Email",
            },
            {
              type: "array",
              key: "contentDescriptionArray",
              displayer: "Content Description",
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
                lng: -76.9876,
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

  getName(): string {
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
    const mapStyle = this.selectTheme(theme);

    const markers = addresses.reduce((acc: MarkerObject[], address: Address) => {
      if (address.type === "object" && Array.isArray(address.value)) {
        const markerData = address.value.find((addr) => addr.type === "location");
        const lat = markerData?.value.lat;
        const lng = markerData?.value.lng;
        const markerImage = address.value.find((a) => a.key.startsWith("marker-image"))?.value;
        const width = address.value.find((a) => a.key.startsWith("marker-width"))?.value || 32;
        const height = address.value.find((a) => a.key.startsWith("marker-height"))?.value || 32;

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

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("header")}>
            {isTitleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{headerTitle}</Base.SectionTitle>}

            <div className={this.decorateCSS("description-container")}>
              {isDescriptionExist && <Base.SectionDescription className={this.decorateCSS("description-text")}>{headerDescription}</Base.SectionDescription>}
              <div className={this.decorateCSS("socials")}>
                {this.castToObject<SocialMediaItemType[]>("socials").map((item: SocialMediaItemType, index: number) => {
                  return (
                    <div className={this.decorateCSS("socials-container")}>
                      <div className={this.decorateCSS("social-button")}>
                        <ComposerIcon name={item.icon} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Base.VerticalContent>

          <div className={this.decorateCSS("middle-content")}>
            <div className={this.decorateCSS("middle-content-container")}>
              {this.castToObject<ContentItemType[]>("middle-content").map((item: ContentItemType, index: number) => {
                const isContTitleExist = this.castToString(item.contentTitle);
                const isContIconExist = item.contentIcon;
                const isDesExist = item.contentDescriptionArray.some((desc) => this.castToString(desc.text));

                if (isContTitleExist || isContIconExist || isDesExist) {
                  return (
                    <div className={this.decorateCSS("element-container")}>
                      {isContIconExist && <ComposerIcon name={item.contentIcon} />}
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

          <div className={this.decorateCSS("map-container")}>
            <ComposerMap styles={mapStyle.colors} handleMarkerZoom={markerZoom} defaultZoom={centerZoom} markers={markers} className={this.decorateCSS("map")} />
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default LocationComponent2;
