import { BaseContent } from "../../EditorComponent";
import styles from "./content20.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type ItemType ={
    image: string;
    year: number;
    subtitle: React.JSX.Element;
    title: React.JSX.Element;
    description: React.JSX.Element;
    rowReverse: boolean;
    middleLineActive: boolean;
    lineActive: boolean;
    dotActive: boolean;
}

class Content20 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
        type: "image",
        key: "backgroundImage",
        displayer: "Background Image",
        value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/680f8656c1ef0f002c967a40?alt=media&timestamp=1745847898598",
    });
    this.addProp({
        type: "array",
        key: "items",
        displayer: "Items",
        value:[
            {
                type: "object",
                key: "item",
                displayer: "Item",
                value:[
                    {
                        type: "image",
                        key: "image",
                        displayer: "Image",
                        value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/680f7e4bc1ef0f002c966f97?alt=media&timestamp=1745845837054",
                    },
                    {
                        type: "number",
                        key: "year",
                        displayer: "Year",
                        value: 1930,
                    },
                    {
                        type: "string",
                        key: "subtitle",
                        displayer: "Subtitle",
                        value: "CHOCO HISTORY",
                    },
                    {
                        type: "string",
                        key: "title",
                        displayer: "Title",
                        value: "EARLY BEGGINING",
                    },
                    {
                        type: "string",
                        key: "description",
                        displayer: "Description",
                        value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
                    },
                    {
                        type: "boolean",
                        key: "rowReverse",
                        displayer: "Row Reverse",
                        value: false,
                    },
                    {
                        type: "boolean",
                        key: "middleLineActive",
                        displayer: "Middle Line Active",
                        value: true,
                    },
                    {
                        type: "boolean",
                        key: "lineActive",
                        displayer: "Line Active",
                        value: true,
                    },
                    {
                        type: "boolean",
                        key: "dotActive",
                        displayer: "Dot Active",
                        value: true,
                    },
                ]
            },
            {
                type: "object",
                key: "item",
                displayer: "Item",
                value:[
                    {
                        type: "image",
                        key: "image",
                        displayer: "Image",
                        value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/680f8a2bc1ef0f002c967e7e?alt=media&timestamp=1745848879366",
                    },
                    {
                        type: "number",
                        key: "year",
                        displayer: "Year",
                        value: 1960,
                    },
                    {
                        type: "string",
                        key: "subtitle",
                        displayer: "Subtitle",
                        value: "THE PROGRESS",
                    },
                    {
                        type: "string",
                        key: "title",
                        displayer: "Title",
                        value: "FACTORY ESTABLISHED",
                    },
                    {
                        type: "string",
                        key: "description",
                        displayer: "Description",
                        value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
                    },
                    {
                        type: "boolean",
                        key: "rowReverse",
                        displayer: "Row Reverse",
                        value: false,
                    },
                    {
                        type: "boolean",
                        key: "middleLineActive",
                        displayer: "Middle Line Active",
                        value: true,
                    },  
                    {
                        type: "boolean",
                        key: "lineActive",
                        displayer: "Line Active",
                        value: true,
                    },
                    {
                        type: "boolean",
                        key: "dotActive",
                        displayer: "Dot Active",
                        value: true,
                    },
                ]
            }
        ]
    })
  }

  static getName(): string {
    return "Content 20";
  }

  render() {
    const items = this.castToObject<ItemType[]>("items");
    return (
      <Base.Container className={this.decorateCSS("container")}   style={{backgroundImage: `url(${this.getPropValue("backgroundImage")})`,backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat',}}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
        {items.map((item, index: number)=> {
            return(
                <div className={`${this.decorateCSS("items-wrapper")} ${item.rowReverse && this.decorateCSS("row-reverse")}`} key={index}>
                    {item.image && (
                    <div className={this.decorateCSS("left-container")}>
                        <div className={this.decorateCSS("image-wrapper")}>
                            <img src={item.image} className={this.decorateCSS("image")}/>
                        </div>
                    </div>
                    )}
                    {(item.lineActive || item.dotActive || item.middleLineActive || item.year)  && (
                        <div className={this.decorateCSS("middle-container")}>
                            {item.lineActive && (<div className={this.decorateCSS("line-wrapper")}><div className={this.decorateCSS("line")}></div></div>)}
                            {item.dotActive && (
                                <div className={this.decorateCSS("dot-wrapper")}>
                                    <div className={this.decorateCSS("dot")}></div>
                                </div>
                            )}
                            {(item.middleLineActive || item.year) && (
                                <div className={`${this.decorateCSS("middle-line-and-year")} ${item.rowReverse && this.decorateCSS("row-reverse")}}`}>
                                    <div className={`${this.decorateCSS("line-and-year")} ${item.rowReverse && this.decorateCSS("row-reverse")}}`}>
                                        {item.middleLineActive && (<div className={this.decorateCSS("middle-line")}></div>)}                                
                                        {item.year && (<div className={`${this.decorateCSS("year")} ${!item.middleLineActive && (this.decorateCSS("without-middle-line"))}`}>{item.year}</div>)}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                    {(this.castToString(item.subtitle) || this.castToString(item.title) || this.castToString(item.description)) && (
                        <Base.VerticalContent className={`${this.decorateCSS("right-container")} ${item.rowReverse && this.decorateCSS("row-reverse")}}`}>
                            {this.castToString(item.subtitle) && (<Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{item.subtitle}</Base.SectionSubTitle>)}
                            {this.castToString(item.title) && (<Base.SectionTitle className={this.decorateCSS("title")}>{item.title}</Base.SectionTitle>)}
                            {this.castToString(item.description) && (<Base.SectionDescription className={this.decorateCSS("description")}>{item.description}</Base.SectionDescription>)}
                        </Base.VerticalContent>
                    )}
                </div>
            )
        })}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}
export default Content20;
