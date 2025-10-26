import { BaseFeature } from "../../EditorComponent";
import styles from "./feature25.module.scss";
import { Base } from "../../../composer-base-components/base/base";

class Feature25 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "title",
      value: "title",
    });
  }

  static getName(): string {
    return "Feature 25";
  }

  render() {
    const title = this.castToString(this.getPropValue("title"));
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.SectionTitle className={this.decorateCSS("title")}>
            {title}
          </Base.SectionTitle>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature25;
