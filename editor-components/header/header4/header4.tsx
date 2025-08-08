import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header4.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

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
          value: true,
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
          key: "note",
          displayer: "Note",
          value: "NOTE: Some details are very important.",
        },
      ],
    });
    this.addProp(INPUTS.BUTTON("button", "Button", "More Projects", "", null, null, "Primary"));
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
      value: true,
    });
    this.setComponentState("scrollY", 1);
  }

  handleScroll = (e: any) => {
    const container = e.target;
    const scrollY = container.scrollTop;
    this.setComponentState("scrollY", scrollY);
  };

  static getName(): string {
    return "Hero Section 4";
  }

  render() {
    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");
    let card: any = this.castToObject("card");
    const imageAnm = this.getPropValue("image-anm");
    const image = this.getPropValue("image");
    const subTitle = this.castToString(card.subtitle);
    const title = this.castToString(card.title);
    const description = this.castToString(card.desc);
    const buttonText = this.castToString(button.text);
    const note = this.castToString(card.note);
    const showCard = subTitle || title || description || buttonText || note;
    const scrollY = this.getComponentState("scrollY");

    function getStyle(direction: "up" | "down") {
      if (!imageAnm) return {};
      const transform = {
        up: scrollY / 25,
        down: -(scrollY / 50),
      };
      return {
        transform: `translate(0%, ${transform[direction]}%) translate3d(0px, 0px, 0px)`,
      };
    }

    return (
      <Base.Container
        className={`${this.decorateCSS(`container`)} ${!imageAnm && this.decorateCSS("no-image-anm")
          }`}
        onScroll={this.handleScroll}
        isFull={true}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {image && (
            <div className={this.decorateCSS("image-container")}>
              <img
                alt={image}
                className={`${this.decorateCSS("image")} ${!imageAnm && this.decorateCSS("no-img-anm")
                  }`}
                src={image}
                style={getStyle("up")}
              />
            </div>
          )}

          {showCard && (
            <div className={this.decorateCSS("card")} style={getStyle("down")}>
              <div className={this.decorateCSS("box")}>
                {(subTitle || title) && (
                  <div className={this.decorateCSS("heading")}>
                    {subTitle && (
                      <div className={this.decorateCSS("sub-heading-container")}>
                        {card.subtitle_line && (
                          <hr className={this.decorateCSS("sub-heading-line")} />
                        )}
                        <span className={this.decorateCSS("sub-heading-title")}>
                          {card.subtitle}
                        </span>
                      </div>
                    )}
                    {title && <h2 className={this.decorateCSS("title")}>{card.title}</h2>}
                  </div>
                )}
                {description && <p className={this.decorateCSS("desc")}>{card.desc}</p>}
                {buttonText && (
                  <div className={this.decorateCSS("button-container")}>
                    <ComposerLink path={card.buttonLink}>
                      <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                        {button.text}</Base.Button>
                    </ComposerLink>
                  </div>
                )}
                {this.castToString(card.note) && (
                  <p className={this.decorateCSS("note")}>{card.note}</p>
                )}
              </div>
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Header4;
