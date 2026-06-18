import * as React from "react";
import { Testimonials, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./testimonials14.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type Item = {
  image: TypeMediaInputValue;
  icon: TypeMediaInputValue;
  author: {
    name: React.JSX.Element;
    position: React.JSX.Element;
  };
  text: React.JSX.Element;
};

type Button = {
  text: React.JSX.Element;
  url: string;
  icon: TypeMediaInputValue;
  type: string;
};

interface ArrowItem {
  nextArrow: TypeMediaInputValue;
  prevArrow: TypeMediaInputValue;
}

type DividerObj = {
  divider: boolean;
  dividerTop: boolean;
  dividerBottom: boolean;
};

class Testimonials14 extends Testimonials {
  private autoplayInterval: NodeJS.Timeout | null = null;
  private readonly autoplaySpeed: number = 3000;

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
      value: "",
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
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
      ],
    });
    this.addProp({
      type: "array",
      key: "media",
      displayer: "Media",
      value: [
        {
          type: "object",
          key: "card1",
          displayer: "Card 1",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/682c7b9e2bb4c4002cf86e1b?alt=media",
              },
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "RiDoubleQuotesL",
              },
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
                  value: "Hugh G.",
                },
                {
                  type: "string",
                  key: "position",
                  displayer: "Position",
                  value: "",
                },
              ],
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Can you imagine if my grandma could send me crypto? It's that easy!",
            },
          ],
        },
        {
          type: "object",
          key: "card2",
          displayer: "Card 2",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/682c3b222bb4c4002cf8257e?alt=media",
              },
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "RiDoubleQuotesL",
              },
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
                  value: "Moni C.",
                },
                {
                  type: "string",
                  key: "position",
                  displayer: "Position",
                  value: "",
                },
              ],
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "My dog can't use a phone, but even he could send me crypto with this app.",
            },
          ],
        },
        {
          type: "object",
          key: "card3",
          displayer: "Card 3",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/682c3b402bb4c4002cf825bb?alt=media",
              },
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "RiDoubleQuotesL",
              },
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
                  value: "Lampard F.",
                },
                {
                  type: "string",
                  key: "position",
                  displayer: "Position",
                  value: "",
                },
              ],
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Grandpa just sent me Bitcoin between bingo rounds. It's really that simple.",
            },
          ],
        },
        {
          type: "object",
          key: "card4",
          displayer: "Card 4",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/682c3b5a2bb4c4002cf8272a?alt=media",
              },
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "RiDoubleQuotesL",
              },
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
                  value: "Rooney W.",
                },
                {
                  type: "string",
                  key: "position",
                  displayer: "Position",
                  value: "",
                },
              ],
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "No tech skills? No problem. If you can text, you can send crypto.",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "arrows",
      displayer: "Arrows",
      value: [
        {
          type: "media",
          key: "prevArrow",
          displayer: "Prev Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "SlArrowLeft",
          },
        },
        {
          type: "media",
          key: "nextArrow",
          displayer: "Next Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "SlArrowRight",
          },
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "dividers",
      displayer: "Dividers",
      value: [
        { type: "boolean", key: "divider", displayer: "Divider", value: true },
        { type: "boolean", key: "dividerTop", displayer: "Divider Top", value: true },
        { type: "boolean", key: "dividerBottom", displayer: "Divider Bottom", value: true },
      ],
    });
    this.addProp({
      type: "boolean",
      key: "textAnimation",
      displayer: "Text Animation",
      value: true,
    });
    this.addProp(INPUTS.SLIDER_SETTINGS("slider-settings", "Slider Settings", {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
    }));

    this.setComponentState("activeIndex", 0);
    this.setComponentState("contentAnimationClass", "animate__fadeIn");
  }

  static getName(): string {
    return "Testimonials 14";
  }

  componentDidMount() {
    this.startAutoplay();
  }

  onComponentWillUnmount() {
    this.stopAutoplay();
  }

  startAutoplay = () => {
    const images = this.castToObject<Item[]>("media");
    if (images.length > 1 && this.autoplaySpeed > 0) {
      this.autoplayInterval = setInterval(this.goToNext, this.autoplaySpeed);
    }
  };

  stopAutoplay = () => {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  };

  private updateActiveIndexWithAnimation = (newIndex: number) => {
    const textAnimation = this.getPropValue("textAnimation");
    this.stopAutoplay();
    if (textAnimation) {
      this.setComponentState("contentAnimationClass", "animate__fadeOut");
      setTimeout(() => {
        this.setComponentState("activeIndex", newIndex);
        this.setComponentState("contentAnimationClass", "animate__fadeIn");
        this.startAutoplay();
      }, 750);
    } else {
      this.setComponentState("activeIndex", newIndex);
      this.startAutoplay();
    }
  };

  onImageClick = (index: number) => {
    this.updateActiveIndexWithAnimation(index);
  };

  goToPrev = () => {
    const images = this.castToObject<Item[]>("media");
    const activeIndex = this.getComponentState("activeIndex");
    const prevIndex = (activeIndex - 1 + images.length) % images.length;
    this.updateActiveIndexWithAnimation(prevIndex);
  };

  goToNext = () => {
    const images = this.castToObject<Item[]>("media");
    const activeIndex = this.getComponentState("activeIndex");
    const nextIndex = (activeIndex + 1) % images.length;
    this.updateActiveIndexWithAnimation(nextIndex);
  };

  render() {
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<Button[]>("buttons");
    const hasValidButtons = buttons.some((btn: Button) => {
      const buttonText = this.castToString(btn.text);
      const iconExist = btn.icon && (btn.icon.type === "icon" ? btn.icon.name : btn.icon.url);
      return buttonText || iconExist;
    });
    const hasAnyTopContent = subtitleExist || titleExist || descriptionExist || hasValidButtons;

    const images = this.castToObject<Item[]>("media");
    const arrows = this.castToObject<ArrowItem>("arrows");
    const dividers = this.castToObject<DividerObj>("dividers");
    const showDivider = dividers.divider;
    const showDividerTop = dividers.dividerTop;
    const showDividerBottom = dividers.dividerBottom;
    const activeIndex = this.getComponentState("activeIndex");
    const textAnimation = this.getPropValue("textAnimation");
    const animationClass = textAnimation ? `animate__animated ${this.getComponentState("contentAnimationClass")}` : "";

    const activeItem = images[activeIndex];
    const iconExist = activeItem?.icon && (activeItem.icon.type === "icon" ? activeItem.icon.name : activeItem.icon.url);
    const prevArrowExist = arrows.prevArrow && (arrows.prevArrow.type === "icon" ? arrows.prevArrow.name : arrows.prevArrow.url);
    const nextArrowExist = arrows.nextArrow && (arrows.nextArrow.type === "icon" ? arrows.nextArrow.name : arrows.nextArrow.url);
    const rawSettings = this.getPropValue("slider-settings");
    const sliderSettings = Object.fromEntries((rawSettings as any[]).map((p: any) => [p.key, p.value]));

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasAnyTopContent && (
            <Base.VerticalContent className={this.decorateCSS("top-content")}>
              {subtitleExist && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {this.getPropValue("subtitle")}
                </Base.SectionSubTitle>
              )}
              {titleExist && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </Base.SectionTitle>
              )}
              {descriptionExist && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {this.getPropValue("description")}
                </Base.SectionDescription>
              )}
              {hasValidButtons && (
                <div className={this.decorateCSS("button-container")}>
                  {buttons.map((item: Button, index: number) => {
                    const buttonText = this.castToString(item.text);
                    const btnIconExist = item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url);
                    if (!buttonText && !btnIconExist) return null;
                    return (
                      <ComposerLink key={index} path={item.url}>
                        <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                          {buttonText && (
                            <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                          )}
                          {btnIconExist && (
                            <Base.Media className={this.decorateCSS("button-icon")} value={item.icon!} />
                          )}
                        </Base.Button>
                      </ComposerLink>
                    );
                  })}
                </div>
              )}
            </Base.VerticalContent>
          )}

          {showDividerTop && (
            <div className={this.decorateCSS("divider-top")} />
          )}
          <div className={this.decorateCSS("content")}>
            {images.length > 0 && (
              <div className={this.decorateCSS("media")}>
                {images.map((item: Item, itemIndex: number) => (
                  item.image && (
                    <Base.Media
                      key={itemIndex}
                      value={item.image}
                      className={`${this.decorateCSS("image")} ${activeIndex === itemIndex ? this.decorateCSS("active") : ""}`}
                      onClick={() => this.onImageClick(itemIndex)}
                    />
                  )
                ))}
              </div>
            )}
            {showDivider && (
              <div className={this.decorateCSS("divider")} />
            )}
            {activeItem && (
              <div className={this.decorateCSS("item-content")}>
                <Base.VerticalContent key={activeIndex} className={`${this.decorateCSS("items")} ${animationClass}`}>
                  <div className={this.decorateCSS("icon-and-name")}>
                    {iconExist ? (
                      <Base.Media
                        value={activeItem.icon}
                        className={this.decorateCSS("icon")}
                      />
                    ) : (<span className={this.decorateCSS("span-icon")} />)}
                    {activeItem.author && (this.castToString(activeItem.author.name) || this.castToString(activeItem.author.position)) && (
                      <div className={this.decorateCSS("author-details")}>
                        {this.castToString(activeItem.author.name) && (
                          <Base.SectionTitle className={this.decorateCSS("author-name")}>
                            {activeItem.author.name}
                          </Base.SectionTitle>
                        )}
                        {this.castToString(activeItem.author.position) && (
                          <Base.P className={this.decorateCSS("author-subtitle")}>
                            {activeItem.author.position}
                          </Base.P>
                        )}
                      </div>
                    )}
                  </div>
                  {this.castToString(activeItem.text) && (
                    <Base.SectionDescription className={this.decorateCSS("comment")}>
                      {activeItem.text}
                    </Base.SectionDescription>
                  )}
                </Base.VerticalContent>
              </div>
            )}
            <div className={this.decorateCSS("arrow-container")}>
              {sliderSettings.arrows && prevArrowExist && images.length > 1 && (
                <button
                  className={this.decorateCSS("prevArrow")}
                  onClick={(e) => {
                    e.stopPropagation();
                    this.goToPrev();
                  }}>
                  <Base.Media
                    value={arrows.prevArrow}
                    className={this.decorateCSS("arrow")}
                  />
                </button>
              )}
              {sliderSettings.arrows && nextArrowExist && images.length > 1 && (
                <button
                  className={this.decorateCSS("nextArrow")}
                  onClick={(e) => {
                    e.stopPropagation();
                    this.goToNext();
                  }}>
                  <Base.Media
                    value={arrows.nextArrow}
                    className={this.decorateCSS("arrow")}
                  />
                </button>
              )}
            </div>
          </div>
          {sliderSettings.dots && images.length > 1 && (
            <div className={this.decorateCSS("dots-panel")}>
              {images.map((_: Item, dotIndex: number) => (
                <button
                  key={dotIndex}
                  className={`${this.decorateCSS("dot")} ${activeIndex === dotIndex ? this.decorateCSS("dot-active") : ""}`}
                  onClick={() => this.onImageClick(dotIndex)}
                />
              ))}
            </div>
          )}
          {showDividerBottom && (
            <div className={this.decorateCSS("divider-bottom")} />
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Testimonials14;