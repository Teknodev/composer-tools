import * as React from "react";
import { Testimonials, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./testimonials15.module.scss";
import { INPUTS } from "../../../custom-hooks/input-templates";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type Item = {
  text: React.JSX.Element;
  icon: TypeMediaInputValue;
  star: number;
  author: {
    name: React.JSX.Element;
    position: React.JSX.Element;
  };
};

type Button = {
  text: React.JSX.Element;
  url: string;
  icon: TypeMediaInputValue;
  type: string;
};

class Testimonials15Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Get to know us",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Empowering Businesses with Innovation, Expertise, and for <span style='color: var(--composer-primary-color)'>Success.</span>",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button","Button","Learn More","","",null,"Link"),
      ],
    });

    this.addProp({
      type: "media",
      key: "media",
      displayer: "Media",
      additionalParams: {
        availableTypes: ["image", "video"],
      },
      value: {
        type: "image",
        url: "https://bexon.themejunction.net/wp-content/uploads/2025/07/about-1.webp",
      },
    });

    this.addProp({
      type: "object",
      key: "bottomLeftBox",
      displayer: "Bottom Left Box",
      value: [
        {
          type: "boolean",
          key: "visibility",
          displayer: "Visibility",
          value: true,
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Experiences",
        },
        {
          type: "number",
          key: "number",
          displayer: "Number",
          value: 13,
        },
        {
          type: "media",
          key: "numberIcon",
          displayer: "Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "FaPlus",
          },
        },
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value: "Decades of Experience, Endless Innovation",
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "topRightBox",
      displayer: "Top Right Box",
      value: [
        {
          type: "boolean",
          key: "visibility",
          displayer: "Visibility",
          value: true,
        },
        {
          type: "string",
          key: "text",
          displayer: "Text",
          value: "Get to know us",
        },
        {
          type: "string",
          key: "mainTitle",
          displayer: "Title",
          value: "Empowering Businesses with Innovation, Expertise, and for <span style='color: var(--composer-primary-color)'>Success.</span>",
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "bottomRightBox",
      displayer: "Bottom Right Box",
      value: [
        {
          type: "boolean",
          key: "visibility",
          displayer: "Visibility",
          value: true,
        },
        {
          type: "media",
          key: "starIcon",
          displayer: "Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "IoStar",
          },
        },
        {
          type: "number",
          key: "starNumber",
          displayer: "Icon Number",
          value: 5,
        },
        {
          type: "string",
          key: "quoteText",
          displayer: "Quote Text",
          value: "We believe in building lasting relationships with our clients through trust, innovation, and exceptional service.",
        },
        {
          type: "object",
          key: "author",
          displayer: "Author",
          value: [
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Esther Howard",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Co. Founder",
            },
          ],
        },
        {
          type: "media",
          key: "quoteIcon",
          displayer: "Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "RxQuote",
          },
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "videoBox",
      displayer: "Video Box",
      value: [
        {
          type: "boolean",
          key: "visibility",
          displayer: "Visibility",
          value: true,
        },
        {
          type: "media",
          key: "video",
          displayer: "Video",
          additionalParams: {
            availableTypes: ["video"],
          },
          value: {
            type: "video",
            url: "https://www.youtube.com/embed/MLpWrANjFbI?autoplay=1",
          },
        },
        {
          type: "media",
          key: "media",
          displayer: "Media",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "https://bexon.themejunction.net/wp-content/uploads/2025/07/about-2.webp",
          },
        },
        {
          type: "media",
          key: "playIcon",
          displayer: "Play Button Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "IoMdPlay",
          },
        },
        {
          type: "media",
          key: "closeIcon",
          displayer: "Close Button Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "IoCloseSharp",
          },
        },
      ],
    });
    this.setComponentState("isVideoVisible", false);
  }

  static getName(): string {
    return "Testimonials 15";
  }

  getVisibilityInfo(topRightBox: any, bottomRightBox: any, videoBox: any) {
    const visibleBoxes = [];

    if (topRightBox.visibility) visibleBoxes.push("topRightBox");
    if (bottomRightBox.visibility) visibleBoxes.push("bottomRightBox");
    if (videoBox.visibility) visibleBoxes.push("videoBox");

    return {
      visibleBoxes,
      visibleCount: visibleBoxes.length,
    };
  }

  getGridLayoutClass(leftExist: boolean, rightExist: boolean) {
    if (!leftExist) return this.decorateCSS("grid-right-only");
    if (!rightExist) return this.decorateCSS("grid-left-only");
    return this.decorateCSS("grid-both-sides");
  }

  getRightSideClass(topExist: boolean, bottomExist: boolean, videoExist: boolean) {
    if (!topExist && !bottomExist && !videoExist) return this.decorateCSS("right-section-hidden");
    if (topExist && !bottomExist && !videoExist) return this.decorateCSS("right-section-top-only");
    if (!topExist && bottomExist && !videoExist) return this.decorateCSS("right-section-bottom-only");
    if (!topExist && !bottomExist && videoExist) return this.decorateCSS("right-section-video-only");
    if (topExist && bottomExist && !videoExist) return this.decorateCSS("right-section-vertical");
    if (topExist && !bottomExist && videoExist) return this.decorateCSS("right-section-top-video");
    if (!topExist && bottomExist && videoExist) return this.decorateCSS("right-section-bottom-video");
    return this.decorateCSS("right-section-full");
  }

  render() {
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));

    const bottomLeftBox = this.castToObject<any>("bottomLeftBox");
    const topRightBox = this.castToObject<any>("topRightBox");
    const bottomRightBox = this.castToObject<any>("bottomRightBox");
    const videoBox = this.castToObject<any>("videoBox");

    const { visibleCount } = this.getVisibilityInfo(topRightBox, bottomRightBox, videoBox);
    const buttons = this.castToObject<Button[]>("buttons");
    const hasValidButtons = buttons.some((btn: Button) => {
      const buttonText = this.castToString(btn.text);
      const iconExist = btn.icon && (btn.icon.type === "icon" ? btn.icon.name : btn.icon.url);
      return buttonText || iconExist;
    });

    const renderRightSide = visibleCount > 0;

    const mediaProp = this.getPropValue("media") as TypeMediaInputValue;
    const isImageExist = Boolean(mediaProp && (mediaProp.url || mediaProp.name));

    const leftExist = isImageExist || (bottomLeftBox.visibility && (this.castToString(bottomLeftBox.title) || this.castToString(bottomLeftBox.subtitle) || bottomLeftBox.number));
    const topExist = topRightBox.visibility && (subtitleExist || titleExist || descriptionExist || hasValidButtons);
    const bottomExist = bottomRightBox.visibility && (this.castToString(bottomRightBox.quoteText) || (bottomRightBox.author && (this.castToString(bottomRightBox.author.name) || this.castToString(bottomRightBox.author.position))) || bottomRightBox.starNumber);
    const videoExist = videoBox.visibility;

    const rightExist = topExist || bottomExist || videoExist;

    const rightSectionClass = this.getRightSideClass(topExist, bottomExist, videoExist);
    const gridLayoutClass = this.getGridLayoutClass(leftExist, rightExist);

    const numberIconExist = bottomLeftBox.numberIcon && (bottomLeftBox.numberIcon.type === "icon" ? bottomLeftBox.numberIcon.name : bottomLeftBox.numberIcon.url);
    const starIconExist = bottomRightBox.starIcon && (bottomRightBox.starIcon.type === "icon" ? bottomRightBox.starIcon.name : bottomRightBox.starIcon.url);
    const quoteIconExist = bottomRightBox.quoteIcon && (bottomRightBox.quoteIcon.type === "icon" ? bottomRightBox.quoteIcon.name : bottomRightBox.quoteIcon.url);
    const playIconExist = videoBox.playIcon && (videoBox.playIcon.type === "icon" ? videoBox.playIcon.name : videoBox.playIcon.url);
    const closeIconExist = videoBox.closeIcon && (videoBox.closeIcon.type === "icon" ? videoBox.closeIcon.name : videoBox.closeIcon.url);

    return (
      <div className={this.decorateCSS("testimonials15-root")}>
        <Base.Container className={`${this.decorateCSS("container")} ${this.getComponentState("isVideoVisible") ? this.decorateCSS("with-overlay") : ""}`}>
          <Base.MaxContent className={this.decorateCSS("max-content")}>
            <Base.ContainerGrid className={`${this.decorateCSS("content-grid")} ${gridLayoutClass}`}>
              <div className={this.decorateCSS("left-section")}>
                <div className={`${this.decorateCSS("main-image-container")} ${!isImageExist ? this.decorateCSS("box-alone") : ""}`}>
                  {isImageExist && (
                    <Base.Media
                      value={mediaProp}
                      className={this.decorateCSS("main-image")}
                    />
                  )}
                  {bottomLeftBox.visibility && (
                    <div className={this.decorateCSS("box-area")}>
                      <div className={this.decorateCSS("experience-card")}>
                        <div className={this.decorateCSS("experience-header")}>
                          <div className={this.decorateCSS("experience-title")}>
                            {bottomLeftBox.title}
                          </div>
                        </div>
                        <div className={this.decorateCSS("experience-content")}>
                          <div className={this.decorateCSS("experience-number")}>
                            {bottomLeftBox.number}
                            {numberIconExist && (
                              <Base.Media
                                value={bottomLeftBox.numberIcon}
                                className={this.decorateCSS("number-icon")}
                              />
                            )}
                          </div>
                          <div className={this.decorateCSS("experience-subtitle")}>
                            {bottomLeftBox.subtitle}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {renderRightSide && (
                <div className={`${this.decorateCSS("right-section")} ${rightSectionClass}`}>
                  {topRightBox.visibility && (
                    <div className={this.decorateCSS("top-right-content")}>
                      <Base.VerticalContent className={this.decorateCSS("content-wrapper")}>
                        {subtitleExist && (
                          <Base.SectionSubTitle className={`${this.decorateCSS("content-header")} ${this.decorateCSS("line")}`}>
                            <span className={this.decorateCSS("header-text")}>
                              {this.getPropValue("subtitle")}
                            </span>
                          </Base.SectionSubTitle>
                        )}
                        {titleExist && (
                          <Base.SectionTitle className={this.decorateCSS("main-title")}>
                            {this.getPropValue("title")}
                          </Base.SectionTitle>
                        )}
                        {descriptionExist && (
                          <Base.SectionDescription className={this.decorateCSS("description")}>
                            {this.getPropValue("description")}
                          </Base.SectionDescription>
                        )}
                        {hasValidButtons && (
                          <div className={this.decorateCSS("button-wrapper")}>
                            {buttons.map((button: Button, index: number) => {
                              const buttonTextExist = this.castToString(button.text);
                              const btnIconExist = button.icon && (button.icon.type === "icon" ? button.icon.name : button.icon.url);
                              if (!buttonTextExist && !btnIconExist) return null;
                              return (
                                <ComposerLink key={index} path={button.url}>
                                  <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                                    {btnIconExist && (
                                      <Base.Media
                                        value={button.icon!}
                                        className={this.decorateCSS("button-icon")}
                                      />
                                    )}
                                    {buttonTextExist && (
                                      <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                                    )}
                                  </Base.Button>
                                </ComposerLink>
                              );
                            })}
                          </div>
                        )}
                      </Base.VerticalContent>
                    </div>
                  )}
                  {(bottomRightBox.visibility || videoBox.visibility) && (
                    <div className={this.decorateCSS("bottom-row")}>
                      {bottomRightBox.visibility && (
                        <Base.VerticalContent className={this.decorateCSS("bottom-right-content")}>
                          <div className={this.decorateCSS("quote-container")}>
                            {starIconExist && bottomRightBox.starNumber > 0 && (
                              <div className={this.decorateCSS("stars-container")}>
                                {Array.from({ length: bottomRightBox.starNumber }, (_, i) => (
                                  <Base.Media
                                    key={i}
                                    value={bottomRightBox.starIcon}
                                    className={this.decorateCSS("star-icon")}
                                  />
                                ))}
                              </div>
                            )}
                            {this.castToString(bottomRightBox.quoteText) && (
                              <p className={this.decorateCSS("quote-text")}>
                                {bottomRightBox.quoteText}
                              </p>
                            )}
                            <div className={this.decorateCSS("author-info")}>
                              {bottomRightBox.author && (this.castToString(bottomRightBox.author.name) || this.castToString(bottomRightBox.author.position)) && (
                                <div className={this.decorateCSS("author-details")}>
                                  {this.castToString(bottomRightBox.author.name) && (
                                    <span className={this.decorateCSS("author-name")}>
                                      {bottomRightBox.author.name}
                                    </span>
                                  )}
                                  {this.castToString(bottomRightBox.author.position) && (
                                    <span className={this.decorateCSS("author-subtitle")}>
                                      {bottomRightBox.author.position}
                                    </span>
                                  )}
                                </div>
                              )}
                              {quoteIconExist && (
                                <Base.Media
                                  value={bottomRightBox.quoteIcon}
                                  className={this.decorateCSS("quote-icon")}
                                />
                              )}
                            </div>
                          </div>
                        </Base.VerticalContent>
                      )}
                      {videoBox.visibility && (
                        <div className={this.decorateCSS("video-content")}>
                          <div
                            className={this.decorateCSS("video-container")}
                            onClick={() => this.setComponentState("isVideoVisible", true)}
                          >
                            {videoBox.media && (
                              <Base.Media
                                value={videoBox.media}
                                className={this.decorateCSS("video-cover")}
                              />
                            )}
                            {playIconExist && (
                              <div className={this.decorateCSS("play-button")}>
                                <Base.Media
                                  value={videoBox.playIcon}
                                  className={this.decorateCSS("play-icon")}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </Base.ContainerGrid>
          </Base.MaxContent>
        </Base.Container>
        {this.getComponentState("isVideoVisible") && (
          <Base.Overlay
            onClick={() => this.setComponentState("isVideoVisible", false)}
            className={this.decorateCSS("overlay")}
            isVisible={true}
          >
            <div className={this.decorateCSS("video-container")}>
              <div
                className={this.decorateCSS("video")}
                onClick={() => this.setComponentState("isVideoVisible", false)}
              >
                {videoBox.video?.url && (
                  <iframe
                    className={this.decorateCSS("modal-video")}
                    width="100%"
                    height="450px"
                    src={videoBox.video.url}
                    title="Video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                )}
              </div>
            </div>
            {closeIconExist && (
              <div
                className={this.decorateCSS("close-icon-box")}
                onClick={() => this.setComponentState("isVideoVisible", false)}
              >
                <Base.Media
                  value={videoBox.closeIcon}
                  className={this.decorateCSS("close-icon")}
                />
              </div>
            )}
          </Base.Overlay>
        )}
      </div>
    );
  }
}

export default Testimonials15Page;