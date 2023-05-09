import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials1.module.scss";

class Testimonials1 extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "object",
      key: "feedback",
      displayer: "Feedback",
      value: [
        {
          type: "array",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "object",
              key: "comment",
              displayer: "Comment",
              value: [
                {
                  type: "string",
                  key: "comment",
                  displayer: "comment",
                  value: PlaceholderFiller.shortText(),
                },
                {
                  type: "string",
                  key: "comment Owner",
                  displayer: "Comment Owner",
                  value: PlaceholderFiller.string(),
                },
                {
                  type: "image",
                  key: "Owner Profile",
                  displayer: "Owner Profile",
                  value:
                    "https://images.squarespace-cdn.com/content/v1/592738c58419c2fe84fbdb81/1571829929929-XRB9VF9242RNUKBBX55E/DwayneBrownStudio_OttawaLinkedInHeadshots_ClaireBrown.jpg?format=1000w",
                },
              ],
            },
          ],
        },
      ],
    });
  }
  getName(): string {
    return "FeedBack Testimonals";
  }
  render() {
    return (
      <div className={this.decorateCSS("container")} >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <div
              className={this.decorateCSS("page")}
              
            >
              {this.getPropValue("feedback")[0].value.map(
                (item: any, index: number) => (
                  <div key={index} className={this.decorateCSS("card")}>
                    <img
                      className={this.decorateCSS("card-profile")}
                      src={item.value[2].value}
                      alt=""
                    />
                    <div className={this.decorateCSS("card-front1")}></div>
                    <p className={this.decorateCSS("comment")}>{item.value[0].value}</p>
                    <p className={this.decorateCSS("comment-owner")}>{item.value[1].value}</p>
                    <div className={this.decorateCSS("card-front-shadow")}></div>
                    <div className={this.decorateCSS("card-back1")}></div>
                    <div className={this.decorateCSS("card-back-shadow")}></div>
                    <div className={this.decorateCSS("ballon-yellow-top1")}></div>
                    <div className={this.decorateCSS("ballon-purple1")}></div>
                    <div className={this.decorateCSS("ballon-yellow-bottom1")}></div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Testimonials1;
