import * as React from "react";
import styles from "./download10.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseDownload, TypeUsableComponentProps } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

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
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c36590655f8002ca6e273?alt=media&timestamp=1734096494240",
    });

    let button: TypeUsableComponentProps = {
      type: "object",
      key: "button",
      displayer: "Displayer",
      value: [
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: "Download",
        },
        {
          type: "icon",
          key: "icon",
          displayer: "Icon",
          value: "FaApple",
        },

        {
          type: "page",
          key: "url",
          displayer: "Button Link",
          value: "",
        },
        {
          type: "image",
          key: "buttonImage",
          displayer: "Button Image",
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c36880655f8002ca6e2aa?alt=media&timestamp=1734096538396",
        },
      ],
    };

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [JSON.parse(JSON.stringify(button))],
    });

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

  getName(): string {
    return "Download-10";
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

    const buttons = this.castToObject<any[]>("buttons");

    const alignmentValue = Base.getContentAlignment();

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            <div
              className={
                image ? (alignmentValue === "left" ? this.decorateCSS("left-container") : alignmentValue === "center" ? this.decorateCSS("left-container-center") : this.decorateCSS("left-container-no-image")) : this.decorateCSS("left-container-no-image")
              }
            >
              <Base.VerticalContent>
                {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("badge")}</Base.SectionSubTitle>}
                {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
                {buttons.length > 0 && (
                  <div className={this.decorateCSS("button-group")}>
                    {this.castToObject<any[]>("buttons").map((item: any, index: number) => {
                      const buttonTextExist = this.castToString(item.buttonText);
                      return (
                        <ComposerLink key={`dw-10-btn-${index}`} path={item.url}>
                          {item.buttonImage ? (
                            <img src={item.buttonImage} alt="icon" className={this.decorateCSS("button-image")} />
                          ) : (
                            (buttonTextExist || item.icon) && (
                              <Base.Button className={this.decorateCSS("button-element")}>
                                {item.icon && <ComposerIcon name={item.icon} propsIcon={{ className: this.decorateCSS("button-icon") }} />}
                                {buttonTextExist && <Base.P className={this.decorateCSS("button-text")}>{item.buttonText}</Base.P>}
                              </Base.Button>
                            )
                          )}
                        </ComposerLink>
                      );
                    })}
                  </div>
                )}
              </Base.VerticalContent>
              {(reviewTitle || reviewScore || icons.length > 0) && (
                <div className={this.decorateCSS("stats")}>
                  {reviewTitle && <Base.H5 className={this.decorateCSS("stats-title")}>{this.getPropValue("text1")}</Base.H5>}
                  <div className={this.decorateCSS("down-description")}>
                    <div className={this.decorateCSS("stars")}>{icons.map((icon: any, index: number) => icon.icon && <ComposerIcon name={icon.icon} propsIcon={{ className: this.decorateCSS("icon") }} />)}</div>
                    {reviewScore && <Base.P className={this.decorateCSS("info")}>{this.getPropValue("text2")}</Base.P>}
                  </div>
                </div>
              )}
            </div>
            {image && (
              <div className={this.decorateCSS("right-container")}>
                <img className={this.decorateCSS("right-image")} src={this.getPropValue("image")} alt="" />
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Download10;
