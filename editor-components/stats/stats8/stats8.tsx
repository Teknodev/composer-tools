import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats8.module.scss";

type ICard = {
  title: number;
  description: string;
};

class Stats8Page extends BaseStats {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "titleItem",
      displayer: "Item Title",
      value: [{
        type: "string",
        key: "title",
        displayer: "Title",
        value: "Hello We are DSN Grid",
      }],
    });

    this.addProp({
      type: "object",
      key: "subtitleItem",
      displayer: "Item Subtitle",
      value: [{
        type: "string",
        key: "subtitle",
        displayer: "Subtitle",
        value: "We’re a creative agency with an expertise in making custom websites",
      }],
    });

    this.addProp({
      type: "object",
      key: "descriptionItem",
      displayer: "Item Description",
      value: [{
        type: "string",
        key: "description",
        displayer: "Description",
        value: "Founded in 2000, Dsn Grid has become one of the best Digital Agency in Themeforest. Blue money going forward, but deploy to production. First-order optimal strategies build on a culture of contribution and inclusion so those options",
      }],
    });

    this.addProp({
      type: "object",
      key: "authorItem",
      displayer: "Item Author",
      value: [{
        type: "string",
        key: "author",
        displayer: "Author",
        value: "Salvador Dali",
      }],
    });

    this.addProp({
      type: "object",
      key: "authorRoleItem",
      displayer: "Item Author Role",
      value: [{
        type: "string",
        key: "authorRole",
        displayer: "Author Role",
        value: "Digital Artist",
      }],
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
              type: "number",
              key: "title",
              displayer: "Title",
              value: 37,
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
              type: "number",
              key: "title",
              displayer: "Title",
              value: 19,
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
      type: "number",
      key: "overlayNumber",
      displayer: "Overlay Number",
      value: 25,
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
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a36aa42f8a5b002ce6a087?alt=media",
    });

    this.addProp({
      type: "number",
      key: "animationDuration",
      displayer: "Number Animation Duration (ms)",
      value: 500,
    });

    this.castToObject<ICard[]>("stats").map((statsData, index) =>
      this.setComponentState(`number-${index}`, 0)
    );

    let interval = setInterval(() => {
      this.castToObject<ICard[]>("stats").map((statData: ICard, index: number) => {
        let currentNumber = this.getComponentState(`number-${index}`);
        if (currentNumber != statData.title) {
          this.setComponentState(
            `number-${index}`,
            Math.min(
              statData.title,
              currentNumber + Math.ceil(statData.title / Math.round(this.getPropValue("animationDuration") / 30))
            ) || 0
          );
        }
      });
    }, 30);
  }

  getName(): string {
    return "Stats 8";
  }

  render() {
    const statsData = this.castToObject<ICard[]>("stats");
    const imageSrc = this.getPropValue("imageSrc");

    const title = this.getPropValue("titleItem").find((item: any) => item.key === "title")?.value;
    const subtitle = this.getPropValue("subtitleItem").find((item: any) => item.key === "subtitle")?.value;
    const description = this.getPropValue("descriptionItem").find((item: any) => item.key === "description")?.value;
    const author = this.getPropValue("authorItem").find((item: any) => item.key === "author")?.value;
    const authorRole = this.getPropValue("authorRoleItem").find((item: any) => item.key === "authorRole")?.value;

    const hasItems = !!title || !!subtitle || !!description || !!author || !!authorRole;
    const hasStats = statsData && statsData.some(statData => statData.title && statData.description);

    const renderLeftSide = hasItems || hasStats;

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {renderLeftSide && (
            <div className={this.decorateCSS("stats2-page")}>
              <div className={this.decorateCSS("content")}>
                {hasItems && (
                  <div className={this.decorateCSS("item")}>
                    {title && <h2 className={this.decorateCSS("title") + " " + this.decorateCSS("text-uppercase")}>{title}</h2>}
                    {subtitle && <h6 className={this.decorateCSS("subtitle")}>{subtitle}</h6>}
                    {description && <p className={this.decorateCSS("description")}>{description}</p>}
                    {author && <h5 className={this.decorateCSS("author")}>{author}</h5>}
                    {authorRole && <span className={this.decorateCSS("author-role")}>{authorRole}</span>}
                  </div>
                )}
                {hasStats && (
                  <div className={this.decorateCSS("stats")}>
                    {statsData.map((statData: ICard, indexStat: number) => (
                      (statData.title && statData.description) && (
                        <div key={indexStat} className={this.decorateCSS("stat")}>
                          <span className={this.decorateCSS("stat-title")}>
                            {this.getComponentState(`number-${indexStat}`)}
                          </span>
                          <h5 className={this.decorateCSS("stat-description") + " " + this.decorateCSS("text-uppercase")}>
                            {statData.description}
                          </h5>
                        </div>
                      )
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
          {imageSrc && (
            <div className={this.decorateCSS("stats2-page") + (renderLeftSide ? "" : " " + this.decorateCSS("full-width"))}>
              <div className={this.decorateCSS("image-container")}>
                <img src={imageSrc} alt="Digital Experience" />
                <div className={this.decorateCSS("overlay")}>
                  <span className={this.decorateCSS("number")}>{this.getPropValue("overlayNumber")}</span>
                  <p className={this.decorateCSS("description")}>{this.getPropValue("overlayDescription")}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Stats8Page;