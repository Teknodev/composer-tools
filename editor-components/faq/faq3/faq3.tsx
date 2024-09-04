import * as React from "react";
import styles from "./faq3.module.scss";
import { BaseFAQ } from "../../EditorComponent";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type Faq = {
  title: JSX.Element;
  description: JSX.Element;
};

type InfoArrayItem = {
  buttonText: JSX.Element;
  buttonLink: string;
  title: JSX.Element;
  description: JSX.Element;
};

class FaqContainerTwo extends BaseFAQ {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "mainTitle",
      displayer: "Title",
      value: "Got Questions? We’ve Got Answers!",
    });

    this.addProp({
      type: "string",
      key: "mainSubtitle",
      displayer: "Subtitle",
      value:
        "Below is a list of frequently asked questions to help you understand how this works.",
    });

    this.addProp({
      type: "array",
      key: "faqItems",
      displayer: "Card",
      value: [
        {
          type: "object",
          key: "faqItem",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "When can we get started?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Tincidunt elit magnis nulla facilisis. Dolor sagittis maecenas. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci.",
            },
          ],
        },
        {
          type: "object",
          key: "faqItem",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "How do I go about conducting market research?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Tincidunt elit magnis nulla facilisis. Dolor sagittis maecenas. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci.",
            },
          ],
        },
        {
          type: "object",
          key: "faqItem",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "What do I need in order to start selling?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Tincidunt elit magnis nulla facilisis. Dolor sagittis maecenas. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci.",
            },
          ],
        },
        {
          type: "object",
          key: "faqItem",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "How much does it cost?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Tincidunt elit magnis nulla facilisis. Dolor sagittis maecenas. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci.",
            },
          ],
        },
        {
          type: "object",
          key: "faqItem",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "What other help is available?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Tincidunt elit magnis nulla facilisis. Dolor sagittis maecenas. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci.",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "icon",
      displayer: "Active Icon",
      key: "active_icon",
      value: "FaPlus",
    });

    this.addProp({
      type: "icon",
      displayer: "Inactive Icon",
      key: "inactive_icon",
      value: "FaMinus",
    });

    this.addProp({
      type: "array",
      key: "infoArray",
      displayer: "INFORMATION",
      value: [
        {
          type: "object",
          key: "info",
          displayer: "Information",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Questions?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Blandit justo vestibulum tincidunt, ipsum id non, volutpat neque pede eget donec.",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "CONTACT US",
            },
            {
              type: "page",
              key: "buttonLink",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "info",
          displayer: "Information",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "About Us",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Etiam nisl cras, arcu dui, wisi aenean non sit quisque nulla, eget aut molestie. Rhoncus sociis, nulla luctus diam montes cubilia.",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "LEARN MORE",
            },
            {
              type: "page",
              key: "buttonLink",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
      ],
    });

    this.state["componentProps"]["selectCardIndex"] = null;
  }

  getName(): string {
    return "FAQ-3";
  }

  lineClicked(index: number) {
    if (this.getComponentState("selectCardIndex") === index) {
      this.setComponentState("selectCardIndex", null);
    } else {
      this.setComponentState("selectCardIndex", index);
    }
  }

  onItemClick(index: number) {
    const active_index = this.getComponentState("active_index");

    if (active_index == index) {
      this.setComponentState("active_index", -1);
    } else {
      this.setComponentState("active_index", index);
    }
  }

  render() {
    const mainTitleExist = this.getPropValue("mainTitle", { as_string: true });
    const mainSubtitleExist = this.getPropValue("mainSubtitle", {
      as_string: true,
    });
    const infoArray = this.castToObject<InfoArrayItem[]>("infoArray");
    const faqItems = this.castToObject<Faq[]>("faqItems");
    return (
      <div className={this.decorateCSS("Main-container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("containerTop")}>
            {(mainTitleExist || mainSubtitleExist) && (
              <div className={this.decorateCSS("header")}>
                {mainTitleExist && (
                  <div className={this.decorateCSS("caption")}>
                    {this.getPropValue("mainTitle")}
                  </div>
                )}

                {mainTitleExist && mainSubtitleExist && <hr className={this.decorateCSS("divider")} />}

                {mainSubtitleExist && (
                  <div className={this.decorateCSS("subtitle")}>
                    {this.getPropValue("mainSubtitle")}
                  </div>
                )}
              </div>
            )}
            <div className={this.decorateCSS("contentContainer")}>
              {faqItems?.length > 0 && (
                <div className={this.decorateCSS("content-left")}>
                  {faqItems.map((item: Faq, index: number) => {
                    const is_active =
                      this.getComponentState("active_index") == index;
                    const titleExist = this.castToString(item.title);
                    const descExist = this.castToString(item.description);

                    if (titleExist || descExist)
                      return (
                        <div
                          key={index}
                          className={this.decorateCSS("card")}
                          onClick={() => this.onItemClick(index)}
                        >
                          {titleExist && (
                            <div className={this.decorateCSS("top-card")}>
                              <span
                                className={this.decorateCSS("card-subtitle")}
                              >
                                {item.title}
                              </span>
                              <ComposerIcon
                                propsIcon={{
                                  className: this.decorateCSS("icon"),
                                }}
                                name={
                                  is_active
                                    ? this.getPropValue("inactive_icon")
                                    : this.getPropValue("active_icon")
                                }
                              />
                            </div>
                          )}
                          {descExist && (
                            <div
                              className={`${this.decorateCSS("text-box")} ${
                                is_active && this.decorateCSS("active")
                              }`}
                            >
                              <p className={this.decorateCSS("card-text")}>
                                {item.description}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                  })}
                </div>
              )}
              {infoArray?.length > 0 && (
                <div className={this.decorateCSS("content-right")}>
                  {infoArray.map((item: InfoArrayItem, index: number) => (
                    <div key={index} className={this.decorateCSS("info-items")}>
                      {this.castToString(item.title) && (
                        <h2 className={this.decorateCSS("title-info")}>
                          {item.title}
                        </h2>
                      )}
                      {this.castToString(item.description) && (
                        <p className={this.decorateCSS("description-info")}>
                          {item.description}
                        </p>
                      )}
                      {this.castToString(item.buttonText) && (
                        <div className={this.decorateCSS("button-info")}>
                          <ComposerLink path={item.buttonLink}>
                            {item.buttonText}
                          </ComposerLink>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FaqContainerTwo;
