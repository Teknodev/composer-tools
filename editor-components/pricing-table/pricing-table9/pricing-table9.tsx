import * as React from "react";
import { BasePricingTable } from "../../EditorComponent";
import styles from "./pricing-table9.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

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
      key: "description",
      displayer: "Description",
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

            INPUTS.BUTTON("buttonType", "Button", "50$/ month", "", null, null, "Primary"),
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

            INPUTS.BUTTON("buttonType", "Button", "75$/ month", "", null, null, "Primary"),

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
            INPUTS.BUTTON("buttonType", "Button", "100$/ month", "", null, null, "Primary"),

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
            INPUTS.BUTTON("buttonType", "Button", "1000$/ month", "", null, null, "Primary"),

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
    this.addProp({
      type:"multiSelect",
      key: "animations",
      displayer: "Animations",
      value: ["animation1", "animation2", "animation3"],
      additionalParams:{
        selectItems:["animation1", "animation2", "animation3"]
      }
    })
  }

  static getName(): string {
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

    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(titleExist || descriptionExist) && (
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
              {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
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
              {this.castToObject<string[]>("columns").map((column: any, index: any) => {
                const buttonTextExist = this.castToString(column?.buttonType.text);
                const titleExist = this.castToString(column?.title);
                return (
                  <div key={`column-${index}`} className={`${this.decorateCSS("column-item")}
                   ${this.getPropValue("animations") && this.getPropValue("animations").map((animation:string) => this.decorateCSS(animation)).join(" ")} `}>
                    <div className={this.decorateCSS("title-container")}>{titleExist && <Base.H3 className={this.decorateCSS("column-title")}>{column?.title}</Base.H3>}</div>
                    <div className={this.decorateCSS("column-contents")}>
                      {column?.contents.map((content: any, contentIndex: any) => (
                        <div key={`content-${contentIndex}`} className={this.decorateCSS("content-item")}>
                          {content?.icon && (
                            <span className={this.decorateCSS("content-icon")}>
                              <Base.Icon propsIcon={{ className: this.decorateCSS("icon") }} name={content.icon} />
                            </span>
                          )}
                          {this.castToString(content.text) && <Base.P className={this.decorateCSS("content-text")}>{content?.text}</Base.P>}
                        </div>
                      ))}
                    </div>
                    {buttonTextExist && (
                      <div className={this.decorateCSS("column-button-container")}>
                        <ComposerLink path={column.buttonType.url}>
                          <Base.Button buttonType={column.buttonType.type} className={this.decorateCSS("column-button")}>
                            {column?.buttonType.text}
                          </Base.Button>
                        </ComposerLink>
                      </div>
                    )}
                  </div>
                );
              })}
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
                {this.castToObject<string[]>("columns").map((column: any, index: any) => {
                  const buttonTextExist = this.castToString(column?.buttonType.text);
                  const titleExist = this.castToString(column?.title);
                  return (
                    <div key={`column-${index}`} className={this.decorateCSS("column-item")}>
                      <div className={this.decorateCSS("title-container")}>{titleExist && <Base.H3 className={this.decorateCSS("column-title")}>{column?.title}</Base.H3>}</div>
                      <div className={this.decorateCSS("column-contents")}>
                        {column?.contents.map((content: any, contentIndex: any) => (
                          <div key={`content-${contentIndex}`} className={this.decorateCSS("content-item")}>
                            {content?.icon && (
                              <span className={this.decorateCSS("content-icon")}>
                                <Base.Icon propsIcon={{ className: this.decorateCSS("icon") }} name={content.icon} />
                              </span>
                            )}
                            {this.castToString(content.text) && <Base.P className={this.decorateCSS("content-text")}>{content?.text}</Base.P>}
                          </div>
                        ))}
                      </div>
                      {buttonTextExist && (
                        <div className={this.decorateCSS("column-button-container")}>
                          <ComposerLink path={column.buttonType.url}>
                            <Base.Button buttonType={column.buttonType.type} className={this.decorateCSS("column-button")}>
                              {column?.buttonType.text}
                            </Base.Button>
                          </ComposerLink>
                        </div>
                      )}
                    </div>
                  );
                })}
              </ComposerSlider>
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default PricingTable9;
