import React from "react";
import { Location } from "../../EditorComponent";
import styles from "./location4.module.scss";
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

class Location4 extends Location {
  constructor(props?: any) {
    super(props, styles);

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
      value: "Location",
    });

    this.addProp({
      type: "media",
      key: "media",
      displayer: "Background Media",
      additionalParams: {
        availableTypes: ["image", "video"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c1a380655f8002ca6cb4c?alt=media",
      },
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "number",
      key: "centerZoom",
      displayer: "Center Zoom Value",
      value: 3,
    });

    this.addProp({
      type: "number",
      key: "markerZoom",
      displayer: "Marker Zoom Value",
      value: 15,
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
              type: "string",
              displayer: "Popup Title",
              key: "popupTitle",
              value: "Crafto Resort",
            },
            {
              key: "marker-image",
              displayer: "Marker Image",
              type: "media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c1b5c0655f8002ca6cccb?alt=media",
              },
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "16122 Collins street, Melbourne, Australia",
            },
            {
              type: "media",
              key: "popupImage",
              displayer: "Popup Image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c28660655f8002ca6d50a?alt=media",
              },
            },
          ],
        },
      ],
    });
  }

  static getName(): string {
    return "Location 4";
  }

  render() {
    const addresses: Address[] = this.getPropValue("addresses");

    const theme = this.getPropValue("theme");

    const selectedTheme = theme || "Theme-2";

    const mapStyle = this.selectTheme(selectedTheme);

    const defaultMarkerIcon = "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c1b5c0655f8002ca6cccb?alt=media";

    const markers = addresses.reduce((acc: MarkerObject[], address: any) => {
      if (address.type === "object" && Array.isArray(address.value)) {
        const markerData = address.value.find((addr: any) => addr.type === "location");

        const lat = markerData?.value?.lat;
        const lng = markerData?.value?.lng;
        const description = address.getPropValue("description");
        const hasDescription = this.castToString(description);
        const popupTitle = address.getPropValue("popupTitle");
        const hasPopupTitle = this.castToString(popupTitle);
        const popupImage = address.getPropValue("popupImage");

        const markerImage = address.getPropValue("marker-image");

        const width = address.getPropValue("marker-width") || 32;
        const height = address.getPropValue("marker-height") || 32;

        let iconUrl: string | undefined =
          markerImage && typeof markerImage === "object" && markerImage.type === "image"
            ? markerImage.url
            : markerImage;

        if (markerImage && typeof markerImage === "object" && markerImage.type === "icon") {
          try {
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
          } catch (e) {
            iconUrl = undefined;
          }
        }

        if (lat !== undefined && lng !== undefined) {
          const content =
            hasDescription || hasPopupTitle ? (
              <div className={this.decorateCSS("popup")}>
                {popupImage && (
                  <Base.Media
                    className={this.decorateCSS("popup-image")}
                    value={popupImage}
                  />
                )}
                {(hasPopupTitle || hasDescription) && (
                  <div className={this.decorateCSS("popup-texts")}>
                    {hasPopupTitle && <Base.P className={this.decorateCSS("popup-title")}>{popupTitle}</Base.P>}
                    {hasDescription && <Base.P className={this.decorateCSS("popup-content")}>{description}</Base.P>}
                  </div>
                )}
              </div>
            ) : null;

          const finalIconUrl = iconUrl || defaultMarkerIcon;

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

    const markerZoom = this.getPropValue("markerZoom");
    const centerZoom = this.getPropValue("centerZoom");

    const media = this.getPropValue("media");
    const overlay = this.getPropValue("overlay");

    const subtitle = this.getPropValue("subtitle");
    const subtitleExist = this.castToString(subtitle);
    const title = this.getPropValue("title");
    const titleExist = this.castToString(title);
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("page")}>
          {media ? (
            <div className={this.decorateCSS("content")}>
              {overlay && media && <div className={this.decorateCSS("overlay")}></div>}
              {media && <Base.Media value={media} className={this.decorateCSS("image")} />}
              {titleExist && (
                <Base.Container className={this.decorateCSS("content-container")}>
                  <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>}
                    <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>
                  </Base.MaxContent>
                </Base.Container>
              )}

            </div>
          ) : (
            titleExist && (
              <Base.Container className={this.decorateCSS("content-container")}>
                <Base.MaxContent className={this.decorateCSS("max-content-no-image")}>
                  <Base.SectionTitle className={this.decorateCSS("title-no-image")}>{this.getPropValue("title")}</Base.SectionTitle>
                </Base.MaxContent>
              </Base.Container>
            )
          )}

          {markers.length > 0 && (
            <section className={this.decorateCSS("map-container")}>
              <ComposerMap allContentShow={true} defaultMarkerIcon={defaultMarkerIcon} defaultZoom={centerZoom} handleMarkerZoom={markerZoom} markers={markers} className={this.decorateCSS("map")} styles={mapStyle?.colors} />
            </section>
          )}
        </div>
      </div>
    );
  }
}

export default Location4;
