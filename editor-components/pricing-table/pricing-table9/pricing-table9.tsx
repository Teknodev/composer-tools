import * as React from "react";
import { BasePricingTable } from "../../EditorComponent";
import styles from "./pricing-table9.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Row = {
  value: any[];
  items: Item[];
};

type Item = {
  text: JSX.Element;
  type: string;
};

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
      key: "rows",
      displayer: "Rows",
      value: [
        {
          type: "array",
          key: "items",
          displayer: "Columns",
          value: [
            {
              type: "object",
              key: "item",
              displayer: "Cell",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Content",
                  value: "",
                },
                {
                  type: "select",
                  key: "type",
                  displayer: "Type",
                  value: "Content",
                  additionalParams: {
                    selectItems: ["Title", "Content", "Benefit", "Button"],
                  },
                },
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "",
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
              key: "item",
              displayer: "Cell",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Content",
                  value: "Basic",
                },
                {
                  type: "select",
                  key: "type",
                  displayer: "Type",
                  value: "Title",
                  additionalParams: {
                    selectItems: ["Title", "Content", "Benefit", "Button"],
                  },
                },
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "FaCircleCheck",
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
              key: "item",
              displayer: "Cell",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Content",
                  value: "Starter",
                },
                {
                  type: "select",
                  key: "type",
                  displayer: "Type",
                  value: "Title",
                  additionalParams: {
                    selectItems: ["Title", "Content", "Benefit", "Button"],
                  },
                },
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "",
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
              key: "item",
              displayer: "Cell",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Content",
                  value: "Standard",
                },
                {
                  type: "select",
                  key: "type",
                  displayer: "Type",
                  value: "Title",
                  additionalParams: {
                    selectItems: ["Title", "Content", "Benefit", "Button"],
                  },
                },
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "",
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
              key: "item",
              displayer: "Cell",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Content",
                  value: "Enterprise",
                },
                {
                  type: "select",
                  key: "type",
                  displayer: "Type",
                  value: "Title",
                  additionalParams: {
                    selectItems: ["Title", "Content", "Benefit", "Button"],
                  },
                },
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "",
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
        {
          type: "array",
          key: "items",
          displayer: "Columns",
          value: [
            {
              type: "object",
              key: "item",
              displayer: "Cell",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Content",
                  value: "Hundreds of Games",
                },
                {
                  type: "select",
                  key: "type",
                  displayer: "Type",
                  value: "Benefit",
                  additionalParams: {
                    selectItems: ["Title", "Content", "Benefit", "Button"],
                  },
                },
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "",
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
              key: "item",
              displayer: "Cell",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Content",
                  value: "",
                },
                {
                  type: "select",
                  key: "type",
                  displayer: "Type",
                  value: "Content",
                  additionalParams: {
                    selectItems: ["Title", "Content", "Benefit", "Button"],
                  },
                },
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "FaCircleCheck",
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
              key: "item",
              displayer: "Cell",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Content",
                  value: "",
                },
                {
                  type: "select",
                  key: "type",
                  displayer: "Type",
                  value: "Content",
                  additionalParams: {
                    selectItems: ["Title", "Content", "Benefit", "Button"],
                  },
                },
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "FaCircleCheck",
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
              key: "item",
              displayer: "Cell",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Content",
                  value: "",
                },
                {
                  type: "select",
                  key: "type",
                  displayer: "Type",
                  value: "Content",
                  additionalParams: {
                    selectItems: ["Title", "Content", "Benefit", "Button"],
                  },
                },
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "FaCircleCheck",
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
              key: "item",
              displayer: "Cell",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Content",
                  value: "",
                },
                {
                  type: "select",
                  key: "type",
                  displayer: "Type",
                  value: "Content",
                  additionalParams: {
                    selectItems: ["Title", "Content", "Benefit", "Button"],
                  },
                },
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "FaCircleCheck",
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
        {
          type: "array",
          key: "items",
          displayer: "Columns",
          value: [
            {
              type: "object",
              key: "item",
              displayer: "Cell",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Content",
                  value: "Day one",
                },
                {
                  type: "select",
                  key: "type",
                  displayer: "Type",
                  value: "Benefit",
                  additionalParams: {
                    selectItems: ["Title", "Content", "Benefit", "Button"],
                  },
                },
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "",
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
              key: "item",
              displayer: "Cell",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Content",
                  value: "",
                },
                {
                  type: "select",
                  key: "type",
                  displayer: "Type",
                  value: "Content",
                  additionalParams: {
                    selectItems: ["Title", "Content", "Benefit", "Button"],
                  },
                },
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "FaCircleXmark",
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
              key: "item",
              displayer: "Cell",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Content",
                  value: "",
                },
                {
                  type: "select",
                  key: "type",
                  displayer: "Type",
                  value: "Content",
                  additionalParams: {
                    selectItems: ["Title", "Content", "Benefit", "Button"],
                  },
                },
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "FaCircleCheck",
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
              key: "item",
              displayer: "Cell",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Content",
                  value: "",
                },
                {
                  type: "select",
                  key: "type",
                  displayer: "Type",
                  value: "Content",
                  additionalParams: {
                    selectItems: ["Title", "Content", "Benefit", "Button"],
                  },
                },
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "FaCircleCheck",
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
              key: "item",
              displayer: "Cell",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Content",
                  value: "",
                },
                {
                  type: "select",
                  key: "type",
                  displayer: "Type",
                  value: "Content",
                  additionalParams: {
                    selectItems: ["Title", "Content", "Benefit", "Button"],
                  },
                },
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "FaCircleCheck",
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
        {
          type: "array",
          key: "items",
          displayer: "Columns",
          value: [
            {
              type: "object",
              key: "item",
              displayer: "Cell",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Content",
                  value: "Member deals & discount",
                },
                {
                  type: "select",
                  key: "type",
                  displayer: "Type",
                  value: "Benefit",
                  additionalParams: {
                    selectItems: ["Title", "Content", "Benefit", "Button"],
                  },
                },
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "",
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
              key: "item",
              displayer: "Cell",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Content",
                  value: "",
                },
                {
                  type: "select",
                  key: "type",
                  displayer: "Type",
                  value: "Content",
                  additionalParams: {
                    selectItems: ["Title", "Content", "Benefit", "Button"],
                  },
                },
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "FaCircleXmark",
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
              key: "item",
              displayer: "Cell",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Content",
                  value: "",
                },
                {
                  type: "select",
                  key: "type",
                  displayer: "Type",
                  value: "Content",
                  additionalParams: {
                    selectItems: ["Title", "Content", "Benefit", "Button"],
                  },
                },
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "FaCircleXmark",
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
              key: "item",
              displayer: "Cell",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Content",
                  value: "",
                },
                {
                  type: "select",
                  key: "type",
                  displayer: "Type",
                  value: "Content",
                  additionalParams: {
                    selectItems: ["Title", "Content", "Benefit", "Button"],
                  },
                },
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "FaCircleCheck",
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
              key: "item",
              displayer: "Cell",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Content",
                  value: "",
                },
                {
                  type: "select",
                  key: "type",
                  displayer: "Type",
                  value: "Content",
                  additionalParams: {
                    selectItems: ["Title", "Content", "Benefit", "Button"],
                  },
                },
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "FaCircleCheck",
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
        {
          type: "array",
          key: "items",
          displayer: "Columns",
          value: [
            {
              type: "object",
              key: "item",
              displayer: "Cell",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Content",
                  value: "Multiplayer Gaming",
                },
                {
                  type: "select",
                  key: "type",
                  displayer: "Type",
                  value: "Benefit",
                  additionalParams: {
                    selectItems: ["Title", "Content", "Benefit", "Button"],
                  },
                },
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "",
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
              key: "item",
              displayer: "Cell",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Content",
                  value: "",
                },
                {
                  type: "select",
                  key: "type",
                  displayer: "Type",
                  value: "Content",
                  additionalParams: {
                    selectItems: ["Title", "Content", "Benefit", "Button"],
                  },
                },
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "FaCircleXmark",
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
              key: "item",
              displayer: "Cell",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Content",
                  value: "",
                },
                {
                  type: "select",
                  key: "type",
                  displayer: "Type",
                  value: "Content",
                  additionalParams: {
                    selectItems: ["Title", "Content", "Benefit", "Button"],
                  },
                },
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "FaCircleXmark",
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
              key: "item",
              displayer: "Cell",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Content",
                  value: "",
                },
                {
                  type: "select",
                  key: "type",
                  displayer: "Type",
                  value: "Content",
                  additionalParams: {
                    selectItems: ["Title", "Content", "Benefit", "Button"],
                  },
                },
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "FaCircleXmark",
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
              key: "item",
              displayer: "Cell",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Content",
                  value: "",
                },
                {
                  type: "select",
                  key: "type",
                  displayer: "Type",
                  value: "Content",
                  additionalParams: {
                    selectItems: ["Title", "Content", "Benefit", "Button"],
                  },
                },
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "FaCircleCheck",
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
        {
          type: "array",
          key: "items",
          displayer: "Columns",
          value: [
            {
              type: "object",
              key: "item",
              displayer: "Cell",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Content",
                  value: "",
                },
                {
                  type: "select",
                  key: "type",
                  displayer: "Type",
                  value: "Content",
                  additionalParams: {
                    selectItems: ["Title", "Content", "Benefit", "Button"],
                  },
                },
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "",
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
              key: "item",
              displayer: "Cell",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Content",
                  value: "50$ / month",
                },
                {
                  type: "select",
                  key: "type",
                  displayer: "Type",
                  value: "Button",
                  additionalParams: {
                    selectItems: ["Title", "Content", "Benefit", "Button"],
                  },
                },
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "",
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
              key: "item",
              displayer: "Cell",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Content",
                  value: "75$ / month",
                },
                {
                  type: "select",
                  key: "type",
                  displayer: "Type",
                  value: "Button",
                  additionalParams: {
                    selectItems: ["Title", "Content", "Benefit", "Button"],
                  },
                },
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "",
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
              key: "item",
              displayer: "Cell",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Content",
                  value: "100$ / month",
                },
                {
                  type: "select",
                  key: "type",
                  displayer: "Type",
                  value: "Button",
                  additionalParams: {
                    selectItems: ["Title", "Content", "Benefit", "Button"],
                  },
                },
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "",
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
              key: "item",
              displayer: "Cell",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Content",
                  value: "1000$ / month",
                },
                {
                  type: "select",
                  key: "type",
                  displayer: "Type",
                  value: "Button",
                  additionalParams: {
                    selectItems: ["Title", "Content", "Benefit", "Button"],
                  },
                },
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "",
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
    });
  }

  getName(): string {
    return "Pricing 9";
  }

  elements: any = {
    Title: (e: any) => (
      <h2 className={this.decorateCSS("title")}>
        {this.getIcon(e) && (
          <ComposerIcon
            name={this.getIcon(e)}
            propsIcon={{ className: this.decorateCSS("icon") }}
          />
        )}
        {this.getText(e)}
      </h2>
    ),
    Content: (e: any) => (
      <p className={this.decorateCSS("content")}>
        {this.getIcon(e) && (
          <ComposerIcon
            name={this.getIcon(e)}
            propsIcon={{ className: this.decorateCSS("content-icon") }}
          />
        )}
        {this.getText(e)}
      </p>
    ),
    Benefit: (e: any) => (
      <h4 className={this.decorateCSS("benefit")}>
        {this.getIcon(e) && (
          <ComposerIcon
            name={this.getIcon(e)}
            propsIcon={{ className: this.decorateCSS("icon") }}
          />
        )}
        {this.getText(e)}
      </h4>
    ),
    Button: (e: any) => (
      <div className={this.decorateCSS("button")}>
        <ComposerLink path={this.getLink(e) || "#"} isFullWidth={true}>
          {this.getIcon(e) && (
            <ComposerIcon
              name={this.getIcon(e)}
              propsIcon={{ className: this.decorateCSS("icon") }}
            />
          )}
          {this.getText(e)}
        </ComposerLink>
      </div>
    ),
  };

  getText = (e: any): string => e.value[0].value;
  getType = (e: any): string => e.value[1].value;
  getIcon = (e: any): string => e.value[2].value;
  getLink = (e: any): string => e.value[3].value;

  getElement = (e: any) => {
    if (!e) return <div></div>;

    if (this.getText(e) === "" && this.getIcon(e) === "")
      return this.elements["Content"](e);
    else return this.elements[this.getType(e)](e);
  };

  render() {
    const rows = this.castToObject<Row[]>("rows");

    const maxColNumber: number = Math.max(...rows.map((e) => e.value.length));

    const benefits = rows.flatMap((row: any) =>
      row.value
        .map((item: any) => {
          if (this.getType(item) === "Benefit") {
            return this.getElement(item);
          }
          return null;
        })
        .filter((e: any) => e !== null),
    );

    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 2000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const getPlans = (rows: any[]) => {
      let arr = [];

      /**
       * get columns from every arrow.
       * if maxColNumber > row's length
       *  return empty div.
       */
      for (let i = 1; i < maxColNumber; i++) {
        const col = rows.map((e: any) => {
          if (!e.value[i]) return this.getElement(null);

          if (this.getType(e.value[i]) === "Title")
            return (
              <p
                className={`${this.decorateCSS("content")} ${this.decorateCSS(
                  "m-plan-title",
                )}`}
              >
                {this.getText(e.value[i])}
              </p>
            );
          if (this.getType(e.value[i]) === "Button")
            return (
              <div
                className={`${this.decorateCSS("button")} ${this.decorateCSS("m-plan-price")}`}
              >
                {this.getElement(e.value[i])}
              </div>
            );
          return this.getElement(e.value[i]);
        });
        arr.push(col);
      }

      return arr;
    };

    const titleExist = this.getPropValue("title", { as_string: true });
    const subtitleExist = this.getPropValue("subtitle", { as_string: true });

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {(titleExist || subtitleExist) && (
            <header>
              {titleExist && (
                <h2 className={this.decorateCSS("main-title")}>
                  {this.getPropValue("title")}
                </h2>
              )}
              {subtitleExist && (
                <h3 className={this.decorateCSS("main-subtitle")}>
                  {this.getPropValue("subtitle")}
                </h3>
              )}
            </header>
          )}
          <div className={this.decorateCSS("wrapper")}>
            <div
              className={this.decorateCSS("grid-container")}
              style={{
                gridTemplateColumns: `repeat(${maxColNumber}, 1fr)`,
                gridTemplateRows: `repeat(${rows.length}, 1fr)`,
              }}
            >
              {rows.map((row: any, i: number) => {
                const cols = row.value;
                const fillCount = maxColNumber - cols.length;

                return [...cols, ...Array(fillCount).fill(null)].map(
                  (item: any, j: number) => {
                    return <div key={`${i}-${j}`}>{this.getElement(item)}</div>;
                  },
                );
              })}
            </div>
            <div className={this.decorateCSS("mobile")}>
              <ComposerSlider {...settings}>
                {getPlans(rows).map((e: any, index: number) => (
                  <div key={index}>{e}</div>
                ))}
              </ComposerSlider>
              <div className={this.decorateCSS("m-benefits")}>
                {benefits.map((e: any) => e)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PricingTable9;
