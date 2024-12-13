import * as React from "react";
import styles from "./download6.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseDownload } from "../../EditorComponent";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

type LeftCol = {
  title: JSX.Element;
  description: JSX.Element;
};

type Button = {
  button_text: JSX.Element;
  link: string;
  icon: string;
};

type RightCol = {
  image: string;
};

class Download6 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "left-column",
      displayer: "Left Column",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Create amazing posts and share with the world.",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "Packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
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
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "button_text",
              displayer: "Button Text",
              value: "Download Now",
            },
            {
              type: "page",
              key: "link",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "right-column",
      displayer: "Right Column",
      value: [
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c34b90655f8002ca6e138?alt=media&timestamp=1734096076492",
        },
      ],
    });
  }

  getName(): string {
    return "Download-6";
  }

  render() {
    const leftcolumn = this.castToObject<LeftCol>("left-column");
    const rightcolumn = this.castToObject<RightCol>("right-column");
    const buttons = this.castToObject<Button[]>("buttons");

    const isLeftColumnVisible = this.castToString(leftcolumn.title) || this.castToString(leftcolumn.description) || buttons?.length > 0;
    const isRightColumnVisible = rightcolumn.image;

    const alignmentValue = Base.getContentAlignment();

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {isLeftColumnVisible && (
            <Base.VerticalContent className={isRightColumnVisible ? this.decorateCSS("left-column") : this.decorateCSS("left-column-no-image")}>
              {this.castToString(leftcolumn.title) && <Base.SectionTitle className={this.decorateCSS("title")}>{leftcolumn.title}</Base.SectionTitle>}
              {this.castToString(leftcolumn.description) && <Base.SectionDescription className={this.decorateCSS("description")}>{leftcolumn.description}</Base.SectionDescription>}

              {buttons?.length > 0 && (
                <div className={this.decorateCSS("buttons-container")}>
                  {buttons.map((button: Button, index: number) => {
                    const buttonTextExist = this.castToString(button.button_text);
                    const buttonExist = button.icon || buttonTextExist;

                    return (
                      buttonExist && (
                        <div className={this.decorateCSS("button-element")}>
                          <ComposerLink key={index} path={button.link} isFullWidth={false}>
                            <Base.Button className={this.decorateCSS("button")}>{buttonTextExist && <Base.P className={this.decorateCSS("button_text")}>{button.button_text}</Base.P>}</Base.Button>
                          </ComposerLink>
                        </div>
                      )
                    );
                  })}
                </div>
              )}
            </Base.VerticalContent>
          )}

          {isRightColumnVisible && (
            <div className={this.decorateCSS("right-column")}>
              <img className={this.decorateCSS("image")} src={rightcolumn.image} alt={"download"} />
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Download6;
