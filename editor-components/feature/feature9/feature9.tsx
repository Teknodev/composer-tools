import React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature9.module.scss";

type FeatureItem = {
  id: string;
  title: string;
  description: string;
  image: string;
};


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
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a75bbb2f8a5b002ce6d1bb?alt=media",
              displayer: "Image",
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
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a75bdb2f8a5b002ce6d1d2?alt=media",
              displayer: "Image",
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
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a75bf32f8a5b002ce6d1e5?alt=media",
              displayer: "Image",
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
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a75c292f8a5b002ce6d206?alt=media",
              displayer: "Image",
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
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a75c352f8a5b002ce6d211?alt=media",
              displayer: "Image",
            },
          ],
        },
      ],
    });

    
  }
  getName(): string {
    return "Feature 9";
  }



  setupObservers() {
    const featureItems = this.castToObject<FeatureItem[]>("feature-items");
    featureItems.forEach((item, index) => {
      const element = document.getElementById(`card-${index}`);
      if (element) {
        this.observers[index] = new IntersectionObserver(
          ([entry]) => this.handleIntersection(entry, index),
          { threshold: 0.82 }
        );
        this.observers[index].observe(element);
      } else {
        console.log(`Element not found for card-${index}`);
      }
    });
  }
  handleIntersection(entry: IntersectionObserverEntry, index: number) {
    const counterElement = document.getElementById("counter");
    const currentElement = entry.target as HTMLElement;
    const nextElement = document.getElementById(`card-${index + 1}`);

    if (entry.isIntersecting) {
      currentElement.style.opacity = '1';
      this.updateCounter(index + 1);
      
      if (nextElement) {
        nextElement.style.opacity = '0';
      }
    } else {
      counterElement.classList.add(this.decorateCSS("invisible"));
      currentElement.style.opacity = '0';
      
      if (nextElement) {
        nextElement.style.opacity = '0';
      }
    }

    if(currentElement.id=="card-1") {
      counterElement.classList.remove(this.decorateCSS("invisible"));
    }
  }

  updateCounter(id: number) {
    const counterElement = document.getElementById("counter");
    if (counterElement) {
      counterElement.innerText = id.toString();
      counterElement.classList.remove(this.decorateCSS("invisible"));
    }
  }

  renderCard(featureItem: FeatureItem, index: number) {
    return (
      <div 
        key={index} 
        id={`card-${index}`} 
        className={this.decorateCSS("card-item")}>
        <img
          alt="description image" 
          className={this.decorateCSS("image")}
          src={featureItem.image}
        />
        <h4 className={this.decorateCSS("sub-title")}>{featureItem.title}</h4>
        <h5 className={this.decorateCSS("sub-title-description")}>
          {featureItem.description}
        </h5>
        <br /><br/><br/><br /><br/><br/>
      </div>
    );
  }

  render() {
    setTimeout(() => this.setupObservers(), 0);
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("main-title-content")}>
              <h1 className={this.decorateCSS("main-title-content-text")}>
                {this.getPropValue("main-title")}
              </h1>
            </div>
            <div className={this.decorateCSS("sub-title-content")}>
              <h4 id="counter" className={this.decorateCSS("counter")}></h4>
              {this.castToObject<FeatureItem[]>("feature-items").map(
                (featureItem: FeatureItem, index: number) =>
                  this.renderCard(featureItem, index)
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feature9;