import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header4.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class Header4 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "card",
      displayer: "Card",
      value: [
        {
          type: "boolean",
          key: "subtitle_line",
          displayer: "Subtitle Line",
          value: true
        },
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value: "Build perfect websites",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Unlimited power",
        },
        {
          type: "string",
          key: "desc",
          displayer: "Description",
          value:
            "Most of our writings have centered on implementing strategies for business units, with their unique <br /><br /> geeza arse it’s your round grub sloshed burke, my good sir chancer he legged it he lost his bottle pear shaped bugger all mate",
        },
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: "More Projects",
        },
        {
          type: "page",
          key: "buttonLink",
          displayer: "Button Link",
          value: "",
        },
        {
          type: "icon",
          key: "buttonIcon",
          displayer: "Button Icon",
          value: "FaArrowRight",
        },
        {
          type: "string",
          key: "note",
          displayer: "Note",
          value: "NOTE: Some details are very important.",
        },
      ],
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617f0abd2970002c62451a?alt=media&timestamp=1719483639150",
    });
    this.addProp({
      type: "boolean",
      key: "image-anm",
      displayer: "Image Animation",
      value: true
    });

    this.setComponentState("scrollY", 1);
  }

  handleScroll = (e: any) => {
    const container = e.target;
    const scrollY = container.scrollTop;
    this.setComponentState("scrollY", scrollY);
  };


  getName(): string {
    return "Header 4";
  }

  render() {
    let card: any = this.castToObject("card");
    const imageAnm = this.getPropValue("image-anm");

    return (
      <div className={`${this.decorateCSS("container")} ${!imageAnm && this.decorateCSS("no-image-anm")}`} onScroll={this.handleScroll}>
        <div className={this.decorateCSS("max-content")}>
          {this.getPropValue("image") && (
            <div className={this.decorateCSS("image-container")}>
              <img
                alt=""
                className={`${this.decorateCSS("image")} ${!imageAnm && this.decorateCSS("no-img-anm")}`}
                src={this.getPropValue("image")}
                style={
                  imageAnm ? {
                    transform: `translate(0%, ${this.getComponentState("scrollY") / 25}%) translate3d(0px, 0px, 0px)`
                  } : {}
                }
              />
            </div>
          )}

          {(this.castToString(card.subtitle) ||
            this.castToString(card.title) ||
            this.castToString(card.desc) ||
            this.castToString(card.buttonText) ||
            this.castToString(card.note)) && (
              <div className={this.decorateCSS("card")}
                style={
                  imageAnm ? {
                    transform: `translate(0%, -${this.getComponentState("scrollY") / 50}%) translate3d(0px, 0px, 0px)`
                  } : {}
                }>
                <div className={this.decorateCSS("box")}>
                  {(this.castToString(card.subtitle) || this.castToString(card.title)) && (
                    <div className={this.decorateCSS("heading")}>
                      {this.castToString(card.subtitle) &&
                        (
                          <div className={this.decorateCSS("sub-heading-container")}>
                            {card.subtitle_line && <hr className={this.decorateCSS("sub-heading-line")} />}
                            <span className={this.decorateCSS("sub-heading-title")}>{card.subtitle}</span>
                          </div>
                        )
                      }
                      {this.castToString(card.title) && <h2 className={this.decorateCSS("title")}>{card.title}</h2>}
                    </div>
                  )}
                  {this.castToString(card.desc) && <p className={this.decorateCSS("desc")}>{card.desc}</p>}
                  {this.castToString(card.buttonText) && (
                    <ComposerLink path={card.buttonLink}>
                      <div className={this.decorateCSS("button-content")}>
                        <p className={this.decorateCSS("buttonText")}>{card.buttonText}</p>
                        <ComposerIcon
                          name={card.buttonIcon}
                          propsIcon={{ className: `${this.decorateCSS("button-icon")}` }}
                        />
                      </div>
                    </ComposerLink>
                  )}
                  {this.castToString(card.note) && <p className={this.decorateCSS("note")}>{card.note}</p>}
                </div>
              </div>
            )}
        </div>
      </div >
    );
  }
}

export default Header4;
