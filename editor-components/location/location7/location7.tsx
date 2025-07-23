import React from "react";
import { Location } from "../../EditorComponent";
import styles from "./location7.module.scss";
import { Base } from "../../../composer-base-components/base/base";

// Types

type Address = {
  type: string;
  key: string;
  value: Array<Marker>;
};

type Marker = {
  type: string;
  key: string;
  value: any;
};

type MarkerObject = {
  content: React.ReactNode;
  leftPercent: string;
  topPercent: string;
  popupTitle: string;
  description: string;
  markerImage: string;
};

class Location7 extends Location {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "We Are Worldwide",
    });
    this.addProp({
      type: "array",
      displayer: "addresses",
      key: "addresses",
      value: [
        {
          type: "object",
          key: "marker",
          displayer: "Marker",
          value: [
            {
              type: "number",
              displayer: "Left %",
              key: "leftPercent",
              value: 30,
            },
            {
              type: "number",
              displayer: "Top %",
              key: "topPercent",
              value: 40,
            },
            {
              type: "string",
              displayer: "Popup Title",
              key: "popupTitle",
              value: "NEW YORK",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "+0 595-510-1352\nflatley.don@weissnat.me\n713 Dibbert Bridge",
            },
          ],
        },
        {
          type: "object",
          key: "marker",
          displayer: "Marker",
          value: [
            {
              type: "number",
              displayer: "Left %",
              key: "leftPercent",
              value: 60,
            },
            {
              type: "number",
              displayer: "Top %",
              key: "topPercent",
              value: 30,
            },
            {
              type: "string",
              displayer: "Popup Title",
              key: "popupTitle",
              value: "MOSCOW",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "+7 495-123-4567\nmoscow.office@example.com\nRed Square",
            },
          ],
        },
        {
          type: "object",
          key: "marker",
          displayer: "Marker",
          value: [
            {
              type: "number",
              displayer: "Left %",
              key: "leftPercent",
              value: 80,
            },
            {
              type: "number",
              displayer: "Top %",
              key: "topPercent",
              value: 60,
            },
            {
              type: "string",
              displayer: "Popup Title",
              key: "popupTitle",
              value: "TOKYO",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "+81 3-1234-5678\ntokyo.office@example.com\nShinjuku",
            },
          ],
        },
        {
          type: "object",
          key: "marker",
          displayer: "Marker",
          value: [
            {
              type: "number",
              displayer: "Left %",
              key: "leftPercent",
              value: 20,
            },
            {
              type: "number",
              displayer: "Top %",
              key: "topPercent",
              value: 70,
            },
            {
              type: "string",
              displayer: "Popup Title",
              key: "popupTitle",
              value: "SYDNEY",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "+61 2-1234-5678\nsydney.office@example.com\nOpera House",
            },
          ],
        },
        {
          type: "object",
          key: "marker",
          displayer: "Marker",
          value: [
            {
              type: "number",
              displayer: "Left %",
              key: "leftPercent",
              value: 50,
            },
            {
              type: "number",
              displayer: "Top %",
              key: "topPercent",
              value: 80,
            },
            {
              type: "string",
              displayer: "Popup Title",
              key: "popupTitle",
              value: "SAO PAULO",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "+55 11-1234-5678\nsaopaulo.office@example.com\nPaulista Avenue",
            },
          ],
        },
        {
          type: "object",
          key: "marker",
          displayer: "Marker",
          value: [
            {
              type: "number",
              displayer: "Left %",
              key: "leftPercent",
              value: 45,
            },
            {
              type: "number",
              displayer: "Top %",
              key: "topPercent",
              value: 20,
            },
            {
              type: "string",
              displayer: "Popup Title",
              key: "popupTitle",
              value: "PARIS",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "+33 1-2345-6789\nparis.office@example.com\nEiffel Tower",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "image",
      key: "background-image",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6880cd78a85f1c002bbc65c9?alt=media",
    });
    this.setComponentState("activeMarkerIndex", null);
  }

  static getName(): string {
    return "Location 7";
  }

  handleMarkerClick = (index: number) => {
    this.setComponentState("activeMarkerIndex", index);
  };

  handleClosePopover = () => {
    this.setComponentState("activeMarkerIndex", null);
  };

  render() {
    const addresses: Address[] = this.getPropValue("addresses");
    const title = this.getPropValue("title");
    const activeMarkerIndex = this.getComponentState("activeMarkerIndex");
    const bgImage = this.getPropValue("background-image");


    // Prepare markers
    const markers = addresses.reduce((acc: MarkerObject[], address: any) => {
      if (address.type === "object" && Array.isArray(address.value)) {
        const leftPercent = address.value.find((addr: any) => addr.key === "leftPercent")?.value;
        const topPercent = address.value.find((addr: any) => addr.key === "topPercent")?.value;
        const popupTitle = address.value.find((addr: any) => addr.key === "popupTitle")?.value;
        const description = address.value.find((addr: any) => addr.key === "description")?.value;
        acc.push({
          leftPercent,
          topPercent,
          popupTitle,
          description,
          markerImage: "", // not used
          content: null,
        });
      }
      return acc;
    }, []);

    return (
      <Base.Container className={this.decorateCSS("container")}> 
        <Base.MaxContent className={this.decorateCSS("max-content")}> 
          <Base.VerticalContent className={this.decorateCSS("wrapper")}> 
            <div className={this.decorateCSS("title-row")}> 
              <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>
            </div>
            <section className={this.decorateCSS("map-container")}> 
              <div
                className={this.decorateCSS("custom-map")}
                style={{ position: "relative", width: "100%", aspectRatio: "2/1", height: "auto" }}>
                {bgImage && (
                  <img src={bgImage} alt="World Map" className={this.decorateCSS("background-image")}/>
                )}
                {markers.map((marker, idx) => {
                  return (
                    <React.Fragment key={idx}>
                      <div
                        className={this.decorateCSS("marker") + (activeMarkerIndex === idx ? " active" : "")}
                        style={{
                          left: `${marker.leftPercent}%`,
                          top: `${marker.topPercent}%`,
                        }}
                        onClick={() => this.handleMarkerClick(idx)}
                      />
                      {activeMarkerIndex === idx && (
                        <div
                          className={this.decorateCSS("tooltip")}
                          style={{
                            left: `${parseFloat(marker.leftPercent) + 2}%`,
                            top: `${marker.topPercent}%`,
                          }}
                        >
                          <div className={this.decorateCSS("tooltip-header")}>{marker.popupTitle}</div>
                          <div className={this.decorateCSS("tooltip-content")}>{marker.description && marker.description.split("\n").map((line: string, i: number) => <div key={i}>{line}</div>)}</div>
                          <button className={this.decorateCSS("tooltip-close")}
                            onClick={this.handleClosePopover}
                          >Close</button>
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </section>
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Location7;
