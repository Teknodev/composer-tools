import * as React from "react";
import styles from "./hero-section30.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class HeroSection30 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "video",
      key: "video",
      displayer: "Background Video",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661a35bbd2970002c626c45?alt=media&timestamp=1719483639151",
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
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661a311bd2970002c626c17?alt=media&timestamp=1719483639151",
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
        INPUTS.BUTTON("button", "Button", "OUR PROJECTS", "", null, null, "Primary"),
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
            <video
              src={video}
              autoPlay
              loop
              muted
              className={this.decorateCSS("video-section")}
            />
          )}

          <div className={this.decorateCSS("content")}>
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
                <img
                  className={this.decorateCSS("title-image")}
                  src={image}
                  alt=""
                />
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
              <p className={this.decorateCSS("description")}>
                {this.getPropValue("description")}
              </p>
            )}

            {buttons.length > 0 &&
              <div className={this.decorateCSS("buttons")}>
                {buttons.map((button: INPUTS.CastedButton) => (
                  <ComposerLink path={button.url}>
                    <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                      {button.text}
                    </Base.Button>
                  </ComposerLink>
                ))}
              </div>
            }
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default HeroSection30;

