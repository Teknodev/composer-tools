import React from "react";
import { Location } from "../../EditorComponent";
import styles from "./location5.module.scss";
import ComposerMap from "../../../composer-base-components/map/map";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { iconLibraries } from "../../../composer-base-components/base/utitilities/iconList";
import { renderToStaticMarkup } from "react-dom/server";

class Location5 extends Location {
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
        type: "image",
        url: "",
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
      value: "Offices",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
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
      displayer: "Location Addresses",
      key: "locationAddresses",
      value: [
        {
          type: "object",
          key: "firstAddress",
          displayer: "First Location",
          value: [
            {
              type: "number",
              key: "index",
              displayer: "Index",
              value: 1,
            },
            {
              type: "string",
              key: "city",
              displayer: "City",
              value: "Lisbon, Portugal",
            },
            {
              type: "string",
              key: "address",
              displayer: "Address",
              value: "Rua Fernando Palha, 47A, 1950-130",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "(We work by appointment)",
            },
            {
              type: "array",
              key: "loc",
              displayer: "Map And Markers",
              value: [
                {
                  type: "object",
                  key: "loca",
                  displayer: "Location",
                  value: [
                    {
                      type: "location",
                      displayer: "Coordinate",
                      key: "coordinate",
                      value: {
                        lat: 38.7460309892659,
                        lng: -9.100576929254501,
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
                        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6710dfcc97fe08002c76d871?alt=media",
                      },
                    },
                    {
                      type: "string",
                      displayer: "Marker Popup",
                      key: "popupTitle",
                      value: "Lisbon Office",
                    },
                    {
                      type: "string",
                      displayer: "Popup Description",
                      key: "popupDescription",
                      value: "Rua Fernando Palha, 47A, 1950-130",
                    },
                    {
                      type: "string",
                      key: "popupButtonText",
                      displayer: "Popup Button Text",
                      value: "View Map",
                    },
                    {
                      type: "page",
                      key: "popupButtonUrl",
                      displayer: "Popup Button URL",
                      value: "",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "secondAddress",
          displayer: "Second Location",
          value: [
            {
              type: "number",
              key: "index",
              displayer: "Index",
              value: 2,
            },
            {
              type: "string",
              key: "city",
              displayer: "City",
              value: "St. Petersburg, Russia",
            },
            {
              type: "string",
              key: "address",
              displayer: "Address",
              value: "Lermontovsky prospect, 35A",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "(We work by appointment)",
            },
            {
              type: "array",
              key: "loc",
              displayer: "Map And Markers",
              value: [
                {
                  type: "object",
                  key: "loca",
                  displayer: "Location",
                  value: [
                    {
                      type: "location",
                      displayer: "Coordinate",
                      key: "coordinate",
                      value: {
                        lat: 59.914732153022356,
                        lng: 30.295981663697482,
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
                        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6710dfcc97fe08002c76d871?alt=media",
                      },
                    },
                    {
                      type: "string",
                      displayer: "Marker Popup",
                      key: "popupTitle",
                      value: "St. Petersburg Office",
                    },
                    {
                      type: "string",
                      displayer: "Popup Description",
                      key: "popupDescription",
                      value: "Lermontovsky prospect, 35A",
                    },
                    {
                      type: "string",
                      key: "popupButtonText",
                      displayer: "Popup Button Text",
                      value: "View Map",
                    },
                    {
                      type: "page",
                      key: "popupButtonUrl",
                      displayer: "Popup Button URL",
                      value: "",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
  }

  static getName(): string {
    return "Location 5";
  }

  render() {
    const locationAddresses = this.getPropValue("locationAddresses") || [];

    const subtitle = this.getPropValue("subtitle");
    const hasSubtitle = this.castToString(subtitle);
    const title = this.getPropValue("title");
    const hasTitle = this.castToString(title);
    const markerZoom = this.getPropValue("markerZoom");
    const centerZoom = this.getPropValue("centerZoom");

    const theme = this.getPropValue("theme");

    const selectedTheme = theme || "Theme-2";

    const mapStyle = this.selectTheme(selectedTheme);
    const description = this.getPropValue("description");
    const hasDescription = this.castToString(description);
    const logo = this.getPropValue("logo");
    const logoExist = Boolean(
      (logo as any)?.url ||
      (logo as any)?.name ||
      (logo as any)?.icon
    );
    const alignmentValue = Base.getContentAlignment();

    const createMarkers = (address: any) => {
      const locData = address.getPropValue("loc");

      if (!locData) return [];

      return locData
        .map((loc: any) => {
          const coordinateData = loc.getPropValue("coordinate");
          const markerImage = loc.getPropValue("marker-image");
          const popupTitle = this.castToString(loc.getPropValue("popupTitle"));
          const popupDescription = this.castToString(loc.getPropValue("popupDescription"));
          const popupButtonText = this.castToString(loc.getPropValue("popupButtonText"));
          const popupButtonUrl = loc.getPropValue("popupButtonUrl");

          const lat = coordinateData?.lat;
          const lng = coordinateData?.lng;
          const width = 32;
          const height = 32;

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
            const finalIconUrl = iconUrl || defaultMarkerIcon;
            const content =
              (popupTitle || popupDescription || popupButtonText) ? (
                <div className={this.decorateCSS("popup")}>
                  {(popupTitle || popupDescription) && (
                    <div className={this.decorateCSS("popup-header")}>
                      {popupTitle && (
                        <Base.P className={this.decorateCSS("popup-title")}>
                          {typeof popupTitle === "string" ? popupTitle.charAt(0).toUpperCase() + popupTitle.slice(1) : popupTitle}
                        </Base.P>
                      )}
                      {popupDescription && (
                        <Base.P className={this.decorateCSS("popup-content")}>
                          {typeof popupDescription === "string" ? popupDescription.charAt(0).toUpperCase() + popupDescription.slice(1) : popupDescription}
                        </Base.P>
                      )}
                    </div>
                  )}
                  {popupButtonText && (
                    <div className={this.decorateCSS("popup-link")}>
                      <ComposerLink path={popupButtonUrl}>
                        <div className={this.decorateCSS("popup-button")}>
                          {typeof popupButtonText === "string" ? popupButtonText.charAt(0).toUpperCase() + popupButtonText.slice(1) : popupButtonText}
                        </div>
                      </ComposerLink>
                    </div>
                  )}
                </div>
              ) : null;
            return {
              content,
              lat,
              lng,
              icon: {
                url: finalIconUrl,
                scaledSize: new google.maps.Size(width, height),
              },
            };
          }
          return null;
        })
        .filter((marker: any) => marker !== null);
    };

    const defaultMarkerIcon = "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6710dfcc97fe08002c76d871?alt=media";

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={`${this.decorateCSS("title-block")} ${alignmentValue === "center" && this.decorateCSS("center")} ${alignmentValue === "left" && this.decorateCSS("left")}`}>
            {logoExist && (
              <Base.Media
                value={logo}
                className={`${this.decorateCSS("location-logo")} ${logo?.type === "image" && this.decorateCSS("location-logo-img")}`}
              />
            )}
            {hasSubtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>}
            {hasTitle && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
            {hasDescription && <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>}
          </Base.VerticalContent>
          <div className={this.decorateCSS("wrapper")}>
            <section className={this.decorateCSS("map-container")}>
              {locationAddresses.map((location: any, index: number) => {
                const markers = createMarkers(location);

                const city = location.getPropValue("city");
                const address = location.getPropValue("address");
                const description = location.getPropValue("description");
                const locationIndex = location.getPropValue("index");

                const hasCity = this.castToString(city);
                const hasAddress = this.castToString(address);
                const hasDescription = this.castToString(description);

                const hasItemsExist = hasCity || hasAddress || hasDescription || locationIndex;

                return (
                  <div key={index} className={this.decorateCSS("location-item")}>
                    {hasItemsExist && (
                      <Base.VerticalContent className={this.decorateCSS("location-items")}>
                        {locationIndex && <Base.H2 className={this.decorateCSS("location-index")}>{locationIndex}</Base.H2>}
                        {hasCity && <Base.H6 className={this.decorateCSS("location-city")}>{city}</Base.H6>}
                        {hasAddress && <Base.P className={this.decorateCSS("location-address")}>{address}</Base.P>}
                        {hasDescription && <Base.P className={this.decorateCSS("location-description")}>{description}</Base.P>}
                      </Base.VerticalContent>
                    )}
                    <ComposerMap
                      defaultMarkerIcon={defaultMarkerIcon}
                      markers={markers}
                      styles={mapStyle?.colors}
                      className={`${this.decorateCSS("location-map")} ${!hasItemsExist && this.decorateCSS("full-width")}`}
                      defaultZoom={centerZoom}
                      handleMarkerZoom={markerZoom}
                    />
                  </div>
                );
              })}
            </section>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Location5;
