import * as React from "react";
import styles from "./header16.module.scss";
import { BaseHeader } from "../../EditorComponent";
import * as Yup from "yup";
import { ErrorMessage, Formik, Form } from "formik";

class HeaderComponent16 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Take your online order within minutes",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "From local fare to restaurant favorites, our wide selection of food will definitely satisfy all your cravings.",
    });
    this.addProp({
      type: "object",
      key: "button",
      displayer: "Button",
      value: [
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: "Make Order",
        },
        {
          type: "page",
          key: "buttonPath",
          displayer: "Button Path",
          value: "",
        },
      ],
    });
    this.addProp({
      type: "string",
      key: "email",
      displayer: "1th Placeholder",
      value: "E-mail",
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2023/03/w-delivery-girl-1.png.webp",
    });
    this.addProp({
      type: "image",
      key: "background-image",
      displayer: "Background Image",
      value:
        "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2023/03/w-delivery-top-bg-1.jpg?id=55173",
    });
  }
  validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
  });

  getName(): string {
    return "Header-16";
  }

  render() {
    const button = this.getPropValue("button");

    return (
      <div
        style={{
          backgroundImage: `url(${this.getPropValue("background-image")})`,
        }}
        className={this.decorateCSS("container")}
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("left")}>
              <div className={this.decorateCSS("content")}>
                <h1>{this.getPropValue("title")}</h1>
                <p>{this.getPropValue("description")}</p>

                <div className={this.decorateCSS("form")}>
                  <input
                    placeholder="Your Name"
                    type="text"
                    className={this.decorateCSS("name")}
                  />
                  <input
                    placeholder="Phone Number"
                    type="text"
                    className={this.decorateCSS("phone")}
                  />
                  <button className={this.decorateCSS("button")}>
                    {button[0].value}
                  </button>
                </div>
              </div>
            </div>
            <div className={this.decorateCSS("right")}>
              <img
                className={this.decorateCSS("image")}
                src={this.getPropValue("image")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderComponent16;
