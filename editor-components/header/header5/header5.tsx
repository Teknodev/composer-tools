import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header5.module.scss";
import { Title } from "../../../../components/section-card/section-card";
import { jsx } from "@emotion/react";

type Heading = {
  titleColored: string;
  title: JSX.Element;
  description: JSX.Element;
  buttonText: JSX.Element;
  link: string;
  overlay: boolean;
  backgroundImage: string;
}

class Header5 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "object",
      key: "heading",
      displayer: "Heading",
      value: [
        {
          type: "string",
          key: "titleColored",
          displayer: "Subtitle",
          value: "Motivation",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "THE ART OF FOOD",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "PHOTOGRAPHY",
        },

        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: true,
        },
        {
          type: "image",
          key: "backgroundImage",
          displayer: "Background Image",
          value:
            "https://static.wixstatic.com/media/f61af8_97a68d95c3584eee8952b7b3184f5f80~mv2_d_6924_3840_s_4_2.jpg/v1/fill/w_1699,h_1125,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_97a68d95c3584eee8952b7b3184f5f80~mv2_d_6924_3840_s_4_2.jpg",
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "View More",
            },

            {
              type: "page",
              key: "link",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Header 5";
  }

  render() {

    const heading = this.castToObject<Heading>("heading");

    
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div
            className={this.decorateCSS("background-layer")}
            style={{
              backgroundImage: `url(${heading.backgroundImage})`,
            }}
          >
            <div className={heading.overlay && this.decorateCSS("overlay")}>
              <div className={this.decorateCSS("heading-page")}>
                <h1 className={this.decorateCSS("heading-section-name")}>{heading.titleColored}</h1>
                <h2 className={this.decorateCSS("heading-title")}>{heading.title}</h2>
                <h3 className={this.decorateCSS("heading-subtitle")}>{heading.description}</h3>
                <div className={this.decorateCSS("buttondiv")}>
                {this.getPropValue("buttons").map(
                  (item: any, indexButtons: number) => {
                    return (
                      <ComposerLink
                        key={indexButtons}
                        path={item.value[1].value}
                      >
                        <button
                          className={`${this.decorateCSS("button")}`}
                        >
                          {item.value[0].value}
                        </button>
                      </ComposerLink>
                    );
                  }
                )}
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header5;
