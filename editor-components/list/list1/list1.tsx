import { BaseList, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import styles from "./list1.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Card = {
  image: TypeMediaInputValue;
  title: React.JSX.Element;
  subtitle: React.JSX.Element;
  button: INPUTS.CastedButton;
  overlay: boolean;
};

class List1 extends BaseList {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Delicious Taste of",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "TODAY RECIPES",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });
    this.addProp({
      type: "array",
      key: "slider",
      displayer: "List Items",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "List Items",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b1d23a03b007002cc7aa52?alt=media",
              },
              additionalParams: {
                availableTypes: ["image"],
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Sesame Honey Roasted",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "BY GINO D'ACAMPO",
            },
            INPUTS.BUTTON("button", "Button", "MAIN COURSE", "", "MdNavigateNext", null, "Link"),
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "List Items",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b1d26803b007002cc7aa71?alt=media",
              },
              additionalParams: {
                availableTypes: ["image"],
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Chicken Reshmi Kabab",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "BY ADDISON",
            },
            INPUTS.BUTTON("button", "Button", "MAIN COURSE", "", "MdNavigateNext", null, "Link"),
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "List Items",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b1d2b303b007002cc7aa9f?alt=media",
              },
              additionalParams: {
                availableTypes: ["image"],
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Sesame Honey Roasted",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "BY GINO D'ACAMPO",
            },
            INPUTS.BUTTON("button", "Button", "MAIN COURSE", "", "MdNavigateNext", null, "Link"),
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "List Items",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b1d1ef03b007002cc7aa41?alt=media",
              },
              additionalParams: {
                availableTypes: ["image"],
              },
            },
              {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Haak-Kashmiri Spinach",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "BY CHARLES",
            },
            INPUTS.BUTTON("button", "Button", "MAIN COURSE", "", "MdNavigateNext", null, "Link"),
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "List Items",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b1d30603b007002cc7aacf?alt=media",
              },
              additionalParams: {
                availableTypes: ["image"],
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Sesame Honey Roasted",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "BY GINO D'ACAMPO",
            },
            INPUTS.BUTTON("button", "Button", "MAIN COURSE", "", "MdNavigateNext", null, "Link"),
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b1d32d03b007002cc7aae7?alt=media",
              },
              additionalParams: {
                availableTypes: ["image"],
              },
            },
              {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Chicken Reshmi Kabab",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "BY ADDISON",
            },
            INPUTS.BUTTON("button", "Button", "MAIN COURSE", "", "MdNavigateNext", null, "Link"),
          ],
        },
      ],
    });
    this.addProp({
      type: "boolean",
      key: "backgroundColor",
      displayer: "Colored Area",
      value: true,
    });
    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3", "animate4"]
      }
    });

    this.setComponentState("active-index", 1);
  }

  static getName(): string {
    return "List 1";
  }

  render() {
    const sliderItems = this.castToObject<Card[]>("slider");
    const backgroundColor = this.getPropValue("backgroundColor");
    const title = this.getPropValue("title");
    const subTitle = this.getPropValue("subtitle");
    const description = this.getPropValue("description");
    const hasHeaderContent =
      this.castToString(subTitle) ||
      this.castToString(title) ||
      this.castToString(description);
    const dotsClassName = backgroundColor
      ? `${this.decorateCSS("dots")} ${this.decorateCSS("dots-colored")}`
      : this.decorateCSS("dots");
    const settings = {
      dots: true,
      infinite: sliderItems.length > 1,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: Math.min(3, sliderItems.length),
      slidesToScroll: 1,
      initialSlide: 1,
      arrows: false,
      centerMode: true,
      dotsClass: dotsClassName,
      centerPadding: "0px",
      beforeChange: (_previndex: number, currindex: number) => {
        this.setComponentState("active-index", currindex);
      },
      responsive: [
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasHeaderContent && (
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {this.castToString(subTitle) && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {subTitle}
                </Base.SectionSubTitle>
              )}
              {this.castToString(title) && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {title}
                </Base.SectionTitle>
              )}
              {this.castToString(description) && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {description}
                </Base.SectionDescription>
              )}
            </Base.VerticalContent>
          )}
          {(sliderItems.length > 0) && (
            <ComposerSlider
              {...settings}
              className={this.decorateCSS("carousel")}
            >
              {sliderItems.map((item: Card, indexSlider: number) => {
                const cardExist  = this.castToString(item.title) || this.castToString(item.subtitle) || this.castToString(item.button.text) || item.image || item.button.icon;
                
                return cardExist && (
                  <Base.VerticalContent
                    key={indexSlider}
                    className={`${this.decorateCSS("card")} ${
                      backgroundColor && this.getComponentState("active-index") === indexSlider
                        ? this.decorateCSS("active")
                        : ""
                    }`}
                    data-animation={this.getPropValue("hoverAnimation").join(" ")}
                  >
                    {item.image && (
                      <Base.Row className={this.decorateCSS("image-container")}>
                        <Base.Media
                          className={this.decorateCSS("image")}
                          value={item.image}
                        />
                        {item.overlay && (
                          <div className={this.decorateCSS("overlay")} />
                        )}
                      </Base.Row>
                    )}
                    {(this.castToString(item.title) || this.castToString(item.subtitle)) && (
                      <Base.VerticalContent className={this.decorateCSS("card-header")}>
                        {this.castToString(item.title) && (
                          <Base.H4 className={this.decorateCSS("card-title")}>
                            {item.title}
                          </Base.H4 >
                        )}
                        {this.castToString(item.subtitle) && (
                          <Base.H6 className={this.decorateCSS("card-subtitle")}>
                            {item.subtitle}
                          </Base.H6>
                        )}
                      </Base.VerticalContent>
                    )}

                      {this.castToString(item.button.text) && (
                        <div className={this.decorateCSS("button")}>
                          <ComposerLink path={item.button.url}>
                            <Base.Button buttonType={item.button.type} >
                              <Base.P className={this.decorateCSS("button-text")}>
                                {item.button.text}
                              </Base.P>
                              {item.button.icon && (
                                <Base.Media
                                  value={item.button.icon as unknown as TypeMediaInputValue}
                                  className={this.decorateCSS("icon")}
                                />
                              )}
                            </Base.Button>
                          </ComposerLink>
                        </div>
                      )}
                  </Base.VerticalContent>
                );
              })}
            </ComposerSlider>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default List1;
