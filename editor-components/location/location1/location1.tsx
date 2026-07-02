import { Location, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./location1.module.scss";
import ComposerMap from "../../../composer-base-components/map/map";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Address = {
  type: string;
  key: string;
  value: Array<Marker>;
  getPropValue: (key: string) => unknown;
};

type Marker = {
  type: string;
  key: string;
  value: unknown;
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

type mapSettings = {
  centerZoom: number;
  markerZoom: number;
};

type ButtomType = {
  description: string;
  phoneNumber: string;
  path: string;
};

class Location1 extends Location {
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
      value: "Connect with social media",
    });

    this.addProp({
      type: "string",
      key: "headerDescription",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
      ],
    });

    this.addProp({
      type: "boolean",
      key: "line",
      displayer: "Line",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "icons",
      displayer: "Social Media Items",
      value: [
        {
          type: "object",
          key: "iconItem",
          displayer: "Icon",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "FaLinkedinIn",
              },
            },

            {
              type: "page",
              key: "path",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "iconItem",
          displayer: "Icon",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "FaTwitter",
              },
            },

            {
              type: "page",
              key: "path",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "iconItem",
          displayer: "Icon",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "FaFacebookF",
              },
            },

            {
              type: "page",
              key: "path",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "iconItem",
          displayer: "Icon",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "IoBasketballOutline",
              },
            },

            {
              type: "page",
              key: "path",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "iconItem",
          displayer: "Icon",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "FaInstagram",
              },
            },

            {
              type: "page",
              key: "path",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
      ],
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
              type: "media",
              key: "markerImage",
              displayer: "Marker Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "image",
                url: "",
              },
            },
            {
              type: "number",
              key: "markerWidth",
              displayer: "Marker Width",
              value: 32,
            },
            {
              type: "number",
              key: "markerHeight",
              displayer: "Marker Height",
              value: 32,
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "16122 Collins street, Melbourne, Australia",
            },
            {
              type: "string",
              key: "popupButtonText",
              displayer: "Popup Button Text",
              value: "View Map",
            },
            {
              type: "media",
              key: "popupButtonIcon",
              displayer: "Popup Button Icon",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "",
              },
            },
            {
              type: "page",
              key: "navigateTo",
              displayer: "Popup Navigate To",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "buttonRow",
      displayer: "Contact",
      value: [
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "Have any questions about booking?",
        },
        {
          type: "string",
          key: "phoneNumber",
          displayer: "Phone Number",
          value: "+90 123 456 78 90",
        },
        {
          type: "page",
          key: "navigateTo",
          displayer: "Navigate To",
          value: "",
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

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Animation",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1"]
      }
    });
    this.setComponentState("isCardVisible", true);
  }

  static getName(): string {
    return "Location 1";
  }

  render() {
    const addresses: Address[] = this.getPropValue("addresses");

    const theme = this.getPropValue("theme");

    const selectedTheme = theme || "Theme-2";

    const defaultMarkerIcon = "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675acbf30655f8002ca64e33?alt=media";

    const mapStyle = this.selectTheme(selectedTheme);

    const markers = addresses.reduce((acc: MarkerObject[], address: Address) => {
      if (address.type === "object" && Array.isArray(address.value)) {
        const markerData = address.value.find((addr: Marker) => addr.type === "location");
        const lat = (markerData?.value as { lat?: number })?.lat;
        const lng = (markerData?.value as { lng?: number })?.lng;
        const description = this.castToString(address.getPropValue("description"));
        const popupTitle = this.castToString(address.getPropValue("popupTitle"));

        const popupButtonText = this.castToString(address.getPropValue("popupButtonText"));
        const popupButtonIcon = address.getPropValue("popupButtonIcon");
        const popupButtonIconExist = popupButtonIcon && (popupButtonIcon.name || popupButtonIcon.url);

        const popupButtonUrl = address.getPropValue("navigateTo");

        const markerMedia = address.getPropValue("markerImage") as string | TypeMediaInputValue | undefined;

        const width = (address.getPropValue("markerWidth") as number) || 32;
        const height = (address.getPropValue("markerHeight") as number) || 32;

        let iconUrl: string | undefined =
          markerMedia && typeof markerMedia === "object" && markerMedia.type === "image"
            ? markerMedia.url
            : markerMedia;

        if (lat !== undefined && lng !== undefined) {
          const content =
            (description || popupTitle || popupButtonText) && (
              <div className={this.decorateCSS("popup")}>
                {(popupTitle || description) && (
                  <div className={this.decorateCSS("popup-header")}>
                    {popupTitle && <Base.P className={this.decorateCSS("popup-title")}>{typeof popupTitle === "string" ? popupTitle.charAt(0).toUpperCase() + popupTitle.slice(1) : popupTitle}</Base.P>}
                    {description && <Base.P className={this.decorateCSS("popup-content")}>{typeof description === "string" ? description.charAt(0).toUpperCase() + description.slice(1) : description}</Base.P>}
                  </div>
                )}
                {popupButtonText && (
                  <div className={this.decorateCSS("popup-link")}>
                    <ComposerLink path={popupButtonUrl}>
                      <div className={this.decorateCSS("popup-button")}>
                        {popupButtonText && (typeof popupButtonText === "string" ? popupButtonText.charAt(0).toUpperCase() + popupButtonText.slice(1) : popupButtonText)}
                        {popupButtonIconExist && <Base.Media value={popupButtonIcon} className={this.decorateCSS("popup-button-icon")} />}
                      </div>
                    </ComposerLink>
                  </div>
                )}
              </div>
            );

          acc.push({
            content,
            lat,
            lng,
            icon: {
              url: iconUrl || defaultMarkerIcon,
              scaledSize: new google.maps.Size(width, height),
              width,
              height,
            },
          });
        }
      }
      return acc;
    }, []);
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const headerdescription = this.castToString(this.getPropValue("headerDescription"));

    const buttom = this.castToObject<ButtomType>("buttonRow");
    const icons = this.getPropValue("icons");
    const line = this.getPropValue("line");

    const description = buttom.description;
    const phone = buttom.phoneNumber;

    const mapSettings = this.castToObject<mapSettings>("mapSettings");
    const markerZoom = mapSettings.markerZoom;
    const centerZoom = mapSettings.centerZoom;

    const alignment = Base.getContentAlignment();

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const visibleButtons = buttons.filter(btn => this.castToString(btn.text));

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(subtitle || title || headerdescription || visibleButtons.length > 0 || (icons && icons.length > 0) || line) && (
            <div className={this.decorateCSS("header")}>
              {(subtitle || title || headerdescription || visibleButtons.length > 0) && (
                <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
                  {subtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
                  {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                  {headerdescription && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("headerDescription")}</Base.SectionDescription>}
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
              )}
              {line && <div className={this.decorateCSS("divider")} />}
              {icons && icons.length > 0 && (
                <div className={this.decorateCSS("icon-container")}>
                  {icons.map((icon: TypeUsableComponentProps, index: number) => {
                    const iconValue = icon.getPropValue ? (icon.getPropValue("icon") as TypeMediaInputValue | undefined) : (icon as { icon?: TypeMediaInputValue }).icon;
                    const iconPath = icon.getPropValue ? (icon.getPropValue("path") as string | undefined) : (icon as { path?: string }).path;
                    const iconExist = iconValue && (
                      (iconValue.type === "image" && iconValue.url) ||
                      (iconValue.type === "icon" && iconValue.name)
                    );
                    const hoverAnimation = this.getPropValue("hoverAnimation");

                    return iconExist && (
                      <div className={this.decorateCSS("icon-wrapper")} key={index} data-animation={Array.isArray(hoverAnimation) ? hoverAnimation.join(" ") : ""}>
                        <ComposerLink path={iconPath}>
                          <Base.Media value={iconValue} className={this.decorateCSS("icon")} />
                        </ComposerLink>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
          <section className={this.decorateCSS("map-container")}>
            <ComposerMap allContentShow={true} defaultMarkerIcon={defaultMarkerIcon} defaultZoom={centerZoom} handleMarkerZoom={markerZoom} markers={markers} className={this.decorateCSS("map")} styles={mapStyle?.colors} />
          </section>
          {((typeof description === "string" && description.trim()) || (typeof phone === "string" && phone.trim())) && (
            <div className={`${this.decorateCSS("bottom-container")} ${alignment === "center" && this.decorateCSS("center")} ${alignment === "left" && this.decorateCSS("left")}`}>
              {typeof description === "string" && description.trim() && <Base.H5 className={this.decorateCSS("bottom-title")}>{buttom.description}</Base.H5>}
              {typeof phone === "string" && phone.trim() && (
                <Base.VerticalContent>
                  <ComposerLink path={buttom.path}>
                    <Base.H5 className={this.decorateCSS("phone")}>{buttom.phoneNumber}</Base.H5>
                  </ComposerLink>
                </Base.VerticalContent>
              )}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Location1;