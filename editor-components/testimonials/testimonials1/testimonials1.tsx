import * as React from "react";
import { Testimonials, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./testimonials1.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Item = {
  description: React.JSX.Element;
  name: React.JSX.Element;
  icon: TypeMediaInputValue;
  profileImage: TypeMediaInputValue;
};

type Button = {
  text: React.JSX.Element;
  url: string;
  icon: TypeMediaInputValue;
  type: string;
};

class Testimonials1Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "background",
      displayer: "Background",
      value: [
        {
          type: "media",
          key: "componentBackground",
          displayer: "Background Media",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6729d54e7acba6002c5e6e52?alt=media&timestamp=1730794845964",
          },
        },
        {
          type: "boolean",
          key: "overlayActive",
          displayer: "Overlay",
          value: false,
        },
      ],
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
      key: "items",
      displayer: "Items",
      value: [
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Text",
              value:
                "I really like the clean and simple aesthetic of flat design. It's great for creating a modern and minimal look, and it also works well for responsive design since it's easy to adapt to different screen sizes. Plus, the lack of textures and gradients makes it easier to focus on the content itself.",
            },
            {
              type: "string",
              key: "name",
              displayer: "Author Name",
              value: "Jerrie Corinna",
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
              type: "media",
              key: "profileImage",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66616deebd2970002c62361d?alt=media&timestamp=1719483639149",
              },
            },
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Text",
              value: "This product has changed my life! It's incredibly useful and packed with creative features. I would highly recommend it to everyone!",
            },
            {
              type: "string",
              key: "name",
              displayer: "Author Name",
              value: "Kevin Corinna",
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
              type: "media",
              key: "profileImage",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66616deebd2970002c62361e?alt=media&timestamp=1719483639149",
              },
            },
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Text",
              value: "This product has changed my life! It's incredibly useful and packed with creative features. I would highly recommend it to everyone!",
            },
            {
              type: "string",
              key: "name",
              displayer: "Author Name",
              value: "Kevin Corinna",
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
              type: "media",
              key: "profileImage",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66616deebd2970002c62361f?alt=media&timestamp=1719483639150",
              },
            },
          ],
        },
      ],
    });

    this.setComponentState("active_index", 0);
    this.setComponentState("slider-ref", React.createRef());
  }

  static getName(): string {
    return "Testimonials 1";
  }

  onImageClick(itemIndex: number) {
    this.setComponentState("active_index", itemIndex);
    this.getComponentState("slider-ref").current.slickGoTo(itemIndex);
  }

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

    const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      beforeChange: (_oldIndex: number, nextIndex: number) => {
        this.setComponentState("active_index", nextIndex);
      },
    };

    const background = this.castToObject<{ componentBackground: TypeMediaInputValue; overlayActive: boolean }>("background");
    const bgMedia = background.componentBackground as TypeMediaInputValue;
    const imageExist = bgMedia && bgMedia.url;
    const overlayActive = background.overlayActive;

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${imageExist ? this.decorateCSS("with-background") : ""}`}>
        {imageExist && (
          <Base.Media
            value={bgMedia}
            className={this.decorateCSS("component-background")}
          />
        )}
        {overlayActive && imageExist && <div className={this.decorateCSS("overlay")} />}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("content-wrapper")}>
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
                    <div className={this.decorateCSS("button-wrapper")}>
                      {buttons.map((button: Button, index: number) => {
                        const buttonTextExist = this.castToString(button.text);
                        const buttonIconExist = button.icon && (button.icon.type === "icon" ? button.icon.name : button.icon.url);

                        if (!buttonTextExist && !buttonIconExist) return null;

                        return (
                          <ComposerLink key={index} path={button.url}>
                            <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                              {buttonTextExist && <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>}
                              {buttonIconExist && <Base.Media className={this.decorateCSS("button-icon")} value={button.icon!} />}
                            </Base.Button>
                          </ComposerLink>
                        );
                      })}
                    </div>
                  )}
                </Base.VerticalContent>
              )}
              <div className={this.decorateCSS("content")}>
                <ComposerSlider {...settings} ref={this.getComponentState("slider-ref")}>
                  {this.castToObject<Item[]>("items").map((item: Item, index: number) => {
                    const iconExist = item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url);
                    return (
                      <div key={index} className={this.decorateCSS("items")}>
                        {iconExist && <Base.Media value={item.icon} className={this.decorateCSS("icon")} />}
                        {this.castToString(item.description) && (
                          <div className={this.decorateCSS("description")}>{item.description}</div>
                        )}
                        {this.castToString(item.name) && (
                          <div className={this.decorateCSS("name")}>{item.name}</div>
                        )}
                      </div>
                    );
                  })}
                </ComposerSlider>
                <div className={this.decorateCSS("images")}>
                  {this.castToObject<Item[]>("items").map((item: Item, itemIndex: number) => {
                    const isActive = this.getComponentState("active_index") === itemIndex;
                    return (
                      <div
                        key={itemIndex}
                        className={this.decorateCSS("image-container")}
                        onClick={() => this.onImageClick(itemIndex)}
                      >
                        {item.profileImage && (
                          <Base.Media
                            value={item.profileImage}
                            className={`${this.decorateCSS("image")} ${isActive ? this.decorateCSS("active") : ""}`}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Testimonials1Page;
