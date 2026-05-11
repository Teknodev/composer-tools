import * as React from "react";
import { Testimonials, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./testimonials1.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

class Testimonials1Page extends Testimonials {
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
      type: "image",
      key: "componentBackground",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6729d54e7acba6002c5e6e52?alt=media&timestamp=1730794845964",
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
              key: "longtext",
              displayer: "Review Text",
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
              type: "icon",
              key: "icons",
              displayer: "Icon",
              value: "RiDoubleQuotesL",
            },
            {
              type: "media",
              key: "profileImage",
              displayer: "Author Image",
              additionalParams: {
                availableTypes: ["image"],
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
              key: "longtext",
              displayer: "Review Text",
              value: "This product has changed my life! It's incredibly useful and packed with creative features. I would highly recommend it to everyone!",
            },
            {
              type: "string",
              key: "name",
              displayer: "Author Name",
              value: "Kevin Corinna",
            },
            {
              type: "icon",
              key: "icons",
              displayer: "Icon",
              value: "RiDoubleQuotesL",
            },
            {
              type: "media",
              key: "profileImage",
              displayer: "Author Image",
              additionalParams: {
                availableTypes: ["image"],
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
              key: "longtext",
              displayer: "Review Text",
              value: "This product has changed my life! It's incredibly useful and packed with creative features. I would highly recommend it to everyone!",
            },
            {
              type: "string",
              key: "name",
              displayer: "Author Name",
              value: "Kevin Corinna",
            },
            {
              type: "icon",
              key: "icons",
              displayer: "Icon",
              value: "RiDoubleQuotesL",
            },
            {
              type: "media",
              key: "profileImage",
              displayer: "Author Image",
              additionalParams: {
                availableTypes: ["image"],
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
    const buttons = this.castToObject<any[]>("buttons");
    const hasValidButtons = buttons.some((btn: any) => {
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
      beforeChange: (oldIndex: number, nextIndex: number) => {
        this.setComponentState("active_index", nextIndex);
      },
    };

    const imageExist = this.getPropValue("componentBackground");

    return (
      <Base.Container
        className={this.decorateCSS("container")}
        isFull={this.getPropValue("componentBackground") ? true : false}
        style={{
          backgroundImage: `url(${this.getPropValue("componentBackground")})`,
        }}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("content-wrapper")}>
              {hasAnyTopContent && (
                <Base.VerticalContent className={this.decorateCSS("top-content")}>
                  {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
                  {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                  {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
                  {hasValidButtons && (
                    <div className={this.decorateCSS("button-container")}>
                      {buttons.map((item: any, index: number) => {
                        const buttonText = this.castToString(item.text);
                        const iconExist = item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url);
                        if (!buttonText && !iconExist) return null;
                        return (
                          <ComposerLink key={index} path={item.url}>
                            <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                              {buttonText && <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>}
                              {iconExist && <Base.Media className={this.decorateCSS("button-icon")} value={item.icon!} />}
                            </Base.Button>
                          </ComposerLink>
                        );
                      })}
                    </div>
                  )}
                </Base.VerticalContent>
              )}
              <div className={`${this.decorateCSS("content")} ${!imageExist && this.decorateCSS("content-no-image")}`}>
                <ComposerSlider {...settings} ref={this.getComponentState("slider-ref")}>
                  {this.castToObject<any>("items").map((item: any, index: number) => (
                    <div className={this.decorateCSS("items")}>
                      {item.icons && <Base.Icon name={item.icons} propsIcon={{ className: `${this.decorateCSS("icons")} ${!imageExist && this.decorateCSS("icons-no-image")}` }} />}
                      {this.castToString(item.longtext) && <div className={`${this.decorateCSS("longtext")} ${!imageExist && this.decorateCSS("longtext-no-image")}`}>{item.longtext}</div>}
                      {this.castToString(item.name) && <div className={`${this.decorateCSS("name")} ${!imageExist && this.decorateCSS("name-no-image")}`}>{item.name}</div>}
                    </div>
                  ))}
                </ComposerSlider>
                <div className={this.decorateCSS("images")}>
                  {this.castToObject<any>("items").map((item: any, itemIndex: number) => {
                    const isActive = this.getComponentState("active_index") === itemIndex;
                    return (
                      <div className={this.decorateCSS("image-container")} onClick={() => this.onImageClick(itemIndex)}>
                        {item.profileImage && <Base.Media value={item.profileImage as TypeMediaInputValue} className={`${this.decorateCSS("image")} ${isActive && this.decorateCSS("active")}`} />}
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
