import { Base } from "composer-tools/composer-base-components/base/base";
import { BaseSocialWidget } from "../../EditorComponent";
import styles from "./social_widget1.module.scss";
import { ComposerEmbededLink } from "composer-tools/composer-base-components/embeded-link/embeded-link";

class TwitterWidget extends BaseSocialWidget {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "embededLink",
      key: "embededLink",
      displayer: "Embeded Link",
      value : `<blockquote class="twitter-tweet" "data-height" = 900><p lang="en" dir="ltr">At dawn from the gateway to Mars, the launch of Starship’s second flight test <a href="https://t.co/ffKnsVKwG4">pic.twitter.com/ffKnsVKwG4</a></p>&mdash; SpaceX (@SpaceX) <a href="https://twitter.com/SpaceX/status/1732824684683784516?ref_src=twsrc%5Etfw">December 7, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
    })

  }
  static getName(): string {
    return "Twitter Widget";
  }
  render() {
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <ComposerEmbededLink path={this.getPropValue("embededLink")} className={this.decorateCSS("widget")}></ComposerEmbededLink>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default TwitterWidget;
