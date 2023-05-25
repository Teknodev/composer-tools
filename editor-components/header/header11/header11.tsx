import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header11.module.scss";

type Card = {
  title: string;
  description: string;
  image: string;
};
class Header11 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      value: "Why Composer ?",
      displayer: "Title",
    })

    this.addProp({
      type: "string",
      key: "description",
      value: "Let our artificial intelligence generate creatives that convert, so you can save time and money to scale. Check out why and how you should use Composer",
      displayer: "Description",
    })

    this.addProp({
      type: "array",
      key: "button",
      displayer: "Buttons",
      value: [
        {
          type: "object",
          key: "buttonObject",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Go There",
            },
            {
              type: "page",
              key: "link",
              displayer: "URL",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "header-card",
      displayer: "Header Card",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646f27a4fba070002b74f37f?alt=media&timestamp=1685006245609",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Trained A.I.",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Our machine learning model is learning every day and provides up-to-date creatives with a sole purpose: conversion.",
            },
          ],
        },

        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646f27e7fba070002b74f3b2?alt=media&timestamp=1685006312349",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Better Conversions",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Up to 14x better conversion rates than ad creatives designed with no data-driven approach.",
            },
          ],
        },

        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646f28cbfba070002b74f407?alt=media&timestamp=1685006549635",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Super Scalable",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "1 creative or 10,000 creatives a month, Composer is designed to match your ad creative/banner needs.",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Header 11";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("header-page")}>
              <h3>{this.getPropValue("title")}</h3>
              <h1>{this.getPropValue("description")}</h1>
              {this.castToObject<[]>("button").map((item: any, indexButton: number) => {
                return (
                  <ComposerLink key={`hdr-11-${indexButton}`} path={item.link}>
                    <button className={this.decorateCSS("button")}>
                      {item.buttonText}
                    </button>
                  </ComposerLink>
                );
              })}
            </div>
            <div className={this.decorateCSS("card-child")}>
              {this.castToObject<Card[]>("header-card").map(
                (card: Card, index: number) => (
                  <div key={`hdr-11-card-${index}`} className={this.decorateCSS("card")}>
                    <div className={this.decorateCSS("img-child")}>
                      <img src={card.image} />
                    </div>
                    <h5>{card.title}</h5>
                    <p>{card.description}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header11;
