import * as React from "react";
import styles from "./faq7.module.scss";
import { BaseFAQ } from "../../EditorComponent";

type Card = {
  title: JSX.Element;
  description: JSX.Element;
};

class FaqButton extends BaseFAQ {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Page Title",
      value: "FAQ",
    });

    this.addProp({
      type: "string",
      key: "text",
      displayer: "Page Title Description",
      value: "Frequently Asked Questions About Dental Treatments in Turkey",
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
  }

  getName(): string {
    return "FAQ-7";
  }

  activeIndex: number = -1;

  render() {
    const handleButton = (index: number) => {
      if (this.activeIndex == index) {
        this.setComponentState("activeIndex", -1);
      } else {
        this.setComponentState("activeIndex", index);
      }
    };

    const isTextExist = this.castToString(this.getPropValue("text"));
    const isSubtitleExist = this.castToString(this.getPropValue("subtitle"));

    const cardList = this.castToObject<Card[]>("card");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            {(isTextExist || isSubtitleExist) &&
              <div className={this.decorateCSS("up-page")}>
                {isSubtitleExist &&
                  <h1 className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</h1>
                }
                {isTextExist &&
                  <p className={this.decorateCSS("text-p")}>{this.getPropValue("text")}</p>
                }
              </div>
            }
            {cardList.length > 0 &&
              <div className={this.decorateCSS("down-page")}>
                {cardList.map(
                  (card: Card, indexCard: number) => {
                    const isTitleExist = this.castToString(card.title);
                    const isDescExist = this.castToString(card.description);

                    if (isTitleExist)
                      return (
                        <div className={this.decorateCSS("card")} key={indexCard}>
                          <div className={this.decorateCSS("child-container")}>
                            <div className={this.decorateCSS("card-title")}>
                              <h3 className={this.decorateCSS("card-title-h3")}>{card.title}</h3>
                            </div>
                            <div className={this.decorateCSS("icon")}>
                              <img
                                alt=""
                                src={
                                  this.getComponentState("activeIndex") === indexCard
                                    ? "https://cdn-icons-png.flaticon.com/512/130/130906.png"
                                    : "https://cdn-icons-png.flaticon.com/512/656/656979.png"
                                }
                                onClick={() => handleButton(indexCard)}
                              />
                            </div>
                          </div>
                          {isDescExist &&
                            <p
                              className={`${this.getComponentState("activeIndex") === indexCard
                                ? this.decorateCSS("text")
                                : this.decorateCSS("hide")
                                }`}
                            >
                              {card.description}
                            </p>
                          }
                        </div>
                      );
                  }
                )}
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default FaqButton;
