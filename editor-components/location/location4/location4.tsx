import React from "react";
import { Location } from "../../EditorComponent";
import styles from "./location4.module.scss";
import ComposerMap from "../../../composer-base-components/map/map";
import { Base } from "../../../composer-base-components/base/base";

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
      type: "media",
      key: "logo",
      displayer: "Logo",
      additionalParams: {
        availableTypes: ["image", "icon"],
      },
      value: {
        type: "icon",
        name: "",
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
      value: "Location",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });
    
    this.addProp({
      type: "media",
      key: "title-left-icon",
      displayer: "Title Left Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/695cdea1f959f6002d7e1d79?alt=media",
      },
    });

    this.addProp({
      type: "media",
      key: "title-right-icon",
      displayer: "Title Right Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/695cde02f959f6002d7e1cea?alt=media",
      },
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
              displayer: "Popup Media",
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
        const description = this.castToString(address.getPropValue("description"));
        const popupTitle = this.castToString(address.getPropValue("popupTitle"));
        const popupImage = address.getPropValue("popupImage");

        const markerImage = address.getPropValue("marker-image");

        const width = address.getPropValue("marker-width") || 32;
        const height = address.getPropValue("marker-height") || 32;

        let iconUrl: string | undefined =
          markerImage && typeof markerImage === "object" && markerImage.type === "image"
            ? markerImage.url
            : markerImage;

        if (lat !== undefined && lng !== undefined) {
          const content =
            (description || popupTitle) ? (
              <div className={this.decorateCSS("popup")}>
                {popupImage && (
                  <Base.Media
                    className={this.decorateCSS("popup-image")}
                    value={popupImage}
                  />
                )}
                {(popupTitle || description) && (
                  <div className={this.decorateCSS("popup-texts")}>
                    {popupTitle && <Base.P className={this.decorateCSS("popup-title")}>{typeof popupTitle === "string" ? popupTitle.charAt(0).toUpperCase() + popupTitle.slice(1) : popupTitle}</Base.P>}
                    {description && <Base.P className={this.decorateCSS("popup-content")}>{typeof description === "string" ? description.charAt(0).toUpperCase() + description.slice(1) : description}</Base.P>}
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
    const description = this.getPropValue("description");
    const descriptionExist = this.castToString(description);
    const logo = this.getPropValue("logo");
    const logoExist = (logo?.type === "icon" && !!logo?.name) || (logo?.type === "image" && !!logo?.url);
    const titleLeftIcon = this.getPropValue("title-left-icon");
    const titleRightIcon = this.getPropValue("title-right-icon");
    const titleLeftIconExist = (titleLeftIcon?.type === "icon" && !!titleLeftIcon?.name) || (titleLeftIcon?.type === "image" && !!titleLeftIcon?.url);
    const titleRightIconExist = (titleRightIcon?.type === "icon" && !!titleRightIcon?.name) || (titleRightIcon?.type === "image" && !!titleRightIcon?.url);
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("page")}> 
          {media ? (
            <div className={this.decorateCSS("content")}>
              {overlay && media && <div className={this.decorateCSS("overlay")}></div>}
              {media && <Base.Media value={media} className={this.decorateCSS("image")} />}
              {titleExist && (
                <Base.Container className={this.decorateCSS("content-container")}>
                  <Base.VerticalContent>
                  <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {logoExist && (
                      <div className={this.decorateCSS("logo-container")}>
                        <Base.Media
                          value={logo}
                          className={`${this.decorateCSS("logo")} ${logo?.type === "image" && this.decorateCSS("logo-img")}`}
                        />
                      </div>
                    )}
                    {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>}
                    {titleExist && (
                      <div className={this.decorateCSS("title-with-icons")}>
                        {titleLeftIconExist && (
                          <div className={this.decorateCSS("title-icon")}>
                            <Base.Media value={titleLeftIcon} className={this.decorateCSS("title-icon-img")} />
                          </div>
                        )}
                        <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>
                        {titleRightIconExist && (
                          <div className={this.decorateCSS("title-icon")}>
                            <Base.Media value={titleRightIcon} className={this.decorateCSS("title-icon-img")} />
                          </div>
                        )}
                      </div>
                    )}
                    {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>}
                  </Base.MaxContent>
                  </Base.VerticalContent>
                </Base.Container>
              )}

            </div>
          ) : (
            (subtitleExist || titleExist) && (
              <Base.Container className={this.decorateCSS("content-container")}>
              <Base.VerticalContent>
              <Base.MaxContent className={this.decorateCSS("max-content-no-image")}>
                {logoExist && (
                  <div className={this.decorateCSS("logo-container")}>
                    <Base.Media value={logo} className={`${this.decorateCSS("logo")} ${this.decorateCSS("logo-img")}`} />
                  </div>
                )}
                {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle-no-image")}>{subtitle}</Base.SectionSubTitle>}
                {titleExist && (
                  <div className={this.decorateCSS("title-with-icons")}>
                    {titleLeftIconExist && (
                      <div className={this.decorateCSS("title-icon")}>
                        <Base.Media value={titleLeftIcon} className={this.decorateCSS("title-icon-img")} />
                      </div>
                    )}
                    <Base.SectionTitle className={this.decorateCSS("title-no-image")}>{this.getPropValue("title")}</Base.SectionTitle>
                    {titleRightIconExist && (
                      <div className={this.decorateCSS("title-icon")}>
                        <Base.Media value={titleRightIcon} className={this.decorateCSS("title-icon-img")} />
                      </div>
                    )}
                  </div>
                )}
                {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description-no-image")}>{description}</Base.SectionDescription>}
                </Base.MaxContent>
                </Base.VerticalContent>
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
