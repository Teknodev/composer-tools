import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content23.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

interface Content23Items {
  contentEmoji: string;
  contentTitle: string;
  contentDesc: string;
  link: string;
}
class Content23 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "LATEST NEWS"
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "LATEST AND GREATEST POST"
    });

    this.addProp({
      type: "object",
      key: "button",
      displayer: "Action Button",
      value: [
        {
          type: "string",
          key: "text",
          displayer: "Text of Button",
          value: "VIEW ALL NEWS"
        },
        {
          type: "page",
          displayer: "Navigate",
          value: "",
          key: "navigate"
        }
      ]
    });

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image of Card",
              value: "https://images.unsplash.com/photo-1606944331229-f755b64d76ee?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
              type: "string",
              key: "card_text",
              displayer: "Card Text",
              value: "June 11, 2022 .. architecture"
            },
            {
                type: "string",
                key: "card_text2",
                displayer: "Card Text 2",
                value: "Soul Artwork from Lizzy"
            },
            {
                type: "string",
                key: "card_text3",
                displayer: "Card Text 3",
                value: "qProin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas"
            },
          ]
        },
        {
            type: "object",
            key: "card",
            displayer: "Card",
            value: [
              {
                type: "image",
                key: "image",
                displayer: "Image of Card",
                value: "https://images.unsplash.com/photo-1606944331229-f755b64d76ee?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              {
                type: "string",
                key: "card_text",
                displayer: "Card Text",
                value: "June 11, 2022 .. architecture"
              },
              {
                  type: "string",
                  key: "card_text2",
                  displayer: "Card Text 2",
                  value: "Soul Artwork from Lizzy"
              },
              {
                  type: "string",
                  key: "card_text3",
                  displayer: "Card Text 3",
                  value: "qProin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas"
              },
            ]
          },
          {
            type: "object",
            key: "card",
            displayer: "Card",
            value: [
              {
                type: "image",
                key: "image",
                displayer: "Image of Card",
                value: "https://images.unsplash.com/photo-1606944331229-f755b64d76ee?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              {
                type: "string",
                key: "card_text",
                displayer: "Card Text",
                value: "June 11, 2022 .. Uncategorized"
              },
              {
                  type: "string",
                  key: "card_text2",
                  displayer: "Card Text 2",
                  value: "Create the bestworkplace"
              },
              {
                  type: "string",
                  key: "card_text3",
                  displayer: "Card Text 3",
                  value: "qProin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas"
              },
            ]
          },
          {
            type: "object",
            key: "card",
            displayer: "Card",
            value: [
              {
                type: "image",
                key: "image",
                displayer: "Image of Card",
                value: "https://images.unsplash.com/photo-1606944331229-f755b64d76ee?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              {
                type: "string",
                key: "card_text",
                displayer: "Card Text",
                value: "June 12, 2022 .. Uncategorized"
              },
              {
                  type: "string",
                  key: "card_text2",
                  displayer: "Card Text 2",
                  value: "Wildlife could be amazing, see why."
              },
              {
                  type: "string",
                  key: "card_text3",
                  displayer: "Card Text 3",
                  value: "qProin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas"
              },
            ]
          },
          {
            type: "object",
            key: "card",
            displayer: "Card",
            value: [
              {
                type: "image",
                key: "image",
                displayer: "Image of Card",
                value: "https://images.unsplash.com/photo-1606944331229-f755b64d76ee?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              {
                type: "string",
                key: "card_text",
                displayer: "Card Text",
                value: "June 12, 2022 .. Editorial"
              },
              {
                  type: "string",
                  key: "card_text2",
                  displayer: "Card Text 2",
                  value: "Quick tips for an effective styled wedding"
              },
              {
                  type: "string",
                  key: "card_text3",
                  displayer: "Card Text 3",
                  value: "qProin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas"
              },
            ]
          },
          {
            type: "object",
            key: "card",
            displayer: "Card",
            value: [
              {
                type: "image",
                key: "image",
                displayer: "Image of Card",
                value: "https://images.unsplash.com/photo-1606944331229-f755b64d76ee?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              {
                type: "string",
                key: "card_text",
                displayer: "Card Text",
                value: "June 12, 2022 .. architecture"
              },
              {
                  type: "string",
                  key: "card_text2",
                  displayer: "Card Text 2",
                  value: "Wildlife could be amazing, see why."
              },
              {
                  type: "string",
                  key: "card_text3",
                  displayer: "Card Text 3",
                  value: "qProin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas"
              },
            ]
          },
     
      ]
    })
  }

  getName(): string {
    return "content 23";
  }
  render() {
    return (
    <div></div>
    );
  }
}

export default Content23;
