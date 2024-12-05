import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action7.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { Form, Formik } from "formik";

class CallToAction7Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Level up your portfolio, read the book today!",
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://vault.uicore.co/e-book/wp-content/uploads/sites/51/2022/08/E-Book-Book.webp",
    });
    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: "Get your FREE copy",
    });
    this.addProp({
      type: "page",
      key: "buttonUrl",
      displayer: "Button Url",
      value: "",
    });
    this.addProp({
      type: "string",
      key: "placeholder",
      displayer: "Placeholder",
      value: "Email",
    },
    );
    this.addProp({
      type: "boolean",
      key: "disableAnimation",
      displayer: "Disable Animation",
      value: false,
    });
  }

  getName(): string {
    return "Call To Action 7";
  }

  render() {
    const title = this.castToString(this.getPropValue("title"));
    const button = this.getPropValue("buttonText");
    const placeholder = this.castToString(this.getPropValue("placeholder"));
    const disableAnimation = this.getPropValue("disableAnimation");

    const getSelectedItemPlaceholder = (): string => {
      const placeholder = this.castToString(this.getPropValue("placeholder"));
      return placeholder;
    };

    return (
      <Base.Container className={this.getPropValue("image") ? this.decorateCSS("container") : this.decorateCSS("container-no-image")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ContainerGrid className={this.decorateCSS("wrapper")}>
            {this.getPropValue("image") &&
              (<Base.GridCell className={this.decorateCSS("left-page")}>
                <img className={disableAnimation ? this.decorateCSS("image-no-animation") : this.decorateCSS("image")} src={this.getPropValue("image")} alt={this.getPropValue("image")} />
              </Base.GridCell>)
            }
            {(placeholder || title) &&
              (<Base.GridCell className={this.decorateCSS("right-page")}>
                <Base.VerticalContent className={this.decorateCSS("right-content")}>
                  {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                  {placeholder &&
                    <div className={this.decorateCSS("input-button-wrapper")}>
                      <Formik
                        initialValues={{ email: "" }}
                        onSubmit={(data, { resetForm }) => {
                          this.insertForm("Contact Us", data);
                          resetForm();
                        }}
                      >
                        {({ handleChange, values }) => (
                          <Form className={this.decorateCSS("input-div")}>
                            {placeholder && (
                              <input
                                placeholder={getSelectedItemPlaceholder()}
                                type={"text"}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                className={this.decorateCSS("input")}
                              />
                            )}
                            {this.castToString(button) && (
                              <Base.Button className={this.decorateCSS("button")} type="submit">
                                {button}
                              </Base.Button>
                            )}
                          </Form>
                        )}
                      </Formik>
                    </div>
                  }
                  {(!placeholder && this.castToString(button) && (
                    <ComposerLink path={this.getPropValue("buttonUrl")}>
                      <Base.Button className={this.decorateCSS("button")}>
                        {button}
                      </Base.Button>
                    </ComposerLink>
                  ))}
                </Base.VerticalContent>
              </Base.GridCell>)}
          </Base.ContainerGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default CallToAction7Page;
