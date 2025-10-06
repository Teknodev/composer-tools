import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseHeroSection } from "../../EditorComponent";
import styles from "./hero-section11.module.scss";
import { Base } from "../../../composer-base-components/base/base";

import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class HeroSection11 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Explore the world",
    })

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Our world is full of wonders. Mountains, rivers, desserts, jungles and much more is waiting for you.",
    })
    this.addProp(INPUTS.BUTTON("button", "Button", "Get Started", "", null, null, "Primary"));
    this.addProp({
      type: "icon",
      key: "icon",
      displayer: "Icon",
      value: "IoMdPlay"
    });
    this.addProp({
      type: "icon",
      key: "exitButton",
      displayer: "Exit Button",
      value: "IoMdClose"
    });

    this.addProp({
      type: "image",
      key: "backgroundImage",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675aa2fe0655f8002ca633bf?alt=media"
    })
    this.setComponentState("isVideoModalOpen", false);
    this.setComponentState("videoUrl", null);
  }

  static getName(): string {
    return "Hero Section 11";
  }

  handlePlayVideo = () => {
    const selectedVideo = this.getPropValue("linkpage");

    if (selectedVideo) {
      this.setComponentState("isVideoModalOpen", true);
      this.setComponentState("videoUrl", selectedVideo);
    }
  };

  handleCloseVideoModal = () => {
    this.setComponentState("isVideoModalOpen", false);
    this.setComponentState("videoUrl", null);
  };




  render() {
    const hasLeft = this.castToString(this.getPropValue("title")) || this.castToString(this.getPropValue("description")) || this.castToString(this.getPropValue("linktext"));
    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");
    return (
      <Base.Container className={this.decorateCSS("container")} isFull="true">
        {(hasLeft) && (
          <div className={this.decorateCSS("box")}>
            <Base.MaxContent className={this.decorateCSS("max-content")}>

              <Base.VerticalContent className={`${this.decorateCSS("content")} ${!this.getPropValue("backgroundImage") && this.decorateCSS("no-image")}`}>
                {this.castToString(this.getPropValue("title")) && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {this.getPropValue("title")}
                  </Base.SectionTitle>
                )}
                {this.castToString(this.getPropValue("description")) && (
                  <Base.SectionDescription className={this.decorateCSS("description")}>
                    {this.getPropValue("description")}
                  </Base.SectionDescription>
                )}
                {this.castToString(button.text) && (
                  <ComposerLink path={button.url}>
                    <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                      {button.text}
                    </Base.Button>
                  </ComposerLink>
                )}
              </Base.VerticalContent>
            </Base.MaxContent>
          </div>
        )}
        {this.getPropValue("backgroundImage") && (
          <div className={`${this.decorateCSS("right")} ${!hasLeft && this.decorateCSS("no-left")}`}>
            <div className={this.decorateCSS("image-wrapper")}>
              <img src={this.getPropValue("backgroundImage")} alt={this.getPropValue("backgroundImage")} className={this.decorateCSS("image")} />
            </div>
            {this.getPropValue("icon") && (
              <div className={this.decorateCSS("icon-box")}>
                <div className={this.decorateCSS("icon-wrapper")}>
                  <div className={this.decorateCSS("icon")}>
                    <Base.Icon name={this.getPropValue("icon")} propsIcon={{
                      className: this.decorateCSS("button"),
                      onClick: () => this.handlePlayVideo(),
                    }} />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {this.getComponentState("isVideoModalOpen") && (
          <div className={this.decorateCSS("video-modal")}>
            <div
              className={this.decorateCSS("video-overlay")}
              onClick={this.handleCloseVideoModal}
            ></div>
            <div className={this.decorateCSS("video-content")}>
              <button
                className={this.decorateCSS("close-button-wrapper")}
                onClick={this.handleCloseVideoModal}
              >
                <Base.Icon name={this.getPropValue("exitButton")}
                  propsIcon={{
                    className: this.decorateCSS("close-button"),
                  }}
                />
              </button>

              <video
                src={this.getComponentState("videoUrl")}
                controls
                className={this.decorateCSS("video-player")}
                autoPlay
              />
            </div>
          </div>
        )}
      </Base.Container>
    );
  }
}

export default HeroSection11;

