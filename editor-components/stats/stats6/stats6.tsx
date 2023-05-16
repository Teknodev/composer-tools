import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/link";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats6.module.scss";

type CardData = {
  CardImage: string;
  CardTitle: string;
  CardDescription: string;
};

class Stats6Page extends BaseStats {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "card-list",
      displayer: "Price List",
      value: [
        {
          type: "object",
          key: "card-lists",
          displayer: "Pricing List",
          value: [
            {
              type: "image",
              key: "CardImage",
              displayer: "Card Image",
              value:
                "https://img.freepik.com/free-vector/illustration-social-connection_53876-35997.jpg?w=826&t=st=1680874120~exp=1680874720~hmac=9749f71cec2f7953e2b607e26a64ec090262cc3be6b266b42aa17bb6e83219e8",
            },
            {
              type: "string",
              key: "CardTitle",
              displayer: "Card Title",
              value: "20K+",
            },
            {
              type: "string",
              key: "CardDescription",
              displayer: "Card Description",
              value: "daily user statistics",
            },
          ],
        },
        {
          type: "object",
          key: "card-lists",
          displayer: "Pricing List",
          value: [
            {
              type: "image",
              key: "CardImage",
              displayer: "Card Image",
              value:
                "https://img.freepik.com/free-vector/online-document-form-digital-agreement-electronic-contract-internet-questionnaire-list-note-voting-ballot-poll-flat-design-element-concept-illustration_335657-2013.jpg?w=826&t=st=1680874535~exp=1680875135~hmac=ba9532b376576c6d90b616b8105df0b60587c41076a38695555133b05d66c844",
            },
            {
              type: "string",
              key: "CardTitle",
              displayer: "Card Title",
              value: "20K+",
            },
            {
              type: "string",
              key: "CardDescription",
              displayer: "Card Description",
              value: "total registers",
            },
          ],
        },
        {
          type: "object",
          key: "card-lists",
          displayer: "Pricing List",
          value: [
            {
              type: "image",
              key: "CardImage",
              displayer: "Card Image",
              value:
                "https://img.freepik.com/free-vector/realistic-vector-icon-set-brown-carton-paper-bag-with-handles-isolated-white-background_134830-1278.jpg?w=826&t=st=1680874944~exp=1680875544~hmac=99a035ff8898b9790e1369ec71aff17cead1f41ea032890ed49f4c4da64d2fc4",
            },
            {
              type: "string",
              key: "CardTitle",
              displayer: "Card Title",
              value: "20K+",
            },
            {
              type: "string",
              key: "CardDescription",
              displayer: "Card Description",
              value: "categories",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Stats 6";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("stats6-page")}>
            {this.castToObject<CardData[]>("card-list").map(
              (data: any, index: number) => (
                <div key={index} className={this.decorateCSS("card")}>
                  <img src={data.CardImage} width={100} height={100} />
                  <h4>{data.CardTitle}</h4>
                  <p>{data.CardDescription}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Stats6Page;
