import React from "react";
import { Location } from "../../EditorComponent";
import styles from "./location5.module.scss";
import ComposerMap from "../../../composer-base-components/map/map";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";
import { Base } from "../../../composer-base-components/base/base";
import { iconLibraries } from "../../../composer-base-components/base/utitilities/iconList";
import { renderToStaticMarkup } from "react-dom/server";

type mapSettings = {
  centerZoom: number;
  markerZoom: number;
}

function getMarkerIconUrl(markerImage: any, width: number, height: number): string | undefined {
  if (!markerImage) return undefined;
  if (typeof markerImage === "string") return markerImage;
  if (typeof markerImage !== "object") return undefined;

  if (markerImage.type === "image") {
    return markerImage.url;
  }

  if (markerImage.type === "icon") {
    try {
      const iconName = markerImage.name;
      const lib = iconLibraries.find((l) => iconName in l);
      const ElementIcon = lib ? lib[iconName] : null;
      if (ElementIcon) {
        const svgString = renderToStaticMarkup(<ElementIcon size={Math.max(width, height)} />);
        return `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`;
      }
    } catch (e) {
      return undefined;
    }
  }

  return undefined;
}

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
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
    });

    this.addProp({
      type: "array",
      displayer: "Location Addresses",
      key: "locationAddresses",
      value: [
        {
          type: "object",
          key: "locationAddress",
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
                  key: "marker",
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
          key: "locationAddress",
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
                  key: "marker",
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

    this.addProp({
      type: "object",
      key: "mapSettings",
      displayer: "Map Settings",
      value: [
        {
          type: "number",
          key: "centerZoom",
          displayer: "Center Zoom Value",
          value: 3,
        },
        {
          type: "number",
          key: "markerZoom",
          displayer: "Marker Zoom Value",
          value: 15,
        },
      ],
    });
  }

  static getName(): string {
    return "Location 5";
  }

  render() {
    const locationAddresses = this.getPropValue("locationAddresses") || [];
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const visibleButtons = buttons.filter(btn => this.castToString(btn.text));
    const mapSettings = this.castToObject<mapSettings>("mapSettings");
    const markerZoom = mapSettings?.markerZoom;
    const centerZoom = mapSettings?.centerZoom;
    const theme = this.getPropValue("theme");
    const selectedTheme = theme || "Theme-2";
    const mapStyle = this.selectTheme(selectedTheme);
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

          const iconUrl = getMarkerIconUrl(markerImage, width, height);

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
          <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
            {logoExist && (<Base.Media value={logo} className={`${this.decorateCSS("location-logo")} ${logo?.type === "image" && this.decorateCSS("location-logo-img")}`} />)}
            {subtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
            {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
            {description && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
            {visibleButtons.length > 0 && (
              <div className={this.decorateCSS("button-container")}>
                {visibleButtons.map((item: INPUTS.CastedButton, index: number) => {
                  return this.castToString(item.text) && (
                    <ComposerLink key={`button-${index}`} path={item.url}>
                      <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                        <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                      </Base.Button>
                    </ComposerLink>
                  );
                })}
              </div>
            )}
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
