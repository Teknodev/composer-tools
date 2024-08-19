import React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature9.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
type FeatureItem = {
  id: string;
  title: JSX.Element;
  description: JSX.Element;
  icon: JSX.Element;
};

type LinkArray ={
  linkText:JSX.Element;
  link:string;
}

class Feature9 extends BaseFeature {
  private observers: { [key: string]: IntersectionObserver } = {};
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "main-title",
      displayer: "Title",
      value: "Our process of building a successful digital product.",
    });
    this.addProp({
      type: "boolean",
      key: "is-counter-visible",
      displayer: "Counter Visible",
      value: true
    });


    this.addProp({
      type: "array",
      key: "feature-items",
      displayer: "Card",
      value: [
        {
          id: "1",
          type: "object",
          key: "subtitle",
          displayer: "Subtitle",
          value: [
            {
              type: "string",
              key: "id",
              value: "1",
              displayer: "Id",
            },
            {
              type: "string",
              key: "title",
              value: "Discovery",
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value:
                "The first thing we do is conduct comprehensive research to understand your business and users' goals.We also identify your competition's strengths and weaknesses and define a plan to use all of the findings in your favor.",
              displayer: "Description",
            },
            {
              type: "icon",
              key: "icon",
              value:
                "RiCompassDiscoverLine",
              displayer: "Icon",
            },
          ],
        },
        {
          id: "2",
          type: "object",
          key: "subtitles",
          displayer: "Subtitles",
          value: [
            {
              type: "string",
              key: "title",
              value: "Foundation",
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value:
                "Based on research findings, we start setting up navigation and content hierarchy with the primary goal of making the whole experience as intuitive as possible.",
              displayer: "Description",
            },
            {
              type: "icon",
              key: "icon",
              value:
                "MdFoundation",
              displayer: "Icon",
            },
          ],
        },
        {
          id: "3",
          type: "object",
          key: "subtitles",
          displayer: "Subtitles",
          value: [
            {
              type: "string",
              key: "title",
              value: "Prototyping",
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value:
                "We create a digital version of the best ideas from previous phase and create a medium-fidelity prototype.We create a digital version of the best ideas from previous phase and create a medium-fidelity prototype.",
              displayer: "Description",
            },
            {
              type: "icon",
              key: "icon",
              value:"GrProjects",
              displayer: "Icon",
            },
          ],
        },
        {
          id: "4",
          type: "object",
          key: "subtitles",
          displayer: "Subtitles",
          value: [
            {
              type: "string",
              key: "title",
              value: "Design",
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value:
                "Our design process is about making simple but eye-catching experiences. The primary goal is to achieve the wow factor and set you apart with that premium look.",
              displayer: "Description",
            },
            {
              type: "icon",
              key: "icon",
              value:
                "MdOutlineDesignServices",
              displayer: "Icon",
            },
          ],
        },
        {
          id: "5",
          type: "object",
          key: "subtitles",
          displayer: "Subtitles",
          value: [
            {
              type: "string",
              key: "title",
              value: "Development",
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value:
                "By leveraging the latest technologies, we share your brand and products with the world while focusing on a perfect visual output through stable and high-performing code. Thats all .",
              displayer: "Description",
            },
            {
              type: "icon",
              key: "icon",
              value:
                "MdDeveloperMode",
              displayer: "Icon",
            },
          ],
        },
      ],
    });
    
    this.addProp({
      type:"array",
      key:"linkArray",
      displayer:"Link",
      value: [
        {
          type:"object",
          key:"links",
          displayer:"Links",
          value:[
            {
              type:"string",
              key:"linkText",
              displayer:"Link Text",
              value:"View Our Services",
            },
            {
              type:"page",
              key:"link",
              displayer:"link",
              value:""
            }
          ],
        },
      ],
    });
  }
  getName(): string {
    return "Feature 9";
  }

  componentDidMount() {
    setTimeout(() => {
      this.setupObservers();
    }, 1000); 
  }

  setupObservers() {
    const featureItems = this.castToObject<FeatureItem[]>("feature-items");
    featureItems.forEach((item, index) => {
      const element = document.getElementById(`card-${index}`);
      if (element) {   
        this.observers[index] = new IntersectionObserver(
          ([entry]) => this.handleIntersection(entry, index),
          { threshold: 0.8 }
        );
        this.observers[index].observe(element);
      } else {
        console.log(`Element not found for card-${index}`);
      }
    });
  }
  handleIntersection(entry: IntersectionObserverEntry, index: number) {
    const currentElement = entry.target as HTMLElement;
    const nextElement = document.getElementById(`card-${index + 1}`);
    const prevElement = document.getElementById(`card-${index - 1}`);

    if (entry.isIntersecting) {
      currentElement.style.opacity = '1';
      this.updateCounter(index + 1);

      if (nextElement) {
        nextElement.style.opacity = '0';
      }
      if (prevElement) {
        prevElement.style.opacity = '0';
      }
    } 
  }
  updateCounter(id: number) {
    const counterElement = document.getElementById("counter");
    if (counterElement) {
      counterElement.innerText = id.toString();
    }
  }

  renderCard(featureItem: FeatureItem, index: number) {
    setTimeout(() => this.setupObservers(), 0); 
    return (
      
      
      <div 
        key={index} 
        id={`card-${index}`} 
        className={this.decorateCSS("card-item")}>
        {
          featureItem.icon.toString().length!=0 &&(
            <ComposerIcon name={featureItem.icon.toString()}
             propsIcon={{ className: this.decorateCSS("icon")}}></ComposerIcon>
          )
        }
        {
          this.castToString(featureItem.title) &&(
            <h4 className={this.decorateCSS("sub-title")}>{featureItem.title}</h4>
          )
        }
        {
          this.castToString(featureItem.description) &&(
            <h5 className={this.decorateCSS("sub-title-description")}>
            {featureItem.description}
          </h5>
          )
        }
      </div>
    );
  }

  render() {
    const featureItems = this.castToObject<FeatureItem[]>("feature-items");
    const linkArray = this.castToObject<LinkArray[]>("linkArray");
    const mainTitle = this.castToString(this.getPropValue("main-title"));
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {mainTitle && (
              <div className={this.decorateCSS("main-title-content")}>
                <h1 className={this.decorateCSS("main-title-content-text")}>
                  {mainTitle}
                </h1>
              </div>
            )}
            {featureItems.length > 0 && (
              <div className={this.decorateCSS("sub-title-content")}>
              {
                this.getProp("is-counter-visible").value &&(
                  <h4 id="counter" className={this.decorateCSS("counter")}>1</h4>
                )
              }
              {this.castToObject<FeatureItem[]>("feature-items").map(
                (featureItem: FeatureItem, index: number) =>
                  this.renderCard(featureItem, index)
              )}
              </div>
          )}
            {linkArray &&(
          <div className={this.decorateCSS("link-text")}>
            {linkArray.map((item:LinkArray, index:number) => (
              <ComposerLink isFullWidth={true} path={this.getPropValue("link")}>
                {this.castToString(item.linkText) &&(
                  <div key={index} className={this.decorateCSS("link-Text")}>
                  {item.linkText}
                </div>
              )}
              </ComposerLink>
            ))}  
                </div>)}
          </div>
        </div>
      </div>
    );
  }
}

export default Feature9;
