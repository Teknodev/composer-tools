import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action7.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { Form, Formik } from "formik";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import * as Yup from "yup";

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

    this.addProp(INPUTS.BUTTON("button", "Button", "Get your FREE copy", null, null, null, "Primary"));

    this.addProp({
      type: "string",
      key: "placeholder",
      displayer: "Placeholder",
      value: "Email",
    });
    this.addProp({
      type: "string",
      key: "submitText",
      displayer: "Submit Text",
      value: "Form successfully submitted!",
    });

    this.addProp({
      type: "boolean",
      key: "disableAnimation",
      displayer: "Disable Animation",
      value: false,
    });

    this.setComponentState(
      "placeholderText",
      this.castToString(this.getPropValue("placeholder"))
    );
  }

  onComponentDidUpdate() {
    const currentPlaceholder = this.castToString(this.getPropValue("placeholder"));
    const prevPlaceholder = this.getComponentState("placeholderText");

    if (currentPlaceholder !== prevPlaceholder) {
      this.setComponentState("placeholderText", currentPlaceholder);
    }
  }

  validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Required"),
  });

  static getName(): string {
    return "Call To Action 7";
  }

  render() {
    const title = this.castToString(this.getPropValue("title"));
    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");
    const placeholder = this.castToString(this.getPropValue("placeholder"));
    const disableAnimation = this.getPropValue("disableAnimation");

    const submitText = this.castToString(this.getPropValue("submitText"));

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${!this.getPropValue("image") && this.decorateCSS("no-image")}`}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ContainerGrid className={this.decorateCSS("wrapper")}>
            {this.getPropValue("image") &&
              (<Base.GridCell className={this.decorateCSS("left-page")}>
                <img className={`${this.decorateCSS("image")} ${disableAnimation && this.decorateCSS("no-animation")}`}
                  src={this.getPropValue("image")} alt={this.getPropValue("image")} />
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
                        validationSchema={this.validationSchema}
                        onSubmit={(data, { resetForm }) => {
                          this.setComponentState("placeholderText", submitText);
                          this.insertForm("Call Me Back", data);
                          setTimeout(() => {
                            const defaultPlaceholder = this.castToString(this.getPropValue("placeholder"));
                            this.setComponentState(
                              "placeholderText",
                              defaultPlaceholder
                            );
                          }, 2000);
                          resetForm();
                        }}
                      >
                        {({ handleSubmit,
                          handleChange,
                          values,
                          errors,
                          touched, }) => (
                          <Form className={this.decorateCSS("input-div")}
                            onSubmit={handleSubmit}>
                            {placeholder && (
                              <input
                                placeholder={
                                  this.getComponentState("placeholderText") ||
                                  placeholder
                                }
                                type="text"
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                className={this.decorateCSS("input")}
                              />
                            )}
                            {errors.email && touched.email && (
                              <div className={this.decorateCSS("error")}>
                                {errors.email}
                              </div>
                            )}
                            {this.castToString(button.text) && (
                              <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                                {button.text}
                              </Base.Button>
                            )}
                          </Form>
                        )}
                      </Formik>
                    </div>
                  }
                  {(!placeholder && this.castToString(button.text) && (
                    <ComposerLink path={button.url}>
                      <Base.Button className={this.decorateCSS("button")} buttonType={button.type}>
                        {button.text}
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
