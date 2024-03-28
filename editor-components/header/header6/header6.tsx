
import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header6.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class Header6 extends BaseHeader {

  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Envision",
    });
    this.addProp({
      type: "string",
      key: "title2",
      displayer: "title2",
      value: "Brand 2020",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Carefully crafted with unique layouts you can easily create websites.",
    });
    this.addProp({
      type: "image",
      key: "image1",
      displayer: "Image",
      value: "https://gradastudio.com/ozark/wp-content/uploads/sites/4/revslider/main-home-slider/blob-1.png",
    });
    this.addProp({
      type: "image",
      key: "image2",
      displayer: "Image",
      value: "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/slider-mockup-1.png",
    });
    
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Explore",
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
   }

   getName(): string {
    return "Header 6";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <section className={this.decorateCSS("child-container")}>
            <div className={this.decorateCSS("left-content")}>
            <h2 className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </h2>
              <p className={this.decorateCSS("title2")}>
                {this.getPropValue("title2")}
              </p>
              <p className={this.decorateCSS("description")}>
                {this.getPropValue("description")}
              </p>
              <div className={this.decorateCSS("buttondiv")}>
              {this.getPropValue("buttons").map(
                  (item: any, indexButtons: number) => {
                    return (
                      <ComposerLink
                        key={indexButtons}
                        path={item.value[1].value}
                      >
                        <button
                          className={`${this.decorateCSS("button")}`}
                        >
                          {item.value[0].value}
                        </button>
                      </ComposerLink>
                    );
                  }
                )}
              </div>
            </div>
            <div className={this.decorateCSS("right-content")}>
              <img src={this.getPropValue("image1")} 
              alt="img1" 
              className={this.decorateCSS("image1")}/>
              <img src={this.getPropValue("image2")} 
              alt="img2" 
              className={this.decorateCSS("image2")} />

            </div>
          </section>
        </div>
      </div>
    );
  }
  }

  



                    


export default Header6;

