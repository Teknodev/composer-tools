import * as React from "react";
import styles from "./hero-section30.module.scss";
import { BaseHeroSection } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class HeroSection30 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "media",
      key: "video",
      displayer: "Background Media",
      additionalParams: { availableTypes: ["image", "video"] },
      value: {
        type: "video",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661a35bbd2970002c626c45?alt=media&timestamp=1719483639151",
      },
    });

    this.addProp({
      type: "boolean",
      key: "bg-overlay",
      displayer: "Background Overlay",
      value: false,
    });
    
    this.addProp({
      type: "media",
      key: "logo",
      displayer: "Logo",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "" },
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });


    this.addProp({
      type: "string",
      key: "title_first",
      displayer: "First Title",
      value: "WE MAKE",
    });

    this.addProp({
      type: "string",
      key: "title_second",
      displayer: "Second Title",
      value: "GAMES",
    });

    this.addProp({
      type: "media",
      key: "image",
      displayer: "Media",
      additionalParams: { availableTypes: ["image", "video"] },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661a311bd2970002c626c17?alt=media&timestamp=1719483639151",
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
      key: "description",
      displayer: "Description",
      value:
        "An award-winning Prague-based indie game studio pushing the boundaries of narrative and serious games",
    });


    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "OUR PROJECTS", "", "FiArrowRight", null, "Primary"),
      ],
    });
  }

  static getName(): string {
    return "Hero Section 30";
  }

  render() {
    const video = this.getPropValue("video");
    const image = this.getPropValue("image");

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    return (
      <Base.Container
        className={`${this.decorateCSS("container")} ${!video && this.decorateCSS("withoutVideoContainer")
          }`}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {video && (
            <>
              <Base.Media
                value={video}
                autoPlay
                loop
                muted
                controls={false}
                className={this.decorateCSS("video-section")}
              />
              {this.getPropValue("bg-overlay") && (
                <div className={this.decorateCSS("video-overlay")} />
              )}
            </>
          )}

          <Base.VerticalContent className={this.decorateCSS("content")}>
             {this.getPropValue("logo") && (
                <Base.Media
                  value={this.getPropValue("logo")}
                  className={`${this.decorateCSS("logo")} ${!video && this.decorateCSS("logo-no-image")}`}
                />
              )}

              {this.castToString(this.getPropValue("subtitle")) && (
                <div className={this.decorateCSS("up-text")}>
                  <Base.SectionSubTitle className={`${this.decorateCSS("subtitle")} ${video ? this.decorateCSS("subtitle-transparent") : ""}`}>
                    {this.getPropValue("subtitle")}
                  </Base.SectionSubTitle>
                </div>
              )}
            {this.castToString(this.getPropValue("title_first")) && (
              <h1
                className={`${this.decorateCSS("titles")} ${this.decorateCSS(
                  "first-title"
                )}`}
              >
                {this.getPropValue("title_first")}
              </h1>
            )}

            <div className={this.decorateCSS("title-with-image")}>
              {image && (
                <div className={this.decorateCSS("title-image-wrapper")}>
                  <Base.Media
                    value={image}
                    className={this.decorateCSS("title-image")}
                  />
                  {this.getPropValue("overlay") && (
                    <div className={this.decorateCSS("title-image-overlay")} />
                  )}
                </div>
              )}

              {this.castToString(this.getPropValue("title_second")) && (
                <h1
                  className={`${this.decorateCSS("titles")} ${this.decorateCSS(
                    "second-title"
                  )} ${!image && this.decorateCSS("withoutImage")}`}
                >
                  {this.getPropValue("title_second")}
                </h1>
              )}
            </div>

            {this.castToString(this.getPropValue("description")) && (
              <Base.P className={this.decorateCSS("description")}>
                {this.getPropValue("description")}
              </Base.P>
            )}

            {buttons.length > 0 && (
              <div className={this.decorateCSS("buttons")}>
                {buttons.map((button: INPUTS.CastedButton, i: number) =>
                  this.castToString(button.text) && (
                    <ComposerLink path={button.url} key={i}>
                      <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                        <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                        {button.icon && (
                          <Base.Media value={button.icon} className={this.decorateCSS("button-icon-right")} />
                        )}
                      </Base.Button>
                    </ComposerLink>
                  )
                )}
              </div>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default HeroSection30;

