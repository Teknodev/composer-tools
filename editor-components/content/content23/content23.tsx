import styles from "./content23.module.scss";
import { BaseContent } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";

class Content23 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    [1, 2, 3].forEach((i) => {
      this.addProp({
        type: "string",
        key: `feature${i}Title`,
        displayer: `Feature ${i} Title`,
        value:
          i === 1
            ? "90 Days Return"
            : i === 2
            ? "Free Delivery"
            : "Secure Payment",
      });
      this.addProp({
        type: "string",
        key: `feature${i}Desc`,
        displayer: `Feature ${i} Description`,
        value:
          i === 1
            ? "If goods have problems, consectetur adipim scing elit."
            : i === 2
            ? "For all orders over $50, consectetur adipim scing elit."
            : "100% secure payment, consectetur adipim scing elit.",
      });
    });
  }

  static getName(): string {
    return "Content 23";
  }

  render() {
    const features = [1, 2, 3].map((i) => ({
      title: this.getPropValue(`feature${i}Title`),
      desc: this.getPropValue(`feature${i}Desc`),
    }));

    const icons = ["FiClock", "BsBookmarkDash", "FiCreditCard"];

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
        {features.map((feat, idx) => (
          <div key={idx} className={this.decorateCSS("feature")}>
            <div className={this.decorateCSS("top-row")}>
              <Base.Icon
                name={icons[idx]}
                propsIcon={{ className: this.decorateCSS("icon") }}
              />
              <Base.SectionTitle className={this.decorateCSS("title")}>
                {feat.title}
              </Base.SectionTitle>
            </div>
            <Base.SectionDescription className={this.decorateCSS("description")}>
              {feat.desc}
            </Base.SectionDescription>
          </div>
        ))}

        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Content23;
