import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature29.module.scss";
import { Base } from "../../../composer-base-components/base/base";

class Feature29 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Title Test",
    });
  }

  static getName(): string {
    return "Feature 29";
  }

  render() {
    const title = this.getPropValue("title");
    return (
      <Base.Container>
        <Base.MaxContent>
          <Base.SectionTitle>{title}</Base.SectionTitle>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature29;
