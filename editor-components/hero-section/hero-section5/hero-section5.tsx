import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseHeroSection } from "../../EditorComponent";
import styles from "./hero-section5.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Heading = {
  titleColored: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  buttonText: React.JSX.Element;
  link: string;
  overlay: boolean;
  backgroundImage: string;
};

class HeroSection5 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "object",
      key: "heading",
      displayer: "Heading",
      value: [
        {
          type: "string",
          key: "titleColored",
          displayer: "Subtitle",
          value: "Motivation",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "THE ART OF FOOD",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "PHOTOGRAPHY",
        },

        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: true,
        },
        {
          type: "image",
          key: "backgroundImage",
          displayer: "Background Image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a765ee2f8a5b002ce6d6a7?alt=media",
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "View More", "", null, null, "Primary")
      ],
    });
  }

  static getName(): string {
    return "Hero Section 5";
  }

  render() {
    const heading = this.castToObject<Heading>("heading");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const isTitleExist = this.castToString(heading.title);
    const description = this.castToString(heading.description);
    const isTitleColoredExist = this.castToString(heading.titleColored);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div
            className={`${this.decorateCSS("background-layer")} ${heading.backgroundImage && this.decorateCSS("with-image")
              }`}
            style={{
              backgroundImage: `url(${heading.backgroundImage})`,
            }}
          >
            <div className={`${this.decorateCSS("overlay")} ${!heading.overlay && this.decorateCSS("no")}`}>
              <div className={this.decorateCSS("heading-page")}>
                {isTitleColoredExist && (
                  <Base.H1 className={this.decorateCSS("sub-title")}>
                    {heading.titleColored}
                  </Base.H1>
                )}
                {isTitleExist && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {heading.title}
                  </Base.SectionTitle>
                )}
                {description && (
                  <Base.SectionDescription className={this.decorateCSS("description")}>
                    {heading.description}
                  </Base.SectionDescription>
                )}
                <div className={this.decorateCSS("button-container")}>
                  {buttons.map((item: INPUTS.CastedButton, index: number) => {
                    if (this.castToString(item.text))
                      return (
                        <ComposerLink key={index} path={item.url}>
                          <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                            {item.text}
                          </Base.Button>
                        </ComposerLink>
                      );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default HeroSection5;

