import * as React from "react";
import styles from "./team11.module.scss";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { Base } from "../../../composer-base-components/base/base";
import ComposerSlider from "../../../composer-base-components/slider/slider";

class Team11 extends Team {
  constructor(props?: any) {
    super(props, styles);
    let twitter: TypeUsableComponentProps = {
      type: "object",
      key: "twitter",
      displayer: "Twitter",
      value: [
        {
          type: "image",
          key: "icon",
          displayer: "Platform Icon",
          value: "FaTwitter",
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: "",
        },
      ],
    };
    let facebook: TypeUsableComponentProps = {
      type: "object",
      key: "facebook",
      displayer: "Facebook",
      value: [
        {
          type: "image",
          key: "icon",
          displayer: "Platform Icon",
          value: "FaFacebook",
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: "",
        },
      ],
    };
    let instagram: TypeUsableComponentProps = {
      type: "object",
      key: "instagram",
      displayer: "Instagram",
      value: [
        {
          type: "image",
          key: "icon",
          displayer: "Platform Icon",
          value: "FaInstagram",
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: "",
        },
      ],
    };
    let youtube: TypeUsableComponentProps = {
      type: "object",
      key: "youtube",
      displayer: "Youtube",
      value: [
        {
          type: "image",
          key: "icon",
          displayer: "Platform Icon",
          value: "TfiYoutube",
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: "",
        },
      ],
    };
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Our Team",
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 3,
    });

    this.addProp({
      type: "icon",
      key: "nextIcon",
      displayer: "Next icon",
      value: "GrCaretNext",
    });
    this.addProp({
      type: "icon",
      key: "prevIcon",
      displayer: "Prev icon",
      value: "GrCaretPrevious",
    });

    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        {
          type: "object",
          key: "slider-card",
          displayer: "Slider Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64370fa168c3c2002cd30832?alt=media&timestamp=1719558632843",
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
              displayer: "position",
              value: "Defender",
            },
            {
              type: "array",
              key: "icons",
              displayer: "Social Media Platforms",
              value: [JSON.parse(JSON.stringify(twitter)), JSON.parse(JSON.stringify(facebook)), JSON.parse(JSON.stringify(instagram)), JSON.parse(JSON.stringify(youtube))],
            },
          ],
        },
        {
          type: "object",
          key: "slider-card",
          displayer: "Slider Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64370fa168c3c2002cd30833?alt=media&timestamp=1719558632843",
            },
            {
              type: "array",
              key: "icons",
              displayer: "Social Media Platforms",
              value: [JSON.parse(JSON.stringify(twitter)), JSON.parse(JSON.stringify(facebook)), JSON.parse(JSON.stringify(instagram)), JSON.parse(JSON.stringify(youtube))],
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
              displayer: "position",
              value: "Defender",
            },
          ],
        },
        {
          type: "object",
          key: "slider-card",
          displayer: "Slider Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b588bd2970002c6282c6?alt=media&timestamp=1719558632841",
            },
            {
              type: "array",
              key: "icons",
              displayer: "Social Media Platforms",
              value: [JSON.parse(JSON.stringify(twitter)), JSON.parse(JSON.stringify(facebook)), JSON.parse(JSON.stringify(instagram)), JSON.parse(JSON.stringify(youtube))],
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
              displayer: "position",
              value: "Defender",
            },
          ],
        },
        {
          type: "object",
          key: "slider-card",
          displayer: "Slider Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64370fa168c3c2002cd30832?alt=media&timestamp=1719558632843",
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
              displayer: "position",
              value: "Defender",
            },
            {
              type: "array",
              key: "icons",
              displayer: "Social Media Platforms",
              value: [JSON.parse(JSON.stringify(twitter)), JSON.parse(JSON.stringify(facebook)), JSON.parse(JSON.stringify(instagram)), JSON.parse(JSON.stringify(youtube))],
            },
          ],
        },
        {
          type: "object",
          key: "slider-card",
          displayer: "Slider Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64370fa168c3c2002cd30833?alt=media&timestamp=1719558632843",
            },
            {
              type: "array",
              key: "icons",
              displayer: "Social Media Platforms",
              value: [JSON.parse(JSON.stringify(twitter)), JSON.parse(JSON.stringify(facebook)), JSON.parse(JSON.stringify(instagram)), JSON.parse(JSON.stringify(youtube))],
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
              displayer: "position",
              value: "Defender",
            },
          ],
        },
        {
          type: "object",
          key: "slider-card",
          displayer: "Slider Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b588bd2970002c6282c6?alt=media&timestamp=1719558632841",
            },
            {
              type: "array",
              key: "icons",
              displayer: "Social Media Platforms",
              value: [JSON.parse(JSON.stringify(twitter)), JSON.parse(JSON.stringify(facebook)), JSON.parse(JSON.stringify(instagram)), JSON.parse(JSON.stringify(youtube))],
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
              displayer: "position",
              value: "Defender",
            },
          ],
        },
      ],
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

    this.setComponentState("slider-ref", React.createRef());
  }
  static getName(): string {
    return "Team 11";
  }
  render() {
    const slider = this.castToObject<any[]>("slider");

    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      dotsClass: this.decorateCSS("dots"),
      autoplaySpeed: 3000,
      slidesToShow: slider.length < this.getPropValue("itemCount") ? slider.length : this.getPropValue("itemCount"),
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    const title = this.getPropValue("title");
    const titleExist = this.castToString(title);
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("basic-page")}>
            {titleExist && (
              <Base.VerticalContent className={this.decorateCSS("up-page")}>
                <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>
              </Base.VerticalContent>
            )}

            <ComposerSlider {...settings} ref={this.getComponentState("slider-ref")} className={this.decorateCSS("down-page")}>
              {this.castToObject<any[]>("slider").map((item: any, indexSlider: number) => {
                const itemNameExist = this.castToString(item.name);
                const itemPositionExist = this.castToString(item.position);

                const itemExits = itemNameExist || itemPositionExist || item.image || item.icons.length > 0;
                return (
                  itemExits && (
                    <div key={indexSlider} className={this.decorateCSS("item")}>
                      <Base.VerticalContent className={this.decorateCSS("card")} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                        <div className={this.decorateCSS("hover")}>
                          <img className={this.decorateCSS("person-image")} src={item.image} alt={" "} />
                          {item.icons && item.icons.length > 0 && (
                            <div className={this.decorateCSS("icons-bar")} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                              {item.icons.map((el: any, indexIcon: number) => (
                                <ComposerLink path={el.url} key={indexIcon}>
                                  <Base.Icon name={el.icon} propsIcon={{ className: this.decorateCSS("icon") }} />
                                </ComposerLink>
                              ))}
                            </div>
                          )}
                        </div>
                        <Base.VerticalContent className={this.decorateCSS("person-info")}>
                          <Base.VerticalContent className={this.decorateCSS("text-group")}>
                            {itemNameExist && <Base.H2 className={this.decorateCSS("item-name")}>{item.name}</Base.H2>}
                            {itemPositionExist && <Base.H3 className={this.decorateCSS("item-position")}>{item.position}</Base.H3>}
                          </Base.VerticalContent>
                        </Base.VerticalContent>
                      </Base.VerticalContent>
                    </div>
                  )
                );
              })}
            </ComposerSlider>

            <div className={slider.length > 3 ? this.decorateCSS("nav-buttons") : this.decorateCSS("visible-navs")}>
              <Base.Icon
                name={this.getPropValue("prevIcon")}
                propsIcon={{
                  className: `${this.decorateCSS("prev_icon")}`,
                  size: 45,
                  onClick: () => {
                    this.getComponentState("slider-ref").current.slickPrev();
                  },
                }}
              />
              <Base.Icon
                name={this.getPropValue("nextIcon")}
                propsIcon={{
                  className: `${this.decorateCSS("next_icon")}`,
                  size: 45,
                  onClick: () => {
                    this.getComponentState("slider-ref").current.slickNext();
                  },
                }}
              />
            </div>
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Team11;
