import { BaseFixed } from "../../EditorComponent";
import styles from "./fixed1.module.scss";
import { Base } from "../../../composer-base-components/base/base";

class Fixed1 extends BaseFixed {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "media",
      key: "icon",
      displayer: "Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "IoIosArrowUp",
      },
    });

  }

  static getName(): string {
    return "Fixed 1";
  }

  scrollToTop = () => {
    const playground = document.getElementById("playground");
    if (playground) {
      playground.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  render() {
    return (
      <button
        type="button"
        className={this.decorateCSS("container")}
        onClick={this.scrollToTop}
        aria-label="Back to top"
      >
        <Base.Media
          value={this.getPropValue("icon")}
          className={this.decorateCSS("icon")}
        />
      </button>
    );
  }
}

export default Fixed1;
