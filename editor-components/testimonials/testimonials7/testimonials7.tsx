import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials7.module.scss";

type Item = {
  image: string;
  name: string;
  nameId: string;
  description: string;
};
class Testimonials7Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "card-items",
      displayer: "Card Items",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "description",
              value:
                "our office is something we are pleased with.our office is something we are pleased with.our office is something we are pleased with.",
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value:"https://wgl-demo.net/zium/wp-content/uploads/2021/12/testimonials-1-200x200.jpg",  
              displayer: "Image",
            },
            {
              type: "string",
              key: "name",
              value: "Tomas Reuss",
              displayer: "Name",
            },
            {
              type: "string",
              key: "nameId",
              value: "CLIENT OF CLUB",
              displayer: "Name Id",
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
              key: "description",
              value:
                "our office is something we are pleased with.our office is something we are pleased with.our office is something we are pleased with.",
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value:"https://wgl-demo.net/zium/wp-content/uploads/2021/12/testimonials-2-200x200.jpg",  
              displayer: "Image",
            },
            {
              type: "string",
              key: "name",
              value: "Monica Reuss",
              displayer: "Name",
            },
            {
              type: "string",
              key: "nameId",
              value: "CLIENT OF CLUB",
              displayer: "Name Id",
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
              key: "description",
              value:
                "our office is something we are pleased with.our office is something we are pleased with.our office is something we are pleased with.",
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value:"https://wgl-demo.net/zium/wp-content/uploads/2021/12/testimonials-1-200x200.jpg",  
              displayer: "Image",
            },
            {
              type: "string",
              key: "name",
              value: "Linda Anderson",
              displayer: "Name",
            },
            {
              type: "string",
              key: "nameId",
              value: "CLIENT OF CLUB",
              displayer: "Name Id",
            },
          ],
        },
      ],
    });
  }


  getName(): string {
    return "Testimonials 7";
  }

  render() {
   return <h1>htfh</h1>
  
  }
}

export default Testimonials7Page;
