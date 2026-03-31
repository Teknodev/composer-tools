import * as React from "react";
import { BasePricingTable, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./pricing-table9.module.scss";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

interface PricingContent {
  text: React.JSX.Element;
  icon: TypeMediaInputValue;
}

interface PricingColumn {
  title: React.JSX.Element;
  contents: PricingContent[];
  buttons: INPUTS.CastedButton[];
}

type PricingTable9Props = {
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  buttons: INPUTS.CastedButton[];
  columns: PricingColumn[];
  animations: string[];
} & TypeUsableComponentProps;

class PricingTable9 extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "boolean",
      key: "coloredBackground",
      displayer: "Colored Background",
      value: true,
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Best for small teams",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Choose your plan",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Decide according to your needs.",
    });

    this.addProp({
      type: "media",
      key: "icon",
      displayer: "Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "IoApps" },
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
      key: "columns",
      displayer: "Columns",
      value: [
        {
          type: "object",
          key: "columnContent",
          displayer: "Column Content",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "",
            },
            {
              type: "array",
              key: "contents",
              displayer: "Contents",
              value: [
                {
                  type: "object",
                  key: "content",
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "Tellus integer",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "content",
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "Feugiat scelerisque",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "content",
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "Scelerisque varius",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "content",
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "Morbi enim",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "content",
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "Nulla aliquet porttitor",
                    },
                  ],
                },
              ],
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [],
            },
          ],
        },
        {
          type: "object",
          key: "columnContent",
          displayer: "Column Content",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "BASIC",
            },

            {
              type: "array",
              key: "contents",
              displayer: "Contents",
              value: [
                {
                  type: "object",
                  key: "content",
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "Massa id neque",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: { availableTypes: ["icon", "image"] },
                      value: { type: "icon", name: "FcCheckmark" },
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
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: { availableTypes: ["icon", "image"] },
                      value: { type: "icon", name: "FcCheckmark" },
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
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: { availableTypes: ["icon", "image"] },
                      value: { type: "icon", name: "FcCheckmark" },
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
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: { availableTypes: ["icon", "image"] },
                      value: { type: "icon", name: "FcCheckmark" },
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
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "Placerat duis",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: { availableTypes: ["icon", "image"] },
                      value: { type: "icon", name: "FcCheckmark" },
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
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("type", "Button", "FREE / month", "", "", null, "Primary"),
              ],
            },
          ],
        },
        {
          type: "object",
          key: "columnContent",
          displayer: "Column Content",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "START",
            },

            {
              type: "array",
              key: "contents",
              displayer: "Contents",
              value: [
                {
                  type: "object",
                  key: "content",
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "Aliquam vestib",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: { availableTypes: ["icon", "image"] },
                      value: { type: "icon", name: "FcCheckmark" },
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
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: { availableTypes: ["icon", "image"] },
                      value: { type: "icon", name: "FcCheckmark" },
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
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "Vel orci porta",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: { availableTypes: ["icon", "image"] },
                      value: { type: "icon", name: "FcCheckmark" },
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
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: { availableTypes: ["icon", "image"] },
                      value: { type: "icon", name: "FcCheckmark" },
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
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: { availableTypes: ["icon", "image"] },
                      value: { type: "icon", name: "FcCheckmark" },
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
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("type", "Button", "49.99$ / month", "", "", null, "Primary"),
              ],
            },
          ],
        },
        {
          type: "object",
          key: "columnContent",
          displayer: "Column Content",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "STANDARD",
            },

            {
              type: "array",
              key: "contents",
              displayer: "Contents",
              value: [
                {
                  type: "object",
                  key: "content",
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "Ulum morbi blan",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: { availableTypes: ["icon", "image"] },
                      value: { type: "icon", name: "FcCheckmark" },
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
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "Pulvinar neque",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: { availableTypes: ["icon", "image"] },
                      value: { type: "icon", name: "FcCheckmark" },
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
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: { availableTypes: ["icon", "image"] },
                      value: { type: "icon", name: "FcCheckmark" },
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
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "Neque laoreet",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: { availableTypes: ["icon", "image"] },
                      value: { type: "icon", name: "FcCheckmark" },
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
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: { availableTypes: ["icon", "image"] },
                      value: { type: "icon", name: "FcCheckmark" },
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
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("type", "Button", "89.99$ / month", "", "", null, "Primary"),
              ],
            },
          ],
        },
        {
          type: "object",
          key: "columnContent",
          displayer: "Column Content",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "BUSINESS",
            },

            {
              type: "array",
              key: "contents",
              displayer: "Contents",
              value: [
                {
                  type: "object",
                  key: "content",
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "Dit cursus risus",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: { availableTypes: ["icon", "image"] },
                      value: { type: "icon", name: "FcCheckmark" },
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
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "Libero enim",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: { availableTypes: ["icon", "image"] },
                      value: { type: "icon", name: "FcCheckmark" },
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
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "Vitae sagittis",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: { availableTypes: ["icon", "image"] },
                      value: { type: "icon", name: "FcCheckmark" },
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
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "Mattis rhoncus",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: { availableTypes: ["icon", "image"] },
                      value: { type: "icon", name: "FcCheckmark" },
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
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "Libero enim",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: { availableTypes: ["icon", "image"] },
                      value: { type: "icon", name: "FcCheckmark" },
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
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("type", "Button", "129.99$ / month", "", "", null, "Primary"),
              ],
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "multiSelect",
      key: "animations",
      displayer: "Animations",
      value: ["animation1", "animation2", "animation3"],
      additionalParams: {
        selectItems: ["animation1", "animation2", "animation3"],
      },
    });
  }

  static getName(): string {
    return "Pricing 9";
  }

  private hasAnyColumnTitle(): boolean {
    const columns = this.castToObject<PricingColumn[]>("columns");
    return columns.some((column) => this.castToString(column?.title));
  }

  render() {
    const settings = {
      arrows: false,
      dots: true,
      dotsClass: this.decorateCSS("dots"),
      autoplay: false,
      autoplaySpeed: 2000,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      touchThreshold: 100,
      responsive: [
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
      customPaging: (_i: number) => (
        <button className={this.decorateCSS("pulse-wrapper")}></button>
      ),
    };

    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const coloredBackground = this.getPropValue("coloredBackground");

    const iconValue = this.getPropValue("icon");
    let iconObj: TypeMediaInputValue | undefined;
    let iconString = "";
    if (typeof iconValue === "object") {
      iconObj = iconValue as TypeMediaInputValue;
    } else if (typeof iconValue === "string") {
      iconString = this.castToString(iconValue);
    }
    const headerIconExist = !!iconObj || !!iconString;

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const hasValidButtons = buttons.some((btn) => {
      const buttonText = this.castToString(btn.text);
      const btnIconValue = btn.icon as unknown as TypeMediaInputValue;
      const iconExist = btnIconValue && (btnIconValue.type === "icon" ? btnIconValue.name : (btnIconValue as { url?: string }).url);
      return buttonText || iconExist;
    });

    const columns = this.castToObject<PricingColumn[]>("columns");
    const firstColumn = columns[0];
    const alignment = Base.getContentAlignment();

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${coloredBackground ? this.decorateCSS("colored-background") : ""}`}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(titleExist || subtitleExist || descriptionExist || hasValidButtons || headerIconExist) && (
            <div className={this.decorateCSS("header-card")}>
              <div className={`${this.decorateCSS("header")} ${alignment === "center" ? this.decorateCSS("alignment-center") : ""}`}>
                <Base.VerticalContent className={this.decorateCSS("header-left-container")}>
                  {subtitleExist && (
                    <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                      {this.getPropValue("subtitle")}
                    </Base.SectionSubTitle>
                  )}

                  {titleExist && (
                    <Base.SectionTitle className={this.decorateCSS("title")}>
                      {this.getPropValue("title")}
                    </Base.SectionTitle>
                  )}
                  {descriptionExist && (
                    <Base.SectionDescription
                      className={this.decorateCSS("description")}
                    >
                      {this.getPropValue("description")}
                    </Base.SectionDescription>
                  )}
                  {hasValidButtons && (
                    <div className={this.decorateCSS("button-container")}>
                      {buttons.map((item: INPUTS.CastedButton, index: number) => {
                        const buttonText = this.castToString(item.text);
                        const btnIconValue = item.icon as unknown as TypeMediaInputValue;
                        const iconExist = btnIconValue && (btnIconValue.type === "icon" ? btnIconValue.name : (btnIconValue as { url?: string }).url);
                        if (!buttonText && !iconExist) return null;
                        return (
                          <ComposerLink key={index} path={item.url}>
                            <Base.Button
                              buttonType={item.type}
                              className={this.decorateCSS("button")}
                            >
                              {buttonText && (
                                <Base.P className={this.decorateCSS("button-text")}>
                                  {item.text}
                                </Base.P>
                              )}
                              {iconExist && (
                                <Base.Media className={this.decorateCSS("button-icon")} value={btnIconValue} />
                              )}
                            </Base.Button>
                          </ComposerLink>
                        );
                      })}
                    </div>
                  )}
                </Base.VerticalContent>
                {headerIconExist && (
                  <div className={this.decorateCSS("header-right-container")}>
                    <div className={this.decorateCSS("header-icon-wrapper")}>
                      <Base.Media
                        value={iconObj ?? { type: "icon", name: iconString }}
                        className={this.decorateCSS(iconObj?.type === "image" ? "header-image" : "header-icon")}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          <div className={this.decorateCSS("table-card")}>
            <div className={this.decorateCSS("container")}>
              <div className={this.decorateCSS("columns-container")}>
                {columns.map(
                  (column: PricingColumn, index: number) => {
                    const cardButtons = column?.buttons || [];
                    const columnTitleExist = this.castToString(column?.title);
                    const hasButtonsWithContent = cardButtons.some((btn: INPUTS.CastedButton) => {
                      const btnText = this.castToString(btn.text);
                      const btnIconValue = btn.icon as unknown as TypeMediaInputValue;
                      const btnIcon = btnIconValue && (btnIconValue.type === "icon" ? btnIconValue.name : btnIconValue.url);
                      return btnText || btnIcon;
                    });

                    return (
                      <Base.VerticalContent
                        key={`column-${index}`}
                        className={`${this.decorateCSS("column-item")} ${index === 0 ? this.decorateCSS("label-column") : ""} ${index !== 0 && this.getPropValue("animations") ? this.getPropValue("animations").map((animation: string) => this.decorateCSS(animation)).join(" ") : ""}`}
                      >
                        {this.hasAnyColumnTitle() && (
                          <div className={this.decorateCSS("title-container")}>
                            <Base.H6 className={`${this.decorateCSS("column-title")} ${!columnTitleExist ? this.decorateCSS("empty") : ""}`}>
                              {column?.title}
                            </Base.H6>
                          </div>
                        )}
                        <div className={this.decorateCSS("column-contents")}>
                          {column?.contents.map(
                            (content: PricingContent, contentIndex: number) => {
                              const firstColumnContent = firstColumn?.contents?.[contentIndex];

                              if (!firstColumnContent) return null;

                              const iconExist = content.icon && (content.icon.type === "icon" ? content.icon.name : content.icon.url);
                              const textExist = this.castToString(content.text);

                              if (!iconExist && !textExist) return null;

                              return (
                                <div
                                  key={`content-${contentIndex}`}
                                  className={this.decorateCSS("content-item")}
                                  style={index === 0 ? { justifyContent: "flex-start" } : {}}
                                >
                                  <div className={this.decorateCSS("content-right")}>
                                    {iconExist && (
                                      <Base.Media
                                        value={content.icon}
                                        className={this.decorateCSS("content-icon")}
                                      />
                                    )}
                                    {textExist && (
                                      <Base.P
                                        className={this.decorateCSS("content-text")}
                                        style={index === 0 ? { textAlign: "left" } : {}}
                                      >
                                        {content?.text}
                                      </Base.P>
                                    )}
                                  </div>
                                  <div className={this.decorateCSS("hover-line")} />
                                </div>
                              );
                            }
                          )}
                        </div>
                        {hasButtonsWithContent && (
                          <div
                            className={this.decorateCSS(
                              "column-button-container"
                            )}
                          >
                            {cardButtons.map((button: INPUTS.CastedButton, btnIndex: number) => {
                              const buttonTextExist = this.castToString(button.text);
                              const buttonIconValue = button.icon as unknown as TypeMediaInputValue;
                              const buttonIconExist = buttonIconValue && (buttonIconValue.type === "icon" ? buttonIconValue.name : buttonIconValue.url);
                              if (!buttonTextExist && !buttonIconExist) return null;

                              return (
                                <Base.Button
                                  key={btnIndex}
                                  buttonType={button.type}
                                  className={this.decorateCSS("column-button")}
                                >
                                  <div className={this.decorateCSS("pulse-wrapper")}>
                                    <ComposerLink
                                      path={button.url || "#"}
                                    >
                                      {buttonIconExist && (
                                        <Base.Media
                                          value={buttonIconValue}
                                          className={this.decorateCSS(
                                            "button-icon"
                                          )}
                                        />
                                      )}
                                      {buttonTextExist && (
                                        <Base.P
                                          className={this.decorateCSS(
                                            "button-text"
                                          )}
                                        >
                                          {(() => {
                                            const slashIdx = buttonTextExist.indexOf("/");
                                            if (slashIdx !== -1) {
                                              const main = buttonTextExist.substring(0, slashIdx).trim();
                                              const suffix = buttonTextExist.substring(slashIdx).trim();
                                              return (
                                                <>
                                                  {main} <span className={this.decorateCSS("button-suffix")}>{suffix}</span>
                                                </>
                                              );
                                            }
                                            return buttonTextExist;
                                          })()}
                                        </Base.P>
                                      )}
                                    </ComposerLink>
                                  </div>
                                </Base.Button>
                              );
                            })}
                          </div>
                        )}
                      </Base.VerticalContent>
                    );
                  }
                )}
              </div>
            </div>

            <div className={this.decorateCSS("slider")}>
              <div className={this.decorateCSS("slider-container")}>
                <ComposerSlider {...settings}>
                  {columns
                    .filter((_, index: number) => index !== 0)
                    .map((column: PricingColumn, index: number) => {
                      const cardButtons = column?.buttons || [];
                      const columnTitleExist = this.castToString(column?.title);
                      const hasButtonsWithContent = cardButtons.some((btn: INPUTS.CastedButton) => {
                        const btnText = this.castToString(btn.text);
                        const btnIcon = btn.icon as unknown as TypeMediaInputValue;
                        const btnIconExist = btnIcon && (btnIcon.type === "icon" ? btnIcon.name : btnIcon.url);
                        return btnText || btnIconExist;
                      });
                      return (
                        <Base.VerticalContent
                          key={`column-${index}`}
                          className={this.decorateCSS("column-item")}
                        >
                          {this.hasAnyColumnTitle() && (
                            <div className={this.decorateCSS("title-container")}>
                              <Base.H6
                                className={`${this.decorateCSS("column-title")} ${!columnTitleExist ? this.decorateCSS("empty") : ""}`}
                              >
                                {column?.title}
                              </Base.H6>
                            </div>
                          )}
                          <div className={this.decorateCSS("column-contents")}>
                            {column?.contents.map(
                              (content: PricingContent, contentIndex: number) => {
                                const firstColumnContent = firstColumn?.contents?.[contentIndex];

                                if (!firstColumnContent) return null;

                                const iconExist = content.icon && (content.icon.type === "icon" ? content.icon.name : content.icon.url);
                                const textExist = this.castToString(content.text);
                                const firstColumnTextExist = this.castToString(firstColumnContent.text);

                                if (!iconExist && !textExist && !firstColumnTextExist) return null;

                                return (
                                  <div
                                    key={`content-${contentIndex}`}
                                    className={this.decorateCSS("content-item")}
                                  >
                                    {firstColumnTextExist && (
                                      <Base.P className={this.decorateCSS("content-label")}>
                                        {firstColumnContent.text}
                                      </Base.P>
                                    )}
                                    <div className={this.decorateCSS("content-right")}>
                                      {iconExist && (
                                        <Base.Media
                                          value={content.icon}
                                          className={this.decorateCSS(
                                            "content-icon"
                                          )}
                                        />
                                      )}
                                      {textExist && (
                                        <Base.P
                                          className={this.decorateCSS(
                                            "content-text"
                                          )}
                                        >
                                          {content?.text}
                                        </Base.P>
                                      )}
                                    </div>
                                    <div className={this.decorateCSS("hover-line")} />
                                  </div>
                                );
                              }
                            )}
                          </div>
                          {hasButtonsWithContent && (
                            <div
                              className={this.decorateCSS(
                                "column-button-container"
                              )}
                            >
                              {cardButtons.map((button: INPUTS.CastedButton, btnIndex: number) => {
                                const buttonTextExist = this.castToString(button.text);
                                const buttonIconValue = button.icon as unknown as TypeMediaInputValue;
                                const buttonIconExist = buttonIconValue && (buttonIconValue.type === "icon" ? buttonIconValue.name : buttonIconValue.url);
                                if (!buttonTextExist && !buttonIconExist) return null;

                                return (
                                  <ComposerLink
                                    key={btnIndex}
                                    path={button.url || "#"}
                                  >
                                    <Base.Button
                                      buttonType={button.type}
                                      className={this.decorateCSS("column-button")}
                                    >
                                      <div className={this.decorateCSS("pulse-wrapper")}>
                                        {buttonIconExist && (
                                          <Base.Media
                                            value={buttonIconValue}
                                            className={this.decorateCSS(
                                              "button-icon"
                                            )}
                                          />
                                        )}
                                        {buttonTextExist && (
                                          <Base.P
                                            className={this.decorateCSS(
                                              "button-text"
                                            )}
                                          >
                                            {(() => {
                                              const slashIdx = buttonTextExist.indexOf("/");
                                              if (slashIdx !== -1) {
                                                const main = buttonTextExist.substring(0, slashIdx).trim();
                                                const suffix = buttonTextExist.substring(slashIdx).trim();
                                                return (
                                                  <>
                                                    {main} <span className={this.decorateCSS("button-suffix")}>{suffix}</span>
                                                  </>
                                                );
                                              }
                                              return buttonTextExist;
                                            })()}
                                          </Base.P>
                                        )}
                                      </div>
                                    </Base.Button>
                                  </ComposerLink>
                                );
                              })}
                            </div>
                          )}
                        </Base.VerticalContent>
                      );
                    }
                    )}
                </ComposerSlider>
              </div>
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default PricingTable9;
