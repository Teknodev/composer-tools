import React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature9.module.scss";

class Feature9 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);
  }

  getName(): string {
    return "Feature 9";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>

        </div>
      </div>
    );
  }
}

export default Feature9;
