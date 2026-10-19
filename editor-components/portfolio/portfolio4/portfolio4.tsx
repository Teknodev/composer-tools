import * as React from "react";
import { BasePortfolio, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./portfolio4.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type ItemMedia = {
  media: TypeMediaInputValue;
  overlay: boolean;
};

type Item = {
  itemMedia: ItemMedia;
  item_subtitle: React.JSX.Element;
  item_title: React.JSX.Element;
  item_description: React.JSX.Element;
  item_buttons: TypeUsableComponentProps[];
  url: string;
};

type ButtonData = {
  text: React.JSX.Element;
  type: INPUTS.CastedButton["type"];
  url: string;
  icon: TypeMediaInputValue;
};

type Arrows = {
  prevIcon: TypeMediaInputValue;
  nextIcon: TypeMediaInputValue;
};

class Portfolio4 extends BasePortfolio {
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
      value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
    });

    this.addProp({
      type: "array",
      key: "items",
      displayer: "Items",
      value: [
        this.createItem(
          "Colorfill Web Design",
          "Branding",
          "https://impreza-landing.us-themes.com/wp-content/uploads/2023/10/windows-JW-T2BH5k5E-unsplash-1070x713.jpg"
        ),
        this.createItem(
          "Glasses Mobile Project",
          "Mobile Apps",
          "https://impreza-landing.us-themes.com/wp-content/uploads/2023/10/jeremy-bezanger-WuFjNk7hu7g-unsplash-1070x713.jpg"
        ),
        this.createItem(
          "Blue Teal Orange",
          "Web Design",
          "https://impreza-landing.us-themes.com/wp-content/uploads/2023/10/jesse-smith-R0cJIcBpE70-unsplash-1070x1070.jpg"
        ),
        this.createItem(
          "Another Breath App",
          "Web Design",
          "https://impreza-landing.us-themes.com/wp-content/uploads/2023/10/oinam-fGkBx7hX9Ms-unsplash-1070x713.jpg"
        ),
        this.createItem(
          "Desktop App Design",
          "Web Design",
          "https://impreza-landing.us-themes.com/wp-content/uploads/2023/10/balazs-ketyi-sScmok4Iq1o-unsplash-1070x803.jpg"
        ),
        this.createItem(
          "Amster Mobile App",
          "Mobile Apps",
          "https://impreza-landing.us-themes.com/wp-content/uploads/2023/10/dell-7Bmk9mAXP2I-unsplash-1070x712.jpg"
        ),
        this.createItem(
          "Red Border App",
          "Mobile Apps",
          "https://impreza-landing.us-themes.com/wp-content/uploads/2023/10/william-hook-9e9PD9blAto-unsplash-1070x713.jpg"
        ),
        this.createItem(
          "Green Leaves Magazine",
          "Branding",
          "https://impreza-landing.us-themes.com/wp-content/uploads/2023/10/avel-chuklanov-DUmFLtMeAbQ-unsplash-1070x713.jpg"
        ),
      ],
    });

    this.addProp({
      type: "boolean",
      key: "gradientOverlay",
      displayer: "Gradient Overlay",
      value: true,
    });

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
            name: "MdChevronLeft",
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
            name: "MdChevronRight",
          },
        },
      ],
    });

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation",
      value: [],
      additionalParams: {
        selectItems: ["animate1", "animate2"],
      },
    });

    this.addProp(
      INPUTS.SLIDER_SETTINGS("settings", "Slider Settings", {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 350,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: false,
      })
    );

    this.setComponentState("slider-ref", React.createRef());
  }

  static getName(): string {
    return "Portfolio 4";
  }

  private createItem(title: string, description: string, image: string): TypeUsableComponentProps {
    return {
      type: "object",
      key: "item",
      displayer: "Item",
      value: [
        {
          type: "object",
          key: "itemMedia",
          displayer: "Media",
          value: [
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: image,
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
          ],
        },
        {
          type: "string",
          key: "item_subtitle",
          displayer: "Subtitle",
          value: "",
        },
        {
          type: "string",
          key: "item_title",
          displayer: "Title",
          value: title,
        },
        {
          type: "string",
          key: "item_description",
          displayer: "Description",
          value: description,
        },
        {
          type: "array",
          key: "item_buttons",
          displayer: "Buttons",
          value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
        },
        {
          type: "page",
          key: "url",
          displayer: "Navigate To",
          value: "",
        },
      ],
    };
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

  hasMedia(media?: TypeMediaInputValue) {
    return !!(media && ((media as any).url || (media as any).name));
  }

  private getItemButtons(buttonsArray?: TypeUsableComponentProps[]) {
    if (!Array.isArray(buttonsArray)) return [];

    return buttonsArray.map((button: any) => {
      const parent = button?.value ?? button;
      return {
        text: this.getPropValue("text", { parent_object: parent }),
        type: this.getPropValue("type", { parent_object: parent }),
        url: this.getPropValue("url", { parent_object: parent }),
        icon: this.getPropValue("icon", { parent_object: parent }) as TypeMediaInputValue,
      };
    });
  }

  private renderButtons(buttons: ButtonData[], className: string) {
    return (
      <div className={this.decorateCSS(className)}>
        {buttons.map((button: ButtonData, index: number) => (
          <ComposerLink key={`button-${index}`} path={button.url}>
            <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
              {this.castToString(button.text) && <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>}
              {this.hasMedia(button.icon) && <Base.Media value={button.icon} className={this.decorateCSS("button-icon")} />}
            </Base.Button>
          </ComposerLink>
        ))}
      </div>
    );
  }

  render() {
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const visibleButtons = this.getItemButtons(this.getPropValue("buttons")).filter(
      (button: ButtonData) => this.castToString(button.text) || this.hasMedia(button.icon)
    );
    const hasHeader = subtitleExist || titleExist || descriptionExist || visibleButtons.length > 0;

    const items = this.castToObject<Item[]>("items").filter(
      (item: Item) =>
        this.hasMedia(item.itemMedia?.media) ||
        this.castToString(item.item_subtitle) ||
        this.castToString(item.item_title) ||
        this.castToString(item.item_description)
    );
    const gradientOverlay = this.getPropValue("gradientOverlay");
    const hoverAnimation = (this.getPropValue("hoverAnimation") || []).join(" ");

    const sliderSettings = this.transformSliderValues(this.getPropValue("settings"));
    const slidesToShow = Math.max(1, Number(sliderSettings.slidesToShow) || 1);
    const arrows = this.castToObject<Arrows>("arrows");
    const showArrows = !!sliderSettings.arrows && items.length > 1;
    const hasPrev = showArrows && this.hasMedia(arrows?.prevIcon);
    const hasNext = showArrows && this.hasMedia(arrows?.nextIcon);
    const sliderRef = this.getComponentState("slider-ref");

    const settings = {
      ...sliderSettings,
      arrows: false,
      dotsClass: this.decorateCSS("dots"),
      customPaging: () => <div className={this.decorateCSS("dot")} />,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: Math.min(slidesToShow, 3),
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: Math.min(slidesToShow, 3),
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
    };

    return (
      <Base.Container isFull={true} className={this.decorateCSS("container")}>
        <Base.MaxContent className={`${this.decorateCSS("max-content")} ${this.decorateCSS(Base.getContentAlignment())}`}>
          {hasHeader && (
            <div className={this.decorateCSS("header")}>
              <Base.VerticalContent className={this.decorateCSS("header-content")}>
                {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
                {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
                {visibleButtons.length > 0 && this.renderButtons(visibleButtons, "button-container")}
              </Base.VerticalContent>
            </div>
          )}
          {items.length > 0 && (
            <div className={this.decorateCSS("slider-wrapper")}>
              <ComposerSlider {...settings} ref={sliderRef} className={this.decorateCSS("carousel")}>
                {items.map((item: Item, index: number) => {
                  const media = item.itemMedia?.media;
                  const mediaExist = this.hasMedia(media);
                  const itemSubtitleExist = this.castToString(item.item_subtitle);
                  const itemTitleExist = this.castToString(item.item_title);
                  const itemDescriptionExist = this.castToString(item.item_description);
                  const itemButtons = this.getItemButtons(item.item_buttons).filter(
                    (button: ButtonData) => this.castToString(button.text) || this.hasMedia(button.icon)
                  );
                  const hasContent = itemSubtitleExist || itemTitleExist || itemDescriptionExist || itemButtons.length > 0;

                  return (
                    <div className={this.decorateCSS("slide")} key={`item-${index}`}>
                      <div className={`${this.decorateCSS("item")} ${mediaExist ? this.decorateCSS("has-media") : ""}`} data-animation={hoverAnimation}>
                        {mediaExist && (
                          <div className={this.decorateCSS("media-wrapper")}>
                            <Base.Media value={media} className={this.decorateCSS("media")} />
                          </div>
                        )}
                        {mediaExist && item.itemMedia?.overlay && <div className={this.decorateCSS("base-overlay")} />}
                        {mediaExist && <div className={this.decorateCSS("hover-overlay")} />}
                        <ComposerLink path={item.url}>
                          <div className={this.decorateCSS("item-link")} />
                        </ComposerLink>
                        {hasContent && (
                          <div className={`${this.decorateCSS("content")} ${gradientOverlay && mediaExist ? this.decorateCSS("media-overlay") : ""}`}>
                            <Base.VerticalContent className={this.decorateCSS("content-inner")}>
                              {itemSubtitleExist && <Base.P className={this.decorateCSS("item-subtitle")}>{item.item_subtitle}</Base.P>}
                              {itemTitleExist && <Base.H5 className={this.decorateCSS("item-title")}>{item.item_title}</Base.H5>}
                              {itemDescriptionExist && <Base.H6 className={this.decorateCSS("item-description")}>{item.item_description}</Base.H6>}
                              {itemButtons.length > 0 && this.renderButtons(itemButtons, "item-button-container")}
                            </Base.VerticalContent>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </ComposerSlider>
              {hasPrev && (
                <div className={`${this.decorateCSS("arrow")} ${this.decorateCSS("prev-arrow")}`} onClick={() => sliderRef.current?.slickPrev()}>
                  <Base.Media value={arrows.prevIcon} className={this.decorateCSS("arrow-icon")} />
                </div>
              )}
              {hasNext && (
                <div className={`${this.decorateCSS("arrow")} ${this.decorateCSS("next-arrow")}`} onClick={() => sliderRef.current?.slickNext()}>
                  <Base.Media value={arrows.nextIcon} className={this.decorateCSS("arrow-icon")} />
                </div>
              )}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Portfolio4;
