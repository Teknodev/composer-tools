import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature29.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { Visibility } from "@mui/icons-material";

class Feature29 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "heading",
      displayer: "Heading",
      value: "Meeting your needs",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Reliable payouts engine, total dependability",
    });

    this.addProp({
      type: "object",
      key: "topLeftSide",
      displayer: "Left Side Top Card",
      value: [
        {
          type: "boolean",
          key: "visibility",
          displayer: "Visibility",
          value: true,
        },
        {
          type: "string",
          key: "topLeftSideTitle",
          displayer: "Title",
          value: "Crypto Trading Platform",
        },
        {
          type: "string",
          key: "topLeftSideDescription",
          displayer: "Description",
          value:
            "Lorem ipsum dolor sit amet consectet adipiscing elit. Excepteur sint occaecat cupidatat non proident.",
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "bottomLeftSide",
      displayer: "Left Side Bottom Card 1",
      value: [
        {
          type: "boolean",
          key: "visibility",
          displayer: "Visibility",
          value: true,
        },
        {
          type: "string",
          key: "bottomLeftSideTitle",
          displayer: "Title",
          value: "Mobile App Friendly",
        },
        {
          type: "string",
          key: "bottomLeftSideDescription",
          displayer: "Description",
          value: "Lorem ipsum dolor sit amet consectet adipiscing.",
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "bottomLeftSide2",
      displayer: "Left Side Bottom Card 2",
      value: [
        {
          type: "boolean",
          key: "visibility",
          displayer: "Visibility",
          value: true,
        },
        {
          type: "image",
          key: "bottomLeftSide2Image",
          displayer: "Left Side Bottom Image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/690e36303596a1002b214633?alt=media",
        },
        {
          type: "string",
          key: "bottomLeftSide2Title",
          displayer: "Title",
          value: "Mobile App Friendly",
        },
        {
          type: "string",
          key: "bottomLeftSide2Description",
          displayer: "Description",
          value: "Lorem ipsum dolor sit amet consectet adipiscing.",
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "middleSide",
      displayer: "Middle Side Card",
      value: [
        {
          type: "boolean",
          key: "visibility",
          displayer: "Visibility",
          value: true,
        },
        {
          type: "image",
          key: "middleSideImage",
          displayer: "Image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/690e36723596a1002b21464f?alt=media",
        },
        {
          type: "string",
          key: "middleSideTitle",
          displayer: "Title",
          value: "Secure Wallet",
        },
        {
          type: "string",
          key: "middleSideDescription",
          displayer: "Description",
          value: "Lorem ipsum dolor sit amet consectet adipiscing.",
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "topRightSide",
      displayer: "Right Side Top Card",
      value: [
        {
          type: "boolean",
          key: "visibility",
          displayer: "Visibility",
          value: true,
        },
        {
          type: "string",
          key: "topRightSideTitle",
          displayer: "Title",
          value: "Secure Wallet",
        },
        {
          type: "string",
          key: "topRightSideDescription",
          displayer: "Description",
          value: "Lorem ipsum dolor sit amet consectet adipiscing.",
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "bottomRightSide",
      displayer: "Right Side Bottom Card",
      value: [
        {
          type: "boolean",
          key: "visibility",
          displayer: "Visibility",
          value: true,
        },
        {
          type: "string",
          key: "bottomRightSideTitle",
          displayer: "Title",
          value: "Buy & Sell Coin",
        },
        {
          type: "string",
          key: "bottomRightSideDescription",
          displayer: "Description",
          value: "Lorem ipsum dolor sit amet consectet adipiscing.",
        },
      ],
    });
    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1"],
      },
    });
  }

  static getName(): string {
    return "Feature 29";
  }

  render() {
    const title = this.getPropValue("title");
    return (
      <Base.Container>
        <Base.MaxContent>
          <Base.SectionTitle>{title}</Base.SectionTitle>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature29;
