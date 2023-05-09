import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/link";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseContacts, BaseFooter } from "../../EditorComponent";
import styles from "./footer1.module.scss";
import { Formik, Form } from "formik";
import * as Yup from "yup";

type IconsValues = {
  socialIcon: string;
  socialLink: string;
};

type FooterValues = {
  footerTitle: string;
  footerText: FooterTextValues[];
};

type FooterTextValues = {
  footerText: string;
  path: string;
};

class Footer1Page extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subscriptionTitle",
      displayer: "Subscription Title",
      value: "Subscribe",
    });
    this.addProp({
      type: "string",
      key: "subscriptionDescription",
      displayer: "Subscription Description",
      value: PlaceholderFiller.shortText(),
    });
    this.addProp({
      type: "string",
      key: "subscriptionPlaceholder",
      displayer: "Subscription Placeholder",
      value: "Type your e-mail",
    });
    this.addProp({
      type: "string",
      key: "subscriptionButtonText",
      displayer: "Subscription Button Text",
      value: "Subscribe",
    });

    this.addProp({
      type: "image",
      key: "footerLogo",
      displayer: "Footer Logo",
      value: "https://dstal.com.au/wp-content/uploads/2021/09/logoipsum.png",
    });
    this.addProp({
      type: "string",
      key: "footerDescription",
      displayer: "Footer Description",
      value: "Copyright © 2023 All rights reserved.",
    });

    this.addProp({
      type: "array",
      key: "social",
      displayer: "Social",
      value: [
        {
          type: "object",
          key: "footer-social",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "socialIcon",
              displayer: "Social Icon",
              value: "https://cdn-icons-png.flaticon.com/512/87/87390.png",
            },
            {
              type: "page",
              key: "socialLink",
              displayer: "Social Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "footer-social",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "socialIcon",
              displayer: "Social Icon",
              value: "https://cdn-icons-png.flaticon.com/512/44/44646.png",
            },
            {
              type: "page",
              key: "socialLink",
              displayer: "Social Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "footer-social",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "socialIcon",
              displayer: "Social Icon",
              value: "https://cdn-icons-png.flaticon.com/512/733/733635.png",
            },
            {
              type: "page",
              key: "socialLink",
              displayer: "Social Link",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "footer",
      displayer: "Footer",
      value: [
        {
          type: "object",
          key: "footer-title",
          displayer: "Footer Column",
          value: [
            {
              type: "string",
              key: "footerTitle",
              displayer: "Footer Title",
              value: PlaceholderFiller.string(),
            },
            {
              type: "array",
              key: "footerText",
              displayer: "Footer Text",
              value: [
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "footerText",
                      displayer: "Text",
                      value: PlaceholderFiller.string(),
                    },
                    {
                      type: "page",
                      displayer: "Path",
                      key: "path",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "footerText",
                      displayer: "Text",
                      value: PlaceholderFiller.string(),
                    },
                    {
                      type: "page",
                      key: "path",
                      displayer: "Path",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "footerText",
                      displayer: "Text",
                      value: PlaceholderFiller.string(),
                    },
                    {
                      type: "page",
                      key: "path",
                      displayer: "Path",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "footerText",
                      displayer: "Text",
                      value: PlaceholderFiller.string(),
                    },
                    {
                      type: "page",
                      key: "path",
                      displayer: "Path",
                      value: "",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "footer-title",
          displayer: "Footer Column",
          value: [
            {
              type: "string",
              key: "footerTitle",
              displayer: "Footer Title",
              value: PlaceholderFiller.string(),
            },
            {
              type: "array",
              key: "footerText",
              displayer: "Footer Text",
              value: [
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "footerText",
                      displayer: "Text",
                      value: PlaceholderFiller.string(),
                    },
                    {
                      type: "page",
                      displayer: "Path",
                      key: "path",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "footerText",
                      displayer: "Text",
                      value: PlaceholderFiller.string(),
                    },
                    {
                      type: "page",
                      key: "path",
                      displayer: "Path",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "footerText",
                      displayer: "Text",
                      value: PlaceholderFiller.string(),
                    },
                    {
                      type: "page",
                      key: "path",
                      displayer: "Path",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "footerText",
                      displayer: "Text",
                      value: PlaceholderFiller.string(),
                    },
                    {
                      type: "page",
                      key: "path",
                      displayer: "Path",
                      value: "",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "footer-title",
          displayer: "Footer Column",
          value: [
            {
              type: "string",
              key: "footerTitle",
              displayer: "Footer Title",
              value: PlaceholderFiller.string(),
            },
            {
              type: "array",
              key: "footerText",
              displayer: "Footer Text",
              value: [
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "footerText",
                      displayer: "Text",
                      value: PlaceholderFiller.string(),
                    },
                    {
                      type: "page",
                      displayer: "Path",
                      key: "path",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "footerText",
                      displayer: "Text",
                      value: PlaceholderFiller.string(),
                    },
                    {
                      type: "page",
                      key: "path",
                      displayer: "Path",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "footerText",
                      displayer: "Text",
                      value: PlaceholderFiller.string(),
                    },
                    {
                      type: "page",
                      key: "path",
                      displayer: "Path",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "footerText",
                      displayer: "Text",
                      value: PlaceholderFiller.string(),
                    },
                    {
                      type: "page",
                      key: "path",
                      displayer: "Path",
                      value: "",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "footer-title",
          displayer: "Footer Column",
          value: [
            {
              type: "string",
              key: "footerTitle",
              displayer: "Footer Title",
              value: PlaceholderFiller.string(),
            },
            {
              type: "array",
              key: "footerText",
              displayer: "Footer Text",
              value: [
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "footerText",
                      displayer: "Text",
                      value: PlaceholderFiller.string(),
                    },
                    {
                      type: "page",
                      displayer: "Path",
                      key: "path",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "footerText",
                      displayer: "Text",
                      value: PlaceholderFiller.string(),
                    },
                    {
                      type: "page",
                      key: "path",
                      displayer: "Path",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "footerText",
                      displayer: "Text",
                      value: PlaceholderFiller.string(),
                    },
                    {
                      type: "page",
                      key: "path",
                      displayer: "Path",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "footerText",
                      displayer: "Text",
                      value: PlaceholderFiller.string(),
                    },
                    {
                      type: "page",
                      key: "path",
                      displayer: "Path",
                      value: "",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
  }

  validationSchema = Yup.object().shape({
    message: Yup.string().required("Required"),
  });

  getName(): string {
    return "Footer 1";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("footer-page")}>
            {this.castToObject<any[]>("footer").map((item: FooterValues) => (
              <ul className={this.decorateCSS("list")}>
                <li className={this.decorateCSS("title")}>
                  <h2>{item.footerTitle}</h2>
                </li>
                {item.footerText.map((v: FooterTextValues) => (
                  <ComposerLink path={v.path}>
                    <li className={this.decorateCSS("text")}>{v.footerText}</li>
                  </ComposerLink>
                ))}
              </ul>
            ))}
            <div className={this.decorateCSS("subscribe")}>
              <h1>{this.getPropValue("subscriptionTitle")}</h1>
              <p>{this.getPropValue("subscriptionDescription")}</p>
              <div className={this.decorateCSS("input")}>
                <Formik
                  initialValues={{ message: "" }}
                  validationSchema={this.validationSchema}
                  onSubmit={(data, { resetForm }) => {
                    this.insertForm("Contact Us", data);
                    resetForm();
                  }}
                >
                  {({ handleChange, values }) => (
                    <Form className={this.decorateCSS("form")}>
                      <input
                        type="text"
                        placeholder={this.getPropValue("subscriptionPlaceholder")}
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                      ></input>
                      <button type="submit">
                        {this.getPropValue("subscriptionButtonText")}
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
          <div className={this.decorateCSS("footer-bottom")}>
            <img src={this.getPropValue("footerLogo")} width={200} height={100} />
            <h2>{this.getPropValue("footerDescription")}</h2>
            <div className={this.decorateCSS("social")}>
              {this.castToObject<any[]>("social").map((item: IconsValues) => (
                <ComposerLink path={item.socialLink}>
                  <img src={item.socialIcon} width={20} height={20} />
                </ComposerLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer1Page;
