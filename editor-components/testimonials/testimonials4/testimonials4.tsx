import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials4.module.scss";

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
      value:
        "I really like the clean and simple aesthetic of flat design. It's great for creating a modern and minimal look, and it also works well for responsive design since it's easy to adapt to different screen sizes. Plus, the lack of textures and gradients makes it easier to focus on the content itself.",
    });
    this.addProp({
      type: "string",
      key: "name",
      displayer: "Name",
      value: "Jerrie Corinna",
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
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("testimonials4")}>
            <div className={this.decorateCSS("card")}>
              <h1>{this.getPropValue("longtext")}</h1>
              <h3>{this.getPropValue("name")}</h3>
              <h4>{this.getPropValue("rank")}</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials4Page;
