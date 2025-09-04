import * as React from "react";
import { BaseContent, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./content27.module.scss";
import { Base } from "composer-tools/composer-base-components/base/base";

type ITabs = {
  title: string;
  image: string;
  info: { label: string; text: string }[];
};

class Content27 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Thousands of Agencies Have Chosen Duda as Their White Label Web Design Platform",
    });

    this.addProp({
      type: "image",
      key: "background-image",
      displayer: "Background Image",
      value: "",
    });

    this.addProp({
      type: "color",
      key: "accent-color",
      displayer: "Accent Color (CSS)",
      value: "#f97316",
    });

    const dummyData = (
      title: string,
      image: string,
      contentLabel1: string,
      contentText1: string,
      contentLabel2: string,
      contentText2: string,
      contentLabel3: string,
      contentText3: string
    ): TypeUsableComponentProps => ({
      type: "object",
      key: "item",
      displayer: "Item",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: title,
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value: image,
        },
        {
          type: "array",
          key: "info",
          displayer: "Info Items",
          value: [
            {
              type: "object",
              key: "info-item-1",
              displayer: "Info Item 1",
              value: [
                {
                  type: "string",
                  key: "label",
                  displayer: "Label",
                  value: contentLabel1,
                },
                {
                  type: "string",
                  key: "text",
                  displayer: "Text",
                  value: contentText1,
                },
              ],
            },
            {
              type: "object",
              key: "info-item-2",
              displayer: "Info Item 2",
              value: [
                {
                  type: "string",
                  key: "label",
                  displayer: "Label",
                  value: contentLabel2,
                },
                {
                  type: "string",
                  key: "text",
                  displayer: "Text",
                  value: contentText2,
                },
              ],
            },
            {
              type: "object",
              key: "info-item-3",
              displayer: "Info Item 3",
              value: [
                {
                  type: "string",
                  key: "label",
                  displayer: "Label",
                  value: contentLabel3,
                },
                {
                  type: "string",
                  key: "text",
                  displayer: "Text",
                  value: contentText3,
                },
              ],
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "items",
      displayer: "Items",
      value: [
        dummyData(
          "Digital Solutions Provider",
          "https://du-cdn.cdn-website.com/duda_website/images/solutions/agencies/success-story-1@2x.png?v=1",
          "The Impact",
          "Grew their customer base by 82%; shrank site build times by 40%; increased revenue with a restructured business model.",
          "How They Did it",
          "Duda's dedicated account management team helped set tags & codes inside the platform, facilitate product flows, and offer guidance on the most efficient ways to use the platform.",
          "Favorite Duda Tool",
          "Drag and drop editor for easy, client-managed design changes."
        ),
        dummyData(
          "Award-Winning Marketing Firm",
          "https://du-cdn.cdn-website.com/duda_website/images/solutions/agencies/success-story-2@2x.png?v=1",
          "The Impact",
          "Reduced average site build times by 75%; increased revenue with expanded services; improved lifetime customer value.",
          "How They Did it",
          "Successful team onboarding in 2–3 days, compared to 2–3 weeks on WordPress; design tools that reduced development work from 15 days to 5 hours!",
          "Favorite Duda Tool",
          "Personalization engine for serving targeted content by audience."
        ),
        dummyData(
          "Digital Marketing Leader",
          "https://du-cdn.cdn-website.com/duda_website/images/solutions/agencies/success-story-3@2x.png?v=2",
          "The Impact",
          "Achieved their goals of offering a quality, industry-leading product and faster site creation & management at scale.",
          "How They Did it",
          "Seamless migration of thousands of legacy websites in just a few months, using APIs to add metadata and create URL redirects.",
          "Favorite Duda Tool",
          "Connected Data to prepopulate site templates with structured customer data."
        ),
      ],
    });

    this.setComponentState("activeTab", 0);
  }

  static getName(): string {
    return "Content 27";
  }

  private setActiveTab(i: number) {
    this.setComponentState("activeTab", i);
    setTimeout(() => {
      this.setComponentState("startedIndex", i);
    }, 50);
  }
  
  render() {
    const title = this.getPropValue("title");
    const items = this.castToObject<ITabs[]>("items") || [];
    const activeIndex = this.getComponentState("activeTab") || 0;
    const activeItem = items[activeIndex] || { title: "", image: "", info: [] };
    const bgImage = this.getPropValue("background-image");
    const accentColor = this.getPropValue("accent-color");
    
    return (
      <Base.Container className={this.decorateCSS("content27")}
        style={{
          ...(bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" } : {}),
          ...(accentColor ? { ["--accent-color" as any]: accentColor } : {})
        }}
      >        
        <Base.MaxContent className={this.decorateCSS("maxContent")}>          
          <div className={this.decorateCSS("grid")}>            
            <div className={this.decorateCSS("left")}>              
              <h2 className={this.decorateCSS("leftTitle")}>{title}</h2>              
              <ul className={this.decorateCSS("list")}>               
                {items.map((item, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <li key={i}>
                      <button
                        type="button"
                        className={`${this.decorateCSS("listItem")} ${isActive ? this.decorateCSS("isActive") : ""} `}
                        onClick={() => this.setActiveTab(i)}
                        aria-pressed={isActive}
                        aria-current={isActive ? "true" : undefined}
                      >
                        {item.title}
                      </button>
                      {isActive && <div className={this.decorateCSS("activeBar")} />}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={this.decorateCSS("right")}>
              <div
                key={activeIndex} 
                className={`${this.decorateCSS("fadeIn")} ${this.decorateCSS("show")}`}
              >
                {activeItem.image && (
                  <div className={this.decorateCSS("imageBox")}>
                    <img
                      src={activeItem.image}
                      className={this.decorateCSS("image")}
                      loading="lazy"
                      alt={activeItem.title}
                    />
                  </div>
                )}
                <div className={this.decorateCSS("info")}>
                  {activeItem.info.map((line, i) => (
                    <div key={i} className={this.decorateCSS("infoLine")}>
                      <strong>{line.label}</strong>
                      <span>{line.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Content27;
