import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content7.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
interface Card {
  title: string;
  button: {
    buttonText: string;
    link: string;
  };
  next_icon: string;
  backgroundImage: string;
  foregroundImage: string;
  description: string;
  beforeText: string;
  afterText: string;
}
class Content7 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "cover-image",
      displayer: "Background Image",
      value:
        "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "LOREM IPSUM",
    });
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Lorem Ipsum",
    });
    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [

            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "BEDROOM RENOVATION",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              type: "object",
              key: "button",
              displayer: "Button",
              value: [
                {
                  type: "string",
                  key: "buttonText",
                  displayer: "Button Text",
                  value: "VIEW DETAILS",
                },
                {
                  type: "page",
                  key: "link",
                  displayer: "Link",
                  value: "",
                },
              ],
            },
            {
              type: "icon",
              key: "next_icon",
              displayer: "Next icon",
              value: "MdNavigateNext",
            },
            {
              type: "image",
              key: "backgroundImage",
              displayer: "Background Image",
              value: "https://demo.archiwp.com/multipurpose-dark/wp-content/uploads/sites/15/2018/06/1b.jpg"
            },
            {
              type: "string",
              key: "beforeText",
              displayer: "Before Text",
              value: "Before"
            },
            {
              type: "image",
              key: "foregroundImage",
              displayer: "Foreground Image",
              value: "https://demo.archiwp.com/multipurpose-dark/wp-content/uploads/sites/15/2018/06/1a.jpg"
            },
            {
              type: "string",
              key: "afterText",
              displayer: "After Text",
              value: "After"
            },
          ]
        },

      ]
    }
    )

  }

  getName(): string {
    return "Content 7";
  }

  handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const slider = event.target as HTMLInputElement;
    const foregroundImage = document.getElementById(`foregroundImage-${index}`);
    const sliderButton = document.getElementById(`slider-button-${index}`);
    if (foregroundImage && sliderButton) {
      const sliderValue = Number(slider.value);
      foregroundImage.style.clipPath = `inset(0% 0% 0% ${sliderValue}%)`;
      sliderButton.style.left = `calc(${slider.value}% - 18px)`;
    }
  };


  render() {

    return (
      <div
        className={this.decorateCSS("container")}
        style={{
          backgroundImage: `url(${this.getPropValue("cover-image")})`,
        }}
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("up-page")}>
            <span className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</span>
            <span className={this.decorateCSS("title")}>{this.getPropValue("title")}</span>
          </div>
          <div className={this.decorateCSS("down-page")}>
            {this.castToObject<Card[]>("cards").map(
              (card: Card, indexCards: number) => {
                return (
                  <div key={indexCards} className={this.decorateCSS("card")}>
                    <div className={this.decorateCSS("left-card")}>
                      <span className={this.decorateCSS("title")}>{card.title}</span>
                      <span className={this.decorateCSS("description")}>{card.description}</span>
                      <ComposerLink path={card.button.link}>
                        <button className={this.decorateCSS("button")}>
                          {card.button.buttonText}
                          <ComposerIcon
                            name={card.next_icon}
                            propsIcon={{ className: this.decorateCSS("icon") }}
                          />
                        </button>
                      </ComposerLink>
                    </div>
                    <div className={this.decorateCSS("right-card")}>
                      <div className={this.decorateCSS("image-container")}>
                        <img src={card.backgroundImage}
                          alt="Before"
                          className={this.decorateCSS("background-image")}
                        />
                        <img
                          src={card.foregroundImage}
                          alt="After"
                          className={this.decorateCSS("foreground-image")}
                          id={`foregroundImage-${indexCards}`}
                        />
                        <div className={this.decorateCSS("slider-wrapper")}>
                          <input
                            type="range"
                            min="1"
                            max="100"
                            defaultValue="50"
                            className={this.decorateCSS("slider")}
                            id={`slider-${indexCards}`}
                            onChange={(e) => this.handleSliderChange(e, indexCards)}
                            onMouseDown={() => { console.log("onMouseDown") }}
                            onMouseUp={() => { console.log("onMouseUp") }}

                          />
                          <div className={this.decorateCSS("text")}>
                            <div className={this.decorateCSS("before-text")}>
                              {card.beforeText}
                            </div>
                            <div className={this.decorateCSS("after-text")}>
                              {card.afterText}
                            </div>
                          </div>
                          <div className={this.decorateCSS("slider-button")} id={`slider-button-${indexCards}`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    );
  }
}


export default Content7;
