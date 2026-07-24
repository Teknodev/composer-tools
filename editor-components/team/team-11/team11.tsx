import * as React from "react";
import styles from "./team11.module.scss";
import { Team } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Social = {
  icon: TypeMediaInputValue;
  url: string;
};

type Card = {
  profileImage: TypeMediaInputValue;
  name: string;
  position: string;
  cardDescription: string;
  socials: Social[];
};

class Team11 extends Team {
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
      value: "Our Team",
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
      value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
    });

    this.addProp({
      type: "media",
      key: "nextIcon",
      displayer: "Next icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "GrCaretNext",
      },
    });

    this.addProp({
      type: "media",
      key: "prevIcon",
      displayer: "Prev icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "GrCaretPrevious",
      },
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
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
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64370fa168c3c2002cd30832?alt=media&timestamp=1719558632843",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Sarah Brown",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Defender",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
              value: "",
            },
            {
              type: "array",
              key: "socials",
              displayer: "Social Media",
              value: [
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaFacebookSquare"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaTwitterSquare"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaInstagram"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaLinkedin"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
              ],
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
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64370fa168c3c2002cd30833?alt=media&timestamp=1719558632843",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Paul Hicks",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Defender",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
              value: "",
            },
            {
              type: "array",
              key: "socials",
              displayer: "Social Media",
              value: [
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaFacebookSquare"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaTwitterSquare"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaInstagram"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaLinkedin"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
              ],
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
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b588bd2970002c6282c6?alt=media&timestamp=1719558632841",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Willie Perry",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Defender",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
              value: "",
            },
            {
              type: "array",
              key: "socials",
              displayer: "Social Media",
              value: [
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaFacebookSquare"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaTwitterSquare"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaInstagram"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaLinkedin"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
              ],
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
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64370fa168c3c2002cd30832?alt=media&timestamp=1719558632843",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Sarah Brown",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Defender",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
              value: "",
            },
            {
              type: "array",
              key: "socials",
              displayer: "Social Media",
              value: [
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaFacebookSquare"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaTwitterSquare"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaInstagram"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaLinkedin"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
              ],
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
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64370fa168c3c2002cd30833?alt=media&timestamp=1719558632843",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Paul Hicks",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Defender",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
              value: "",
            },
            {
              type: "array",
              key: "socials",
              displayer: "Social Media",
              value: [
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaFacebookSquare"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaTwitterSquare"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaInstagram"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaLinkedin"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
              ],
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
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b588bd2970002c6282c6?alt=media&timestamp=1719558632841",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Willie Perry",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Defender",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
              value: "",
            },
            {
              type: "array",
              key: "socials",
              displayer: "Social Media",
              value: [
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaFacebookSquare"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaTwitterSquare"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaInstagram"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaLinkedin"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count In a Row",
      value: 3,
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
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        adaptiveHeight: false,
      })
    );

    this.setComponentState("slider-ref", React.createRef());
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
    return "Team 11";
  }
  render() {
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const visibleButtons = buttons.filter(btn => this.castToString(btn.text));
    const hasContent = subtitle || title || description || visibleButtons.length > 0;
    const cards = this.castToObject<Card[]>("cards") || [];
    const sliderSettings = this.getPropValue("slider-settings") || [];
    const userSettings = this.transformSliderValues(sliderSettings);

    const prevIcon = this.getPropValue("prevIcon");
    const nextIcon = this.getPropValue("nextIcon");
    const hasPrevIcon = !!(prevIcon && ((prevIcon.type === "icon" && prevIcon.name) || (prevIcon.type === "image" && prevIcon.url)));
    const hasNextIcon = !!(nextIcon && ((nextIcon.type === "icon" && nextIcon.name) || (nextIcon.type === "image" && nextIcon.url)));
    const hasArrows = hasPrevIcon || hasNextIcon;

    const settings = {
      ...userSettings,
      arrows: false,
      dots: false,
      beforeChange: (_oldIndex: number, newIndex: number) => {
        this.setComponentState("currentSlide", newIndex);
      },
      slidesToShow: cards.length < this.getPropValue("itemCount") ? cards.length : this.getPropValue("itemCount"),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasContent && (
            <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
              {subtitle && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>
              )}
              {title && (
                <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>
              )}
              {description && (
                <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>
              )}
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
            </Base.VerticalContent>
          )}

          <ComposerSlider {...settings} ref={this.getComponentState("slider-ref")} className={this.decorateCSS("down-page")}>
            {cards.map((item: Card, indexSlider: number) => {
              const itemNameExist = this.castToString(item.name);
              const itemPositionExist = this.castToString(item.position);
              const itemCardDescriptionExist = this.castToString(item.cardDescription);
              const itemExits = itemNameExist || itemPositionExist || itemCardDescriptionExist || item.profileImage || (item.socials && item.socials.length > 0);
              return (
                itemExits && (
                  <div key={indexSlider} className={this.decorateCSS("item")}>
                    <Base.VerticalContent className={this.decorateCSS("card")} data-animation={(this.getPropValue("hoverAnimation") || []).join(" ")}>
                      <div className={this.decorateCSS("hover")}>
                        <Base.Media value={item.profileImage} className={this.decorateCSS("person-image")} />
                        {this.getPropValue("overlay") && <div className={this.decorateCSS("overlay")} />}
                        {item.socials && item.socials.length > 0 && (
                          <div className={this.decorateCSS("icons-bar")} data-animation={(this.getPropValue("hoverAnimation") || []).join(" ")}>
                            {item.socials.map((social: Social, indexIcon: number) => {
                              const iconExists = social.icon && (social.icon.type === "icon" || social.icon.type === "image");
                              return iconExists && (
                                <ComposerLink path={social.url} key={indexIcon}>
                                  <Base.Media
                                    value={social.icon}
                                    className={`${this.decorateCSS("icon")} ${social.icon?.type === "image" && this.decorateCSS("has-image")}`}
                                  />
                                </ComposerLink>
                              );
                            })}
                          </div>
                        )}
                      </div>
                      <Base.VerticalContent className={this.decorateCSS("text-group")}>
                        {itemNameExist && <Base.H4 className={this.decorateCSS("item-name")}>{item.name}</Base.H4>}
                        {itemPositionExist && <Base.H5 className={this.decorateCSS("item-position")}>{item.position}</Base.H5>}
                        {itemCardDescriptionExist && <Base.P className={this.decorateCSS("card-description")}>{item.cardDescription}</Base.P>}
                      </Base.VerticalContent>
                    </Base.VerticalContent>
                  </div>
                )
              );
            })}
          </ComposerSlider>

          {((userSettings.arrows && hasArrows) || userSettings.dots) && (
            <div className={this.decorateCSS("navigation-container")}>
              {(userSettings.arrows && hasArrows) && (
                <div className={cards.length > 3 ? this.decorateCSS("nav-buttons") : this.decorateCSS("visible-navs")}>
                  {hasPrevIcon && (
                    <div
                      className={this.decorateCSS("prev_icon")}
                      onClick={() => {
                        this.getComponentState("slider-ref")?.current?.slickPrev?.();
                      }}
                    >
                      <Base.Media
                        value={prevIcon}
                        className={`${this.decorateCSS("icon")} ${prevIcon?.type === "image" && this.decorateCSS("has-image")}`}
                      />
                    </div>
                  )}
                  {hasNextIcon && (
                    <div
                      className={this.decorateCSS("next_icon")}
                      onClick={() => {
                        this.getComponentState("slider-ref")?.current?.slickNext?.();
                      }}
                    >
                      <Base.Media
                        value={nextIcon}
                        className={`${this.decorateCSS("icon")} ${nextIcon?.type === "image" && this.decorateCSS("has-image")}`}
                      />
                    </div>
                  )}
                </div>
              )}
              {userSettings.dots && (
                <div className={this.decorateCSS("dots")}>
                  {cards.map((_, index) => (
                    <div
                      key={index}
                      className={`${this.decorateCSS("dot")} ${this.getComponentState("currentSlide") === index ? this.decorateCSS("active") : ""}`}
                      onClick={() => this.getComponentState("slider-ref")?.current?.slickGoTo(index)}
                    ></div>
                  ))}
                </div>
              )}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Team11;