import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BasePricingTable } from "../../EditorComponent";
import styles from "./pricing-table9.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerSlider from "../../../composer-base-components/slider/slider";

type IIconBoxes = {
  list: any;
  title: string;
  description: string;
  price: string;
  link: string;
  buttons: Buttons[];
  icons: string;
};
type Buttons = {
  buttonText: string;
  url: string;
};

type Button = {
  buttonText: string;
  url: string;
  isPrimary: boolean;
  buttonIcon: string;
};

type Card = {
  title: string;
  button: string;
  url: string;
  price: string;
};

class PricingTable9 extends BasePricingTable {
  [x: string]: any;
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle1",
      displayer: "SubTitle 1",
      value: "Pricing table",
    });

    this.addProp({
      type: "string",
      key: "subtitle2",
      displayer: "SubTitle 2",
      value: "Modern concept",
    });

    this.addProp({
      type: "string",
      key: "title1",
      displayer: "Title 1",
      value: "Basic",
    });
    this.addProp({
      type: "string",
      key: "title2",
      displayer: "Title 2",
      value: "Standard",
    });
    this.addProp({
      type: "string",
      key: "title3",
      displayer: "Title 3",
      value: "Advanced",
    });
    this.addProp({
      type: "string",
      key: "title4",
      displayer: "Title 4",
      value: "Advanced",
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
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Tellus integer",
            },
            {
              type: "object",
              key: "list",
              displayer: "List Items",
              value: [
                {
                  type: "string",
                  key: "basic_value",
                  displayer: "Basic Value",
                  value: "Massa id neque",
                },
                {
                  type: "string",
                  key: "basic_value",
                  displayer: "Basic Value",
                  value: "Aliquam vestib",
                },
                {
                  type: "string",
                  key: "basic_value",
                  displayer: "Basic Value",
                  value: "Ulum morbi bian",
                },
                {
                  type: "string",
                  key: "basic_value",
                  displayer: "Property",
                  value: "Dit cursus risus",
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
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Feugiat scelerisque",
            },
            {
              type: "object",
              key: "list",
              displayer: "List Items",
              value: [
                {
                  type: "string",
                  key: "start_value",
                  displayer: "Start Value",
                  value: "-",
                },
                {
                  type: "string",
                  key: "start_value",
                  displayer: "Start Value",
                  value: "-",
                },
                {
                  type: "string",
                  key: "start_value",
                  displayer: "Start Value",
                  value: "Ulum morbi bian",
                },
                {
                  type: "string",
                  key: "start_value",
                  displayer: "Start Value",
                  value: "Dit cursus risus",
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
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Feugiat scelerisque",
            },
            {
              type: "object",
              key: "list",
              displayer: "List Items",
              value: [
                {
                  type: "string",
                  key: "start_value",
                  displayer: "Start Value",
                  value: "-",
                },
                {
                  type: "string",
                  key: "start_value",
                  displayer: "Start Value",
                  value: "Ulum morbi bian",
                },
                {
                  type: "string",
                  key: "start_value",
                  displayer: "Start Value",
                  value: "-",
                },
                {
                  type: "string",
                  key: "start_value",
                  displayer: "Start Value",
                  value: "Dit cursus risus",
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
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Scelerisgue varius",
            },
            {
              type: "object",
              key: "list",
              displayer: "List Items",
              value: [
                {
                  type: "string",
                  key: "standard_value",
                  displayer: "Standard Value",
                  value: "-",
                },
                {
                  type: "string",
                  key: "standard_value",
                  displayer: "Standard Value",
                  value: "-",
                },
                {
                  type: "string",
                  key: "standard_value",
                  displayer: "Standard Value",
                  value: "Ulum morbi bian",
                },
                {
                  type: "string",
                  key: "standard_value",
                  displayer: "Standard Value",
                  value: "Dit cursus risus",
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
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Feugiat scelerisque",
            },
            {
              type: "object",
              key: "list",
              displayer: "List Items",
              value: [
                {
                  type: "string",
                  key: "business_value",
                  displayer: "Business Value",
                  value: "Massa id neque",
                },
                {
                  type: "string",
                  key: "business_value",
                  displayer: "Business Value",
                  value: "-",
                },
                {
                  type: "string",
                  key: "business_value",
                  displayer: "Business Value",
                  value: "-",
                },
                {
                  type: "string",
                  key: "business_value",
                  displayer: "Business Value",
                  value: "Dit cursus risus",
                },
              ],
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "activePlan",
      displayer: "Active Plan",
      value: "monthly",
    });

    this.addProp({
      type: "string",
      key: "aylık",
      displayer: "aylık",
      value: "Aylık",
    });
    this.addProp({
      type: "string",
      key: "yıllık",
      displayer: "yıllık",
      value: "Yıllık",
    });
    this.addProp({
      type: "object",
      key: "monthly_buttons",
      displayer: "monthly_buttons",
      value: [
        {
          type: "object",
          key: "button1",
          displayer: "Button1",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "buttonText",
              value: "89,99/ for month",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "button1",
          displayer: "Button1",
          value: [
            {
              type: "string",
              key: "buttonText1",
              displayer: "buttonText1",
              value: "89,99/ for month",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "button1",
          displayer: "Button1",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "buttonText",
              value: "89,99/ for month",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "button1",
          displayer: "Button1",
          value: [
            {
              type: "string",
              key: "buttonText3",
              displayer: "buttonText3",
              value: "49,99/ for month",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "years_buttons",
      displayer: "years_buttons",
      value: [
        {
          type: "object",
          key: "button1",
          displayer: "Button1",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "buttonText",
              value: "12 month",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "button1",
          displayer: "Button1",
          value: [
            {
              type: "string",
              key: "buttonText1",
              displayer: "buttonText1",
              value: "10 month",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "button1",
          displayer: "Button1",
          value: [
            {
              type: "string",
              key: "buttonText2",
              displayer: "buttonText2",
              value: "18 month",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "button1",
          displayer: "Button1",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "buttonText",
              value: "1 month",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
      ],
    });
  }

  setActivePlan(planType: string) {
    console.log("setActivePlan: ", planType);

    this.setComponentState("activePlan", planType);
  }

  getName(): string {
    return "Pricing 9";
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: window.innerWidth < 769 ? 1 : 3,
      slidesToScroll: 1,
      focusOnSelect: true,
    };
    const activePlanButtons =
      this.getComponentState("activePlan") == "monthly"
        ? this.getPropValue("monthly_buttons")
        : this.getPropValue("years_buttons");
    console.log(activePlanButtons);
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("heading_background")}>
            <div className={this.decorateCSS("heading-right")}>
              <div
                className={
                  this.decorateCSS("plan-title") +
                  " " +
                  (this.getComponentState("activePlan") === "monthly" &&
                    this.decorateCSS("activeTab"))
                }
                onClick={() => this.setActivePlan("monthly")}
              >
                {this.getPropValue("aylık")}
              </div>
              <div
                className={
                  this.decorateCSS("plan-title") +
                  " " +
                  (this.getComponentState("activePlan") === "yearly" &&
                    this.decorateCSS("activeTab"))
                }
                onClick={() => this.setActivePlan("yearly")}
              >
                {this.getPropValue("yıllık")}
              </div>
            </div>
            <div className={this.decorateCSS("heading-left")}>
              <h3 className={this.decorateCSS("subtitle1")}>
                {this.getPropValue("subtitle1")}
              </h3>
              <h3 className={this.decorateCSS("subtitle2")}>
                {this.getPropValue("subtitle2")}
              </h3>
            </div>
          </div>
          <div className={this.decorateCSS("page-down")}>
            <table className={this.decorateCSS("card")}>
              <tbody>
                <tr>
                  <td></td>
                  <td colSpan={4}>
                    <div className={this.decorateCSS("heading-title")}>
                      <h3 className={this.decorateCSS("title1")}>
                        {this.getPropValue("title1")}
                      </h3>
                      <h3 className={this.decorateCSS("title2")}>
                        {this.getPropValue("title2")}
                      </h3>
                      <h3 className={this.decorateCSS("title3")}>
                        {this.getPropValue("title3")}
                      </h3>
                      <h3 className={this.decorateCSS("title4")}>
                        {this.getPropValue("title4")}
                      </h3>
                    </div>
                  </td>
                </tr>
                {this.castToObject<IIconBoxes[]>("cards").map(
                  (card: IIconBoxes, index: number) => (
                    <tr key={index}>
                      <td>{card.title}</td>
                      {card.list.map((listItem: any, listIndex: number) => (
                        <td key={listIndex}>{listItem.value}</td>
                      ))}
                    </tr>
                  )
                )}
                <tr>
                  <td></td>
                  <td colSpan={4}>
                    <div className={this.decorateCSS("monthly_buttons")}>
                      <div className={this.decorateCSS("button")}>
                        {activePlanButtons[0].value[0].value}
                      </div>
                      <div className={this.decorateCSS("button")}>
                        {activePlanButtons[1].value[0].value}
                      </div>
                      <div className={this.decorateCSS("button")}>
                        {activePlanButtons[2].value[0].value}
                      </div>
                      <div className={this.decorateCSS("button")}>
                        {activePlanButtons[3].value[0].value}
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>        
          <ComposerSlider
              {...settings}
              className={this.decorateCSS("slider")}
            >  
              <div className={this.decorateCSS("page-down")}>
            <table className={this.decorateCSS("card")}>
              <tbody>
                <tr>
                  <td></td>
                  <td colSpan={4}>
                    <div className={this.decorateCSS("heading-title")}>
                      <h3 className={this.decorateCSS("title1")}>
                        {this.getPropValue("title1")}
                      </h3>
                      <h3 className={this.decorateCSS("title2")}>
                        {this.getPropValue("title2")}
                      </h3>
                      <h3 className={this.decorateCSS("title3")}>
                        {this.getPropValue("title3")}
                      </h3>
                      <h3 className={this.decorateCSS("title4")}>
                        {this.getPropValue("title4")}
                      </h3>
                    </div>
                  </td>
                </tr>
                {this.castToObject<IIconBoxes[]>("cards").map(
                  (card: IIconBoxes, index: number) => (
                    <tr key={index}>
                      <td>{card.title}</td>
                      {card.list.map((listItem: any, listIndex: number) => (
                        <td key={listIndex}>{listItem.value}</td>  
                      ))}
                    </tr>
                  )
                )}
                <tr>
                  <td></td>
                  <td colSpan={4}>
                    <div className={this.decorateCSS("monthly_buttons")}>
                      <div className={this.decorateCSS("button")}>
                        {activePlanButtons[0].value[0].value}
                      </div>
                      <div className={this.decorateCSS("button")}>
                        {activePlanButtons[1].value[0].value}
                      </div>
                      <div className={this.decorateCSS("button")}>
                        {activePlanButtons[2].value[0].value}
                      </div>
                      <div className={this.decorateCSS("button")}>
                        {activePlanButtons[3].value[0].value}
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div> 
              </ComposerSlider>     
        </div>
      </div>
    );
  }
}

export default PricingTable9;
