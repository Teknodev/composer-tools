import * as React from "react";
import styles from "./faq7.module.scss";
import { BaseFAQ } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Card = {
  title: React.JSX.Element;
  description: React.JSX.Element;
};

class Faq7 extends BaseFAQ {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "FAQ",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Frequently Asked Questions About Dental Treatments in Turkey",
    });
    this.addProp({
      type: "icon",
      key: "iconInactive",
      displayer: "Inactive Icon",
      value: "SlArrowDown",
    });
    this.addProp({
      type: "icon",
      key: "iconActive",
      displayer: "Active Icon",
      value: "SlArrowUp",
    });
    this.addProp({
      type: "number",
      key: "initialCardCount",
      displayer: "Initial Card Count",
      value: 3,
    });
    this.addProp({
      type: "number",
      key: "moreCardCount",
      displayer: "More Card Count",
      value: 2,
    });

    this.addProp({
      type: "array",
      key: "card",
      displayer: "Card",
      value: [
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value:
                "Why should I have my Dental Implants in Turkey?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Cost of dental implants in Turkey is around 30 to 40 percent of what the costs in Europe. Other dental procedures are also significantly low-priced. We use the same high quality materials and Implant brands however the cost of living, running a dental clinic and wages are much lower. Moreover, all your treatments are done by specialists using high-tech materials.",
            },
          ],
        },
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value:
                "How long does the dental implant procedure take?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "You will need to make two visits to complete your treatment. For first visit you need to stay 5 days and for second visit you need to stay 8 days. During the first appointment, your surgeon places the implant in the jawbone. Then, the surgeon covers the implant with gum tissue to allow the implant to heal properly. The healing period may vary 3-6 months depending on the patient's bone condition. If you want to wait longer than 3-6 months for your Dental Crowns this will not affect your procedure and is perfectly safe. The choice is up-to-you depending on your available holiday dates and of course your budget.",
            },
          ],
        },
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value:
                " How can I overcome dental anxiety?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "As many as 40 million people avoid dental treatment due to dental anxiety. We want to make your treatment as comfortable as possible and sedation simply adds the extra bit of relaxation. It can prevent gag reflexes and help patients who fear the dentist relax. It is completely painless and will give you a sense of calm and happiness! We offer different types of sedation and your dentist will decide which is right for you, for longer or more complicated treatments intravenous sedation may be advisable. Sedation will not make you unconscious, but it will make it unsafe for you to drive or operate any machinery for a while afterwards, so we recommend asking for a friend or family member to join you! At Dental Excellence Turkey we want all our patients to have a very pleasant experience, making sure you are happy with all the aspects of your treatment!.",
            },
          ],
        }, {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value:
                "What is Digital Smile Design?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Whenever you look at the mirror, if the image caused by the shape, color, and shortness of your teeth bothers you, the smile design can be the key to the change you want. With the smile design, not only your teeth, but also your gums, lips and face are evaluated as a whole. Parameters such as your facial features, lip structure, gum levels, gender, skin color and even your character are evaluated and a special treatment plan is prepared for you. With a correct planning, your smile can erase the years on your face, and Hollywood smile can be your signature.",
            },
          ],
        },
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value:
                "Is Porcelain Laminate Veneer an invasive or painful treatment?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Not at all, nowadays porcelain veneers are getting thinner, so tooth carving is minimal. It is a simple treatment, fast and without pain.",
            },
          ],
        },
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value:
                "How to Care for Dental Veneers?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Porcelain veneers require the same maintenance as natural teeth. They are made of a material that is not affected by cavities but they are attached to a part of the tooth which is vulnerable to decay, so it is always recommended a good oral hygiene based on tooth brushing 3 times a day and the use of dental floss, once a day.",
            },
          ],
        },
      ],
    });
    this.addProp(INPUTS.BUTTON("button", "Button", "More", null, null, null, "Primary"));

    this.setComponentState("activeIndex", -1);
    this.setComponentState("moreImages", 0);

  }

  static getName(): string {
    return "FAQ 7";
  }
  handleButton(index: number): void {
    if (this.getComponentState("activeIndex") === index) {
      this.setComponentState("activeIndex", -1);
    } else {
      this.setComponentState("activeIndex", index);
    }
  }
  handleButtonClick = () => {
    this.setComponentState("moreImages", this.getComponentState("moreImages") + this.getPropValue("moreCardCount"))

  };
  render() {
    if (this.getComponentState("cardCount") != this.getPropValue("initialCardCount") + this.getComponentState("moreImages"))
      this.setComponentState("cardCount", this.getPropValue("initialCardCount") + this.getComponentState("moreImages"));
    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            {(this.castToString(this.getPropValue("title")) || this.castToString(this.getPropValue("description"))) && (
              <Base.VerticalContent className={this.decorateCSS("up-page")}>
                {this.castToString(this.getPropValue("title")) && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>
                )}
                {this.castToString(this.getPropValue("description")) && (
                  <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>
                )}
              </Base.VerticalContent>
            )}
            {(this.getPropValue("card").length > 0) && (
              <div className={this.decorateCSS("down-page")}>
                {this.castToObject<Card[]>("card").slice(0, this.getComponentState("cardCount")).map(
                  (card: Card, indexCard: any) => {
                    const isActive = this.getComponentState("activeIndex") === indexCard;
                    return (
                      <div className={this.decorateCSS("card")} key={indexCard} onClick={() => this.handleButton(indexCard)}>
                        <div className={this.decorateCSS("line")}></div>
                        {(this.castToString(card.title) || this.getPropValue("iconActive") || this.getPropValue("iconInactive")) && (
                          <div className={this.decorateCSS("child-container")}>
                            {this.castToString(card.title) && (
                              <div className={this.decorateCSS("card-title-wrapper")}>
                                <div className={`${this.decorateCSS("card-title")} ${isActive ? this.decorateCSS("active") : ""}`}>{card.title}</div>
                              </div>
                            )}
                            {(this.getPropValue("iconActive") || this.getPropValue("iconInactive")) && (
                              <div className={this.decorateCSS("icon-wrapper")}>
                                <ComposerIcon name={isActive ? this.getPropValue("iconActive") : this.getPropValue("iconInactive")} propsIcon={{ className: this.decorateCSS("icon") }} />
                              </div>
                            )}
                          </div>
                        )}
                        {this.castToString(card.description) && (
                          <div className={`${this.decorateCSS("inner-card")} ${isActive ? this.decorateCSS("active") : ""}`} >
                            <div className={`${this.decorateCSS("inner-text")} ${isActive ? this.decorateCSS("active") : ""}`}>
                              {card.description}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  }
                )}
              </div>
            )}
            {(this.getPropValue("card").length > this.getComponentState("cardCount")) && (
              <div className={this.decorateCSS("button-wrapper")}>
                <Base.Button buttonType={button.type} className={this.decorateCSS("button")} onClick={this.handleButtonClick} >
                  {button.text}
                </Base.Button>
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container >
    );
  }
}

export default Faq7;
