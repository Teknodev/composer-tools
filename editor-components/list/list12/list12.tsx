import { BaseList } from "../../EditorComponent";
import styles from "./list12.module.scss";

import { Base } from "../../../composer-base-components/base/base";

class List12 extends BaseList {
  static getName(): string {
    return "List 12";
  }

  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Background Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67484143506a40002c2f0020?alt=media",
    });

    this.addProp({
      type: "object",
      key: "box1",
      displayer: "Box 1",
      value: [
        {
          type: "image",
          key: "item",
          displayer: "Item 1",
          value:
            "https://images.unsplash.com/photo-1599050751795-6cdaafbc2319?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          type: "icon",
          key: "icon",
          displayer: "Icon 1",
          value: "",
        },
        {
          type: "string",
          key: "text",
          displayer: "Text 1",
          value:
            "Experience contactless payments with just a tap of your card or phone.",
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "box2",
      displayer: "Box 2",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Simplifying Payments,",
        },
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value: "Fast and Secure",
        },
        {
          type: "image",
          key: "item",
          displayer: "Item 2",
          value:
            "https://plus.unsplash.com/premium_photo-1682511145669-a0b9d9c1dc21?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          type: "icon",
          key: "icon",
          displayer: "Icon 2",
          value: "",
        },
        {
          type: "string",
          key: "text",
          displayer: "Text 2",
          value:
            "Accept payments anywhere with reliable and portable card readers.",
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "box3",
      displayer: "Box 3",
      value: [
        {
          type: "image",
          key: "item",
          displayer: "Item 3",
          value:
            "https://images.unsplash.com/photo-1616077167599-cad3639f9cbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          type: "icon",
          key: "icon",
          displayer: "Icon 3",
          value: "",
        },
        {
          type: "string",
          key: "text",
          displayer: "Text 3",
          value: "Send and receive money instantly, no matter where you are.",
        },
      ],
    });
  }

  render() {
    const box1 = this.castToObject<any>("box1");
    const box2 = this.castToObject<any>("box2");
    const box3 = this.castToObject<any>("box3");

    return (
      <Base.Container
        className={this.decorateCSS("container")}
        style={{
          backgroundImage: `url(${this.getPropValue("image")})`,
          backgroundSize: "cover",
        }}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("boxes")}>
            <div className={this.decorateCSS("leftBox")}>
              {(box1.item || box1.icon) && (
                <div className={this.decorateCSS("circle")}>
                  {box1.item ? (
                    <img
                      className={this.decorateCSS("img")}
                      src={box1.item}
                      alt="item"
                    />
                  ) : (
                    <Base.Icon
                      name={box1.icon}
                      propsIcon={{
                        className: this.decorateCSS("icon"),
                      }}
                    />
                  )}
                </div>
              )}
              {this.castToString(box1.text) && (
                <div className={this.decorateCSS("titles")}>
                  <div className={this.decorateCSS("text1")}>{box1.text}</div>
                </div>
              )}
            </div>
            <div className={this.decorateCSS("middleBox")}>
              {this.castToString(box2.title || box2.subtitle) && (
                <Base.SectionTitle
                  className={this.decorateCSS("section-wrapper")}
                >
                  {this.castToString(box2.title) && (
                    <div className={this.decorateCSS("title")}>
                      {box2.title}
                    </div>
                  )}
                  {this.castToString(box2.subtitle) && (
                    <div className={this.decorateCSS("subtitle")}>
                      {box2.subtitle}
                    </div>
                  )}
                </Base.SectionTitle>
              )}
              {(box2.item || box2.icon) && (
                <div className={this.decorateCSS("circle")}>
                  {box2.item ? (
                    <img
                      className={this.decorateCSS("img")}
                      src={box2.item}
                      alt="item"
                    />
                  ) : (
                    <Base.Icon
                      name={box2.icon}
                      propsIcon={{
                        className: this.decorateCSS("icon"),
                      }}
                    />
                  )}
                </div>
              )}
              {this.castToString(box2.text) && (
                <div className={this.decorateCSS("titles")}>
                  <div className={this.decorateCSS("text2")}>{box2.text}</div>
                </div>
              )}
            </div>

            <div className={this.decorateCSS("rightBox")}>
              {(box3.item || box3.icon) && (
                <div className={this.decorateCSS("circle")}>
                  {box3.item ? (
                    <img
                      className={this.decorateCSS("img")}
                      src={box3.item}
                      alt="item"
                    />
                  ) : (
                    <Base.Icon
                      name={box3.icon}
                      propsIcon={{
                        className: this.decorateCSS("icon"),
                      }}
                    />
                  )}
                </div>
              )}
              {this.castToString(box3.text) && (
                <div className={this.decorateCSS("titles")}>
                  <div className={this.decorateCSS("text3")}>{box3.text}</div>
                </div>
              )}
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}
export default List12;
