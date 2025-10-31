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
      type: "media",
      key: "icon",
      displayer: "Icon",
      additionalParams: {
        availableTypes: ["icon"],
      },
      value: {
        type: "icon",
        name: "IoMdPlay",
      },
    });
    this.addProp({
      type: "media",
      key: "exitButton",
      displayer: "Exit Button",
      additionalParams: {
        availableTypes: ["icon"],
      },
      value: {
        type: "icon",
        name: "IoMdClose",
      },
    });

    this.addProp({
      type: "media",
      key: "backgroundImage",
      displayer: "Background Image",
      additionalParams: {
        availableTypes: ["image"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675aa2fe0655f8002ca633bf?alt=media",
      },
    });
    this.addProp({
      type: "media",
      key: "video",
      displayer: "Video",
      additionalParams: {
        availableTypes: ["video"],
      },
      value: {
        type: "video",
        url: "",
      },
    });
    this.setComponentState("isVideoModalOpen", false);
    this.setComponentState("videoUrl", null);
  }

  static getName(): string {
    return "Hero Section 11";
  }

  handlePlayVideo = () => {
    const video = this.getPropValue("video");

    if (video?.url) {
      this.setComponentState("isVideoModalOpen", true);
      this.setComponentState("videoUrl", video);
    }
  };

  handleCloseVideoModal = () => {
    this.setComponentState("isVideoModalOpen", false);
    this.setComponentState("videoUrl", null);
  };




  render() {
    const hasLeft = this.castToString(this.getPropValue("title")) || this.castToString(this.getPropValue("description"));
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
                      <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
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
              <Base.Media
                value={this.getPropValue("backgroundImage")}
                className={this.decorateCSS("image")}
              />
            </div>
            {this.getPropValue("icon") && (
              <div className={this.decorateCSS("icon-box")}>
                <div className={this.decorateCSS("icon-wrapper")}>
                  <div className={this.decorateCSS("icon")} onClick={() => this.handlePlayVideo()}>
                    <Base.Media value={this.getPropValue("icon")} className={this.decorateCSS("button")} />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {this.getComponentState("isVideoModalOpen") && (
          <div className={this.decorateCSS("video-modal")}>
            <Base.Overlay
              className={this.decorateCSS("video-overlay")}
              onClick={this.handleCloseVideoModal}
            />
            <div className={this.decorateCSS("video-content")}>
              <button
                className={this.decorateCSS("close-button-wrapper")}
                onClick={this.handleCloseVideoModal}
              >
                <Base.Media value={this.getPropValue("exitButton")} className={this.decorateCSS("close-button")} />
              </button>

              {this.getComponentState("videoUrl") && (
                <Base.Media
                  value={this.getComponentState("videoUrl")}
                  className={this.decorateCSS("video-player")}
                />
              )}
            </div>
          </div>
        )}
      </Base.Container>
    );
  }
}

export default HeroSection11;

