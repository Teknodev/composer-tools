import * as React from "react";
import styles from "./faq6.module.scss";
import { BaseFAQ, TypeMediaInputValue } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

class Faq6 extends BaseFAQ {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: ""
    })

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: ""
    })
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    })
    this.addProp({
      type: "string",
      key: "imageText",
      displayer: "Media Text",
      value: "FAQ"
    })
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
      ],
    })
    this.addProp({
      type: "array",
      displayer: "List Items",
      key: "list_items",
      value: [
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "string",
              key: "question",
              displayer: "Question",
              value: "Ut Neque Augue Interdum Ad Integer Tempus Convallis?"
            },
            {
              type: "string",
              key: "answer",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum tempus egestas sed. Diam in arcu cursus euismod.",
              displayer: "Answer"
            }
          ]
        },
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "string",
              key: "question",
              displayer: "Question",
              value: "Dictum Feugiat Tincidunt Nam Commodo?"
            },
            {
              type: "string",
              key: "answer",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum tempus egestas sed. Diam in arcu cursus euismod.",
              displayer: "Answer"
            }
          ]
        },
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "string",
              key: "question",
              displayer: "Question",
              value: "Scelerisque Metus Sem Nostra Pulvinar Sagittis?"
            },
            {
              type: "string",
              key: "answer",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum tempus egestas sed. Diam in arcu cursus euismod.",
              displayer: "Answer"
            }
          ]
        },
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "string",
              key: "question",
              displayer: "Question",
              value: "Consectetur Scelerisque Lacus Gravida Proin Dolor Sem?"
            },
            {
              type: "string",
              key: "answer",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum tempus egestas sed. Diam in arcu cursus euismod.",
              displayer: "Answer"
            }
          ]
        }
      ]
    })

    this.addProp({
      type: "media",
      displayer: "Active Icon",
      key: "active_icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "FaPlus",
      },
    })

    this.addProp({
      type: "media",
      displayer: "Inactive Icon",
      key: "inactive_icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "FaMinus",
      },
    })

    this.addProp({
      type: "boolean",
      key: "line",
      displayer: "Line",
      value: true,
    })

    this.addProp({
      type: "object",
      key: "media",
      displayer: "Media",
      value: [
        {
          type: "media",
          key: "value",
          displayer: "Media",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661cd34bd2970002c62977c?alt=media&timestamp=1719584962578",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
        },
      ],
    })

    this.setComponentState("active_index", 0);


  }
  static getName(): string {
    return "FAQ 6";
  }

  onItemClick(index: number) {
    const active_index = this.getComponentState("active_index");

    if (active_index == index) {
      this.setComponentState("active_index", -1);
    } else {
      this.setComponentState("active_index", index)
    }
  }

  render() {
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const hasButtons = this.castToObject<INPUTS.CastedButton[]>("buttons").some((button) => this.castToString(button.text));
    const hasContent = subtitle || title || description || hasButtons;
    const lineEnabled = this.getPropValue("line");

    const mediaSection = this.castToObject<{ value?: TypeMediaInputValue; overlay?: boolean }>("media");
    const mediaValue = mediaSection?.value as TypeMediaInputValue | undefined;
    const showOverlay = !!(mediaSection?.overlay);

    const alignment = Base.getContentAlignment();

    const renderVerticalContent = () => {
      if (!hasContent) return null;
      return (
        <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
          {subtitle && (
            <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
              {this.getPropValue("subtitle")}
            </Base.SectionSubTitle>
          )}
          {title && (
            <Base.SectionTitle className={this.decorateCSS("title")}>
              {this.getPropValue("title")}
            </Base.SectionTitle>
          )}
          {description && (
            <Base.SectionDescription className={this.decorateCSS("description")}>
              {this.getPropValue("description")}
            </Base.SectionDescription>
          )}
          {hasButtons && (
            <div className={this.decorateCSS("buttons-wrapper")}>
              {this.castToObject<INPUTS.CastedButton[]>("buttons").map((button: INPUTS.CastedButton) =>
                this.castToString(button.text) && (
                  <ComposerLink path={button.url}>
                    <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                      <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                    </Base.Button>
                  </ComposerLink>
                )
              )}
            </div>
          )}
        </Base.VerticalContent>
      );
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {renderVerticalContent()}
          {(this.getPropValue("list_items").length > 0 || mediaValue) && (
            <div className={this.decorateCSS("content-grid")}>
              {(this.getPropValue("list_items").length > 0) && (
                <div className={this.decorateCSS("items-wrapper")}>
                  <div className={`${this.decorateCSS("items")}${!lineEnabled ? ` ${this.decorateCSS("no-line")}` : ""}`}>
                    {this.getPropValue("list_items").map((item: any, index: number) => {
                      const is_active = this.getComponentState("active_index") == index;

                      return <div key={index} className={this.decorateCSS("item")} onClick={() => this.onItemClick(index)}>
                        {(this.castToString(item.getPropValue("question")) || this.getPropValue("inactive_icon") || this.getPropValue("active_icon")) && (
                          <div className={this.decorateCSS("question-box")}>
                            {this.castToString(item.getPropValue("question")) && (
                              <Base.H6 className={this.decorateCSS("question-text")}>{item.getPropValue("question")}</Base.H6>
                            )}
                            {(this.getPropValue("inactive_icon") || this.getPropValue("active_icon")) && (
                              <Base.Media
                                value={is_active ? this.getPropValue("inactive_icon") : this.getPropValue("active_icon")}
                                className={`${this.decorateCSS("icon")} ${is_active ? this.decorateCSS("active") : ""}`}
                              />
                            )}
                          </div>
                        )}
                        {this.castToString(item.getPropValue("answer")) && (
                          <div
                            className={`${this.decorateCSS("answer-box")} ${is_active ? this.decorateCSS("active") : ""}`}
                          >
                            <div className={this.decorateCSS("answer-inner")}>
                              <Base.P className={this.decorateCSS("answer-text")}>{item.getPropValue("answer")}</Base.P>
                            </div>
                          </div>
                        )}
                      </div>
                    })}
                  </div>
                </div>
              )}
              {mediaValue && (
                <div className={this.decorateCSS("image-box")}>
                  <Base.Media value={mediaValue} className={this.decorateCSS("image")} />
                  {showOverlay && <div className={this.decorateCSS("overlay")} />}
                  {this.castToString(this.getPropValue("imageText")) && (
                    <div className={this.decorateCSS("image-text-overlay")}>
                      <h1 className={this.decorateCSS("image-text")}>
                        {this.getPropValue("imageText")}
                      </h1>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Faq6;
