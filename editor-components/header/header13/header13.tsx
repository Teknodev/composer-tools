import * as React from "react";
import styles from "./header13.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

type RightItem = {
  icon: string;
  link: string;
}

type LeftItem = {
  label: string;
  link: string;
}

class Header13 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661907fbd2970002c6259b4?alt=media&timestamp=1719483639150",
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661907fbd2970002c6259b5?alt=media&timestamp=1719483639150",
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661907fbd2970002c6259b6?alt=media&timestamp=1719483639150",
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661907fbd2970002c6259b7?alt=media&timestamp=1719483639150",
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "left-items",
      displayer: "Left Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "label",
              value: "ARCHITECTURE",
              displayer: "Text",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "label",
              value: "WEDDING",
              displayer: "Text",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "label",
              value: "COMMERIAL",
              displayer: "Text",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "label",
              value: "FASHION",
              displayer: "Text",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "label",
              value: "LIFESTYLE",
              displayer: "Text",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "right-items",
      displayer: "Right Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "icon",
              key: "icon",
              value:
                "FaFacebook",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "icon",
              key: "icon",
              value:
                "FaInstagram",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "icon",
              key: "icon",
              value:
                "FaPinterest",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "icon",
              key: "icon",
              value:
                "FaLinkedin",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Header-13";
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      rtl: true,
    };

    const rightItems = this.castToObject<RightItem[]>("right-items");
    const leftItems = this.castToObject<LeftItem[]>("left-items");
    const slider = this.getPropValue("slider");
    const imageless = slider.length < 1;

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {!imageless &&
            <div className={this.decorateCSS("slider-parent")}>
              <ComposerSlider {...settings} className={this.decorateCSS("carousel")}>
                {slider.map(
                  (item: any, indexSlider: number) => (
                    item.value && <img
                      alt=""
                      src={item.value}
                      className={this.decorateCSS("img")}
                      key={indexSlider}
                    />
                  )
                )}
              </ComposerSlider>
            </div>}
          {(leftItems.length > 0 || rightItems.length > 0) &&
            <Base.Container className={this.decorateCSS("content-container")}>
              <Base.ContainerGrid className={`${this.decorateCSS("Box")} 
            ${imageless && this.decorateCSS("imageless")}`}>
                {leftItems.length > 0 &&
                  <Base.GridCell className={this.decorateCSS("content-left")}>
                    {leftItems.map((item: LeftItem) => {
                      return (
                        <ComposerLink path={item.link}>
                          <span className={this.decorateCSS("text")}>
                            {item.label}
                          </span>
                        </ComposerLink>
                      );
                    })}
                  </Base.GridCell>}
                {rightItems.length > 0 &&
                  <Base.GridCell className={this.decorateCSS("content-right")}>
                    {rightItems.map((item: RightItem) => {
                      return (
                        <ComposerLink path={item.link}>
                          <ComposerIcon
                            propsIcon={{ className: this.decorateCSS("icon") }}
                            name={item.icon}
                          />
                        </ComposerLink>
                      );
                    })}
                  </Base.GridCell>}
              </Base.ContainerGrid>
            </Base.Container>}
        </div>
      </div>
    );
  }
}

export default Header13;