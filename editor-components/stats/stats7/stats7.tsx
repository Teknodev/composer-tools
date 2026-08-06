import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats7.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Item = {
  prefix: React.JSX.Element;
  number: React.JSX.Element;
  suffix: React.JSX.Element;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  progress: number;
};

class Stats7Page extends BaseStats {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Our Skills.",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "We work with organisations immersive customer.",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Fierent abhorreant intellegam nam no. Eam minim di neglegentur te, ei etiamas corpora eam disentiun sea. Ut aeterno invidunt sententiae vel, assum adipisci eu vix. Ea ferri cetero ceteros eos, mea ne cibo dis entiet.",
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
      ],
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
            { type: "string", key: "prefix", displayer: "Prefix", value: "" },
            { type: "string", key: "number", displayer: "Value", value: "75%" },
            { type: "string", key: "suffix", displayer: "Suffix", value: "" },
            { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
            { type: "string", key: "title", displayer: "Title", value: "Design" },
            { type: "string", key: "description", displayer: "Description", value: "" },
            {
              type: "number",
              key: "progress",
              displayer: "Progress",
              value: 75,
            },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            { type: "string", key: "prefix", displayer: "Prefix", value: "" },
            { type: "string", key: "number", displayer: "Value", value: "57%" },
            { type: "string", key: "suffix", displayer: "Suffix", value: "" },
            { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
            { type: "string", key: "title", displayer: "Title", value: "Brand Identity" },
            { type: "string", key: "description", displayer: "Description", value: "" },
            {
              type: "number",
              key: "progress",
              displayer: "Progress",
              value: 57,
            },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            { type: "string", key: "prefix", displayer: "Prefix", value: "" },
            { type: "string", key: "number", displayer: "Value", value: "84%" },
            { type: "string", key: "suffix", displayer: "Suffix", value: "" },
            { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
            { type: "string", key: "title", displayer: "Title", value: "Sketch" },
            { type: "string", key: "description", displayer: "Description", value: "" },
            {
              type: "number",
              key: "progress",
              displayer: "Progress",
              value: 84,
            },
          ],
        },
      ],
    });
  }

  static getName(): string {
    return "Stats 7";
  }

  render() {
    const isSubtitleExist = this.castToString(this.getPropValue("subtitle"));
    const isTitleExist = this.castToString(this.getPropValue("title"));
    const isDescriptionExist = this.castToString(this.getPropValue("description"));

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const visibleButtons = buttons.filter((btn) => this.castToString(btn.text) || btn.icon);

    const showDiv = isSubtitleExist || isTitleExist || isDescriptionExist || visibleButtons.length > 0;
    const items = this.castToObject<Item[]>("stats");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {showDiv && (
            <Base.VerticalContent className={this.decorateCSS("title-child")}>
              {isSubtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
              {isTitleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
              {isDescriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
              {visibleButtons.length > 0 && (
                <div className={this.decorateCSS("button-container")}>
                  {visibleButtons.map((btn, index) => (
                    <ComposerLink key={index} path={btn.url}>
                      <Base.Button buttonType={btn.type} className={this.decorateCSS("button")}>
                        {btn.icon && <Base.Media className={this.decorateCSS("button-icon")} value={btn.icon} />}
                        {this.castToString(btn.text) && <Base.P className={this.decorateCSS("button-text")}>{btn.text}</Base.P>}
                      </Base.Button>
                    </ComposerLink>
                  ))}
                </div>
              )}
            </Base.VerticalContent>
          )}

          {items.length > 0 && (
            <Base.VerticalContent className={this.decorateCSS("progress-container")}>
              {items.map((item: Item, index: number) => {
                const { progress } = item;
                const prefixExist = this.castToString(item.prefix);
                const numberExist = this.castToString(item.number);
                const suffixExist = this.castToString(item.suffix);
                const subtitleExist = this.castToString(item.subtitle);
                const titleExist = this.castToString(item.title);
                const descriptionExist = this.castToString(item.description);

                const hasValue = prefixExist || numberExist || suffixExist;

                if (!hasValue && !subtitleExist && !titleExist && !descriptionExist) return null;

                const hasProgress = progress !== null && progress !== undefined && `${progress}`.trim() !== "" && Number.isFinite(Number(progress));
                const percent = hasProgress ? Math.min(Math.max(Number(progress), 0), 100) : 0;
                const barWidth = percent === 0 ? 1 : percent;

                return (
                  <div className={this.decorateCSS("item")} key={index}>
                    <div className={this.decorateCSS("progress-title")}>
                      <div className={this.decorateCSS("progress-title-text")}>
                        {subtitleExist && <div className={this.decorateCSS("progress-subtitle")}>{item.subtitle}</div>}
                        {titleExist && <div className={this.decorateCSS("progress-heading")}>{item.title}</div>}
                      </div>
                      {hasValue && (
                        <div className={this.decorateCSS("progress-percent")}>
                          <div className={this.decorateCSS("progress-text")}>
                            {prefixExist && <span className={this.decorateCSS("progress-prefix")}>{item.prefix}</span>}
                            {numberExist && <span className={this.decorateCSS("progress-value")}>{item.number}</span>}
                            {suffixExist && <span className={this.decorateCSS("progress-suffix")}>{item.suffix}</span>}
                          </div>
                        </div>
                      )}
                    </div>
                    {hasProgress && (
                      <div className={this.decorateCSS("progress-active")}>
                        <div className={this.decorateCSS("progress-passive")} style={{ width: `${barWidth}%` }}></div>
                      </div>
                    )}
                    {descriptionExist && (
                      <div className={this.decorateCSS("progress-description")}>{item.description}</div>
                    )}
                  </div>
                );
              })}
            </Base.VerticalContent>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Stats7Page;
