
import React from "react";
import { IconBaseProps, IconType } from "react-icons/lib"
import loadable from '@loadable/component'

interface typesPropsIcon {
  name: string;
  propsIcon?: IconBaseProps
}

export function ComposerIcon({ name, propsIcon }: typesPropsIcon): JSX.Element {
  const lib = name.replace(/([a-z0-9])([A-Z])/g, '$1 $2').split(" ")[0].toLocaleLowerCase();

  const ElementIcon = loadable(() => import(`react-icons/${lib}/index`), {
    resolveComponent: (el: JSX.Element) => el[name as keyof JSX.Element]
  });

  return <ElementIcon {...propsIcon} />
}