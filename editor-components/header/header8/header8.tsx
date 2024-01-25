import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header8.module.scss";

//CARD
type Card = {
  topWriting : string;
  title : string;
  description : string;
};

//CLASS
class Header8 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
    
    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        {
          type: "object",
          key: "sliderObject",
          displayer: "Slider Object",
          value: [
            {
              type: "string",
              key: "topWriting",
              displayer: "Top Writing",
              value: "PRODUCT, VOICE",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Maybe Speaker",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Vin TRIES TO REFLECT DİESEL'S VISION AND COMBINES",
            },

          ]
        },
        {
          type: "object",
          key: "sliderObject",
          displayer: "Slider Object",
          value: [
            {
              type: "string",
              key: "topWriting",
              displayer: "Top Writing",
              value: "PEN",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Yaren Collection",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "SYMBOLS THROUGH WHICH EXPRESS THEMSELVES",
            },

          ]
        },
        {
          type: "object",
          key: "sliderObject",
          displayer: "Slider Object",
          value: [
            {
              type: "string",
              key: "topWriting",
              displayer: "Top Writing",
              value: "INDUCTION",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Huggl Power Pack",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "HUGGL IS AN INDUCTION CHARGING",
            },

          ]
        },
        {
          type: "object",
          key: "sliderObject",
          displayer: "Slider Object",
          value: [
            {
              type: "string",
              key: "topWriting",
              displayer: "Top Writing",
              value: "ARCHITECTURE",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Principal Garden",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "WE ARE THRILLED TO SHARE OUR NEW REEL WITH YOU ALL",
            },

          ]
        },
        {
          type: "object",
          key: "sliderObject",
          displayer: "Slider Object",
          value: [
            {
              type: "string",
              key: "topWriting",
              displayer: "Top Writing",
              value: "PHOTOGRAPHY, CAR",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Small Silver Car",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "CAL WAS FIRST. THE FIRST PUBLIC UNIVERSITY IN THE GREAT STATE OF CALIFORNIA.",
            },

          ]
        },
        {
          type: "object",
          key: "sliderObject",
          displayer: "Slider Object",
          value: [
            {
              type: "string",
              key: "topWriting",
              displayer: "Top Writing",
              value: "PHOTOGRAPHY",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Lengshuikeng",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "SOMETIMES, WE NEED TO CHECK THE TIME",
            },
          ]
        },
      ]
    });
  }

  getName(): string {
    return "Header 8";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
      >

      </div>
    );
  }
}

export default Header8;
