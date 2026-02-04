import React from "react";
import { Location } from "../../EditorComponent";
import styles from "./location7.module.scss";
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
  leftPercent: string;
  topPercent: string;
  popupTitle: string;
  description: any[];
  markerImage: string;
};

class Location7 extends Location {
  constructor(props?: any) {
    super(props, styles);
    this.removeProp("theme");

    this.addProp({
      type: "media",
      key: "logo",
      displayer: "Logo",
      additionalParams: {
        availableTypes: ["image", "icon"],
      },
      value: {
        type: "icon",
        name: "",
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
      value: "We Are <span style='color: var(--composer-primary-color)'>Worldwide</span>",
    });


    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
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
              type: "number",
              displayer: "Left %",
              key: "leftPercent",
              value: 30,
            },
            {
              type: "number",
              displayer: "Top %",
              key: "topPercent",
              value: 40,
            },
            {
              type: "string",
              displayer: "Popup Title",
              key: "popupTitle",
              value: "NEW YORK",
            },
            {
              type: "array",
              displayer: "Description",
              key: "description",
              value: [
                {
                  type: "string",
                  displayer: "Text",
                  key: "text",
                  value: "+0 595-510-1352",
                },
                {
                  type: "string",
                  displayer: "Text",
                  key: "text",
                  value: "flatley.don@weissnat.me",
                },
                {
                  type: "string",
                  displayer: "Text",
                  key: "text",
                  value: "713 Dibbert Bridge",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "marker",
          displayer: "Marker",
          value: [
            {
              type: "number",
              displayer: "Left %",
              key: "leftPercent",
              value: 60,
            },
            {
              type: "number",
              displayer: "Top %",
              key: "topPercent",
              value: 30,
            },
            {
              type: "string",
              displayer: "Popup Title",
              key: "popupTitle",
              value: "MOSCOW",
            },
            {
              type: "array",
              displayer: "Description",
              key: "description",
              value: [
                {
                  type: "string",
                  displayer: "Text",
                  key: "text",
                  value: "+7 495-123-4567",
                },
                {
                  type: "string",
                  displayer: "Text",
                  key: "text",
                  value: "moscow.office@example.com",
                },
                {
                  type: "string",
                  displayer: "Text",
                  key: "text",
                  value: "Red Square",
                },
              ],
            },

          ],
        },
        {
          type: "object",
          key: "marker",
          displayer: "Marker",
          value: [
            {
              type: "number",
              displayer: "Left %",
              key: "leftPercent",
              value: 80,
            },
            {
              type: "number",
              displayer: "Top %",
              key: "topPercent",
              value: 60,
            },
            {
              type: "string",
              displayer: "Popup Title",
              key: "popupTitle",
              value: "TOKYO",
            },
            {
              type: "array",
              displayer: "Description",
              key: "description",
              value: [
                {
                  type: "string",
                  displayer: "Text",
                  key: "text",
                  value: "+81 3-1234-5678",
                },
                {
                  type: "string",
                  displayer: "Text",
                  key: "text",
                  value: "tokyo.office@example.com",
                },
                {
                  type: "string",
                  displayer: "Text",
                  key: "text",
                  value: "Shinjuku",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "marker",
          displayer: "Marker",
          value: [
            {
              type: "number",
              displayer: "Left %",
              key: "leftPercent",
              value: 30,
            },
            {
              type: "number",
              displayer: "Top %",
              key: "topPercent",
              value: 70,
            },
            {
              type: "string",
              displayer: "Popup Title",
              key: "popupTitle",
              value: "SYDNEY",
            },
            {
              type: "array",
              displayer: "Description",
              key: "description",
              value: [
                {
                  type: "string",
                  displayer: "Text",
                  key: "text",
                  value: "+61 2-1234-5678",
                },
                {
                  type: "string",
                  displayer: "Text",
                  key: "text",
                  value: "sydney.office@example.com",
                },
                {
                  type: "string",
                  displayer: "Text",
                  key: "text",
                  value: "Opera House",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "marker",
          displayer: "Marker",
          value: [
            {
              type: "number",
              displayer: "Left %",
              key: "leftPercent",
              value: 50,
            },
            {
              type: "number",
              displayer: "Top %",
              key: "topPercent",
              value: 80,
            },
            {
              type: "string",
              displayer: "Popup Title",
              key: "popupTitle",
              value: "SAO PAULO",
            },
            {
              type: "array",
              displayer: "Description",
              key: "description",
              value: [
                {
                  type: "string",
                  displayer: "Text",
                  key: "text",
                  value: "+55 11-1234-5678",
                },
                {
                  type: "string",
                  displayer: "Text",
                  key: "text",
                  value: "saopaulo.office@example.com",
                },
                {
                  type: "string",
                  displayer: "Text",
                  key: "text",
                  value: "Paulista Avenue",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "marker",
          displayer: "Marker",
          value: [
            {
              type: "number",
              displayer: "Left %",
              key: "leftPercent",
              value: 45,
            },
            {
              type: "number",
              displayer: "Top %",
              key: "topPercent",
              value: 20,
            },
            {
              type: "string",
              displayer: "Popup Title",
              key: "popupTitle",
              value: "PARIS",
            },
            {
              type: "array",
              displayer: "Description",
              key: "description",
              value: [
                {
                  type: "string",
                  displayer: "Text",
                  key: "text",
                  value: "+33 1-2345-6789",
                },
                {
                  type: "string",
                  displayer: "Text",
                  key: "text",
                  value: "paris.office@example.com",
                },
                {
                  type: "string",
                  displayer: "Text",
                  key: "text",
                  value: "Eiffel Tower",
                },
              ],
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "showTooltipLine",
      displayer: "Tooltip Line",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
    });


    this.addProp({
      type: "media",
      key: "background-media",
      displayer: "Background Media",
      additionalParams: {
        availableTypes: ["image", "video"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6880cd78a85f1c002bbc65c9?alt=media",
      },
    });
    this.setComponentState("activeMarkerIndex", 0);
  }

  static getName(): string {
    return "Location 7";
  }

  handleMarkerClick = (index: number) => {
    const currentActiveIndex = this.getComponentState("activeMarkerIndex");
    if (currentActiveIndex === index) {
      this.setComponentState("activeMarkerIndex", null);
    } else {
      this.setComponentState("activeMarkerIndex", index);
    }
  };

  handleClosePopover = () => {
    this.setComponentState("activeMarkerIndex", null);
  };

  render() {
    const addresses: Address[] = this.getPropValue("addresses");
    const title = this.getPropValue("title");
    const subtitle = this.getPropValue("subtitle");
    const description = this.getPropValue("description");
    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);
    const subtitleExist = this.castToString(subtitle);
    const activeMarkerIndex = this.getComponentState("activeMarkerIndex");
    const bgMedia = this.getPropValue("background-media");
    const showTooltipLine = this.getPropValue("showTooltipLine");
    const imageOverlay = this.getPropValue("overlay");
    const logo = this.getPropValue("logo");
    const logoExist = (logo?.type === "icon" && !!logo?.name) || (logo?.type === "image" && !!logo?.url);


    const markers = addresses.reduce((acc: MarkerObject[], address: any) => {
      if (address.type === "object" && Array.isArray(address.value)) {
        const markerProps = address.value;
        const leftPercent = markerProps.find((p: any) => p.key === "leftPercent")?.value;
        const topPercent = markerProps.find((p: any) => p.key === "topPercent")?.value;
        const popupTitle = markerProps.find((p: any) => p.key === "popupTitle")?.value;
        const descriptionProp = markerProps.find((p: any) => p.key === "description");
        const description = (descriptionProp?.value || []).map((item: any) => item?.value || item);

        acc.push({
          leftPercent,
          topPercent,
          popupTitle,
          description,
          markerImage: "",
          content: null,
        });
      }
      return acc;
    }, []);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("wrapper")}>
            {logoExist && (
              <div className={this.decorateCSS("logo-container")}>
                <Base.Media
                  value={logo}
                  className={`${this.decorateCSS("logo")} ${logo?.type === "image" && this.decorateCSS("logo-img")}`}
                />
              </div>
            )}
            {subtitleExist && (
              <div className={this.decorateCSS("subtitle-row")}>
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>
              </div>
            )}
            {titleExist && (
              <Base.SectionTitle className={this.decorateCSS("title")}>
                {title}
              </Base.SectionTitle>
            )}
            {descriptionExist && (
              <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>
            )}
            <section className={this.decorateCSS("map-container")}>
              <div
                className={this.decorateCSS("custom-map")}>
                {bgMedia && (
                  <Base.Media value={bgMedia} className={this.decorateCSS("background-image")} />
                )}
                {imageOverlay && <div className={this.decorateCSS("overlay")} />}
                {markers.map((marker, idx) => {
                  const popupTitle = marker.popupTitle;
                  const description = marker.description;
                  const tooltipExist = popupTitle || description;

                  return (
                    <React.Fragment key={idx}>
                      <div
                        className={this.decorateCSS("marker") + (activeMarkerIndex === idx ? " active" : "")}
                        style={{
                          left: `${marker.leftPercent}%`,
                          top: `${marker.topPercent}%`,
                        }}
                        onClick={() => this.handleMarkerClick(idx)}
                      />
                      {activeMarkerIndex === idx && tooltipExist && (
                        <div
                          className={this.decorateCSS("tooltip")}
                          style={{
                            left: `${parseFloat(marker.leftPercent) + 2}%`,
                            top: `${marker.topPercent}%`,
                          }}
                        >
                          {popupTitle && <div className={this.decorateCSS("tooltip-header")}>{marker.popupTitle}</div>}
                          {showTooltipLine && <div className={this.decorateCSS("tooltip-divider")}></div>}
                          {description && description.length > 0 && (
                            <div className={this.decorateCSS("tooltip-content")}>
                              {description.map((text: any, i: number) => {
                                return <div key={i}>{this.castToString(text)}</div>;
                              })}
                            </div>
                          )}
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </section>
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Location7;
