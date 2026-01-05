import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature28.module.scss";
import { Base, TypeButton } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type ButtonData = {
  text: React.JSX.Element;
  url: string;
  type: TypeButton;
  icon: TypeMediaInputValue;
};

class Feature28Component extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "media",
      key: "cover-image",
      displayer: "Media",
      value: {
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/691b29523596a1002b29410a?alt=media",
        type: "image",
      },
      additionalParams: { availableTypes: ["image", "video"] }
    })

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

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
      value: "The best-rated top-seller",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Nanotechnology immersion along the information highway will close the loop on focusing solely.",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "About us", "", "", null, "White"),
        INPUTS.BUTTON("button", "Button", "Watch how we work", "", "FaArrowRight", null, "White"),
      ],
    });
  }

  static getName(): string {
    return "Feature 28";
  }

  render() {
    const coverImage = this.getPropValue("cover-image");
    const buttonItem = this.castToObject<ButtonData[]>("buttons");
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"))
    const hasMedia = !!coverImage?.url;
    const enableOverlay = hasMedia && this.getPropValue("overlay");
    const hasContent = subtitle || title || description || buttonItem.length > 0;

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${hasMedia ? this.decorateCSS("has-media") : ""}`}>
        {hasMedia && (
          <div className={this.decorateCSS("background-container")}>
            <Base.Media value={coverImage} className={this.decorateCSS("background-media")} />
            {enableOverlay && <div className={this.decorateCSS("overlay")}></div>}
          </div>
        )}
        {hasContent && (
          <Base.MaxContent className={this.decorateCSS("content")}>
            <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
              {subtitle && (<Base.SectionSubTitle className={this.decorateCSS("subtitle")}> {this.getPropValue("subtitle")}</Base.SectionSubTitle>)}
              {title && (<Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>)}
              {description && (<Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>)}
              {buttonItem.length > 0 && (
                <Base.Row className={this.decorateCSS("button-container")}>
                  {buttonItem.map(
                    (buttonObj, index: number) => {
                      const buttonText = this.castToString(buttonObj.text);
                      const iconExist = buttonObj.icon && buttonObj.icon.type === "icon" && buttonObj.icon.name;
                      if (!buttonText && !iconExist) { return null; }
                      return buttonText && (
                        <ComposerLink key={index} path={buttonObj.url}>
                          <Base.Button buttonType={buttonObj.type} className={this.decorateCSS("button")}>
                            {iconExist && (<Base.Media value={buttonObj.icon} className={this.decorateCSS("icon")} />)}
                            <Base.P className={this.decorateCSS("button-text")}>{buttonObj.text}</Base.P>
                          </Base.Button>
                        </ComposerLink>
                      );
                    }
                  )}
                </Base.Row>
              )}
            </Base.VerticalContent>
          </Base.MaxContent>
        )}
      </Base.Container>
    )
  }
}

export default Feature28Component;