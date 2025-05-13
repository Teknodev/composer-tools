import React from "react";
import { IconBaseProps } from "react-icons/lib";
import { iconLibraries } from "./list";

interface TypesPropsIcon {
  name: string;
  propsIcon?: IconBaseProps;
}

export function ComposerIcon({ name, propsIcon }: TypesPropsIcon): React.JSX.Element {
  if (!name) return <></>;

  let ElementIcon: any = null;

  for (const iconLibrary of iconLibraries) {
    if (ElementIcon) break;

    for (const [iconName, Icon] of Object.entries(iconLibrary)) {
      if (iconName === name) {
        ElementIcon = Icon;
        break;
      }
    }
  }

  if (!ElementIcon) {
    console.warn(`Icon "${name}" not found.`);
    return <></>;
  }

  return <ElementIcon {...propsIcon} />;
}