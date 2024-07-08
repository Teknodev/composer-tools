import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats8.module.scss";

type ICard = {
  title: string;
  description: string;
};

class Stats8Page extends BaseStats {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Hello We are DSN Grid",
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "We’re a creative agency with an expertise in make custom websites",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Founded in 2000, Dsn Grid has become one of the best Digital Agency in Themeforest. Blue money going forward, but deploy to production. First-order optimal strategies build on a culture of contribution and inclusion so those options",
    });

    this.addProp({
      type: "string",
      key: "author",
      displayer: "Author",
      value: "Salvador Dali",
    });

    this.addProp({
      type: "string",
      key: "authorRole",
      displayer: "Author Role",
      value: "Digital Artist",
    });

    this.addProp({
      type: "array",
      key: "stats",
      displayer: "Stats",
      value: [
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "37",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Business Partner",
            },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "19",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Satisfied Customers",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "overlayNumber",
      displayer: "Overlay Number",
      value: "25",
    });

    this.addProp({
      type: "string",
      key: "overlayDescription",
      displayer: "Overlay Description",
      value: "Years of Digital Experience",
    });

    this.addProp({
      type: "image",
      key: "imageSrc",
      displayer: "Image Source",
      value: "https://eremia-react.vercel.app/img/about-intro.jpg",
    });
  }

  getName(): string {
    return "Stats 8";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("stats2-page")}>
            <div className={this.decorateCSS("content")}>
              <h2 className={this.decorateCSS("title")+ " " + this.decorateCSS("text-uppercase")}>{this.getPropValue("title")}</h2>
              <h6 className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</h6>
              <hr />
              <p className={this.decorateCSS("description")}>{this.getPropValue("description")}</p>
              <h5 className={this.decorateCSS("author")}>{this.getPropValue("author")}</h5>
              <span className={this.decorateCSS("author-role")}>{this.getPropValue("authorRole")}</span>
              <div className={this.decorateCSS("stats")}>
                {this.castToObject<ICard[]>("stats").map((statData: any, indexStat: number) => (
                    <div key={indexStat} className={this.decorateCSS("stat")}>
                      <span className={this.decorateCSS("stat-title")}>{statData.title}</span>
                      <h5 className={this.decorateCSS("stat-description")}>{statData.description}</h5>
                    </div>
                ))}
              </div>
            </div>
          </div>
          <div className={this.decorateCSS("stats2-page")}>
            <div className={this.decorateCSS("image-container")}>
              <img src={this.getPropValue("imageSrc")} alt="Digital Experience" />
              <div className={this.decorateCSS("overlay")}>
                <span className={this.decorateCSS("number")}>{this.getPropValue("overlayNumber")}</span>
                <p className={this.decorateCSS("description")}>{this.getPropValue("overlayDescription")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stats8Page;
