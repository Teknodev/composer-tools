import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header1.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class Header1 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "background-layout",
      displayer: "Background Layout",
      value:
        "https://craftohtml.themezaa.com/images/demo-vertical-portfolio-bg-03.jpg",
    });
    this.addProp({
      type: "image",
      key: "sun",
      displayer: "Sun",
      value:
        "https://craftohtml.themezaa.com/images/demo-vertical-portfolio-bg-01.png",
    });
    this.addProp({
      type: "array",
      key: "sliders",
      displayer: "Sliders",
      value: [
        {
          type: "object",
          key: "slider",
          displayer: "Slider - 1",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "FORWARD",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "SubTitle",
              value: "BRANDING AND IDENTITY",
            },
            {
              type: "number",
              key: "slider-number",
              displayer: "Slider Number",
              value: 0o1,
            },
            {
              type: "image",
              key: "image",
              displayer: "Image-1",
              value:
                "https://craftohtml.themezaa.com/images/demo-vertical-portfolio-slider-img-01.jpg",
            },
          ],
        },
        {
          type: "object",
          key: "slider",
          displayer: "Slider - 2",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "PIXFLOW",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "SubTitle",
              value: "WEB AND APPLICATION",
            },
            {
              type: "number",
              key: "slider-number",
              displayer: "Slider Number",
              value: 0o2,
            },
            {
              type: "image",
              key: "image",
              displayer: "Image-2",
              value:
                "https://craftohtml.themezaa.com/images/demo-vertical-portfolio-slider-img-02.jpg",
            },
          ],
        },
        {
          type: "object",
          key: "slider",
          displayer: "Slider - 3",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "HARDDOT",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "SubTitle",
              value: "GRAPHICS AND IDENTITY",
            },
            {
              type: "number",
              key: "slider-number",
              displayer: "Slider Number",
              value: 0o3,
            },
            {
              type: "image",
              key: "image",
              displayer: "Image-3",
              value:
                "https://craftohtml.themezaa.com/images/demo-vertical-portfolio-slider-img-03.jpg",
            },
          ],
        },
        {
          type: "object",
          key: "slider",
          displayer: "Slider - 4",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "TRAVELIO",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "SubTitle",
              value: "PACKAGING AND WEB",
            },
            {
              type: "number",
              key: "slider-number",
              displayer: "Slider Number",
              value: 0o4,
            },
            {
              type: "image",
              key: "image",
              displayer: "Image-4",
              value:
                "https://craftohtml.themezaa.com/images/demo-vertical-portfolio-slider-img-04.jpg",
            },
          ],
        },
        {
          type: "object",
          key: "slider",
          displayer: "Slider - 5",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "CROPOES",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "SubTitle",
              value: "DESIGN AND IDENTITY",
            },
            {
              type: "number",
              key: "slider-number",
              displayer: "Slider Number",
              value: 0o5,
            },
            {
              type: "image",
              key: "image",
              displayer: "Image-5",
              value:
                "https://craftohtml.themezaa.com/images/demo-vertical-portfolio-slider-img-05.jpg",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Header 1";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("image-container-1")}>
          <img src={this.getPropValue("background-layout")} alt="" />
        </div>
        <div className={this.decorateCSS("image-container-2")}>
          <img src={this.getPropValue("sun")} alt="" />
        </div>
        <div className={this.decorateCSS("image-container-3")}>
          <img src={this.getPropValue("sun")} alt="" />
        </div>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>HEllo</div>
        </div>
      </div>
    );
  }
}

export default Header1;
