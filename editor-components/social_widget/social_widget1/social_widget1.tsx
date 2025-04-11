import { Base } from "composer-tools/composer-base-components/base/base";
import { BaseSocialWidget } from "../../EditorComponent";
import styles from "./social_widget1.module.scss";

class SocialWidget1 extends BaseSocialWidget {
  constructor(props?: any) {
    super(props, styles);

  }
  static getName(): string {
    return "Social Widget 1";
  }
  render() {
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>

        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default SocialWidget1;
