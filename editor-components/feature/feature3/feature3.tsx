import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature3.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Logos = {
  image: string;
  url: string;
};

type Cards = {
  title: JSX.Element;
  icon: string;
};


class Feature3 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "The Right Digital Partner For Success"
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Lorem ipsum dolor sit amet consectetur. In nulla nunc arcu velit consectetur massa mauris molestie hac. Hac arcu amet nullam pellentesque. Urna eu suspendisse felis.",
    });

    this.addProp({
      type: "array",
      key: "logos",
      displayer: "Logo Images",
      value: [
        {
          type: "object",
          key: "logo",
          displayer: "Logo",
          value: [
            {
              type: "page",
              key: "link",
              displayer: "Logo Link",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Logo Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667b1ec34fe95d002b35e6dd?alt=media&timestamp=1719344851686",
            },
          ]
        },
        {
          type: "object",
          key: "logo",
          displayer: "Logo",
          value: [
            {
              type: "page",
              key: "link",
              displayer: "Logo Link",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Logo Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667b1ec34fe95d002b35e6da?alt=media&timestamp=1719344851686",
            },
          ]
        },
        {
          type: "object",
          key: "logo",
          displayer: "Logo",
          value: [
            {
              type: "page",
              key: "link",
              displayer: "Logo Link",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Logo Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667b1ec34fe95d002b35e6d9?alt=media&timestamp=1719344851686",
            },
          ]
        },
        {
          type: "object",
          key: "logo",
          displayer: "Logo",
          value: [
            {
              type: "page",
              key: "link",
              displayer: "Logo Link",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Logo Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667b1ec34fe95d002b35e6dc?alt=media&timestamp=1719344851686",
            },
          ]
        },
        {
          type: "object",
          key: "logo",
          displayer: "Logo",
          value: [
            {
              type: "page",
              key: "link",
              displayer: "Logo Link",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Logo Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667b1ec34fe95d002b35e6db?alt=media&timestamp=1719344851686",
            },
          ]
        },
      ]
    });

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Card",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Card Title",
              value: "Search Engine Optimization",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FcSearch",
            },
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Card Title",
              value: "Marketing & Advertisement",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FcStatistics",
            },
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Card Title",
              value: "Reporting & Analysis",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Card Icon",
              value: "FcComboChart",
            },
          ]
        },
      ]
    });
  }

  getName(): string {
    return "Feature 3";
  }

  render() {

    const isTitleExist = this.castToString(this.getPropValue("title"));
    const isDescriptionExist = this.castToString(this.getPropValue("description"));

    const cardList = this.castToObject<Cards[]>("cards");
    const logoList = this.castToObject<Logos[]>("logos");

    return (
      <div
        className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("top-content")}>
              <div className={this.decorateCSS("feature-item")}>
                <div className={this.decorateCSS("feature-circle")}></div>

                {(isTitleExist || isDescriptionExist) &&
                  <div className={this.decorateCSS("feature-contents")}>
                    {isTitleExist &&
                      <h1 className={this.decorateCSS("title")}>
                        {this.getPropValue("title")}
                      </h1>
                    }
                    {isDescriptionExist &&
                      <p className={this.decorateCSS("description")}>
                        {this.getPropValue("description")}
                      </p>
                    }
                  </div>
                }
              </div>

              {cardList.length > 0 &&
                <div className={this.decorateCSS("cards")}>
                  {cardList.map(
                    (card: Cards, index: number) => {

                      const isTitleExist = this.castToString(card.title);

                      if (isTitleExist)
                        return (
                          <div key={index} className={this.decorateCSS("card")}>
                            <ComposerIcon
                              name={card.icon}
                              propsIcon={{
                                className: `${this.decorateCSS("card-icon")}`
                              }}
                            />
                            <h1 className={this.decorateCSS("card-title")}>{card.title}</h1>
                          </div>
                        );
                    }
                  )}
                </div>
              }
            </div>

            {logoList.length > 0 &&
              <div className={this.decorateCSS("bottom-content")}>
                {logoList.map(
                  (logo: Logos, index: number) => {

                    if (logo.image)
                      return (
                        <div key={index} className={this.decorateCSS("logos")}>
                          <img className={this.decorateCSS("logo-image")} src={logo.image} alt="logo image" />
                        </div>
                      );
                  }
                )}
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Feature3;
