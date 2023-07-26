import * as React from "react";
import ComposerModalClose from "../../../composer-base-components/close/close";
import { BaseModal } from "../../EditorComponent";
import styles from "./discount-modal.module.scss";

class DiscountModal extends BaseModal {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "discount-title",
      value: "GET 10% OFF",
      displayer: "Title",
    });
    this.addProp({
      type: "string",
      key: "subscribe",
      value: "SUBSRIBE TO OUR NEWSLETTER & RECEIVE A COUPON",
      displayer: "Description",
    });
    this.addProp({
      type: "string",
      key: "entermail",
      value: "ENTER YOUR EMAİL WHERE WE SEND YOU 10% OFF",
      displayer: "Entermail",
    });

    this.addProp({
      type: "string",
      key: "button-text",
      displayer: "Button Text",
      value: "GET IT NOW!",
    });
    this.addProp({
      type: "string",
      key: "button-no",
      displayer: "Button No",
      value: "NO THANKS",
    });

    this.addProp({
      type: "string",
      key: "min-purchase",
      value: "$50 MINIMUM PURCHASE",
      displayer: "Description-2",
    });
    
  }

  getName(): string {
    return "Discount Modal";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <h2 className={this.decorateCSS("first-header")}>
              {this.getPropValue("discount-title")}
            </h2>
            <span className={this.decorateCSS("subscribe")}>
              {this.getPropValue("subscribe")}
            </span>
            <input className={this.decorateCSS("enter-mail")} type="email" placeholder={this.getPropValue("entermail")} />
            <div className={this.decorateCSS("modal-close")}>
              <ComposerModalClose>
                <button className={this.decorateCSS("button")}>
                  {this.getPropValue("button-text")}
                </button>
              </ComposerModalClose>
              <div className={this.decorateCSS("p-group")}>
              <p className={this.decorateCSS("no-text")}>{this.getPropValue("button-no")}</p>
              <p className={this.decorateCSS("min-purchase")}>{this.getPropValue("min-purchase")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DiscountModal;
