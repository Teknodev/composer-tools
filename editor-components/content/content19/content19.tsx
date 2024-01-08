import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseContent } from "../../EditorComponent";
import styles from "./content19.module.scss";

class Content19 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Mathangi Maya Arulpragasam (born 18 July 1975), better known by her stage name M.I.A., is an English recording artist of Sri Lankan Tamil heritage. She is also a songwriter, painter, and director. M.I.A. is a play on her own name and a reference to the acronym of Missing in Action. Her compositions combine elements of electronic, dance, alternative, hip hop, and world music. Arulpragasam began her career in 2000 as a visual artist, filmmaker, and designer in west London before beginning her recording career in 2002. Since rising to prominence in early 2004 for her singles Sunshowers and Galang, charting in the UK and Canada and reaching number 11 on the Billboard Hot Dance Singles Sales in the US, she has been nominated for an Academy Award, two Grammy Awards and the Mercury Prize."
    });
    this.addProp({
      type: "page",
      key: "video-link",
      displayer: "Video Link",
      value: "https://www.youtube.com/embed/yB7MtnWmYzI"
    });
    this.addProp({
      type: "string",
      key: "below-title",
      displayer: "Below Title",
      value: "BOYZ"
    });
    this.addProp({
      type: "string",
      key: "below-text",
      displayer: "Below Text",
      value: "She has been nominated for an Academy Award, two Grammy Awards, and the Mercury Prize"
    });

  }

  getName(): string {
    return "Content 19";
  }

  render() {
    const youtubeVideoId = this.getPropValue("youtubeVideoId");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("header-page")}>
              <h1 className={this.decorateCSS("description")}>{this.getPropValue("description")}</h1>
            </div>
            <div className={this.decorateCSS("youtube")}>
            <iframe title="YouTube Video" 
            src={this.getPropValue("video-link")}
            className={this.decorateCSS("iframe")}
             allowFullScreen></iframe>
              <h3 className={this.decorateCSS("below-title")}>{this.getPropValue("below-title")}</h3>
              <h2 className={this.decorateCSS("below-text")}>{this.getPropValue("below-text")}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content19;