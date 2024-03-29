import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content18.module.scss";
import { ThirtyFpsSelect, Widgets } from "@mui/icons-material";


class Content18 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);
    interface Item {
      title: string;
      progress: number;
      progressText: string;
    }

    this.addProp({
      type: "image",
      key: "image1",
      displayer: "1st Image",
      value: "https://www.verywellmind.com/thmb/aNigsYshgeBFgbu1_DsvnNsYEHs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1368615203-4c27e5cf53214c59b5243fffe2cb7f24.jpg",
    });
    this.addProp({
      type: "image",
      key: "image2",
      displayer: "2st Image",
      value: "https://www.greatlakespsychologygroup.com/wp-content/uploads/2020/08/glpg-great-lakes-psychology-group-counseling-therapy-therapist-benefits-prepare.png",
    });
    this.addProp({
      type: "string",
      key: "badge",
      displayer: "Badge",
      value: "Why Choose Us",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Committed to Your Mental Well-being",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    });
    this.addProp({
      type: "array",
      key: "items",
      displayer: "Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "progress-title",
              displayer: "Progress Title",
              value: "Confidentiality"
            },
            {
              type: "number",
              key: "progress",
              displayer: "Progress",
              value: 90,
            },
            {
              type: "string",
              key: "progress-text",
              displayer: "Progress Text",
              value: "90%"
            },
          ]
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "progress-title",
              displayer: "Progress Title",
              value: "Consumer Satisfaction",
            },
            {
              type: "number",
              key: "progress",
              displayer: "Progress",
              value: 95
            },
            {
              type: "string",
              key: "progress-text",
              displayer: "Progress Text",
              value: "95%"
            },
          ]
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "progress-title",
              displayer: "Progress Title",
              value: "Therapy",
            },
            {
              type: "number",
              key: "progress",
              displayer: "Progress",
              value: 98
            },
            {
              type: "string",
              key: "progress-text",
              displayer: "Progress Text",
              value: "98%"
            },
          ]
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "progress-title",
              displayer: "Progress Title",
              value: "Counseling",
            },
            {
              type: "number",
              key: "progress",
              displayer: "Progress",
              value: 85
            },
            {
              type: "string",
              key: "progress-text",
              displayer: "Progress Text",
              value: "85%"
            },
          ],
        },
      ]
    });




  }

  getName(): string {
    return "Content 18";
  }

  render() {

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            <div className={this.decorateCSS("left-page")}>
              <div className={this.decorateCSS("up-image")}>
                <img className={this.decorateCSS("image1")}
                  src={this.getPropValue("image1")} alt="" />
              </div>
              <div className={this.decorateCSS("down-image")}>
                <img className={this.decorateCSS("image2")}
                  src={this.getPropValue("image2")} alt="" />
              </div>
            </div>
            <div className={this.decorateCSS("right-page")}>
              <div className={this.decorateCSS("badge")}>{this.getPropValue("badge")}</div>
              <div className={this.decorateCSS("title")}>{this.getPropValue("title")}</div>
              <p className={this.decorateCSS("description")}>{this.getPropValue("description")}</p>
              <div className={this.decorateCSS("progress-container")}>
                {this.getPropValue("items").map((item: any, index: number) =>
                  <div className={this.decorateCSS("item")} key={index}>

                    <div className={this.decorateCSS("progress-title")}>{item.value[0].value}</div>
                    <div className={this.decorateCSS("progress-percent")}>
                      <div className={this.decorateCSS("progress-text")} style={{ marginLeft: `${item.value[1].value}%` }}>{item.value[2].value}</div>
                    </div>
                    <div className={this.decorateCSS("progress-active")}>
                      <div className={this.decorateCSS("progress-passive")} style={{ width: `${item.value[1].value}%` }}></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content18;
