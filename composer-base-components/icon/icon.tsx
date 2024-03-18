import React from "react";
import { IconBaseProps } from "react-icons/lib";
import { iconLibraries } from "../../../components/icon-list/icon-list";

interface typesPropsIcon {
  name: string;
  propsIcon?: IconBaseProps;
}

export function ComposerIcon({ name, propsIcon }: typesPropsIcon): JSX.Element {

  if (!name.length) return <></>;
  let ElementIcon;
  for (const iconLibrary of iconLibraries) {
    if (ElementIcon) {
      break;
    }

    Object.keys(iconLibrary).forEach((iconName) => {
      if (iconName === name) {
        ElementIcon = iconLibrary[iconName];
        return;
      }
    });
  }

  return <ElementIcon {...propsIcon} />
}
