import {
  BaseFeature,
  TypeMediaInputValue,
} from "composer-tools/editor-components/EditorComponent";
import styles from "./feature51.module.scss";
import {
  Base,
  TypeButton,
} from "composer-tools/composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

type Item = {
  itemTitle: Element;
  itemDescription: Element;
  itemIcon: TypeMediaInputValue;
};

type PrimaryButton = {
  type: TypeButton;
  text: Element;
  url: string;
  icon?: TypeMediaInputValue;
};

class Feature51 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.setComponentState("activeItem", 0);

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
      value: "How We Work",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Completely iterate covalent strategic theme areas via accurate e-markets.",
    });

    this.addProp({
      type: "array",
      key: "items",
      displayer: "Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "itemIcon",
              displayer: "Item Icon",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "FaPlus",
              },
            },
            {
              type: "string",
              key: "itemTitle",
              displayer: "Item Title",
              value: "Strategy Planning",
            },
            {
              type: "string",
              key: "itemDescription",
              displayer: "Item Description",
              value:
                "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. \n\nDistinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business applications through revolutionary catalysts.",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "itemIcon",
              displayer: "Item Icon",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "FaPlus",
              },
            },
            {
              type: "string",
              key: "itemTitle",
              displayer: "Item Title",
              value: "Technology Consluting",
            },
            {
              type: "string",
              key: "itemDescription",
              displayer: "Item Description",
              value:
                "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "itemIcon",
              displayer: "Item Icon",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "FaPlus",
              },
            },
            {
              type: "string",
              key: "itemTitle",
              displayer: "Item Title",
              value: "Design & Development",
            },
            {
              type: "string",
              key: "itemDescription",
              displayer: "Item Description",
              value:
                "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "itemIcon",
              displayer: "Item Icon",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "FaPlus",
              },
            },
            {
              type: "string",
              key: "itemTitle",
              displayer: "Item Title",
              value: "Performance Audit",
            },
            {
              type: "string",
              key: "itemDescription",
              displayer: "Item Description",
              value:
                "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "withLines",
      displayer: "Line",
      value: true,
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 1,
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
    });
  }

  static getName(): string {
    return "Feature 51";
  }

  render() {
    const sectionSubtitle = this.castToString(this.getPropValue("subtitle"));
    const sectionTitle = this.castToString(this.getPropValue("title"));
    const sectionDescription = this.castToString(
      this.getPropValue("description"),
    );
    const isSectionHeadingExist =
      sectionSubtitle || sectionTitle || sectionDescription;

    const items = this.castToObject<Item[]>("items");
    console.log(items);
    const itemCountPerRow = this.getPropValue("itemCount");
    const pcGridCount = Math.min(4, itemCountPerRow);

    const buttons = this.castToObject<PrimaryButton[]>("buttons");
    const buttonsExist = buttons.some(
      (button) => !!this.castToString(button.text),
    );

    const isActiveItem = (itemIndex: number) =>
      this.getComponentState("activeItem") === itemIndex;
    const changeActiveItem = (itemIndex: number) => {
      isActiveItem(itemIndex)
        ? this.setComponentState("activeItem", null)
        : this.setComponentState("activeItem", itemIndex);
    };

    const gridCount = {
      pc: pcGridCount,
      tablet: 1,
      phone: 1,
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {isSectionHeadingExist && (
            <Base.VerticalContent
              className={this.decorateCSS("header-container")}
            >
              {sectionSubtitle && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {this.getPropValue("subtitle")}
                </Base.SectionSubTitle>
              )}

              {sectionTitle && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </Base.SectionTitle>
              )}

              {sectionDescription && (
                <Base.SectionDescription
                  className={this.decorateCSS("description")}
                >
                  {this.getPropValue("description")}
                </Base.SectionDescription>
              )}
            </Base.VerticalContent>
          )}

          {items?.length > 0 && (
            <Base.ListGrid
              gridCount={gridCount}
              className={this.decorateCSS("items-container")}
            >
              {items.map((item, index) => {
                const itemTitle = this.castToString(item.itemTitle);
                const itemDescription = this.castToString(item.itemDescription);
                const itemIcon = item.itemIcon;

                return (
                  <Base.VerticalContent
                    className={`${this.decorateCSS("item")} 
                    ${isActiveItem(index) ? this.decorateCSS("active") : ""} 
                    ${this.getPropValue("withLines") ? this.decorateCSS("with-lines") : ""}
                    ${pcGridCount === 1 ? this.decorateCSS("one-column") : ""}
                    `}
                    key={index}
                  >
                    <Base.Row
                      onClick={() => changeActiveItem(index)}
                      className={`${this.decorateCSS("item-header")}`}
                    >
                      {itemTitle && (
                        <Base.H4 className={this.decorateCSS("item-title")}>
                          {itemTitle}
                        </Base.H4>
                      )}
                      {itemIcon && (
                        <Base.Media
                          value={itemIcon}
                          className={this.decorateCSS("item-icon")}
                        />
                      )}
                    </Base.Row>

                    {itemDescription && (
                      <div
                        className={this.decorateCSS("item-description-wrapper")}
                      >
                        <Base.P
                          className={this.decorateCSS("item-description")}
                        >
                          {itemDescription}
                        </Base.P>
                      </div>
                    )}
                  </Base.VerticalContent>
                );
              })}
            </Base.ListGrid>
          )}

          {buttonsExist && (
            <Base.Row className={this.decorateCSS("buttons-wrapper")}>
              {buttons.map((button, index) => {
                const buttonText = this.castToString(button.text);
                const buttonExist = buttonText || button.icon;
                return (
                  buttonExist && (
                    <ComposerLink path={button.url}>
                      <Base.Button
                        className={this.decorateCSS("button")}
                        key={index}
                        buttonType={button.type}
                      >
                        {button.icon && (
                          <Base.Media
                            value={button.icon}
                            className={this.decorateCSS("button-icon")}
                          />
                        )}
                        {buttonText && (
                          <Base.P className={this.decorateCSS("button-text")}>
                            {button.text}
                          </Base.P>
                        )}
                      </Base.Button>
                    </ComposerLink>
                  )
                );
              })}
            </Base.Row>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature51;
