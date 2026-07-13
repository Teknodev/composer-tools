import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats14.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type featuresItem = {
  number: React.JSX.Element;
  description: React.JSX.Element;
  title: React.JSX.Element;
};

class Stats14 extends BaseStats {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Super Simple & Quick Way",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "array",
      key: "stats",
      displayer: "Stats",
      value: [
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            { type: "string", key: "number", displayer: "Value", value: "From 20 days" },
            { type: "string", key: "description", displayer: "Description", value: "minimal period" },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            { type: "string", key: "number", displayer: "Value", value: "Up to 7.5%" },
            { type: "string", key: "description", displayer: "Description", value: "yearly income" },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            { type: "string", key: "number", displayer: "Value", value: "From $1,000" },
            { type: "string", key: "description", displayer: "Description", value: "minimal deposit" },
          ],
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "imageCard",
      displayer: "Media",
      value: [
        {
          type: "media",
          key: "image",
          displayer: "Image",
          additionalParams: { availableTypes: ["image", "video"] },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6900d3202d05c1002bf00ca7?alt=media",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Download Free Trial", null, "FaRegCheckCircle", null, "Primary"),
        INPUTS.BUTTON("button", "Button", "Learn More", null, "", null, "White"),
      ],
    });
  }

  static getName(): string {
    return "Stats 14";
  }

  render() {
    const title = this.getPropValue("title");
    const isTitleExist = this.castToString(title);
    const subtitle = this.getPropValue("subtitle");
    const subtitleExist = this.castToString(subtitle);
    const FeaturesItem = this.castToObject<featuresItem[]>("stats");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const imageCard = this.castToObject<any>("imageCard");
    const image = imageCard?.image;
    const overlay = !!imageCard?.overlay;
    const alignment = Base.getContentAlignment();
    const isLeftContainerExist = isTitleExist || FeaturesItem.length > 0 || buttons.length > 0;
    const description = this.getPropValue("description");
    const descriptionExist = this.castToString(description);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div
            className={`${this.decorateCSS("content")} ${
              alignment === "left"
                ? this.decorateCSS("alignment-left")
                : this.decorateCSS("alignment-center")
            }`}
          >
            {isLeftContainerExist && (
              <Base.VerticalContent className={this.decorateCSS("left-container")}>
                {subtitleExist && (
                  <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                    {subtitle}
                  </Base.SectionSubTitle>
                )}
                {isTitleExist && (
                  <Base.SectionTitle
                    className={`${this.decorateCSS("title")} ${
                      alignment === "center" ? this.decorateCSS("title-center") : ""
                    }`}
                  >
                    {title}
                  </Base.SectionTitle>
                )}
                {descriptionExist && (
                  <Base.SectionDescription className={this.decorateCSS("description")}>
                    {description}
                  </Base.SectionDescription>
                )}
                {FeaturesItem.length > 0 && (
                  <Base.Row
                    className={`${this.decorateCSS("features-list")} ${
                      alignment === "center" ? this.decorateCSS("alignment-center") : ""
                    }`}
                  >
                    {FeaturesItem.map((item: any, index: number) => {
                      const numberExist = this.castToString(item.number);
                      const descriptionExist = this.castToString(item.description);
                      if (!numberExist && !descriptionExist) return null;
                      return (
                        <div key={index} className={this.decorateCSS("features-list-item")}>
                          {numberExist && (
                            <Base.P className={this.decorateCSS("topText")}>
                              {item.number}
                            </Base.P>
                          )}
                          {descriptionExist && (
                            <Base.P className={this.decorateCSS("bottomText")}>
                              {item.description}
                            </Base.P>
                          )}
                        </div>
                      );
                    })}
                  </Base.Row>
                )}

                {buttons.length > 0 && (
                  <Base.Row className={this.decorateCSS("button-container")}>
                    {buttons.map((item, index) => {
                      const buttonText = this.castToString(item.text || "");
                      if (!buttonText && !item.icon) return null;

                      return (
                        <ComposerLink key={`dw-btn-${index}`} path={item.url || "#"}>
                          <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                            {item.icon && (
                              <Base.Media
                                className={this.decorateCSS("icon")}
                                value={{ type: "icon", name: item.icon }}
                              />
                            )}
                            {buttonText && <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>}
                          </Base.Button>
                        </ComposerLink>
                      );
                    })}
                  </Base.Row>
                )}
              </Base.VerticalContent>
            )}

            {image?.url && (
              <div
                className={`${this.decorateCSS("right-container")} ${
                  !isLeftContainerExist ? this.decorateCSS("right-container-alone") : ""
                }`}
              >
                <Base.Media value={image} className={this.decorateCSS("image-circle")} />
                {overlay && image?.url && <div className={this.decorateCSS("media-overlay")} />}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Stats14;
