import * as React from "react";
import styles from "./download10.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseDownload, TypeUsableComponentProps } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";

import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Download10 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "badge",
      displayer: "Subtitle",
      value: "MEET THE APP",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Start with lucky,Grow your business",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "To grow a business, it's important to establish clear goals, identify and target the right audience, continually innovate and adapt to changing market trends, and build strong relationships with customers and stakeholders. ",
    });

    this.addProp({
      type: "string",
      key: "text1",
      displayer: "Review Title",
      value: "Trustes by 2M+ customers",
    });

    this.addProp({
      type: "string",
      key: "text2",
      displayer: "Review Score",
      value: "4.3/5 (55k Reviews)",
    });

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67438ea6506a40002c2dca7f?alt=media&timestamp=1732480731550",
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Download", "", "FaApple", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67586eb80655f8002ca57e58?alt=media", "Primary"),
      ]
    })

    this.addProp({
      type: "array",
      key: "icons",
      displayer: "Icon",
      value: [
        {
          type: "object",
          key: "icon",
          displayer: "Icon",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "BsFillStarFill",
            },
          ],
        },
        {
          type: "object",
          key: "icon",
          displayer: "Icon",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "BsFillStarFill",
            },
          ],
        },
        {
          type: "object",
          key: "icon",
          displayer: "Icon",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "BsFillStarFill",
            },
          ],
        },
        {
          type: "object",
          key: "icon",
          displayer: "Icon",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "BsFillStarFill",
            },
          ],
        },
        {
          type: "object",
          key: "icon",
          displayer: "Icon",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "BsFillStarFill",
            },
          ],
        },
      ],
    });
  }

  static getName(): string {
    return "Download 10";
  }

  render() {
    const subtitle = this.getPropValue("badge");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    const subtitleExist = this.castToString(subtitle);
    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);

    const reviewTitle = this.castToString(this.getPropValue("text1"));
    const reviewScore = this.castToString(this.getPropValue("text2"));

    const icons = this.castToObject<any>("icons");
    const image = this.getPropValue("image");

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    const alignmentValue = Base.getContentAlignment();

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            <div
              className={`${this.decorateCSS("left-container")} 
            ${(image && alignmentValue === "center") && this.decorateCSS("center")} 
            ${!image && this.decorateCSS("no-image")}`}
            >
              <Base.VerticalContent>
                {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("badge")}</Base.SectionSubTitle>}
                {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
                {buttons.length > 0 && (
                  <Base.Row className={this.decorateCSS("button-group")}>
                    {this.castToObject<INPUTS.CastedButton[]>("buttons").map((item: INPUTS.CastedButton, index: number) => {
                      const buttonTextExist = this.castToString(item.text);
                      return (
                        <ComposerLink key={`dw-10-btn-${index}`} path={item.url}>
                          {item.image ? (
                            <img src={item.image} alt="icon" className={this.decorateCSS("button-image")} />
                          ) : (
                            (buttonTextExist || item.icon) && (
                              <Base.Button buttonType={item.type} className={this.decorateCSS("button-element")}>
                                {item.icon && <Base.Icon name={item.icon} propsIcon={{ className: this.decorateCSS("button-icon") }} />}
                                {buttonTextExist && <div className={this.decorateCSS("button-text")}>{item.text}</div>}
                              </Base.Button>
                            )
                          )}
                        </ComposerLink>
                      );
                    })}
                  </Base.Row>
                )}
              </Base.VerticalContent>
              {(reviewTitle || reviewScore || icons.length > 0) && (
                <Base.VerticalContent className={this.decorateCSS("stats")}>
                  {reviewTitle && <Base.H5 className={this.decorateCSS("stats-title")}>{this.getPropValue("text1")}</Base.H5>}
                  <Base.Row className={this.decorateCSS("down-description")}>
                    <div className={this.decorateCSS("stars")}>{icons.map((icon: any, index: number) => icon.icon && <Base.Icon name={icon.icon} propsIcon={{ className: this.decorateCSS("icon") }} />)}</div>
                    {reviewScore && <Base.P className={this.decorateCSS("info")}>{this.getPropValue("text2")}</Base.P>}
                  </Base.Row>
                </Base.VerticalContent>
              )}
            </div>
            {image && (
              <div className={this.decorateCSS("right-container")}>
                <img className={this.decorateCSS("right-image")} src={this.getPropValue("image")} alt="" />
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container >
    );
  }
}

export default Download10;
