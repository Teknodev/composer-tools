import * as React from "react";
import { BaseContacts } from "../../EditorComponent";
import styles from "./form5.module.scss";
import { ErrorMessage, Formik, Form } from "formik";
import * as Yup from "yup";

class Form5Page extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Get In Touch",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Contact us",
    });
    this.addProp({
      type: "string",
      key: "name",
      displayer: "1th Placeholder",
      value: "First & last name",
    });
    this.addProp({
      type: "string",
      key: "email",
      displayer: "2th Placeholder",
      value: "Email address",
    });
    this.addProp({
      type: "string",
      key: "message",
      displayer: "3th Placeholder",
      value: "Write message",
    });
    this.addProp({
      type: "string",
      key: "button_text",
      displayer: "Button Text",
      value: "Send Message",
    });
    this.addProp({
      type: "image",
      key: "backgroundImage",
      displayer: "Background Image",
      value: "https://wallpaperaccess.com/full/754632.jpg",
    });
    this.addProp({
      type: "string",
      key: "adress",
      displayer: "Adress",
      value: "192 West 19th Street, Suite 200, New York, NY 12036",
    })
    this.addProp({
      type: "image",
      key: "adressImage",
      displayer: "Adress Image",
      value: "https://cdn-icons-png.flaticon.com/512/64/64113.png",
    })
    this.addProp({
      type: "string",
      key: "phone",
      displayer: "Phone",
      value: "+ 1235 2355 98",
    })
    this.addProp({
      type: "image",
      key: "phoneImage",
      displayer: "Phone Image",
      value: "https://www.freeiconspng.com/thumbs/phone-icon/office-phone-icon--25.png",
    })
    this.addProp({
      type: "string",
      key: "email",
      displayer: "Email",
      value: "info@yoursite.com"
    })
    this.addProp({
      type: "image",
      key: "emailImage",
      displayer: "Email Image",
      value: "https://cdn-icons-png.flaticon.com/512/725/725680.png",
    })
    this.addProp({
      type: "string",
      key: "website",
      displayer: "Website",
      value: "www.yoursite.com"
    })
    this.addProp({
      type: "image",
      key: "websiteImage",
      displayer: "Website Image",
      value: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Globe_icon.svg/1200px-Globe_icon.svg.png"
    })
  }

  validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string().min(5, "Min 5 character!").required("Required"),
  });

  getName(): string {
    return "Form 5";
  }
  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("contact-container")}>
            <div className={this.decorateCSS("contacts5-left")}>
              <h1 className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</h1>
              <div className={this.decorateCSS("contacts5")}>
            <div className={this.decorateCSS("contact-form")}>
              <Formik
                initialValues={{ name: "", email: "", message: "" }}
                validationSchema={this.validationSchema}
                onSubmit={(data, { resetForm }) => {
                  this.insertForm("Contact Us", data);
                  resetForm();
                }}
              >
                {({ handleChange, values }) => (
                  <Form className={this.decorateCSS("form")}>
                    <input
                      placeholder={this.getPropValue("name")}
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      className={this.decorateCSS("input")}
                    />
                    <ErrorMessage
                      className={this.decorateCSS("error-message")}
                      name="name"
                      component={"span"}
                    />
                    <input
                      placeholder={this.getPropValue("email")}
                      type="text"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      className={this.decorateCSS("input")}
                    />
                    <ErrorMessage
                      className={this.decorateCSS("error-message")}
                      name="email"
                      component={"span"}
                    />
                    <textarea
                      placeholder={this.getPropValue("message")}
                      id="text"
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      className={this.decorateCSS("input")}
                      rows={5}
                    />
                    <ErrorMessage
                      className={this.decorateCSS("error-message")}
                      name="message"
                      component={"span"}
                    />
                    <button
                      className={this.decorateCSS("submit-button")}
                      type="submit"
                    >
                      {this.getPropValue("button_text")}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
            </div> 
          
          <div className={this.decorateCSS("contacts5-right")}>
            <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
            <div className={this.decorateCSS("infos")}>
                <div className={this.decorateCSS("info-row")}>
                  <div className={this.decorateCSS("img-div")}>
                    <img src={this.getPropValue("adressImage")} alt="" />
                  </div>
                    <p className={this.decorateCSS("adress")}><strong>Adress: </strong>{this.getPropValue("adress")}</p>
                </div>
                <div className={this.decorateCSS("info-row")}>
                  <div className={this.decorateCSS("img-div")}>
                    <img src={this.getPropValue("phoneImage")} alt="" />
                  </div>
                    <p className={this.decorateCSS("phone")}><strong>Phone: </strong>{this.getPropValue("phone")}</p>
                </div>
                <div className={this.decorateCSS("info-row")}>
                  <div className={this.decorateCSS("img-div")}>
                    <img src={this.getPropValue("emailImage")} alt="" />
                  </div>
                    <p className={this.decorateCSS("email")}><strong>Email: </strong>{this.getPropValue("email")}</p>
                </div>
                <div className={this.decorateCSS("info-row")}>
                  <div className={this.decorateCSS("img-div")}>
                    <img src={this.getPropValue("websiteImage")} alt="" />
                  </div>
                    <p className={this.decorateCSS("website")}><strong>Website: </strong>{this.getPropValue("website")}</p>
                </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form5Page;
