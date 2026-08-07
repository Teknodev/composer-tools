import * as React from "react";
import { Testimonials, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./testimonials13.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type Item = {
  image: TypeMediaInputValue;
  text: React.JSX.Element;
  author: {
    name: React.JSX.Element;
    position: React.JSX.Element;
  };
};

type Button = {
  text: React.JSX.Element;
  url: string;
  icon: TypeMediaInputValue;
  type: string;
};

type Box = {
  topText: React.JSX.Element;
  number: number;
  bottomText: React.JSX.Element;
};

type RightSection = {
  boxHeader: React.JSX.Element;
  rightBoxs: Box[];
};

class Testimonials13Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "TESTIMONIALS",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Hear What Our Client Have to Say",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "incidunt ut labore et dolore magna aliqua.tempor incidunt ut labore et dolore magna aliqua. tempor incidunt ut labore et dolore magna ",
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
      type: "media",
      key: "prevIcon",
      displayer: "Prev Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "FaArrowLeftLong" },
    });
    this.addProp({
      type: "media",
      key: "nextIcon",
      displayer: "Next Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "FaArrowRightLong" },
    });
    this.addProp({
      type: "media",
      key: "sliderIcon",
      displayer: "Slider Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "ImQuotesLeft" },
    });
    this.addProp({
      type: "array",
      key: "profiles",
      displayer: "Profiles",
      value: [
        {
          type: "object",
          key: "profile1",
          displayer: "Profile 1",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661792ebd2970002c623f41?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, dolorum dignissimos, natus qui tenetur obcaecati explicabo excepturi, placeat ullam odit cumque necessitatibus? Delectus quis suscipit magnam dolorum, unde odio reprehenderit! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, dolorum dignissimos, natus qui tenetur obcaecati explicabo excepturi, placeat ullam odit cumque necessitatibus? Delectus quis suscipit magnam dolorum, unde odio reprehenderit!",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                { type: "string", key: "name", displayer: "Name", value: "Alex Madson" },
                { type: "string", key: "position", displayer: "Position", value: "Student" },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "profile2",
          displayer: "Profile 2",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661792ebd2970002c623f3f?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, dolorum dignissimos, natus qui tenetur obcaecati explicabo excepturi, placeat ullam odit cumque necessitatibus? Delectus quis suscipit magnam dolorum, unde odio reprehenderit! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, dolorum dignissimos, natus qui tenetur obcaecati explicabo excepturi, placeat ullam odit cumque necessitatibus? Delectus quis suscipit magnam dolorum, unde odio reprehenderit!",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                { type: "string", key: "name", displayer: "Name", value: "Helen Lee" },
                { type: "string", key: "position", displayer: "Position", value: "Artist" },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "profile3",
          displayer: "Profile 3",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661792ebd2970002c623f40?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, dolorum dignissimos, natus qui tenetur obcaecati explicabo excepturi, placeat ullam odit cumque necessitatibus? Delectus quis suscipit magnam dolorum, unde odio reprehenderit! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, dolorum dignissimos, natus qui tenetur obcaecati explicabo excepturi, placeat ullam odit cumque necessitatibus? Delectus quis suscipit magnam dolorum, unde odio reprehenderit!",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                { type: "string", key: "name", displayer: "Name", value: "Michael Moore" },
                { type: "string", key: "position", displayer: "Position", value: "Designer" },
              ],
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "media",
      key: "image",
      displayer: "Media",
      additionalParams: { availableTypes: ["image", "video"] },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661792ebd2970002c623f3e?alt=media&timestamp=1719483639150",
      },
    });
    this.addProp({
      type: "object",
      key: "rightSection",
      displayer: "Right Section",
      value: [
        {
          type: "string",
          key: "boxHeader",
          displayer: "Box Title",
          value: "We Provide the best service for Clients",
        },
        {
          type: "array",
          key: "rightBoxs",
          displayer: "Right Boxes",
          value: [
            {
              type: "object",
              key: "rightBox1",
              displayer: "Right Box 1",
              value: [
                {
                  type: "string",
                  key: "topText",
                  displayer: "Top Text",
                  value: "People",
                },
                {
                  type: "number",
                  key: "number",
                  displayer: "Number",
                  value: 100,
                },
                {
                  type: "string",
                  key: "bottomText",
                  displayer: "Bottom Text",
                  value: "Adipiscing elit, sed do.",
                },
              ],
            },
            {
              type: "object",
              key: "rightBox2",
              displayer: "Right Box 2",
              value: [
                {
                  type: "string",
                  key: "topText",
                  displayer: "Top Text",
                  value: "Offices",
                },
                {
                  type: "number",
                  key: "number",
                  displayer: "Number",
                  value: 12,
                },
                {
                  type: "string",
                  key: "bottomText",
                  displayer: "Bottom Text",
                  value: "Sed do eiusmod tempor.",
                },
              ],
            },
          ],
        },
      ],
    });
    this.addProp(INPUTS.SLIDER_SETTINGS("slider-settings", "Slider Settings", {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
    }));
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("active", 0);
    this.setComponentState("activeSlideIndex", 0);
  }

  static getName(): string {
    return "Testimonials 13";
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

    const rightSection = this.castToObject<RightSection>("rightSection");
    const rawBoxes = (rightSection.rightBoxs || []) as any[];
    const box: Box[] = rawBoxes.map((rawBox: any) => ({
      topText: rawBox.getPropValue?.("topText"),
      number: rawBox.getPropValue?.("number"),
      bottomText: rawBox.getPropValue?.("bottomText"),
    }));
    const card = this.castToObject<Item[]>("profiles");

    const prevIcon = this.getPropValue("prevIcon") as TypeMediaInputValue;
    const prevIconExist = prevIcon && (prevIcon.type === "icon" ? prevIcon.name : prevIcon.url);

    const nextIcon = this.getPropValue("nextIcon") as TypeMediaInputValue;
    const nextIconExist = nextIcon && (nextIcon.type === "icon" ? nextIcon.name : nextIcon.url);

    const sliderIcon = this.getPropValue("sliderIcon") as TypeMediaInputValue;
    const sliderIconExist = sliderIcon && (sliderIcon.type === "icon" ? sliderIcon.name : sliderIcon.url);

    const sideImage = this.getPropValue("image") as TypeMediaInputValue;
    const sideImageExist = sideImage && sideImage.url;

    const rawSettings = this.getPropValue("slider-settings");
    const sliderSettings = Object.fromEntries((rawSettings as any[]).map((p: any) => [p.key, p.value]));
    const settings = {
      ...sliderSettings,
      arrows: false,
      beforeChange: (_current: number, next: number) => {
        this.setComponentState("active", next);
        this.setComponentState("activeSlideIndex", next);
      },
    };
    const sliderRef = this.getComponentState("slider-ref");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ContainerGrid className={this.decorateCSS("container-grid")}>
            {(hasAnyTopContent || card.length > 0 || prevIconExist || nextIconExist || sliderIconExist) && (
              <Base.GridCell className={this.decorateCSS("grid-cell")}>
                <div className={this.decorateCSS("flexItem1")}>
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
                  <div className={this.decorateCSS("carousel-wrapper")}>
                    {sliderSettings.arrows && (prevIconExist || nextIconExist) && card.length > 1 && (
                      <div className={this.decorateCSS("nav-arrows")}>
                        {prevIconExist && (
                          <button
                            onClick={() => sliderRef.current.slickPrev()}
                            className={this.decorateCSS("arrow-button")}
                          >
                            <Base.Media value={prevIcon} className={this.decorateCSS("prev-arrow")} />
                          </button>
                        )}
                        {nextIconExist && (
                          <button
                            onClick={() => sliderRef.current.slickNext()}
                            className={this.decorateCSS("arrow-button")}
                          >
                            <Base.Media value={nextIcon} className={this.decorateCSS("next-arrow")} />
                          </button>
                        )}
                      </div>
                    )}
                    <ComposerSlider ref={sliderRef} {...settings} className={this.decorateCSS("carousel")}>
                      {card.map((item: Item, index: number) => (
                        <div key={index} className={this.decorateCSS("slider-inner-div")}>
                          <div className={this.decorateCSS("content-div")}>
                            {item.image && item.image.url && (
                              <div className={this.decorateCSS("img-div")}>
                                <Base.Media value={item.image} className={this.decorateCSS("img")} />
                              </div>
                            )}
                            {this.castToString(item.text) && (
                              <Base.P className={this.decorateCSS("item-description")}>{item.text}</Base.P>
                            )}
                            {(sliderIconExist || (item.author && (this.castToString(item.author.name) || this.castToString(item.author.position)))) && (
                              <Base.VerticalContent className={this.decorateCSS("bottom-container")}>
                                {sliderIconExist && (
                                  <Base.Media value={sliderIcon} className={this.decorateCSS("item-icon")} />
                                )}
                                {item.author && this.castToString(item.author.name) && (
                                  <Base.H6 className={this.decorateCSS("first-header")}>{item.author.name}</Base.H6>
                                )}
                                {item.author && this.castToString(item.author.position) && (
                                  <Base.P className={this.decorateCSS("item-title")}>{item.author.position}</Base.P>
                                )}
                              </Base.VerticalContent>
                            )}
                          </div>
                        </div>
                      ))}
                    </ComposerSlider>
                    {sliderSettings.dots && card.length > 1 && (
                      <div className={this.decorateCSS("dots-panel")}>
                        {card.map((_: Item, dotIndex: number) => (
                          <button
                            key={dotIndex}
                            className={`${this.decorateCSS("dot")} ${(this.getComponentState("activeSlideIndex") || 0) === dotIndex ? this.decorateCSS("dot-active") : ""}`}
                            onClick={() => sliderRef.current.slickGoTo(dotIndex)}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Base.GridCell>
            )}

            {(sideImageExist || this.castToString(rightSection.boxHeader) || box.length > 0) && (
              <Base.GridCell className={this.decorateCSS("container3")}>
                <Base.ContainerGrid className={this.decorateCSS("containerGrid")}>
                  {sideImageExist && (
                    <Base.GridCell className={this.decorateCSS("flexItem2")}>
                      <Base.Media value={sideImage} className={this.decorateCSS("side-image")} />
                    </Base.GridCell>
                  )}
                  {(this.castToString(rightSection.boxHeader) || box.length > 0) && (
                    <Base.GridCell className={this.decorateCSS("flexItem3")}>
                      <Base.VerticalContent className={this.decorateCSS("flexItem3-content")}>
                        {this.castToString(rightSection.boxHeader) && (
                          <Base.H4 className={this.decorateCSS("item_title_text")}>{rightSection.boxHeader}</Base.H4>
                        )}
                        <div className={this.decorateCSS("container4")}>
                          {box.map((item: Box, index: number) => (
                            <div key={index} className={this.decorateCSS("containerBottom")}>
                              {this.castToString(item.topText) && (
                                <div className={this.decorateCSS("topWriting")}>{item.topText}</div>
                              )}
                              {item.number && (
                                <div className={this.decorateCSS("middleWriting")}>{item.number}</div>
                              )}
                              {this.castToString(item.bottomText) && (
                                <div className={this.decorateCSS("bottomWriting")}>{item.bottomText}</div>
                              )}
                            </div>
                          ))}
                        </div>
                      </Base.VerticalContent>
                    </Base.GridCell>
                  )}
                </Base.ContainerGrid>
              </Base.GridCell>
            )}
          </Base.ContainerGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}
export default Testimonials13Page;
