import * as React from "react";
import styles from "./download4.module.scss";
import { BaseDownload } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

interface Cards {
  map(arg0: (card: Card, index: number) => React.JSX.Element): React.ReactNode;
  card: Card[];
}
interface Card {
  backgroundImage: string;
  logo: string;
  title: string;
  buttonText: string;
  buttonLink: string;
  information: string;
}
class Download4 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
      value: [
        {
          type: "array",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "backgroundImage",
              displayer: "Background Image",
              value: "https://bilbo.surge.sh/codepen/download-cards/apple.png"
            },
            {
              type: "image",
              key: "logo",
              displayer: "Logo",
              value: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpdFZ6LTg87NeCR_Ap6gF3pdcXG4ybOHSk3mnxJZRM-xt2R9lAM9mg8O7FM596SmOrdkg&usqp=CAU"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Download For"
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "IOS"
            },
            {
              type: "page",
              key: "buttonLink",
              displayer: "Button Link",
              value: ""
            },
            {
              type: "string",
              key: "information",
              displayer: "Information",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
            }
          ]
        },
        {
          type: "array",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "backgroundImage",
              displayer: "Background Image",
              value: "https://bilbo.surge.sh/codepen/download-cards/android.png"
            },
            {
              type: "image",
              key: "logo",
              displayer: "Logo",
              value: "https://cdn-icons-png.flaticon.com/512/14/14415.png"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Download For"
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Android"
            },
            {
              type: "page",
              key: "buttonLink",
              displayer: "Button Link",
              value: ""
            },
            {
              type: "string",
              key: "information",
              displayer: "Information",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
            }
          ]
        },
        {
          type: "array",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "backgroundImage",
              displayer: "Background Image",
              value: "https://bilbo.surge.sh/codepen/download-cards/web.png"
            },
            {
              type: "image",
              key: "logo",
              displayer: "Logo",
              value: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Windows_logo_2012-Black.svg/1200px-Windows_logo_2012-Black.svg.png"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Download For"
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Windows"
            },
            {
              type: "page",
              key: "buttonLink",
              displayer: "Button Link",
              value: ""
            },
            {
              type: "string",
              key: "information",
              displayer: "Information",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
            }
          ]
        }
      ]
    });

  }

  getName(): string {
    return "Download-4";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("cards-container")}>
            <div className={this.decorateCSS("cards")}>
              {this.castToObject<Cards>("cards").map((card: Card, index: number) => {
                return (
                  <div className={this.decorateCSS("card")} key={index}>
                    <div className={this.decorateCSS("card-background")}>
                      <img src={card.backgroundImage} alt="" />
                    </div>
                    <div className={this.decorateCSS("card-logo")}>
                      <img src={card.logo} alt="" />
                    </div>
                    <div className={this.decorateCSS("card-title")}>
                      <h2>{card.title}</h2>
                    </div>
                    <div className={this.decorateCSS("card-button")}>
                      <ComposerLink path={card.buttonLink}>
                        <button>{card.buttonText}</button>
                      </ComposerLink>
                    </div>
                    <div className={this.decorateCSS("card-information")}>
                      <p>{card.information}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Download4;
