import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header6.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Button } from "../../contacts/form2/form2";

interface TitleItem {
  title: JSX.Element;
  titleAnimation: boolean;
}
interface Title2Item {
  title2: JSX.Element;
  title2Animation: boolean;
}
interface DescriptionItem {
  description: JSX.Element;
  descriptionAnimation: boolean;
}
interface Image2Item {
  image2: string;
  image2Animation: boolean;
}
interface ButtonItem {
  buttonText: JSX.Element;
  url: string;
  buttonAnimation: boolean;
}

class Header6 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "object",
      key: "titleItem",
      displayer: "Title Item",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Envision",
        },
        {
          type: "boolean",
          key: "titleAnimation",
          displayer: "Title Animation",
          value: true,
        }
      ]
    })
    this.addProp({
      type: "object",
      key: "title2Item",
      displayer: "Title2 Item",
      value: [
        {
          type: "string",
          key: "title2",
          displayer: "Title2",
          value: "Brand 2020",
        },
        {
          type: "boolean",
          key: "title2Animation",
          displayer: "Title Animation",
          value: true,
        }
      ]
    })
    this.addProp({
      type: "object",
      key: "descriptionItem",
      displayer: "Description Item",
      value: [
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "Carefully crafted with unique layouts you can easily create websites.",
        },
        {
          type: "boolean",
          key: "descriptionAnimation",
          displayer: "Description Animation",
          value: true,
        }
      ]
    })
    this.addProp({
      type: "image",
      key: "image1",
      displayer: " Background Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617f52bd2970002c624523?alt=media&timestamp=1719483639150",
    });

    this.addProp({
      type: "object",
      key: "image2Item",
      displayer: "Image2 Item",
      value: [
        {
          type: "image",
          key: "image2",
          displayer: "Image2",
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617f52bd2970002c624524?alt=media&timestamp=1719483639150",
        },
        {
          type: "boolean",
          key: "image2Animation",
          displayer: "Image2 Animation",
          value: true,
        }
      ]
    })

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      additionalParams: {
        maxElementCount: 2,
      },
      value: [
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Explore",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "boolean",
              key: "buttonAnimation",
              displayer: "Button Animation",
              value: true,
            }
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Header 6";
  }
  render() {
    const title = this.castToObject<TitleItem>("titleItem");
    const title2 = this.castToObject<Title2Item>("title2Item");
    const description = this.castToObject<DescriptionItem>("descriptionItem");
    const image2 = this.castToObject<Image2Item>("image2Item");

    const showLeftContent =
      this.castToString(title.title) ||
      this.castToString(title2.title2) ||
      this.castToString(description.description) ||
      (this.getPropValue("buttons") && this.getPropValue("buttons").length > 0);

    const showRightContent =
      this.getPropValue("image1") || image2.image2;

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <section className={this.decorateCSS("child-container")}>
            {showLeftContent ? (
              <div className={this.decorateCSS("left-content")}>
                {(this.castToString(title.title) || this.castToString(title2.title2)) && (
                  <div className={this.decorateCSS("title-container")}>
                    {this.castToString(title.title) && (
                      <h2 className={title.titleAnimation ? this.decorateCSS("title") : this.decorateCSS("title-noanimation")}>
                        {this.castToString(title.title)}
                      </h2>
                    )}
                    {this.castToString(title2.title2) && (
                      <h3 className={title2.title2Animation ? this.decorateCSS("title2") : this.decorateCSS("title2-noanimation")}>
                        {this.castToString(title2.title2)}
                      </h3>
                    )}
                  </div>
                )}
                {this.castToString(description.description) && (
                  <p className={description.descriptionAnimation ? this.decorateCSS("description") : this.decorateCSS("description-noanimation")}>
                    {this.castToString(description.description)}
                  </p>
                )}
                {this.getPropValue("buttons").length > 0 && (
                  <div className={this.decorateCSS("buttondiv")}>
                    {this.castToObject<ButtonItem[]>("buttons").map(
                      (item: any, indexButtons: number) => {
                        const buttonText = this.castToString(item.buttonText);
                        return buttonText ? (
                          <ComposerLink
                            key={indexButtons}
                            path={item.url}
                          >
                            <button className={item.buttonAnimation ? this.decorateCSS("button") : this.decorateCSS("button-noanimation")}>
                              {buttonText}
                            </button>
                          </ComposerLink>
                        ) : null;
                      }
                    )}
                  </div>
                )}
              </div>
            ) : null}

            {showRightContent ? (
              <div className={this.decorateCSS("right-content")}>
                {this.getPropValue("image1") && (
                  <img
                    src={this.getPropValue("image1")}
                    alt=""
                    className={this.decorateCSS("image1")}
                  />
                )}
                {image2.image2 && (
                  <img
                    src={image2.image2}
                    alt=""
                    className={this.getPropValue("image1") ? (image2.image2Animation ? this.decorateCSS("image2") : this.decorateCSS("image2-noanimation"))
                      : (image2.image2Animation ? this.decorateCSS("image2-without-image1") : this.decorateCSS("image2-noanimation"))}
                  />
                )}
              </div>
            ) : null}
          </section>
        </div>
      </div>
    );
  }
}

export default Header6;
