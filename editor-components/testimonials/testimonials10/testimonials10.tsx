import * as React from "react";
import { Testimonials, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./testimonials10.module.scss";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Item = {
  image: TypeMediaInputValue;
  text: React.JSX.Element;
  author: {
    name: React.JSX.Element;
    subtitle: React.JSX.Element;
  };
};

type Button = {
  text: React.JSX.Element;
  url: string;
  icon: TypeMediaInputValue;
  type: string;
};

class Testimonials10Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Happy With Customers & Clients",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "What our client say",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "I feel very happy and be proud to connect with this industry. i presume this is a very productive and professional industry.i wish very good luck & success for this industry",
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "Contact Us", "", null, null, "Primary")],
      additionalParams: {
        maxElementCount: 2,
      },
    });
    this.addProp({
      type: "array",
      key: "profile-itemList",
      displayer: "Testimonials",
      value: [
        {
          type: "object",
          key: "card1",
          displayer: "Card 1",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Author Image",
              additionalParams: { availableTypes: ["image"] },
              value: { type: "image", url: "https://gridvalley.net/wp/industroz/wp-content/uploads/2020/04/pic3-5.jpg" },
            },
            {
              type: "string",
              key: "text",
              displayer: "Review Text",
              value: "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                { type: "string", key: "name", displayer: "Name", value: "Alex Madson" },
                { type: "string", key: "subtitle", displayer: "Position", value: "Contractor" },
              ],
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
              displayer: "Author Image",
              additionalParams: { availableTypes: ["image"] },
              value: { type: "image", url: "https://gridvalley.net/wp/industroz/wp-content/uploads/2020/04/pic3-5.jpg" },
            },
            {
              type: "string",
              key: "text",
              displayer: "Review Text",
              value: "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                { type: "string", key: "name", displayer: "Name", value: "Helen Lee" },
                { type: "string", key: "subtitle", displayer: "Position", value: "Contractor" },
              ],
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
              displayer: "Author Image",
              additionalParams: { availableTypes: ["image"] },
              value: { type: "image", url: "https://gridvalley.net/wp/industroz/wp-content/uploads/2020/04/pic3-5.jpg" },
            },
            {
              type: "string",
              key: "text",
              displayer: "Review Text",
              value: "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                { type: "string", key: "name", displayer: "Name", value: "Helen Lee" },
                { type: "string", key: "subtitle", displayer: "Position", value: "Contractor" },
              ],
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
              displayer: "Author Image",
              additionalParams: { availableTypes: ["image"] },
              value: { type: "image", url: "https://gridvalley.net/wp/industroz/wp-content/uploads/2020/04/pic3-5.jpg" },
            },
            {
              type: "string",
              key: "text",
              displayer: "Review Text",
              value: "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                { type: "string", key: "name", displayer: "Name", value: "Helen Lee" },
                { type: "string", key: "subtitle", displayer: "Position", value: "Contractor" },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "card5",
          displayer: "Card 5",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Author Image",
              additionalParams: { availableTypes: ["image"] },
              value: { type: "image", url: "https://gridvalley.net/wp/industroz/wp-content/uploads/2020/04/pic3-5.jpg" },
            },
            {
              type: "string",
              key: "text",
              displayer: "Review Text",
              value: "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                { type: "string", key: "name", displayer: "Name", value: "Helen Lee" },
                { type: "string", key: "subtitle", displayer: "Position", value: "Contractor" },
              ],
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "media",
      key: "quoteicon",
      displayer: "Quote Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "FaQuoteLeft" },
    });
    this.addProp({
      type: "media",
      key: "nexticon",
      displayer: "Next Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "FaArrowRightLong" },
    });
    this.addProp({
      type: "media",
      key: "previcon",
      displayer: "Prev Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "FaArrowLeftLong" },
    });
    this.addProp({
      type: "string",
      key: "hiliteTitle",
      displayer: "Bottom Title",
      value: "CLIENT SAYS",
    });

    this.setComponentState("slider-ref", React.createRef());
  }

  static getName(): string {
    return "Testimonials 10";
  }

  render() {
    const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: this.decorateCSS("slider"),
    };

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
    const hiliteTitle = this.castToString(this.getPropValue("hiliteTitle"));

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("overlay-left")}> </div>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("container2")}>
            <div className={this.decorateCSS("testimonials10")}>
              {hasAnyTopContent && (
                <div className={this.decorateCSS("left-content")}>
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
                          const iconExist = item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url);
                          if (!buttonText && !iconExist) return null;
                          return (
                            <ComposerLink key={index} path={item.url}>
                              <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                                {buttonText && (
                                  <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                                )}
                                {iconExist && (
                                  <Base.Media className={this.decorateCSS("button-icon")} value={item.icon!} />
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
              {(this.getPropValue("profile-itemList").length > 0 || hiliteTitle) && (
                <div className={`${this.decorateCSS("right-content")} ${hiliteTitle ? this.decorateCSS("right-content-padding") : ""}`}>
                  <div className={this.decorateCSS("slider-style")}>
                    <ComposerSlider {...settings} ref={this.getComponentState("slider-ref")}>
                      {this.castToObject<Item[]>("profile-itemList").map((item: Item, index: number) => {
                        const textExist = this.castToString(item.text);
                        const authorNameExist = item.author && this.castToString(item.author.name);
                        const authorSubtitleExist = item.author && this.castToString(item.author.subtitle);
                        const quoteIconValue = this.getPropValue("quoteicon") as TypeMediaInputValue;
                        const prevIconValue = this.getPropValue("previcon") as TypeMediaInputValue;
                        const nextIconValue = this.getPropValue("nexticon") as TypeMediaInputValue;
                        const quoteIconExist = quoteIconValue && (quoteIconValue.type === "icon" ? quoteIconValue.name : quoteIconValue.url);
                        const prevIconExist = prevIconValue && (prevIconValue.type === "icon" ? prevIconValue.name : prevIconValue.url);
                        const nextIconExist = nextIconValue && (nextIconValue.type === "icon" ? nextIconValue.name : nextIconValue.url);
                        return (
                          <div key={index} className={this.decorateCSS("slider-inner-div")}>
                            <div className={this.decorateCSS("slider-card")}>
                              {(textExist || authorNameExist || authorSubtitleExist) && (
                                <div className={`${this.decorateCSS("header-page-container")} ${!item.image ? this.decorateCSS("header-page-container-no-image") : ""}`}>
                                  <div className={this.decorateCSS("header-page")}>
                                    <div className={this.decorateCSS("top-container")}>
                                      {item.image && (
                                        <div className={this.decorateCSS("img-div")}>
                                          <Base.Media value={item.image} className={this.decorateCSS("img")} />
                                        </div>
                                      )}
                                      {(prevIconExist || nextIconExist) && (
                                        <div className={this.decorateCSS("icons")}>
                                          {prevIconExist && (
                                            <span onClick={() => this.getComponentState("slider-ref").current.slickPrev()}>
                                              <Base.Media value={prevIconValue} className={this.decorateCSS("previcon")} />
                                            </span>
                                          )}
                                          {nextIconExist && (
                                            <span onClick={() => this.getComponentState("slider-ref").current.slickNext()}>
                                              <Base.Media value={nextIconValue} className={this.decorateCSS("nexticon")} />
                                            </span>
                                          )}
                                        </div>
                                      )}
                                    </div>
                                    {quoteIconExist && (
                                      <div className={this.decorateCSS("iconquote")}>
                                        <Base.Media value={quoteIconValue} className={this.decorateCSS("quoteicon")} />
                                      </div>
                                    )}
                                    <div className={this.decorateCSS("card")}>
                                      {textExist && (
                                        <Base.P className={this.decorateCSS("text")}>{item.text}</Base.P>
                                      )}
                                      {item.author && (authorNameExist || authorSubtitleExist) && (
                                        <Base.VerticalContent className={this.decorateCSS("bottom-container")}>
                                          {authorNameExist && (
                                            <Base.P className={this.decorateCSS("item-name")}>{item.author.name}</Base.P>
                                          )}
                                          {authorSubtitleExist && (
                                            <Base.P className={this.decorateCSS("item-subtitle")}>{item.author.subtitle}</Base.P>
                                          )}
                                        </Base.VerticalContent>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </ComposerSlider>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Base.MaxContent>
        {hiliteTitle && (
          <div className={this.decorateCSS("hiliteTitle")}>{this.getPropValue("hiliteTitle")}</div>
        )}
      </Base.Container>
    );
  }
}

export default Testimonials10Page;
