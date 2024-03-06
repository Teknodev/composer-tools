import { ReactNode } from "react";
import { BaseList } from "../../EditorComponent";
import React from "react";
import styles from "./list8.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

//CLASS
class List8 extends BaseList {
  //getName
  getName(): string {
    return "List 8";
  }

  //constructor
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "list-items",
      displayer: "List Items",
      value: [
        {
          type: "object",
          key: "list-item",
          displayer: "List Item",
          value: [
            {
              type: "number",
              key: "number",
              displayer: "Box Number",
              value: 1,
            },
            {
              type: "string",
              key: "title",
              displayer: "Item Title",
              value: "List Your Space",
            },
            {
              type: "string",
              key: "text",
              displayer: "Item Text",
              value:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ab",
            },
          ],
        },
        {
          type: "object",
          key: "list-item",
          displayer: "List Item",
          value: [
            {
              type: "number",
              key: "number",
              displayer: "Box Number",
              value: 2,
            },
            {
              type: "string",
              key: "title",
              displayer: "Item Title",
              value: "Get More Orders",
            },
            {
              type: "string",
              key: "text",
              displayer: "Item Text",
              value:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ab",
            },
          ],
        },
        {
          type: "object",
          key: "list-item",
          displayer: "List Item",
          value: [
            {
              type: "number",
              key: "number",
              displayer: "Box Number",
              value: 3,
            },
            {
              type: "string",
              key: "title",
              displayer: "Item Title",
              value: "Earn Money",
            },
            {
              type: "string",
              key: "text",
              displayer: "Item Text",
              value:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ab",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 3,
      max: 4
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "How It Works?",
    });
    this.addProp({
      type: "string",
      key: "titledesc",
      displayer: "Title Description",
      value:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit.Saepe, quis.",
    });
    this.addProp({
        type: "string",
        key: "button_text",
        displayer: "Button Text",
        value:
          "List your space",
      });
      this.addProp({
        type: "page",
        key: "button_url",
        displayer: "Button Url",
        value: ""
      });
  }
  //end constructor

  render(): ReactNode {

    //RETURN
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("border")}>
            {/* main start */}
            <main id="main_id" className={this.decorateCSS("main")}>
              <div className={this.decorateCSS("container2")}>
                <section
                  id="section_id"
                  className={this.decorateCSS("section")}
                >
                  <h1 className={this.decorateCSS("h1")}>
                    {this.getPropValue("title")}
                  </h1>
                  <p className={this.decorateCSS("h1-lowertext")}>
                    {this.getPropValue("titledesc")}
                  </p>

                  {/* Boxes Start */}

                  {/* Boxlower */}
                  <div className={this.decorateCSS("boxes")}>
                    {/* MAP */}
                    {this.getPropValue("list-items").map(
                      (item: any, index: number) => (
                        <div
                          key={index}
                          className={this.decorateCSS("boxlower")}
                          style={{
                            width:
                              this.getPropValue("itemCount") == 1
                                ? "100%"
                                : 90 / this.getPropValue("itemCount") + "%",
                          }}
                        >
                          <div className={this.decorateCSS("circle")}>
                            {item.getPropValue("number")}
                          </div>
                          <h3 className={this.decorateCSS("midwriting")}>
                            {item.getPropValue("title")}
                          </h3>{" "}
                          <br />
                          <span className={this.decorateCSS("text")}>
                            {item.getPropValue("text")}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                  {/* Boxes end */}

                  {/* Button */}
                 <div className={this.decorateCSS("button-box")}>
                    <ComposerLink path={this.getPropValue("button_url")}>
                        <button className={this.decorateCSS("button")}>
                            {this.getPropValue("button_text")}
                        </button>
                    </ComposerLink>
                 </div>
                </section>
              </div>
            </main>
            {/* main end */}
          </div>
        </div>
      </div>
    );
    //end RETURN
  }
}
//end CLASS

export default List8;