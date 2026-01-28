import * as React from "react";
import styles from "./download6.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseDownload } from "../../EditorComponent";

import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";



class Download6 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Create amazing posts and share with the world.",
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Let's start now!",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Download Now", "", "", "", "Primary"),
      ],
    });

    this.addProp({
      type: "media",
      key: "image",
      displayer: "Media",
      additionalParams: {
        availableTypes: ["image", "video"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66bdb43307399d002cb4160b?alt=media",
      },
    });
  }

  static getName(): string {
    return "Download 6";
  }

  render() {
    const title = this.getPropValue("title");
    const subtitle = this.getPropValue("subtitle");
    const description = this.getPropValue("description");
    const image = this.getPropValue("image");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const isLeftColumnVisible = this.castToString(title) || this.castToString(description) || this.castToString(subtitle) || buttons?.length > 0;
    const isRightColumnVisible = image;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {isLeftColumnVisible && (
            <Base.VerticalContent className={`${this.decorateCSS("left-column")} ${image && this.decorateCSS("has-image")}`} >
              {this.castToString(subtitle) && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>}
              {this.castToString(title) && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
              {this.castToString(description) && <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>}

              {buttons?.length > 0 && (
                <Base.Row className={this.decorateCSS("buttons-container")}>
                  {buttons.map((item: INPUTS.CastedButton, index: number) => {
                    const buttonTextExist = this.castToString(item?.text);
                    const iconExist = item.icon && item.icon.name;
                    const imageExist = item.image && item.image.url;
                    const buttonExist = buttonTextExist || iconExist || imageExist;
                    return buttonExist && (
                      <ComposerLink key={index} path={item.url}>
                        {imageExist ? (
                          <Base.Media value={item.image} className={this.decorateCSS("button-image")} />
                        ) : (
                          <Base.Button buttonType={item.type} className={this.decorateCSS("button-element")}>
                            {iconExist && (
                              <Base.Media
                                value={item.icon}
                                className={this.decorateCSS("icon")}
                              />
                            )}
                            {buttonTextExist && <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>}
                          </Base.Button>
                        )}
                      </ComposerLink>
                    );
                  })}
                </Base.Row>
              )}
            </Base.VerticalContent>
          )}

          {isRightColumnVisible && (
            <div className={this.decorateCSS("right-column")}>
              <Base.Media value={image} className={this.decorateCSS("image")} />
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Download6;
