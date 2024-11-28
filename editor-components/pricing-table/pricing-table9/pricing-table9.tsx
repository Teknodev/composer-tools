import * as React from "react";
import { BasePricingTable } from "../../EditorComponent";
import styles from "./pricing-table9.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Base } from "../../../composer-base-components/base/base";

class PricingTable9 extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Choose your plan",
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Decide according to your needs.",
    });

    this.addProp({
      type: "array",
      key: "columns",
      displayer: "Columns",
      value: [
        {
          type: "object",
          key: "columnContent",
          displayer: "Column Content",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Basic",
            },
            {
              type: "string",
              key: "button",
              displayer: "Button",
              value: "50$/ month",
            },
            {
              type: "array",
              key: "contents",
              displayer: "Contents",
              value: [
                {
                  type: "object",
                  key: "content",
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "",
                    },
                    {
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcCheckmark",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Link",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "content",
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "",
                    },
                    {
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcCheckmark",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Link",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "content",
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "",
                    },
                    {
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcCheckmark",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Link",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "content",
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "",
                    },
                    {
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcCheckmark",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Link",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "content",
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "",
                    },
                    {
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcCheckmark",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Link",
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
          key: "columnContent",
          displayer: "Column Content",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Starter",
            },
            {
              type: "string",
              key: "button",
              displayer: "Button",
              value: "75$/ month",
            },
            {
              type: "array",
              key: "contents",
              displayer: "Contents",
              value: [
                {
                  type: "object",
                  key: "content",
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "",
                    },
                    {
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcCheckmark",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Link",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "content",
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "",
                    },
                    {
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcCheckmark",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Link",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "content",
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "",
                    },
                    {
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcCheckmark",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Link",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "content",
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "",
                    },
                    {
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcCheckmark",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Link",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "content",
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "",
                    },
                    {
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcCheckmark",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Link",
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
          key: "columnContent",
          displayer: "Column Content",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Standart",
            },
            {
              type: "string",
              key: "button",
              displayer: "Button",
              value: "100$/ month",
            },
            {
              type: "array",
              key: "contents",
              displayer: "Contents",
              value: [
                {
                  type: "object",
                  key: "content",
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "",
                    },
                    {
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcCheckmark",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Link",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "content",
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "",
                    },
                    {
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcCheckmark",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Link",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "content",
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "",
                    },
                    {
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcCheckmark",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Link",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "content",
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "",
                    },
                    {
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcCheckmark",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Link",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "content",
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "",
                    },
                    {
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcCheckmark",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Link",
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
          key: "columnContent",
          displayer: "Column Content",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Enterprise",
            },
            {
              type: "string",
              key: "button",
              displayer: "Button",
              value: "1000$/ month",
            },
            {
              type: "array",
              key: "contents",
              displayer: "Contents",
              value: [
                {
                  type: "object",
                  key: "content",
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "",
                    },
                    {
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcCheckmark",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Link",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "content",
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "",
                    },
                    {
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcCheckmark",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Link",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "content",
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "",
                    },
                    {
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcCheckmark",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Link",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "content",
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "",
                    },
                    {
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcCheckmark",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Link",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "content",
                  displayer: "Content",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Content",
                      value: "",
                    },
                    {
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcCheckmark",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Link",
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
      type: "array",
      key: "benefits",
      displayer: "Benefits",
      value: [
        {
          type: "object",
          key: "benefit",
          displayer: "Benefit",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "benefit",
          displayer: "Benefit",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Remote device",
            },
          ],
        },
        {
          type: "object",
          key: "benefit",
          displayer: "Benefit",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Access from anywhere",
            },
          ],
        },
        {
          type: "object",
          key: "benefit",
          displayer: "Benefit",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "7/24 Helpdesk",
            },
          ],
        },
        {
          type: "object",
          key: "benefit",
          displayer: "Benefit",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Advanced statistics",
            },
          ],
        },
        {
          type: "object",
          key: "benefit",
          displayer: "Benefit",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "User management",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Pricing 9";
  }

  render() {
    const settings = {
      arrows: false,
      dots: true,
      dotsClass: this.decorateCSS("dots"),
      infinite: true,
      speed: 2000,
      autoplay: true,
      slidesToShow: 1,
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

    const titleExist = this.getPropValue("title", { as_string: true });
    const subtitleExist = this.getPropValue("subtitle", { as_string: true });

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(titleExist || subtitleExist) && (
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
              {subtitleExist && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("subtitle")}</Base.SectionDescription>}
            </Base.VerticalContent>
          )}
          <div className={this.decorateCSS("container")}>
            <div className={this.decorateCSS("benefits-column")}>
              {this.castToObject<string[]>("benefits").map((benefit: any, index: any) => (
                <div key={`benefit-${index}`} className={this.decorateCSS("benefit-item")}>
                  <Base.H5 className={this.decorateCSS("benefit-title")}>{benefit?.title}</Base.H5>
                </div>
              ))}
            </div>

            <div className={this.decorateCSS("columns-container")}>
              {this.castToObject<string[]>("columns").map((column: any, index: any) => (
                <div key={`column-${index}`} className={this.decorateCSS("column-item")}>
                  <Base.H3 className={this.decorateCSS("column-title")}>{column?.title}</Base.H3>
                  <div className={this.decorateCSS("column-contents")}>
                    {column?.contents.map((content: any, contentIndex: any) => (
                      <div key={`content-${contentIndex}`} className={this.decorateCSS("content-item")}>
                        {content?.icon && (
                          <span className={this.decorateCSS("content-icon")}>
                            <ComposerIcon name={content.icon} />
                          </span>
                        )}
                        <Base.P className={this.decorateCSS("content-text")}>{content?.text}</Base.P>
                      </div>
                    ))}
                  </div>
                  <div className={this.decorateCSS("column-button-container")}>
                    <ComposerLink>
                      <Base.Button className={this.decorateCSS("column-button")}>{column?.button}</Base.Button>
                    </ComposerLink>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={this.decorateCSS("slider")}>
            <div className={this.decorateCSS("benefits-column")}>
              {this.castToObject<string[]>("benefits").map((benefit: any, index: any) => (
                <div key={`benefit-${index}`} className={this.decorateCSS("benefit-item")}>
                  <Base.H5 className={this.decorateCSS("benefit-title")}>{benefit?.title}</Base.H5>
                </div>
              ))}
            </div>

            <div className={this.decorateCSS("slider-container")}>
              <ComposerSlider {...settings}>
                {this.castToObject<string[]>("columns").map((column: any, index: any) => (
                  <div key={`column-${index}`} className={this.decorateCSS("column-item")}>
                    <Base.H3 className={this.decorateCSS("column-title")}>{column?.title}</Base.H3>
                    <div className={this.decorateCSS("column-contents")}>
                      {column?.contents.map((content: any, contentIndex: any) => (
                        <div key={`content-${contentIndex}`} className={this.decorateCSS("content-item")}>
                          {content?.icon && (
                            <span className={this.decorateCSS("content-icon")}>
                              <ComposerIcon name={content.icon} />
                            </span>
                          )}
                          <Base.P className={this.decorateCSS("content-text")}>{content?.text}</Base.P>
                        </div>
                      ))}
                    </div>
                    <div className={this.decorateCSS("column-button-container")}>
                      <ComposerLink>
                        <Base.Button className={this.decorateCSS("column-button")}>{column?.button}</Base.Button>
                      </ComposerLink>
                    </div>
                  </div>
                ))}
              </ComposerSlider>
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default PricingTable9;
