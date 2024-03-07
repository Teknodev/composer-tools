import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials10.module.scss";

class Testimonials10Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "What our client say",
    });
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Happy With Customers & Clients",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "I feel very happy and be proud to connect with this industry. i presume this is a very productive and professional industry.i wish very good luck & success for this industry",
    });
    this.addProp({
      type: "array",
      key: "button",
      displayer: "Button",
      value: [
        {
          type: "object",
          key: "buttonObject",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Contact Us",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "https://www.google.com/",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "profile-itemList",
      displayer: "Profile",
      value: [
        {
          type: "array",
          key: "object",
          displayer: "Object 1 :",
          value: [
            {
              type: "image",
              key: "badge",
              displayer: "Badge 1",
              value:
                "https://re-bytes.ancorathemes.com/wp-content/uploads/2022/04/testimonials-image-3-150x150.jpg",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value:
                "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!",
            },
            {
              type: "string",
              key: "author",
              value: "Alex Madson",
              displayer: "Author",
            },
            {
              type: "string",
              key: "subtitle",
              value: "Contractor",
              displayer: "Subtitle",
            },
          ],
        }, 
        {
          type: "array",
          key: "object",
          displayer: "Object 2 :",
          value: [
            {
              type: "image",
              key: "badge",
              displayer: "Badge 2",
              value:
                "https://re-bytes.ancorathemes.com/wp-content/uploads/2020/04/testimonials-image-1-150x150.jpg",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value:
              "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!",
            },
            {
              type: "string",
              key: "author",
              value: "Helen Lee",
              displayer: "Author",
            },
            {
              type: "string",
              key: "subtitle",
              value: "Contractor",
              displayer: "Subtitle",
            },
          ],
        }, 
      ],
    });
  }
  getName(): string {
    return "Testimonials 10";
  }
  
}

export default Testimonials10Page;
