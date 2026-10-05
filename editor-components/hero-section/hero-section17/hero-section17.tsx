import * as React from "react";
import styles from "./hero-section17.module.scss";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Arrows = {
  prevIcon: TypeMediaInputValue;
  nextIcon: TypeMediaInputValue;
};

type ISliderData = {
  logo: TypeMediaInputValue;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  media: TypeMediaInputValue;
  description: React.JSX.Element;
  button: INPUTS.CastedButton;
  overlay: boolean;
};

class HeroSection17 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);



    this.addProp({
      type: "object",
      key: "arrows",
      displayer: "Arrows",
      value: [
        {
          type: "media",
          key: "prevIcon",
          displayer: "Previous Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "GrFormPrevious",
          },
        },
        {
          type: "media",
          key: "nextIcon",
          displayer: "Next Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "GrFormNext",
          },
        },
      ],
    });

    this.addProp({
      type: "array",
      displayer: "Slider",
      key: "slider",
      value: [
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "media",
              key: "logo",
              displayer: "Logo",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "",
              },
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "2023",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Scandinavian Style House",
            },
            {
              type: "media",
              displayer: "Media",
              key: "media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666193cabd2970002c625d54?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "boolean",
              displayer: "Overlay",
              key: "overlay",
              value: false,
            },
            INPUTS.BUTTON("button", "Button", "View Content", "", "GrFormNext", null, "White"),
          ],
        },
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "media",
              key: "logo",
              displayer: "Logo",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "",
              },
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "2021",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Contemporary Style House",
            },
            {
              type: "media",
              displayer: "Media",
              key: "media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666193cabd2970002c625d53?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "boolean",
              displayer: "Overlay",
              key: "overlay",
              value: false,
            },
            INPUTS.BUTTON("button", "Button", "View Content", "", "GrFormNext", null, "White"),
          ],
        },
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "media",
              key: "logo",
              displayer: "Logo",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "",
              },
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "2019",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Metal Facade Coatings",
            },
            {
              type: "media",
              displayer: "Media",
              key: "media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666193cabd2970002c625d54?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "boolean",
              displayer: "Overlay",
              key: "overlay",
              value: false,
            },
            INPUTS.BUTTON("button", "Button", "View Content", "", "GrFormNext", null, "White"),
          ],
        },
      ],
    });

    this.addProp(
      INPUTS.SLIDER_SETTINGS("settings", "Slider Settings", {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
      })
    );

    this.setComponentState("slider-ref", React.createRef());
  }

  static getName(): string {
    return "Hero Section 17";
  }

  hasMedia(media?: TypeMediaInputValue) {
    return !!(media && ((media as any).url || (media as any).name));
  }

  withVideoSettings(media: TypeMediaInputValue) {
    return media?.type === "video"
      ? { ...media, settings: { autoplay: true, loop: true, muted: true, controls: false } }
      : media;
  }

  render() {
    const slider = this.castToObject<ISliderData[]>("slider");
    const sliderSettings = this.transformSliderValues(this.getPropValue("settings"));
    const arrows = this.castToObject<Arrows>("arrows");
    const hasPrevIcon = this.hasMedia(arrows?.prevIcon);
    const hasNextIcon = this.hasMedia(arrows?.nextIcon);

    const settings = {
      ...sliderSettings,
      dots: sliderSettings.dots && slider.length > 1,
      dotsClass: this.decorateCSS("dots"),
    };
    return (
      <div className={this.decorateCSS("container")}>
        <ComposerSlider {...settings} ref={this.getComponentState("slider-ref")} className={this.decorateCSS("carousel")}>
          {slider.map((item: ISliderData, index: number) => {
            const image = this.hasMedia(item.media);
            const logoExist = this.hasMedia(item.logo);
            const subtitleExist = this.castToString(item.subtitle);
            const titleExist = this.castToString(item.title);
            const descriptionExist = this.castToString(item.description);
            const buttonExist = this.castToString(item.button.text);
            const cardExist = !!(logoExist || subtitleExist || titleExist || descriptionExist);
            const sliderExist = !!(buttonExist || cardExist || image);

            return (
              sliderExist && (
                <div className={this.decorateCSS("slider-content")} key={`key${index}`}>
                  {image && <Base.Media value={this.withVideoSettings(item.media)} className={this.decorateCSS("bg-img")} />}
                  {image && item.overlay && <div className={this.decorateCSS("overlay")} />}
                  <Base.Container className={this.decorateCSS("sub-container")}>
                    <Base.MaxContent className={this.decorateCSS("sub-content")}>
                      {cardExist && (
                        <div className={this.decorateCSS("card")}>
                          <Base.VerticalContent className={this.decorateCSS("card-content")}>
                            {logoExist && <Base.Media value={item.logo} className={this.decorateCSS("logo")} />}
                            {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{item.subtitle}</Base.SectionSubTitle>}
                            {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{item.title}</Base.SectionTitle>}
                            {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{item.description}</Base.SectionDescription>}
                          </Base.VerticalContent>
                        </div>
                      )}
                      {buttonExist && (
                        <ComposerLink path={item.button.url}>
                          <Base.Button buttonType={item.button.type} className={this.decorateCSS("button")}>
                            <Base.P className={this.decorateCSS("button-text")}>{item.button.text}</Base.P>
                            {this.hasMedia(item.button.icon as any) && (
                              <Base.Media className={this.decorateCSS("button-icon")} value={item.button.icon} />
                            )}
                          </Base.Button>
                        </ComposerLink>
                      )}
                    </Base.MaxContent>
                  </Base.Container>
                  {slider.length > 1 && hasNextIcon && (
                    <div
                      className={`${this.decorateCSS("next-icon")} ${!image ? this.decorateCSS("slider-icon-without-image") : ""}`}
                      onClick={() => {
                        this.getComponentState("slider-ref").current.slickNext();
                      }}
                    >
                      <Base.Media className={this.decorateCSS("icon")} value={arrows.nextIcon} />
                    </div>
                  )}
                  {slider.length > 1 && hasPrevIcon && (
                    <div
                      className={`${this.decorateCSS("prev-icon")} ${!image ? this.decorateCSS("slider-icon-without-image") : ""}`}
                      onClick={() => {
                        this.getComponentState("slider-ref").current.slickPrev();
                      }}
                    >
                      <Base.Media className={this.decorateCSS("icon")} value={arrows.prevIcon} />
                    </div>
                  )}
                </div>
              )
            );
          })}
        </ComposerSlider>
      </div>
    );
  }
}

export default HeroSection17;

