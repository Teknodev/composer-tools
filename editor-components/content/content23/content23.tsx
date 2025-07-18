import styles from "./content23.module.scss";
import { BaseContent } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";

interface FeatureItem {
  icon?: string;
  title: string;
  description: string;
}

class Content23 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "features",
      displayer: "Features",
      value: [
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            { type: "icon", key: "icon", displayer: "Icon", value: "FiClock" },
            { type: "string", key: "title", displayer: "Title", value: "90 Days Return" },
            { type: "string", key: "description", displayer: "Description", value: "If goods have problems, consectetur adipiscing elit." },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            { type: "icon", key: "icon", displayer: "Icon", value: "BsBookmarkDash" },
            { type: "string", key: "title", displayer: "Title", value: "Free Delivery" },
            { type: "string", key: "description", displayer: "Description", value: "For all orders over $50, consectetur adipim scing elit." },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            { type: "icon", key: "icon", displayer: "Icon", value: "FiCreditCard" },
            { type: "string", key: "title", displayer: "Title", value: "Secure Payment" },
            { type: "string", key: "description", displayer: "Description", value: "100% secure payment, consectetur adipim scing elit." },
          ],
        },
      ],
    });

    this.addProp({
      type: "number",
      key: "itemsPerRow",
      displayer: "Items Per Row",
      value: 3,
    });
  }

  static getName(): string {
    return "Content 23";
  }

  render() {
    const features = this.castToObject<FeatureItem[]>("features");
    const itemsPerRow = this.getPropValue("itemsPerRow") ?? 3;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent
          className={`${this.decorateCSS("max-content")} ${this.decorateCSS(`cols-${itemsPerRow}`)}`}
        >
          {features.map((feat, idx) => (
            <div key={idx} className={this.decorateCSS("feature")}>
              <div className={this.decorateCSS("top-row")}>
                {feat.icon && (
                  <Base.Icon
                    name={feat.icon}
                    propsIcon={{ className: this.decorateCSS("icon") }}
                  />
                )}
                <div className={this.decorateCSS("text-group")}>
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {feat.title}
                  </Base.SectionTitle>
                  <Base.SectionDescription className={this.decorateCSS("description")}>
                    {feat.description}
                  </Base.SectionDescription>
                </div>
              </div>
            </div>
          ))}
        </Base.MaxContent>
      </Base.Container>
    );
  }

}

export default Content23;
