import * as React from "react";
import { BaseHeader, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./header5.module.scss";
import { Base, TypeButton } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type ButtonData = {
  text: React.JSX.Element;
  url: string;
  type: TypeButton;
  icon: TypeMediaInputValue;
};

interface BackgroundSettings {
  componentBackground: TypeMediaInputValue;
  overlay: boolean;
}

class Header5 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "backgroundSettings",
      displayer: "Background Media",
      value: [
        {
          type: "media",
          key: "componentBackground",
          displayer: "Background Media",
          value: {
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/691b29523596a1002b29410a?alt=media",
            type: "image",
          },
          additionalParams: { availableTypes: ["image", "video"] }
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: true,
        }
      ]
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
        INPUTS.BUTTON("button", "Button", "Watch how we work", "", "FaPlayCircle", null, "White"),
      ],
    });
  }

  static getName(): string {
    return "Header 5";
  }

  render() {
    const backgroundSettings = this.castToObject<BackgroundSettings>("backgroundSettings");
    const coverImage = backgroundSettings?.componentBackground;
    const buttonItem = this.castToObject<ButtonData[]>("buttons");
    const rawSubtitle = this.getPropValue("subtitle");
    const rawTitle = this.getPropValue("title");
    const rawDescription = this.getPropValue("description");
    const subtitle = this.castToString(rawSubtitle);
    const title = this.castToString(rawTitle);
    const description = this.castToString(rawDescription);
    const hasMedia = !!coverImage?.url;
    const enableOverlay = hasMedia && backgroundSettings?.overlay;
    const hasContent = subtitle || title || description || buttonItem.length > 0;

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${hasMedia && this.decorateCSS("has-media")}`}>
        {hasMedia && (
          <div className={this.decorateCSS("background-container")}>
            <Base.Media value={coverImage} className={this.decorateCSS("background-media")} />
            {enableOverlay && <div className={this.decorateCSS("overlay")}></div>}
          </div>
        )}
        {hasContent && (
          <Base.MaxContent className={this.decorateCSS("content")}>
            <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
              {subtitle && (<Base.SectionSubTitle className={this.decorateCSS("subtitle")}> {rawSubtitle}</Base.SectionSubTitle>)}
              {title && (<Base.SectionTitle className={this.decorateCSS("title")}>{rawTitle}</Base.SectionTitle>)}
              {description && (<Base.SectionDescription className={this.decorateCSS("description")}>{rawDescription}</Base.SectionDescription>)}
              {buttonItem.length > 0 && (
                <Base.Row className={this.decorateCSS("button-container")}>
                  {buttonItem.map(
                    (buttonObj, index: number) => {
                      const buttonText = this.castToString(buttonObj.text);
                      const iconExist = buttonObj.icon && buttonObj.icon.type === "icon" && buttonObj.icon.name;
                      return (buttonText || iconExist) && (
                        <ComposerLink key={index} path={buttonObj.url}>
                          <Base.Button buttonType={buttonObj.type} className={this.decorateCSS("button")}>
                            {iconExist && (<Base.Media value={buttonObj.icon} className={this.decorateCSS("icon")} />)}
                            {buttonText && (<Base.P className={this.decorateCSS("button-text")}>{buttonObj.text}</Base.P>)}
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

export default Header5;