import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature3.module.scss";

type ISimpleBoxes = {
  title: string;
  description: string;
  image: string;
};
class Feature3 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    
    this.addProp({
      type: "array",
      key: "simple-boxes-content",
      displayer: "Simple Boxes Content",
      value: [
        {
          type: "object",
          key: "simple-boxes",
          displayer: "Simple Boxes",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Bill Gates",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:"Bill Gates is a prominent American entrepreneur and philanthropist who co-founded Microsoft Corporation, one of the world's largest software companies. He is also known for his significant contributions to the development of computers."
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://upload.wikimedia.org/wikipedia/commons/a/af/Bill_Gates_-_Nov._8%2C_2019.jpg",
            },
          ],
        },
        {
          type: "object",
          key: "simple-boxes",
          displayer: "Simple Boxes",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Walt Disney",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "alt Disney (1901-1966) was an American entrepreneur, animator, voice actor, and film producer. He was the co-founder of The Walt Disney Company, which has become one of the world's largest and most influential entertainment conglomerates."
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://www.themoviedb.org/t/p/original/zLSGIiGao4TaLqIwfqHggxO6RqA.jpg",
            },
          ],
        },{
          type: "object",
          key: "simple-boxes",
          displayer: "Simple Boxes",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Steve Jobs",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Steve Jobs (1955-2011) was a famous American entrepreneur and business magnate, who is best known for co-founding Apple Inc. and playing a key role in the development of personal computing and mobile devices."
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg/640px-Steve_Jobs_Headshot_2010-CROP2.jpg",
            },
          ],
        },
        
      ],
    });
  }

  getName(): string {
    return "Feature 3";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
        {this.castToObject<ISimpleBoxes[]>("simple-boxes-content").map(
          (simplebox: any, index: number) => (
            <div
              className={this.decorateCSS("simple-boxes")}
              
              key={index}
            >
              <img
                className={this.decorateCSS("image")}
                
                src={simplebox.image}
              ></img>
              <h3 className={this.decorateCSS("title")} >
                {simplebox.title}
              </h3>
              <p
                className={this.decorateCSS("long-text")}
                
              >
                {simplebox.description}
              </p>
            </div>
          )
        )}
        </div>
      </div>
    );
  }
}

export default Feature3;
