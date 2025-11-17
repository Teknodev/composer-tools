import * as React from "react";
import { BaseHeroSection } from "../../EditorComponent";
import styles from "./hero-section6.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

interface TitleItem {
  title: React.JSX.Element;
  titleAnimation: boolean;
}
interface Title2Item {
  title2: React.JSX.Element;
  title2Animation: boolean;
}
interface DescriptionItem {
  description: React.JSX.Element;
  descriptionAnimation: boolean;
}
interface Image2Item {
  image2: string;
  image2Animation: boolean;
}
interface ButtonItem {
  buttonText: React.JSX.Element;
  url: string;
  buttonAnimation: boolean;
}

class HeroSection6 extends BaseHeroSection {
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
        },
      ],
    });
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
        },
      ],
    });
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
        },
      ],
    });
    this.addProp({
      type: "image",
      key: "image1",
      displayer: "Background Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617f52bd2970002c624523?alt=media&timestamp=1719483639150",
    });

    this.addProp({
      type: "object",
      key: "image2Item",
      displayer: "Image Item",
      value: [
        {
          type: "image",
          key: "image2",
          displayer: "Image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617f52bd2970002c624524?alt=media&timestamp=1719483639150",
        },
        {
          type: "boolean",
          key: "image2Animation",
          displayer: "Image Animation",
          value: true,
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      additionalParams: {
        maxElementCount: 2,
      },
      value: [
        INPUTS.BUTTON("button", "Button", "Explore", "", null, null, "Primary")
      ],
    });

    this.addProp({
      type: "boolean",
      key: "buttonAnimation",
      displayer: "Button Animation",
      value: true,
    },)
  }

  static getName(): string {
    return "Hero Section 6";
  }
  render() {
    const title = this.castToObject<TitleItem>("titleItem");
    const title2 = this.castToObject<Title2Item>("title2Item");
    const description = this.castToObject<DescriptionItem>("descriptionItem");
    const image2 = this.castToObject<Image2Item>("image2Item");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    const showLeftContent =
      this.castToString(title.title) ||
      this.castToString(title2.title2) ||
      this.castToString(description.description) ||
      buttons.length > 0

    const showRightContent = this.getPropValue("image1") || image2.image2;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <section className={this.decorateCSS("child-container")}>
            {showLeftContent ? (
              <div className={this.decorateCSS("left-content")}>
                {(this.castToString(title.title) || this.castToString(title2.title2)) && (
                  <div className={this.decorateCSS("title-container")}>
                    {this.castToString(title.title) && (
                      <h2 className={`${this.decorateCSS("title")} ${!title.titleAnimation && this.decorateCSS("noanimation")}`}>
                        {title.title}
                      </h2>
                    )}
                    {this.castToString(title2.title2) && (
                      <h3 className={`${this.decorateCSS("title2")} ${!title2.title2Animation && this.decorateCSS("noanimation")}`}>
                        {title2.title2}
                      </h3>
                    )}
                  </div>
                )}
                {this.castToString(description.description) && (
                  <p className={`${this.decorateCSS("description")} ${!description.descriptionAnimation && this.decorateCSS("noanimation")}`}>
                    {description.description}
                  </p>
                )}
                {this.getPropValue("buttons").length > 0 && (
                  <div className={this.decorateCSS("buttondiv")}>
                    {buttons.map((item: INPUTS.CastedButton, indexButtons: number) => (
                      <ComposerLink path={item.url} key={indexButtons}>
                        <Base.Button buttonType={item.type}
                          className={`${this.decorateCSS("button")} ${!this.getPropValue("buttonAnimation") && this.decorateCSS("noanimation")}`}
                        >
                          {item.text}
                        </Base.Button>
                      </ComposerLink>
                    ))

                    }
                  </div>
                )}
              </div>
            ) : null}

            {showRightContent ? (
              <div className={this.decorateCSS("right-content")}>
                {this.getPropValue("image1") && (
                  <img
                    src={this.getPropValue("image1")}
                    alt={this.getPropValue("image1")}
                    className={this.decorateCSS("image1")}
                  />
                )}
                {image2.image2 && (
                  <img
                    src={image2.image2}
                    alt={image2.image2}
                    className={`${this.decorateCSS("image2")} 
                    ${(!image2.image2Animation) && this.decorateCSS("noanimation")}
                    ${(!this.getPropValue("image1")) && this.decorateCSS("without-image1")}`}
                  />
                )}
              </div>
            ) : null}
          </section>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default HeroSection6;

