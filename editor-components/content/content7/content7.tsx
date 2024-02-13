import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content7.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type List = {
  number: number;
  listHeader: string;
  listDescription: string;
}

class Content7 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://eremia-react.vercel.app/img/plan-project.jpg",
    })

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Our Purpose",
    })

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "WE PLAN YOUR PROJECT",
    })

    this.addProp({
      type: "array",
      key: "list",
      displayer: "List",
      value: [
        {
          type: "object",
          key: "object",
          displayer: "Object",
          value: [
            {
              type: "number",
              key: "number",
              displayer: "List Number",
              value: 1,
            },
            {
              type: "string",
              key: "listHeader",
              displayer: "List Header",
              value: "Extensive Employment",
            },
            {
              type: "string",
              key: "listDescription",
              displayer: "List Description",
              value: "Quisque placerat vitae lacus ut sceleris queusce luctus odio ac nibh luctus, in porttitor.",
            }
          ]
        },
        {
          type: "object",
          key: "object",
          displayer: "Object",
          value: [
            {
              type: "number",
              key: "number",
              displayer: "List Number",
              value: 2,
            },
            {
              type: "string",
              key: "listHeader",
              displayer: "List Header",
              value: "Dedicated Staff",
            },
            {
              type: "string",
              key: "listDescription",
              displayer: "List Description",
              value: "Quisque placerat vitae lacus ut sceleris queusce luctus odio ac nibh luctus, in porttitor.",
            }
          ]
        },
        {
          type: "object",
          key: "object",
          displayer: "Object",
          value: [
            {
              type: "number",
              key: "number",
              displayer: "List Number",
              value: 3,
            },
            {
              type: "string",
              key: "listHeader",
              displayer: "List Header",
              value: "User Experience",
            },
            {
              type: "string",
              key: "listDescription",
              displayer: "List Description",
              value: "Quisque placerat vitae lacus ut sceleris queusce luctus odio ac nibh luctus, in porttitor.",
            }
          ]
        },
      ]
    })

    this.state["componentProps"]["activeIndex"] = -1;

  }

  getName(): string {
    return "Content 7";
  }

 click(index:number) {
  let value = this.getComponentState("activeIndex") == index ? -1 : index;
  this.setComponentState("activeIndex", value);
 }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("container-common")}>
            <div className={this.decorateCSS("img-container")}>
              <img src={this.getPropValue("image")} alt="" />
            </div>

            <div className={this.decorateCSS("container-right")}>
              <div className={this.decorateCSS("right-top-inner")}>
                <h3 className={this.decorateCSS("Title")}>{this.getPropValue("title")}</h3>
                <h2 className={this.decorateCSS("description")}>{this.getPropValue("description")}</h2>
              </div>

              <div className={this.decorateCSS("right-bottom-inner")}>
                {this.castToObject<List[]>("list").map((item: List, index: number) => (
                  <div key={index} className={this.decorateCSS("list-container")}>
                    <div className={this.decorateCSS("circle")}>{item.number}</div>
                    <div className={this.decorateCSS("content-container")}>
                      <h4 className={this.decorateCSS("content-title")}>
                        {item.listHeader}
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/656/656979.png"
                          alt=""
                          className={`${this.decorateCSS("arrowImage")} ${this.getComponentState("activeIndex") == index ? this.decorateCSS("rotate") : this.decorateCSS("not-rotate")}`}
                          onClick={()=>{
                            this.click(index)
                          }}
                        />
                      </h4>
                      <p className={`${this.decorateCSS("content-description")} ${this.getComponentState("activeIndex") == index ? this.decorateCSS("active") : ""}`}>{item.listDescription}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content7;
