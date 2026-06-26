import * as React from "react";
import { Team, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./team8.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "composer-tools/composer-base-components/Link/ComposerLinkProvider";

type Card = {
  name: React.JSX.Element;
  position: React.JSX.Element;
  cardDescription: React.JSX.Element;
  profileImage: TypeMediaInputValue;
};

interface BackgroundMedia {
  backgroundMedia: TypeMediaInputValue;
  overlay: boolean;
}

class Team8 extends Team {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "backgroundMedia",
      displayer: "Background Media",
      value: [
        {
          type: "media",
          key: "backgroundMedia",
          displayer: "Background Media",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66ace46d03b007002cc763cb?alt=media",
          },
        },
        {
          type: "boolean",
          key: "overlay",
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
      value: "OUR PLAYERS",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Senior players with the highest improvement in all games.",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
    });

    this.addProp({
      type: "boolean",
      key: "cardOverlay",
      displayer: "Overlay",
      value: false,
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
              type: "media",
              key: "profileImage",
              displayer: "Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b0822803b007002cc7714f?alt=media",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Pinch Hitter",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Joseph Hall",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "profileImage",
              displayer: "Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b0828d03b007002cc77195?alt=media",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Relief Pitcher",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Steve Gareth",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "profileImage",
              displayer: "Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b082e503b007002cc771bb?alt=media",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Closer",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Juan Quadra",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "profileImage",
              displayer: "Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b0833903b007002cc771e4?alt=media",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Middle Reliever",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Robert Caton",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "profileImage",
              displayer: "Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b0838203b007002cc771fe?alt=media",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Pinch Runner",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "James Strans",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "profileImage",
              displayer: "Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b0884803b007002cc77454?alt=media",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Long Reliever",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "David Davis",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "profileImage",
              displayer: "Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b0e2e803b007002cc79759?alt=media",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Closer",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Joshua Olds",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count In a Row",
      value: 5,
    });

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3"]
      }
    });

    this.addProp(
      INPUTS.SLIDER_SETTINGS("slider-settings", "Slider Settings", {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        adaptiveHeight: false,
      })
    );
  }

  transformSliderValues = (sliderProps: TypeUsableComponentProps[]): INPUTS.TYPE_SLIDER_SETTINGS => {
    const flatObject: Record<string, any> = {};
    if (Array.isArray(sliderProps)) {
      sliderProps.forEach((prop: TypeUsableComponentProps) => {
        flatObject[prop.key] = prop.value;
      });
    }
    return flatObject as INPUTS.TYPE_SLIDER_SETTINGS;
  };

  static getName(): string {
    return "Team 8";
  }

  render() {
    const cards = this.castToObject<Card[]>("cards");
    const sliderSettings = this.getPropValue("slider-settings") || [];
    const userSettings = this.transformSliderValues(sliderSettings);

    const settings = {
      ...userSettings,
      dotsClass: this.decorateCSS("dots"),
      centerMode: true,
      customPaging: (i: number) => <button className={this.getComponentState("current-slide") === i ? this.decorateCSS("currentPaging") : ""}></button>,
      slidesToShow: cards.length < this.getPropValue("itemCount") ? cards.length : this.getPropValue("itemCount"),
      slidesToScroll: 1,
      afterChange: (currentSlide: number) => {
        this.setComponentState("current-slide", currentSlide);
      },
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      centerPadding: "0px",
    };

    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const visibleButtons = buttons.filter(btn => this.castToString(btn.text));
    const hasContent = subtitle || title || description || visibleButtons.length > 0;
    const backgroundMedia = this.castToObject<BackgroundMedia>("backgroundMedia");
    const imageExist = backgroundMedia?.backgroundMedia;

    return (
      <Base.Container isFull={true} className={this.decorateCSS("container")}>
        {imageExist && (
          <Base.Media value={imageExist} className={this.decorateCSS("background-media")} />
        )}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasContent &&
            <Base.VerticalContent className={`${this.decorateCSS("vertical-content")} ${imageExist && this.decorateCSS("has-image")}`}>
              {subtitle && <Base.SectionSubTitle className={`${this.decorateCSS("subtitle")} ${imageExist && this.decorateCSS("image")}`}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
              {title && <Base.SectionTitle className={`${this.decorateCSS("title")} ${imageExist && this.decorateCSS("image")}`}>{this.getPropValue("title")}</Base.SectionTitle>}
              {description && <Base.SectionDescription className={`${this.decorateCSS("description")} ${imageExist && this.decorateCSS("image")}`}>{this.getPropValue("description")}</Base.SectionDescription>}
              {visibleButtons.length > 0 && (
                <div className={this.decorateCSS("button-container")}>
                  {visibleButtons.map((item: INPUTS.CastedButton, index: number) => {
                    return this.castToString(item.text) && (
                      <ComposerLink key={`button-${index}`} path={item.url}>
                        <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                          <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                        </Base.Button>
                      </ComposerLink>
                    );
                  })}
                </div>
              )}
            </Base.VerticalContent>}

          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("slider-parent")}>
              <ComposerSlider {...settings} className={this.decorateCSS("carousel")}>
                {cards.map((item: Card, index: number) => {
                  const subtitleExist = this.castToString(item.name);
                  const titleExist = this.castToString(item.position);
                  const descriptionExist = this.castToString(item.cardDescription);
                  const hasSlider = titleExist || subtitleExist || descriptionExist || item.profileImage;

                  return (
                    hasSlider && (
                      <div className={`${this.decorateCSS("slider-inner-div")} ${!imageExist && this.decorateCSS("no-image")}`} key={index} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                        <Base.VerticalContent className={this.decorateCSS("content-div")}>
                          {item.profileImage && (
                            <div className={this.decorateCSS("image-box")}>
                              <Base.Media value={item.profileImage} className={`${this.decorateCSS("img")} ${item.profileImage?.type === "icon" && this.decorateCSS("has-icon")} ${imageExist ? this.decorateCSS("image") : this.decorateCSS("no-image")}`} />
                              {this.getPropValue("cardOverlay") && <div className={this.decorateCSS("cardOverlay")} />}
                            </div>
                          )}
                          {(titleExist || subtitleExist || descriptionExist) && (
                            <Base.VerticalContent className={this.decorateCSS("header-page")}>
                              {subtitleExist && <Base.P className={`${this.decorateCSS("card-subtitle")} ${imageExist ? this.decorateCSS("image") : this.decorateCSS("no-image")}`}>{item.name}</Base.P>}
                              {titleExist && <Base.H5 className={`${this.decorateCSS("card-title")} ${imageExist ? this.decorateCSS("image") : this.decorateCSS("no-image")}`}>{item.position}</Base.H5>}
                              {descriptionExist && <Base.P className={`${this.decorateCSS("card-description")} ${imageExist ? this.decorateCSS("image") : this.decorateCSS("no-image")}`}>{item.cardDescription}</Base.P>}
                            </Base.VerticalContent>
                          )}
                        </Base.VerticalContent>
                      </div>
                    )
                  );
                })}
              </ComposerSlider>
            </div>
          </div>
          {backgroundMedia?.overlay && <div className={this.decorateCSS("overlay")} />}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Team8;