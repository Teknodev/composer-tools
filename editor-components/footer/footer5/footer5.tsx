import * as React from "react";
import { BaseFooter } from "../../EditorComponent";
import styles from "./footer5.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class Footer5Page extends BaseFooter {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "footer-logo",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64e4b552057bdf002c29938a?alt=media&timestamp=1692710207706",
      displayer: "Footer Logo",
    });
    this.addProp({
      type: "array",
      key: "footerInfos",
      displayer: "Footer Infos",
      value: [
        {
          type: "string",
          key: "footerInfoTitle",
          displayer: "Footer Info Title",
          value: "Office: (623) 680-4899",
        },
        {
          type: "string",
          key: "footerInfoTitle",
          displayer: "Footer Info Title",
          value: "Fax: (623) 680-4899",
        },
        {
          type: "string",
          key: "footerInfoTitle",
          displayer: "Footer Info Title",
          value: "1606 W. Whispering Wind Dr. Suite 2",
        },
        {
          type: "string",
          key: "footerInfoTitle",
          displayer: "Footer Info Title",
          value: "ROC B-3 242965",
        },
        {
          type: "string",
          key: "footerInfoTitle",
          displayer: "Footer Info Title",
          value: "ROC KA 291558",
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "footerSocials",
      displayer: "Footer Socials",
      value: [
        {
          type: "object",
          key: "footerSocialIconBox",
          displayer: "Footer Social Icon Box",
          value: [
            {
              type: "page",
              key: "footerSocialIconLink",
              displayer: "Footer Social Icon Link",
              value: "",
            },
            {
              type: "icon",
              key: "footerInfoSocialIcon",
              displayer: "Footer Info Social Icon",
              value: "BsLinkedin",
            },
          ],
        },
        {
          type: "object",
          key: "footerSocialIconBox",
          displayer: "Footer Social Icon Box",
          value: [
            {
              type: "page",
              key: "footerSocialIconLink",
              displayer: "Footer Social Icon Link",
              value: "",
            },
            {
              type: "icon",
              key: "footerInfoSocialIcon",
              displayer: "Footer Info Social Icon",
              value: "FaInstagramSquare",
            },
          ],
        },
        {
          type: "object",
          key: "footerSocialIconBox",
          displayer: "Footer Social Icon Box",
          value: [
            {
              type: "page",
              key: "footerSocialIconLink",
              displayer: "Footer Social Icon Link",
              value: "",
            },
            {
              type: "icon",
              key: "footerInfoSocialIcon",
              displayer: "Footer Info Social Icon",
              value: "FaFacebookSquare",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "footerLinkSubTitle",
      displayer: "Footer Link Subtitle",
      value: "Quick Links",
    });
    this.addProp({
      type: "array",
      key: "footerLinks",
      displayer: "Footer Links",
      value: [
        {
          type: "object",
          key: "footerLinkBox",
          displayer: "Footer Link Box",
          value: [
            {
              type: "page",
              key: "footerLink",
              displayer: "Footer Link",
              value: "",
            },
            {
              type: "string",
              key: "footerLinkTitle",
              displayer: "Footer Link Title",
              value: "Markets We Serve",
            },
          ],
        },
        {
          type: "object",
          key: "footerLinkBox",
          displayer: "Footer Link Box",
          value: [
            {
              type: "page",
              key: "footerLink",
              displayer: "Footer Link",
              value: "",
            },
            {
              type: "string",
              key: "footerLinkTitle",
              displayer: "Footer Link Title",
              value: "Subcontractors",
            },
          ],
        },
        {
          type: "object",
          key: "footerLinkBox",
          displayer: "Footer Link Box",
          value: [
            {
              type: "page",
              key: "footerLink",
              displayer: "Footer Link",
              value: "",
            },
            {
              type: "string",
              key: "footerLinkTitle",
              displayer: "Footer Link Title",
              value: "Warrenty",
            },
          ],
        },
        {
          type: "object",
          key: "footerLinkBox",
          displayer: "Footer Link Box",
          value: [
            {
              type: "page",
              key: "footerLink",
              displayer: "Footer Link",
              value: "",
            },
            {
              type: "string",
              key: "footerLinkTitle",
              displayer: "Footer Link Title",
              value: "Testimonials",
            },
          ],
        },
        {
          type: "object",
          key: "footerLinkBox",
          displayer: "Footer Link Box",
          value: [
            {
              type: "page",
              key: "footerLink",
              displayer: "Footer Link",
              value: "",
            },
            {
              type: "string",
              key: "footerLinkTitle",
              displayer: "Footer Link Title",
              value: "Latest News",
            },
          ],
        },
        {
          type: "object",
          key: "footerLinkBox",
          displayer: "Footer Link Box",
          value: [
            {
              type: "page",
              key: "footerLink",
              displayer: "Footer Link",
              value: "",
            },
            {
              type: "string",
              key: "footerLinkTitle",
              displayer: "Footer Link Title",
              value: "Contact Us",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "footerForm",
      displayer: "Footer Form",
      value: [
        {
          type: "string",
          key: "footerFormTitle",
          displayer: "Footer Form Title",
          value: "Stay Connected",
        },
        {
          type: "string",
          key: "footerFormPlaceholder",
          displayer: "Footer Form Placeholder",
          value: "Type your email here",
        },
        {
          type: "string",
          key: "footerFormButton",
          displayer: "Footer Form Button",
          value: "Join",
        },
        {
          type: "page",
          key: "footerFormPage",
          displayer: "Footer Form Page",
          value: "",
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "footerAboutUs",
      displayer: "Footer About Us",
      value: [
        {
          type: "string",
          key: "footerAboutUsTitle",
          displayer: "Footer About Us Title",
          value: "About Us",
        },
        {
          type: "string",
          key: "footerAboutUsText",
          displayer: "Footer About Us Text",
          value:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu lorem et ultricies. In porta lorem at dui semper porttitor. Nullam quis cursus dui. Cras tincidunt vehicula tellus eu facilisis. Donec nisi turpis, iaculis et arcu a, aliquet ultrices nisl. Nam in pharetra odio, ac blandit metus. Suspendisse potenti. Praesent elementum diam non orci cursus rutrum. Pellentesque condimentum ultrices dignissim. Sed a tempor ligula, vel luctus sapien. Mauris vehicula rutrum massa. Duis condimentum, ex quis ullamcorper rhoncus, erat libero tempor arcu, condimentum facilisis tellus lectus ut nunc. Pellentesque vitae faucibus diam. Vestibulum eu erat ex. Ut justo neque, varius aliquet erat vel, scelerisque convallis lacus. Mauris semper lorem mauris, sed dignissim eros consectetur nec.",
        },
      ],
    });
    this.addProp({
      type: "string",
      key: "footer-bottom-text",
      value: "© 2021 HQ Construction LLC. All Rights Reserved.",
      displayer: "Footer Text",
    });
  }

  getName(): string {
    return "Footer 5";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("toppom")}>
            <div className={this.decorateCSS("footer-left")}>
              <div className={this.decorateCSS("logo")}>
                <img src={this.getPropValue("footer-logo")} alt="logo" />
              </div>
              <div className={this.decorateCSS("footer-infos")}>
                {this.castToObject<[]>("footerInfos").map(
                  (info: any, index: number) => (
                    <div
                      className={this.decorateCSS("footer-info-row")}
                      key={index}
                    >
                      <p className={this.decorateCSS("info.value")}>
                        {info.value}
                      </p>
                    </div>
                  )
                )}
              </div>
              <div className={this.decorateCSS("social-icons")}>
                {this.castToObject<[]>("footerSocials").map(
                  (social: any, index: number) => (
                    <div
                      className={this.decorateCSS("social-icon-row")}
                      key={index}
                    >
                      <ComposerLink path={social.footerSocialIconLink}>
                        <ComposerIcon
                          propsIcon={{
                            className: this.decorateCSS("footerSocialIconBox"),
                          }}
                          name={social.footerInfoSocialIcon}
                        />
                        {/* <img
                          src={social.footerInfoSocialIcon}
                          alt="social-icon"
                        /> */}
                      </ComposerLink>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className={this.decorateCSS("footer-center")}>
              <div className={this.decorateCSS("footer-links")}>
                <h2 className={this.decorateCSS("footerLinks")}>
                  {this.getPropValue("footerLinkSubTitle")}
                </h2>
                {this.castToObject<any>("footerLinks").map(
                  (link: any, index: number) => (
                    <div
                      className={this.decorateCSS("footer-link-row")}
                      key={index}
                    >
                      <ComposerLink path={link.footerLink}>
                        <p className={this.decorateCSS("link-value1")}>
                          {link.footerLinkTitle}
                        </p>
                      </ComposerLink>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className={this.decorateCSS("footer-right")}>
              <div className={this.decorateCSS("footer-form")}>
                <h2 className={this.decorateCSS("footerForm")}>
                  {this.castToObject<any>("footerForm").footerFormTitle}
                </h2>
                <div className={this.decorateCSS("input-box")}>
                  <input
                    type="text"
                    placeholder={this.castToString(
                      this.castToObject<any>("footerForm").footerFormPlaceholder
                    )}
                  />
                  <ComposerLink
                    path={this.castToObject<any>("footerForm").footerFormPage}
                  >
                    <button>
                      {this.castToObject<any>("footerForm").footerFormButton}
                    </button>
                  </ComposerLink>
                </div>
              </div>
              <div className={this.decorateCSS("footer-text-area")}>
                <h2 className={this.decorateCSS("footerAboutUs")}>
                  {this.getPropValue("footerAboutUs").footerAboutUsTitle}
                </h2>
                <p className={this.decorateCSS("footer-aboutus")}>
                  {this.getPropValue("footerAboutUs").footerAboutUsText}
                </p>
              </div>
            </div>
          </div>
          <div className={this.decorateCSS("bottom")}>
            <p className={this.decorateCSS("footer-bottom-text")}>
              {this.getPropValue("footer-bottom-text")}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer5Page;
