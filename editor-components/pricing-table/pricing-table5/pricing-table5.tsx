import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BasePricingTable } from "../../EditorComponent";
import styles from "./pricing-table5.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Accordions = {
  accordion:string;
  header:string;
  icon:string;
  description:string;
  contents:string;
  headerButton:string;
  headerButtonUrl:string;
};

class PricingTable5 extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "badge",
      displayer: "Badge",
      value: "FLEXIBLE PRICING",
    });
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Page Title",
      value: "We are excited for our work and how it positively impacts clients. With over 12 years of experience we have been constantly providing excellent solutions.",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Tailored pricing plans for everyone.",
    });
  
    this.addProp({
      type: "array",
      key: "accordions",
      displayer: "Accordions",
      value: [
        {
          type: "object",
          key: "accordion",
          displayer: "Accordion",
          value: [
            {
              type: "string",
              key: "header",
              displayer: "Question",
              value: "Basic Plan",
            },
            {
              type:"string",
              key:"icon",
              displayer:"Icon",
              value:"IoIosArrowDropdownCircle"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
            },
            {
              type:"string",
              key:"contents",
              displayer:"Contents",
              value:"$19.99 / Monthly"
            },
            {
              type:"string",
              key:"headerButton",
              displayer:"Header Button",
              value:"GET STARTED"
            },
            {
              type:"string",
              key:"headerButtonUrl",
              displayer:"Header Button Url",
              value:" "
            },
          ],
        },
        {
          type: "object",
          key: "accordion",
          displayer: "Accordion",
          value: [
            {
              type: "string",
              key: "header",
              displayer: "Question",
              value: "Standard Plan",
            },
            {
              type:"string",
              key:"icon",
              displayer:"Icon",
              value:"IoIosArrowDropdownCircle"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
            },
            {
              type:"string",
              key:"contents",
              displayer:"Contents",
              value:"$19.99 / Monthly"
            },
            {
              type:"string",
              key:"headerButton",
              displayer:"Header Button",
              value:"GET STARTED"
            },
            {
              type:"string",
              key:"headerButtonUrl",
              displayer:"Header Button Url",
              value:" "
            },
          ],
        },
        {
          type: "object",
          key: "accordion",
          displayer: "Accordion",
          value: [
            {
              type: "string",
              key: "header",
              displayer: "Question",
              value: "Premium Plan",
            },
            {
              type:"string",
              key:"icon",
              displayer:"Icon",
              value:"IoIosArrowDropdownCircle"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
            },
            {
              type:"string",
              key:"contents",
              displayer:"Contents",
              value:"$19.99 / Monthly"
            },
            {
              type:"string",
              key:"headerButton",
              displayer:"Header Button",
              value:"GET STARTED"
            },
            {
              type:"string",
              key:"headerButtonUrl",
              displayer:"Header Button Url",
              value:" "
            },
          ],
        },
      ],
    });

    this.setComponentState("activeIndex", -1);

  }

  getName(): string {
    return "Pricing 5";
  }

  handleBoxClick(index: number) {
    const activeIndex = this.getComponentState("activeIndex");
    this.setComponentState("activeIndex", activeIndex === index ? -1 : index);
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>      
          <div className={this.decorateCSS("page")}>
            <div className={this.decorateCSS("text-center")}>    
            <div className={this.decorateCSS("badge")}>
            {this.getPropValue("badge")}
          </div>
          <div className={this.decorateCSS("title")}>
            {this.getPropValue("title")}
          </div>
          <div className={this.decorateCSS("subtitle")}>
            {this.getPropValue("subtitle")}
          </div>
          </div>
          <div className={this.decorateCSS("accordions-table")}>
            {this.castToObject<Accordions[]>("accordions").map
            ((accordion:any,index:number)=>(
              <div key={index} className={this.decorateCSS("accordions")}>
              <div className={this.decorateCSS("box")}
              onClick={() => this.handleBoxClick(index)}>

              <div className={this.decorateCSS("accordion-header")}>
                <div className={this.decorateCSS("header")}>{accordion.header} 
                </div>           
                <div className={this.decorateCSS("icon-container")}>
                  <ComposerIcon
                     name={accordion.icon}
                     propsIcon={{
                     className: this.decorateCSS("icon")
                     }}
                  />  
                </div>
                </div>
                {this.getComponentState("activeIndex") === index && (
                <div className={this.decorateCSS("text")}>
                <div className={this.decorateCSS("description")}>{accordion.description} </div>
                <div className={this.decorateCSS("c-h")}>
                <div className={this.decorateCSS("contents")}>{accordion.contents} </div>
                <button className={this.decorateCSS("headerButton")}>
                  {accordion.headerButtonUrl !== " " ? (
                  <ComposerLink path={accordion.headerButtonUrl} text={accordion.headerButton} />
                   ) : (
                  accordion.headerButton
                  )}
                </button>
                </div>
              </div>
                )}
              </div>
              </div>
            ))}         
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default PricingTable5;




