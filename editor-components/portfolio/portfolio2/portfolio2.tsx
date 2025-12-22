import * as React from "react";
import styles from "./portfolio2.module.scss";
import { BasePortfolio } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Side = "left" | "right";

class Portfolio2 extends BasePortfolio {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "leftCardSubTitle",
      displayer: "Left Card Subtitle",
      value: "GANACHE",
    });
    this.addProp({
      type: "string",
      key: "leftCardTitle",
      displayer: "Left Card Title",
      value: "CREATION",
    });
    this.addProp({
      type: "string",
      key: "leftCardText",
      displayer: "Left Card Text",
      value:
        "Lorem ipsum dolor sit amet, ea mel modo qualisque, possit nemore facilis vel te. Laudem aeterno dolorum no vix, ea sed falli option. Doming legendos his cu. Te nonumy eleifend expetenda usu. Quo appetere gubergren et.",
    });
    this.addProp({
      type: "media",
      key: "image",
      displayer: "Image",
      additionalParams: {
        availableTypes: ["image", "video"],
      },
      value: {
        type: "image",
        url: "https://swissdelight.qodeinteractive.com/wp-content/uploads/2021/02/h2-img-1-729x1024.png",
      },
     
    });
    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
    });
    this.addProp({
      type: "string",
      key: "rightCardSubTitle",
      displayer: "Right Card Subtitle",
      value: "SWEET",
    });
    this.addProp({
      type: "string",
      key: "rightCardTitle",
      displayer: "Right Card Title",
      value: "MASTERPIECES",
    });
    this.addProp({
      type: "string",
      key: "rightCardText",
      displayer: "Right Card Text",
      value:
        "Lorem ipsum dolor sit amet, ea mel modo qualisque, possit nemore facilis vel te. Laudem aeterno dolorum no vix, ea sed falli option. Doming legendos his cu. Te nonumy eleifend expetenda usu. Quo appetere gubergren et.",
    });
    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1", "animate2"],
      additionalParams: {
        selectItems: ["animate1", "animate2"],
      },
    });

    this.addProp({
      type: "array",
      key: "leftCardButtons",
      displayer: "Left Card Buttons",
      value: [
        INPUTS.BUTTON(
          "leftCardButton",
          "Left Card Button",
          "READ MORE",
          "",
          "BsArrowRight",
          null,
          "Tertiary"
        ),
      ],
    });
    this.addProp({
      type: "array",
      key: "rightCardButtons",
      displayer: "Right Card Buttons",
      value: [
        INPUTS.BUTTON(
          "rightCardButton",
          "Right Card Button",
          "READ MORE",
          "",
          "BsArrowRight",
          null,
          "Tertiary"
        ),
      ],
    });
  }

  static getName(): string {
    return "Portfolio 2";
  }

  private renderSide(side: Side) {
    const subTitle = this.getPropValue(`${side}CardSubTitle`);
    const title = this.getPropValue(`${side}CardTitle`);
    const text = this.getPropValue(`${side}CardText`);
    const sideButtons = (this.castToObject(`${side}CardButtons`) ||
      []) as INPUTS.CastedButton[];

    const showNavigateContainer = sideButtons.some(
      (b: INPUTS.CastedButton) => this.castToString(b?.text) || !!b?.icon
    );
    const showSideContainer =
      this.castToString(subTitle) ||
      this.castToString(title) ||
      this.castToString(text) ||
      showNavigateContainer;

    if (!showSideContainer) {
      return null;
    }

    return (
      <>
        {showSideContainer && (
          <div className={this.decorateCSS("side-container")}>
            <Base.VerticalContent className={this.decorateCSS("side")}>
              {this.castToString(subTitle) && (
                <Base.SectionSubTitle className={this.decorateCSS("sub-title")}>
                  {subTitle}
                </Base.SectionSubTitle>
              )}
              {this.castToString(title) && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {title}
                </Base.SectionTitle>
              )}
              {this.castToString(text) && (
                <Base.SectionDescription className={this.decorateCSS("text")}>
                  {text}
                </Base.SectionDescription>
              )}
              {showNavigateContainer && (
                <div className={this.decorateCSS("button-wrapper")}>
                  {sideButtons.map((btn: INPUTS.CastedButton, idx: number) => {
                    const btnTextExist = this.castToString(btn?.text);
                    const buttonIcon = btn?.icon;
                    const buttonIconExist = !!(
                      buttonIcon &&
                      (typeof buttonIcon === "string" ||
                        (buttonIcon as any).name ||
                        (buttonIcon as any).url)
                    );
                    if (!btnTextExist && !buttonIconExist) return null;
                    const buttonUrl = btn?.url || "#";
                    return (
                      <Base.Button
                        key={`side-btn-${side}-${idx}`}
                        buttonType={btn.type}
                        className={this.decorateCSS("button")}
                        data-animation={this.getPropValue(
                          "hoverAnimation"
                        ).join(" ")}
                      >
                        <ComposerLink path={buttonUrl}>
                          <div className={this.decorateCSS("text-and-icon")}>
                            {btnTextExist && (
                              <div
                                className={this.decorateCSS("navigate-text")}
                              >
                                {btn.text}
                              </div>
                            )}
                            {buttonIconExist && (
                              <Base.Media
                                value={buttonIcon as any}
                                className={this.decorateCSS(
                                  `${side}-navigate-icon`
                                )}
                              />
                            )}
                          </div>
                        </ComposerLink>
                      </Base.Button>
                    );
                  })}
                </div>
              )}
            </Base.VerticalContent>
          </div>
        )}
      </>
    );
  }

  render() {
    const image = this.getPropValue("image");
    const overlay = this.getPropValue("overlay");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {this.renderSide("left")}
          {image && (
            <div
              className={this.decorateCSS("middle-container")}
              data-animation={this.getPropValue("hoverAnimation").join(" ")}
            >
              <div className={this.decorateCSS("middle")}>
                <Base.Media
                  value={image}
                  className={this.decorateCSS("image")}
                />
                {overlay && (
                  <div className={this.decorateCSS("thumbnail-overlay")} />
                )}
              </div>
            </div>
          )}
          {this.renderSide("right")}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Portfolio2;
