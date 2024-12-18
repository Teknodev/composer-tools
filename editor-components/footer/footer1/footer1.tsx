import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseFooter } from "../../EditorComponent";
import styles from "./footer1.module.scss";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type IconsValues = {
  socialIcon: string;
  socialLink: string;
};

class Footer1Page extends BaseFooter {
  constructor(props?: any) {
    super(props, styles);

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
      type: "page",
      key: "link",
      displayer: "Subscription Button Link",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Vela Newsletter",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Get timely updates from your favorite products",
    });

    this.addProp({
      type: "boolean",
      key: "line",
      displayer: "Line",
      value: true,
    });

    this.addProp({
      type: "string",
      key: "copyright",
      displayer: "Copyright",
      value: "Copyright © KOSI. All rights reserved.",
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
              type: "icon",
              key: "socialIcon",
              displayer: "Social Icon",
              value: "FaFacebook",
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
              type: "icon",
              key: "socialIcon",
              displayer: "Social Icon",
              value: "FaTwitter",
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
              type: "icon",
              key: "socialIcon",
              displayer: "Social Icon",
              value: "RiInstagramFill",
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
              type: "icon",
              key: "socialIcon",
              displayer: "Social Icon",
              value: "FaTiktok",
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
              type: "icon",
              key: "socialIcon",
              displayer: "Social Icon",
              value: "FaVine",
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
      key: "pages",
      displayer: "Pages",
      value: [
        {
          type: "object",
          key: "page",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "pageTitle",
              displayer: "Page Title",
              value: "About us",
            },
            {
              type: "page",
              key: "pageLink",
              displayer: "Page Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "page",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "pageTitle",
              displayer: "Page Title",
              value: "Blog",
            },
            {
              type: "page",
              key: "pageLink",
              displayer: "Page Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "page",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "pageTitle",
              displayer: "Page Title",
              value: "FAQs",
            },
            {
              type: "page",
              key: "pageLink",
              displayer: "Page Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "page",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "pageTitle",
              displayer: "Page Title",
              value: "Contact",
            },
            {
              type: "page",
              key: "pageLink",
              displayer: "Page Link",
              value: "",
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
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);

    const buttonText = this.getPropValue("subscriptionButtonText");
    const buttonTextExist = this.castToString(buttonText);

    const placeholderExist = this.castToString(this.getPropValue("subscriptionPlaceholder"));

    const upperExist = titleExist || descriptionExist || buttonTextExist || placeholderExist;

    const line = this.getPropValue("line");

    const pages = this.castToObject<any[]>("pages");
    const social = this.castToObject<any[]>("social");
    const copyright = this.getPropValue("copyright");
    const copyrightExist = this.castToString(copyright);

    const footerBottomExist = pages.length > 0 || social.length > 0 || copyrightExist;
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {upperExist && (
            <div className={this.decorateCSS("footer-upper")}>
              {(titleExist || descriptionExist) && (
                <Base.VerticalContent className={this.decorateCSS("header")}>
                  {titleExist && <Base.H3 className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.H3>}
                  {descriptionExist && <Base.P className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.P>}
                </Base.VerticalContent>
              )}
              {(placeholderExist || buttonTextExist) && (
                <div className={this.decorateCSS("subscribe")}>
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
                        {placeholderExist && <input className={this.decorateCSS("input")} type="text" placeholder={placeholderExist} name="message" value={values.message} onChange={handleChange}></input>}
                        {buttonTextExist && (
                          <ComposerLink path={this.getPropValue("link")}>
                            <Base.Button type="submit">{this.getPropValue("subscriptionButtonText")}</Base.Button>
                          </ComposerLink>
                        )}
                      </Form>
                    )}
                  </Formik>
                </div>
              )}
            </div>
          )}
          {line && <hr className={this.decorateCSS("line")} />}
          {footerBottomExist && (
            <div className={this.decorateCSS("footer-bottom")}>
              {copyrightExist && (
                <div className={this.decorateCSS("copyright-container")}>
                  <Base.P className={this.decorateCSS("text")}>{this.getPropValue("copyright")}</Base.P>
                </div>
              )}
              {social.length > 0 && (
                <div className={this.decorateCSS("social")}>
                  {social.map((item: IconsValues, indexSocial: number) => (
                    <ComposerLink key={indexSocial} path={item.socialLink}>
                      <ComposerIcon propsIcon={{ className: this.decorateCSS("icon") }} name={item.socialIcon} />
                    </ComposerLink>
                  ))}
                </div>
              )}
              {pages.length > 0 && (
                <div className={this.decorateCSS("pages")}>
                  {pages.map((item: any, indexSocial: number) => (
                    <ComposerLink key={indexSocial} path={item.pageLink}>
                      <Base.P className={this.decorateCSS("text")}>{item.pageTitle}</Base.P>
                    </ComposerLink>
                  ))}
                </div>
              )}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Footer1Page;
