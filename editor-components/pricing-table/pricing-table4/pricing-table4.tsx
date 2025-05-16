import * as React from "react";
import styles from "./pricing-table4.module.scss";
import { BasePricingTable, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Pricing = {
  title1: React.JSX.Element;
  list: TypeUsableComponentProps[];
  title2: React.JSX.Element;
  pricing: React.JSX.Element;
  buttons: Array<Button>;
  isFocus: boolean;
  icons: string;
};

type Button = {
  url: string;
  buttonText: React.JSX.Element;
  isPrimary: boolean;
};

class PricingMultiple extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "SubTitle",
      value: "Pricing Plans",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Featured Products",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Pricing is a crucial element of any business strategy, and small businesses need to adopt effective pricing strategies to stay competitive.",
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 3,
      max: 4,
    });

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Card",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "boolean",
              key: "isFocus",
              displayer: "Is focus",
              value: false,
            },
            {
              type: "string",
              key: "title1",
              displayer: "Title-1",
              value: "Enterprise",
            },
            {
              type: "string",
              key: "title2",
              displayer: "Title-2",
              value: "Basic Solution",
            },
            {
              type: "string",
              key: "pricing",
              displayer: "Pricing",
              value: "$150",
            },
            {
              type: "array",
              key: "list",
              displayer: "List Items",
              value: [
                {
                  type: "object",
                  key: "li",
                  displayer: "List",
                  value: [
                    {
                      type: "string",
                      key: "liText",
                      displayer: "List Item",
                      value: "One database",
                    },
                    {
                      type: "icon",
                      key: "icons",
                      displayer: "Icon",
                      value: "FaCheck",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "li",
                  displayer: "List",
                  value: [
                    {
                      type: "string",
                      key: "liText",
                      displayer: "List Item",
                      value: "Unlimited websites",
                    },
                    {
                      type: "icon",
                      key: "icons",
                      displayer: "Icon",
                      value: "FaCheck",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "li",
                  displayer: "List",
                  value: [
                    {
                      type: "string",
                      key: "liText",
                      displayer: "List Item",
                      value: "CMS Navigation",
                    },
                    {
                      type: "icon",
                      key: "icons",
                      displayer: "Icon",
                      value: "FaCheck",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "li",
                  displayer: "List",
                  value: [
                    {
                      type: "string",
                      key: "liText",
                      displayer: "List Item",
                      value: "Free updates",
                    },
                    {
                      type: "icon",
                      key: "icons",
                      displayer: "Icon",
                      value: "FaCheck",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "li",
                  displayer: "List",
                  value: [
                    {
                      type: "string",
                      key: "liText",
                      displayer: "List Item",
                      value: "Priority support",
                    },
                    {
                      type: "icon",
                      key: "icons",
                      displayer: "Icon",
                      value: "FaCheck",
                    },
                  ],
                },
              ],
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                {
                  type: "object",
                  key: "button",
                  displayer: "Button",
                  value: [INPUTS.BUTTON("buttonType", "Button", "CHOOSE PLAN", "", null, null, "Primary")],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "boolean",
              key: "isFocus",
              displayer: "Is focus",
              value: true,
            },
            {
              type: "string",
              key: "title1",
              displayer: "Title-1",
              value: "Professional",
            },
            {
              type: "string",
              key: "title2",
              displayer: "Title-2",
              value: "Advanced Platform",
            },
            {
              type: "string",
              key: "pricing",
              displayer: "Pricing",
              value: "$150",
            },
            {
              type: "array",
              key: "list",
              displayer: "List Items",
              value: [
                {
                  type: "object",
                  key: "li",
                  displayer: "List",
                  value: [
                    {
                      type: "string",
                      key: "liText",
                      displayer: "List Item",
                      value: "One database",
                    },
                    {
                      type: "icon",
                      key: "icons",
                      displayer: "Icon",
                      value: "FaCheck",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "li",
                  displayer: "List",
                  value: [
                    {
                      type: "string",
                      key: "liText",
                      displayer: "List Item",
                      value: "Unlimited websites",
                    },
                    {
                      type: "icon",
                      key: "icons",
                      displayer: "Icon",
                      value: "FaCheck",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "li",
                  displayer: "List",
                  value: [
                    {
                      type: "string",
                      key: "liText",
                      displayer: "List Item",
                      value: "CMS Navigation",
                    },
                    {
                      type: "icon",
                      key: "icons",
                      displayer: "Icon",
                      value: "FaCheck",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "li",
                  displayer: "List",
                  value: [
                    {
                      type: "string",
                      key: "liText",
                      displayer: "List Item",
                      value: "Free updates",
                    },
                    {
                      type: "icon",
                      key: "icons",
                      displayer: "Icon",
                      value: "FaCheck",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "li",
                  displayer: "List",
                  value: [
                    {
                      type: "string",
                      key: "liText",
                      displayer: "List Item",
                      value: "Priority support",
                    },
                    {
                      type: "icon",
                      key: "icons",
                      displayer: "Icon",
                      value: "FaCheck",
                    },
                  ],
                },
              ],
            },

            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                {
                  type: "object",
                  key: "button",
                  displayer: "Button",
                  value: [INPUTS.BUTTON("buttonType", "Button", "CHOOSE PLAN", "", null, null, "Primary")],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "boolean",
              key: "isFocus",
              displayer: "Is focus",
              value: false,
            },
            {
              type: "string",
              key: "title1",
              displayer: "Title-1",
              value: "Starter",
            },
            {
              type: "string",
              key: "title2",
              displayer: "Title-2",
              value: "Customizable Platform",
            },
            {
              type: "string",
              key: "pricing",
              displayer: "Pricing",
              value: "$150",
            },
            {
              type: "array",
              key: "list",
              displayer: "List Items",
              value: [
                {
                  type: "object",
                  key: "li",
                  displayer: "List",
                  value: [
                    {
                      type: "string",
                      key: "liText",
                      displayer: "List Item",
                      value: "One database",
                    },
                    {
                      type: "icon",
                      key: "icons",
                      displayer: "Icon",
                      value: "FaCheck",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "li",
                  displayer: "List",
                  value: [
                    {
                      type: "string",
                      key: "liText",
                      displayer: "List Item",
                      value: "Unlimited websites",
                    },
                    {
                      type: "icon",
                      key: "icons",
                      displayer: "Icon",
                      value: "FaCheck",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "li",
                  displayer: "List",
                  value: [
                    {
                      type: "string",
                      key: "liText",
                      displayer: "List Item",
                      value: "CMS Navigation",
                    },
                    {
                      type: "icon",
                      key: "icons",
                      displayer: "Icon",
                      value: "FaCheck",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "li",
                  displayer: "List",
                  value: [
                    {
                      type: "string",
                      key: "liText",
                      displayer: "List Item",
                      value: "Free updates",
                    },
                    {
                      type: "icon",
                      key: "icons",
                      displayer: "Icon",
                      value: "FaCheck",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "li",
                  displayer: "List",
                  value: [
                    {
                      type: "string",
                      key: "liText",
                      displayer: "List Item",
                      value: "Priority support",
                    },
                    {
                      type: "icon",
                      key: "icons",
                      displayer: "Icon",
                      value: "FaCheck",
                    },
                  ],
                },
              ],
            },

            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                {
                  type: "object",
                  key: "button",
                  displayer: "Button",
                  value: [INPUTS.BUTTON("buttonType", "Button", "CHOOSE PLAN", "", null, null, "Primary")],
                },
              ],
            },
          ],
        },
      ],
    });
    this.addProp({
      type:"multiSelect",
      key: "animations",
      displayer: "Animations",
      value: ["animation1","animation2"],
      additionalParams:{
        selectItems:["animation1","animation2"]
      }
    })
  }
  static getName(): string {
    return "Pricing 4";
  }
  render() {
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("page")}>
            <Base.VerticalContent className={this.decorateCSS("page-up")}>
              {subtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
              {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
              {description && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
            </Base.VerticalContent>

            <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount"), tablet: 1, phone: 1 }} className={this.decorateCSS("page-down")}>
              {this.castToObject<Pricing[]>("cards").map((price: Pricing, indexCards: number) => {
                const title1 = this.castToString(price.title1);
                const title2 = this.castToString(price.title2);
                const pricing = this.castToString(price.pricing);
                const hasCardUp = title1 || title2 || pricing;
                return (
                  <div key={indexCards} className={this.decorateCSS("all-card")}>
                    <Base.VerticalContent className={`${this.decorateCSS("card")} ${price.isFocus && this.decorateCSS("focused")} ${this.getPropValue("animations") 
                  && this.getPropValue("animations").map((animation:string) => this.decorateCSS(animation)).join(" ")} `}>
                      {hasCardUp && (
                        <div className={this.decorateCSS("card-up")}>
                          <Base.VerticalContent className={this.decorateCSS("card-up-texts")}>
                            {title1 && <Base.H5 className={this.decorateCSS("price-title1")}>{price.title1}</Base.H5>}
                            {title2 && <Base.P className={this.decorateCSS("price-title2")}>{price.title2}</Base.P>}
                            {pricing && <Base.H1 className={this.decorateCSS("price-pricing")}>{price.pricing}</Base.H1>}
                          </Base.VerticalContent>
                        </div>
                      )}
                      <div className={this.decorateCSS("card-middle")}>
                        <Base.VerticalContent className={this.decorateCSS("list-group")}>
                          {price.list.map((item: any, indexListGroup: number) => {
                            const liElement = this.castToString(item.liText);
                            return (
                              liElement && (
                                <Base.P key={indexListGroup} className={this.decorateCSS("list-element")}>
                                  <div className={this.decorateCSS("circle-icon")}>
                                    <ComposerIcon name={item.icons} propsIcon={{ className: this.decorateCSS("icons") }} />
                                  </div>
                                  <div className={this.decorateCSS("list-item-text")}>{item.liText}</div>                           
                                </Base.P>
                              )
                            );
                          })}
                        </Base.VerticalContent>
                      </div>
                      <div className={this.decorateCSS("card-down")}>
                        {price.buttons.map((item: any, indexButtons: number) => {
                          const buttonValue = this.castToString(item.buttonType.text);
                          return (
                            buttonValue && (
                              <Base.Button buttonType={item.buttonType.type} className={this.decorateCSS("button")}>
                                  <ComposerLink key={indexButtons} path={item.buttonType.url}>
                                    {item.buttonType.text}
                                  </ComposerLink>
                              </Base.Button>
                            )
                          );
                        })}
                      </div>
                    </Base.VerticalContent>
                  </div>
                );
              })}
            </Base.ListGrid>
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default PricingMultiple;
