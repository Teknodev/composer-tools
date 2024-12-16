import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature14.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type CardItem = {
  icon: JSX.Element,
  title: string,
  description: string,
};

class Feature14 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Here are couple reasons why We are the best",
    });
    this.addProp({
      type: "string",
      key: "firstdescription",
      displayer: "First Description",
      value: "New Concept Staining (NCS) is a woman-owned company that provides color concreate staining services to commercial and residential customers.",
    });
    this.addProp({
      type: "string",
      key: "seconddescription",
      displayer: "Second Description",
      value: "The company was formed in response to an overwhelming market demand for concreate staining services, predominantly in the commercial construction industry. NCS'work commonly includes the artisanal staining of bridges, sound walls, abutments, and buildings.",
    });
    this.addProp({
      type: "string",
      key: "linkTitle",
      displayer: "Link Text",
      value: "About Us",
    });
    this.addProp({
      type: "icon",
      key: "linkIcon",
      displayer: "Link Icon",
      value: "GoArrowRight",
    });
    this.addProp({
      type: "page",
      key: "linkPage",
      displayer: "Link Page",
      value: "",
    });
    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
      value: [
        {
          type: "object",
          key: "cardItem",
          displayer: "Card Item",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Card Icon",
              value: "IoPricetagsOutline",
            },
            {
              type: "string",
              key: "title",
              displayer: "Card Title",
              value: "Best price guaranteed",
            },
            {
              type: "string",
              key: "description",
              displayer: "Card Description",
              value: "Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus vivamus semper vulputate venenatis vitae egestas commodo porta.",
            },
          ],
        },
        {
          type: "object",
          key: "cardItem",
          displayer: "Card Item",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Card Icon",
              value: "MdSupportAgent",
            },
            {
              type: "string",
              key: "title",
              displayer: "Card Title",
              value: "Great communication",
            },
            {
              type: "string",
              key: "description",
              displayer: "Card Description",
              value: "Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus vivamus semper vulputate venenatis vitae egestas commodo porta.",
            },
          ],
        },
        {
          type: "object",
          key: "cardItem",
          displayer: "Card Item",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Card Icon",
              value: "CiStar",
            },
            {
              type: "string",
              key: "title",
              displayer: "Card Title",
              value: "We provide high standards",
            },
            {
              type: "string",
              key: "description",
              displayer: "Card Description",
              value: "Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus vivamus semper vulputate venenatis vitae egestas commodo porta.",
            },
          ],
        },
        {
          type: "object",
          key: "cardItem",
          displayer: "Card Item",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Card Icon",
              value: "GrUserManager",
            },
            {
              type: "string",
              key: "title",
              displayer: "Card Title",
              value: "We worked with many big companies",
            },
            {
              type: "string",
              key: "description",
              displayer: "Card Description",
              value: "Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus vivamus semper vulputate venenatis vitae egestas commodo porta.",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 4,
    });
  }

  getName(): string {
    return "Feature 14";
  }

  render() {

    const cardItems = this.castToObject<CardItem[]>("cards");

    const alignment = Base.getContentAlignment();

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={alignment == "left" ? this.decorateCSS("title-wrapper") : this.decorateCSS("title-wrapper-center")}>
            <Base.VerticalContent className={this.decorateCSS("title-left")}>
              {this.castToString(this.getPropValue("title")) && (
                <Base.SectionTitle className={this.decorateCSS("header")}>
                  {this.getPropValue("title")}
                </Base.SectionTitle>
              )}
              {(alignment == "left" && this.castToString(this.getPropValue("linkTitle"))) && (
                <div className={this.decorateCSS("link")}>
                  <ComposerLink path={this.getPropValue("linkPage")}>
                    {this.getPropValue("linkTitle")}
                  </ComposerLink>
                  <ComposerIcon name={this.getPropValue("linkIcon")} />
                </div>
              )}
            </Base.VerticalContent>
            <Base.VerticalContent className={this.decorateCSS("title-right")}>
              {this.castToString(this.getPropValue("firstdescription")) && (
                <Base.SectionDescription className={this.decorateCSS("description-1")}>
                  {this.getPropValue("firstdescription")}
                </Base.SectionDescription>
              )}

              {this.castToString(this.getPropValue("seconddescription")) && (
                <Base.SectionDescription className={this.decorateCSS("description-2")}>
                  {this.getPropValue("seconddescription")}
                </Base.SectionDescription>
              )}
              {(alignment == "center" && this.castToString(this.getPropValue("linkTitle"))) && (
                <div className={this.decorateCSS("link")}>
                  <ComposerLink path={this.getPropValue("linkPage")}>
                    {this.getPropValue("linkTitle")}
                  </ComposerLink>
                  <ComposerIcon name={this.getPropValue("linkIcon")} />
                </div>
              )}
            </Base.VerticalContent>
          </div>
          <div className={this.decorateCSS("section")}>
            <Base.ListGrid className={this.decorateCSS("cards")} gridCount={{ pc: this.getPropValue("itemCount") }}>
              {cardItems.map((item: any, index: number) => {
                return (
                  <div className={this.decorateCSS("card")}>
                    {item.icon && (
                      <div className={this.decorateCSS("icon-box")}>
                        <ComposerIcon name={item.icon} propsIcon={{ className: this.decorateCSS("icon") }} />
                      </div>
                    )}

                    <div className={this.decorateCSS("card-content")}>
                      {this.castToString(item.title) && (
                        <div className={this.decorateCSS("card-title")}>{item.title}</div>
                      )}
                      {this.castToString(item.description) && (
                        <div className={this.decorateCSS("card-description")}>{item.description}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </Base.ListGrid>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature14;