import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header5.module.scss";

type Heading = {
  titleColored: JSX.Element;
  title: JSX.Element;
  description: JSX.Element;
  buttonText: JSX.Element;
  link: string;
  overlay: boolean;
  backgroundImage: string;
};
type Button = {
  buttonText: JSX.Element;
  url: string;
};

class Header5 extends BaseHeader {
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
        {
          type: "object",
          key: "button",
          displayer: "Displayer",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "View More",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Header 5";
  }

  render() {
    const heading = this.castToObject<Heading>("heading");
    const buttons = this.castToObject<Button[]>("buttons");
    const isTitleExist = this.castToString(heading.title);
    const description = this.castToString(heading.description);
    const isTitleColoredExist = this.castToString(heading.titleColored);

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div
            className={this.decorateCSS("background-layer")}
            style={{
              backgroundImage: `url(${heading.backgroundImage})`,
            }}
          >
            <div className={heading.overlay && this.decorateCSS("overlay")}>
              <div className={this.decorateCSS("heading-page")}>
                {isTitleColoredExist && (
                  <h1 className={this.decorateCSS("heading-section-name")}>
                    {heading.titleColored}
                  </h1>
                )}
                {isTitleExist && (
                  <h2 className={this.decorateCSS("heading-title")}>
                    {heading.title}
                  </h2>
                )}
                {description && (
                  <h3 className={this.decorateCSS("heading-subtitle")}>
                    {heading.description}
                  </h3>
                )}
                <div className={this.decorateCSS("buttondiv")}>
                  {buttons.map((item: Button, index: number) => {
                    if (this.castToString(item.buttonText))
                      return (
                        <ComposerLink key={index} path={item.url}>
                          <button className={`${this.decorateCSS("button")}`}>
                            {item.buttonText}
                          </button>
                        </ComposerLink>
                      );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header5;
