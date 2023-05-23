import * as React from "react";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar1.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import TableRowsIcon from "@mui/icons-material/TableRows";

class Navbar1 extends BaseNavigator {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://dstal.com.au/wp-content/uploads/2021/09/logoipsum.png",
    });

    this.addProp({
      type: "boolean",
      key: "sticky",
      displayer: "Is sticky",
      value: false,
    });

    this.addProp({
      type: "array",
      key: "itemList",
      displayer: "Items",
      value: [
        {
          type: "string",
          key: "items",
          value: "Features",
          displayer: "Item",
        },
        {
          type: "string",
          key: "items",
          value: "Solutions",
          displayer: "Item",
        },
        {
          type: "string",
          key: "items",
          value: "Resources",
          displayer: "Item",
        },
        {
          type: "string",
          key: "items",
          value: "Pricing",
          displayer: "Item",
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "buttonList",
      displayer: "Button",
      value: [
        {
          type: "object",
          key: "buttonItems",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "text",
              value: "Learn More",
              displayer: "Text",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Link",
            },
          ],
        },
      ],
    });

    this.state["componentProps"]["navActive"] = false;
  }

  getName(): string {
    return "Navbar 1";
  }

  navClick() {
    let value: boolean = this.state.componentProps["navActive"];
    this.state.componentProps["navActive"] = !value;
    console.log("test", this.state.componentProps["navActive"]);
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <nav className={this.decorateCSS("navigator")}>
            <img src={this.getPropValue("image")} width={200} />
            <div className={this.decorateCSS("items")}>
              {this.castToObject<[]>("itemList").map(
                (data: any, indexItemList: number) => {
                  return <h3 key={indexItemList}>{data.value}</h3>;
                }
              )}
              {this.castToObject<[]>("buttonList").map(
                (data: any, indexButtonList: number) => {
                  return (
                    <ComposerLink
                      key={indexButtonList}
                      path={data.value[1].value}
                    >
                      <button>{data.value[0].value}</button>
                    </ComposerLink>
                  );
                }
              )}
            </div>
          </nav>
          <nav className={this.decorateCSS("navigator-mobile")}>
            <div className={this.decorateCSS("navbar")}>
              <img src={this.getPropValue("image")} width={200} />
              <TableRowsIcon onClick={() => {this.navClick()}} fontSize="large" />
            </div>
            {(this.state.componentProps["navActive"] == true) && (
              <div className={this.decorateCSS("navbar-child")}></div>
            )}
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar1;
