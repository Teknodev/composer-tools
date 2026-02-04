import React from "react";
import { Location } from "../../EditorComponent";
import styles from "./location3.module.scss";
import ComposerMap from "../../../composer-base-components/map/map";

import { Base } from "../../../composer-base-components/base/base";
import { iconLibraries } from "../../../composer-base-components/base/utitilities/iconList";
import { renderToStaticMarkup } from "react-dom/server";

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
  lat: number;
  lng: number;
  icon: {
    url: string;
    scaledSize: google.maps.Size;
    width: number;
    height: number;
  };
};

class Location3 extends Location {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "media",
      key: "icon",
      displayer: "Logo",
      additionalParams: {
        availableTypes: ["image", "icon"],
      },
      value: {
        type: "icon",
        name: "BiWorld",
      },
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "TOP DESTINATION",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Explore the world with us",
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
              type: "location",
              displayer: "Coordinate",
              key: "coordinate",
              value: {
                lat: 36.8529,
                lng: -75.978,
              },
            },

            {
              type: "media",
              key: "marker-image",
              displayer: "Marker Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "image",
                url: "",
              },
            },
          ],
        },
        {
          type: "object",
          key: "marker",
          displayer: "Marker",
          value: [
            {
              type: "location",
              displayer: "Coordinate",
              key: "coordinate",
              value: {
                lat: 37.1234,
                lng: -1.9876,
              },
            },
            {
              type: "media",
              key: "marker-image",
              displayer: "Marker Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "image",
                url: "",
              },
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "continents",
      displayer: "Label",
      value: [
        {
          type: "object",
          key: "continent",
          displayer: "Label",
          value: [
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "EUROPE",
            },
            {
              type: "number",
              key: "count",
              displayer: "Count",
              value: 12,
            },
          ],
        },
        {
          type: "object",
          key: "continent",
          displayer: "Continent",
          value: [
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "AFRICA",
            },
            {
              type: "number",
              key: "count",
              displayer: "Count",
              value: 2,
            },
          ],
        },
        {
          type: "object",
          key: "continent",
          displayer: "Continent",
          value: [
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "ASIA",
            },
            {
              type: "number",
              key: "count",
              displayer: "Count",
              value: 1,
            },
          ],
        },
        {
          type: "object",
          key: "continent",
          displayer: "Continent",
          value: [
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "OCEANIA",
            },
            {
              type: "number",
              key: "count",
              displayer: "Count",
              value: 1,
            },
          ],
        },
        {
          type: "object",
          key: "continent",
          displayer: "Continent",
          value: [
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "NORTH AMERICA",
            },
            {
              type: "number",
              key: "count",
              displayer: "Count",
              value: 6,
            },
          ],
        },
        {
          type: "object",
          key: "continent",
          displayer: "Continent",
          value: [
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "SOUTH AMERICA",
            },
            {
              type: "number",
              key: "count",
              displayer: "Count",
              value: 21,
            },
          ],
        },
      ],
    });
  }

  static getName(): string {
    return "Location 3";
  }

  render() {
    const addresses: Address[] = this.getPropValue("addresses");
    const continents = this.getPropValue("continents");
    const title = this.getPropValue("title");
    const subtitle = this.getPropValue("subtitle");
    const hasSubtitle = this.castToString(subtitle);

    const description = this.getPropValue("description");
    const markerZoom = this.getPropValue("markerZoom");
    const centerZoom = this.getPropValue("centerZoom");

    const hasTitle = this.castToString(title);
    const hasDescription = this.castToString(description);

    const theme = this.getPropValue("theme");

    const selectedTheme = theme || "Theme-2";

    const mapStyle = this.selectTheme(selectedTheme);

    const defaultMarkerIcon = "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66ffb3d4cf1798002cc7f505?alt=media&timestamp=1728033800047";

    const markers = addresses.reduce((acc: MarkerObject[], address: any) => {
      if (address.type === "object" && Array.isArray(address.value)) {
        const markerData = address.getPropValue("coordinate");

        const lat = markerData?.lat;
        const lng = markerData?.lng;
        const markerImage = address.getPropValue("marker-image");
        const width = address.getPropValue("marker-width") || 32;
        const height = address.getPropValue("marker-height") || 32;

        let iconUrl: string | undefined =
          markerImage && typeof markerImage === "object" && markerImage.type === "image"
            ? markerImage.url
            : markerImage;

        if (markerImage && typeof markerImage === "object" && markerImage.type === "icon") {
          const iconName = (markerImage as any).name;
          let ElementIcon: any = null;
          for (const lib of iconLibraries) {
            if (ElementIcon) break;
            for (const [name, Comp] of Object.entries(lib)) {
              if (name === iconName) {
                ElementIcon = Comp;
                break;
              }
            }
          }

          if (ElementIcon) {
            const svgString = renderToStaticMarkup(<ElementIcon size={Math.max(width, height)} />);
            iconUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`;
          }

        }

        if (lat !== undefined && lng !== undefined) {
          const finalIconUrl = iconUrl || defaultMarkerIcon;
          const content = markerImage ? (
            <Base.Media value={markerImage} className={this.decorateCSS("icon")} />
          ) : (
            <></>
          );

          acc.push({
            content,
            lat,
            lng,
            icon: {
              url: finalIconUrl,
              scaledSize: new google.maps.Size(width, height),
              width,
              height,
            },
          });
        }
      }
      return acc;
    }, []);

    const iconExist = this.getPropValue("icon");

    const topExist = iconExist || hasTitle || hasDescription || continents.length > 0;
    return (
      <Base.VerticalContent className={this.decorateCSS("wrapper")}>
        {topExist && (
          <Base.Container className={this.decorateCSS("container")}>
            <Base.MaxContent className={this.decorateCSS("max-content")}>
              <Base.VerticalContent className={this.decorateCSS("header")}>
                {this.getPropValue("icon") && (
                  <div className={this.decorateCSS("icon-wrapper")}>
                    <Base.Media
                      value={this.getPropValue("icon")}
                      className={`${this.decorateCSS("icon")} ${this.getPropValue("icon")?.type === "image" && this.decorateCSS("icon-img")}`}
                    />
                  </div>
                )}
                {hasSubtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>}
                {hasTitle && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}

                {hasDescription && <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>}

                {continents.length > 0 && (
                  <div className={this.decorateCSS("continents-wrapper")}>
                    {continents.map((continentObj: any, index: number) => {
                      const name = this.castToString(continentObj.getPropValue("name"));
                      const count = continentObj.getPropValue("count");

                      return (
                        (name || count) && (
                          <div key={index} className={this.decorateCSS("continent-item")}>
                            <Base.P className={this.decorateCSS("continent-name")}>{continentObj.getPropValue("name")}</Base.P>
                            <Base.P className={this.decorateCSS("continent-count")}>{count}</Base.P>
                          </div>
                        )
                      );
                    })}
                  </div>
                )}
              </Base.VerticalContent>
            </Base.MaxContent>
          </Base.Container>
        )}
        <section className={this.decorateCSS("map-container")}>
          <ComposerMap defaultMarkerIcon={defaultMarkerIcon} handleMarkerZoom={markerZoom} defaultZoom={centerZoom} markers={markers} className={this.decorateCSS("map")} styles={mapStyle?.colors} />
        </section>
      </Base.VerticalContent>
    );
  }
}

export default Location3;
