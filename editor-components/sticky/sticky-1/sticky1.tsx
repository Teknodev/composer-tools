import styles from "./sticky1.module.scss";
import { BaseSticky } from "../../EditorComponent";
import { Base } from "composer-tools/composer-base-components/base/base";

class Sticky1 extends BaseSticky {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "icon",
      key: "icon",
      displayer: "Icon",
      value: "MdKeyboardArrowUp",
    });
  }

  static getName(): string {
    return "Sticky 1";
  }

  render() {
    const icon = this.getPropValue("icon");
    const handleScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      document.querySelector("#playground")?.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
      <div className={styles.container}>
          <div
            onClick={handleScroll}
            onKeyDown={(event) => {
              if (event.key === "Enter") handleScroll();
            }}
            className={styles.toStart}
          >
            <Base.Icon name={icon} propsIcon={{ className: `${styles.icon}` }} />
          </div>
      </div>
    );
  }
}

export default Sticky1;
