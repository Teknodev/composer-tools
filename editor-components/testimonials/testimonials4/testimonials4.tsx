import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials4.module.scss";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";

type Item = {
  image: string;
};

class Testimonials4Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "backgroundImage",
      displayer: "Background Image",
      value:
        "https://www.pixelstalk.net/wp-content/uploads/images6/Desktop-Wallpaper-Aesthetic-Wallpaper-Romantic.jpg",
    });
    this.addProp({
      type: "string",
      key: "longtext",
      displayer: "Long Text",
      value: PlaceholderFiller.mediumText(),
    });
    this.addProp({
      type: "string",
      key: "name",
      displayer: "Name",
      value: PlaceholderFiller.string(),
    });
    this.addProp({
      type: "string",
      key: "rank",
      displayer: "Rank",
      value: "UX Developer",
    });
  }

  getName(): string {
    return "Testimonials 4";
  }

  render() {

    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={"max-content"}>
          <div className={this.decorateCSS("testimonials4")}>
            <div className={styles["card"]}>
              <div className={this.decorateCSS("card-child")}>
                <h1>{this.getPropValue("longtext")}</h1>
                <h3>{this.getPropValue("name")}</h3>
                <h4>{this.getPropValue("rank")}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials4Page;
