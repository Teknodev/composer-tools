import * as React from "react";
import { BasePricingTable } from "../../EditorComponent";
import styles from "./pricing-table9.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class PricingTable9 extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);

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
                      key: "navigateTo",
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
                      key: "link",
                      displayer: "Link",
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
                      key: "link",
                      displayer: "Link",
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
                      key: "link",
                      displayer: "Link",
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
                      key: "link",
                      displayer: "Link",
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
                INPUTS.BUTTON(
                  "buttonType",
                  "Button",
                  "50$/ month",
                  "",
                  "",
                  null,
                  "Primary"
                ),
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
                      key: "link",
                      displayer: "Link",
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
                      key: "link",
                      displayer: "Link",
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
                      key: "link",
                      displayer: "Link",
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
                      key: "link",
                      displayer: "Link",
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
                      key: "link",
                      displayer: "Link",
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
                INPUTS.BUTTON(
                  "buttonType",
                  "Button",
                  "75$/ month",
                  "",
                  "",
                  null,
                  "Primary"
                ),
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
              value: "STANDART",
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
                      key: "link",
                      displayer: "Link",
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
                      key: "link",
                      displayer: "Link",
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
                      key: "link",
                      displayer: "Link",
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
                      key: "link",
                      displayer: "Link",
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
                      key: "link",
                      displayer: "Link",
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
                INPUTS.BUTTON(
                  "buttonType",
                  "Button",
                  "100$/ month",
                  "",
                  "",
                  null,
                  "Primary"
                ),
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
                      key: "link",
                      displayer: "Link",
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
                      key: "link",
                      displayer: "Link",
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
                      key: "link",
                      displayer: "Link",
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
                      key: "link",
                      displayer: "Link",
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
                      key: "link",
                      displayer: "Link",
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
                INPUTS.BUTTON(
                  "buttonType",
                  "Button",
                  "1000$/ month",
                  "",
                  "",
                  null,
                  "Primary"
                ),
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

  private hasMediaContent(media?: any): boolean {
    if (!media) return false;
    return !!((media as any).name || (media as any).url || (media as any).src);
  }

  private hasButtonContent(button: INPUTS.CastedButton): boolean {
    const textExist = this.castToString(button.text);
    const iconExist = this.hasMediaContent(button.icon);
    return !!(textExist || iconExist);
  }

  private hasAnyButtonContent(buttons: INPUTS.CastedButton[]): boolean {
    return buttons.some((btn) => this.hasButtonContent(btn));
  }

  private hasAnyColumnTitle(): boolean {
    const columns = this.castToObject<any[]>("columns");
    return columns.some((column: any) => this.castToString(column?.title));
  }

  render() {
    const settings = {
      arrows: false,
      dots: true,
      dotsClass: this.decorateCSS("dots"),
      infinite: true,
      speed: 2000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
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

    const title = this.getPropValue("title");
    const subtitle = this.getPropValue("subtitle");
    const description = this.getPropValue("description");

    const titleExist = this.castToString(title);
    const subtitleExist = this.castToString(subtitle);
    const descriptionExist = this.castToString(description);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(titleExist || subtitleExist || descriptionExist) && (
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {subtitleExist && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {subtitle}
                </Base.SectionSubTitle>
              )}

              {titleExist && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {title}
                </Base.SectionTitle>
              )}
              {descriptionExist && (
                <Base.SectionDescription
                  className={this.decorateCSS("description")}
                >
                  {description}
                </Base.SectionDescription>
              )}
            </Base.VerticalContent>
          )}
          <div className={this.decorateCSS("container")}>
            <div className={this.decorateCSS("columns-container")}>
              {this.castToObject<string[]>("columns").map(
                (column: any, index: any) => {
                  const buttons = column?.buttons || [];
                  const hasButtonsWithContent =
                    buttons.length > 0 && this.hasAnyButtonContent(buttons);
                  const columnTitleExist = this.castToString(column?.title);
                  return (
                    <div
                      key={`column-${index}`}
                      className={`${this.decorateCSS("column-item")}
                   ${index !== 0 && this.getPropValue("animations") &&
                        this.getPropValue("animations")
                          .map((animation: string) => this.decorateCSS(animation))
                          .join(" ")
                        } `}
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
                          (content: any, contentIndex: any) => {
                            const firstColumnContent = this.castToObject<any[]>("columns")[0]?.contents?.[contentIndex];

                            if (!firstColumnContent) return null;

                            const iconExist = this.hasMediaContent(
                              content.icon
                            );
                            const textExist = this.castToString(content.text);

                            return (
                              <div
                                key={`content-${contentIndex}`}
                                className={this.decorateCSS("content-item")}
                              >
                                {iconExist && (
                                  <Base.Media
                                    value={content.icon}
                                    className={this.decorateCSS("content-icon")}
                                  />
                                )}
                                {textExist && (
                                  <Base.P
                                    className={this.decorateCSS("content-text")}
                                  >
                                    {content?.text}
                                  </Base.P>
                                )}
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
                          {buttons.map((button: any, btnIndex: number) => {
                            if (!this.hasButtonContent(button)) return null;

                            const buttonTextExist = this.castToString(
                              button.text
                            );
                            const buttonIconExist = this.hasMediaContent(
                              button.icon
                            );

                            return (
                              <Base.Button
                                buttonType={button.type}
                                className={this.decorateCSS("column-button")}
                              >
                                <div className={this.decorateCSS("pulse-wrapper")}>
                                  <ComposerLink
                                    path={button.url || "#"}
                                    key={btnIndex}
                                  >
                                    {buttonIconExist && (
                                      <Base.Media
                                        value={button.icon}
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
                                        {button.text}
                                      </Base.P>
                                    )}
                                  </ComposerLink>
                                </div>
                              </Base.Button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }
              )}
            </div>
          </div>

          <div className={this.decorateCSS("slider")}>
            <div className={this.decorateCSS("slider-container")}>
              <ComposerSlider {...settings}>
                {this.castToObject<string[]>("columns").map(
                  (column: any, index: any) => {
                    const buttons = column?.buttons || [];
                    const hasButtonsWithContent =
                      buttons.length > 0 && this.hasAnyButtonContent(buttons);
                    const columnTitleExist = this.castToString(column?.title);
                    return (
                      <div
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
                            (content: any, contentIndex: any) => {
                              const firstColumnContent = this.castToObject<any[]>("columns")[0]?.contents?.[contentIndex];

                              if (!firstColumnContent) return null;

                              const iconExist = this.hasMediaContent(
                                content.icon
                              );
                              const textExist = this.castToString(content.text);

                              return (
                                <div
                                  key={`content-${contentIndex}`}
                                  className={this.decorateCSS("content-item")}
                                >
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
                                        "button-text"
                                      )}
                                    >
                                      {content?.text}
                                    </Base.P>
                                  )}
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
                            {buttons.map((button: any, btnIndex: number) => {
                              if (!this.hasButtonContent(button)) return null;

                              const buttonTextExist = this.castToString(
                                button.text
                              );
                              const buttonIconExist = this.hasMediaContent(
                                button.icon
                              );

                              return (
                                <ComposerLink
                                  path={button.url || "#"}
                                  key={btnIndex}
                                >
                                  <Base.Button
                                    buttonType={button.type}
                                    className={this.decorateCSS("column-button")}
                                  >
                                    <div className={this.decorateCSS("pulse-wrapper")}>
                                      {buttonIconExist && (
                                        <Base.Media
                                          value={button.icon}
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
                                          {button.text}
                                        </Base.P>
                                      )}
                                    </div>
                                  </Base.Button>
                                </ComposerLink>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  }
                )}
              </ComposerSlider>
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default PricingTable9;
