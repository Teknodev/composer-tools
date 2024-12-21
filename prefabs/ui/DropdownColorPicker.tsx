/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import * as React from 'react';
import ColorPicker from "../../../prefabs/playground/ui/ColorPicker"

import DropDown, { DropDownItem } from './Dropdown';


type Props = {
  disabled?: boolean;
  buttonAriaLabel?: string;
  buttonClassName: string;
  buttonIconClassName?: string;
  buttonLabel?: any;
  title?: string;
  stopCloseOnClickSelf?: boolean;
  color: string;
  onChange?: (color: string, skipHistoryStack: boolean) => void;
};

export default function DropdownColorPicker({
  disabled = false,
  stopCloseOnClickSelf = true,
  color,
  onChange,
  ...rest
}: Props) {
  return (
    <DropDown
      {...rest}
      disabled={disabled}
      stopCloseOnClickSelf={stopCloseOnClickSelf}>
      {/* <DropDownItem onClick={() =>{}}> */}
      <div style={{position: "static", top: 0, zIndex: 99}}>
      <ColorPicker color={color} onChange={onChange} />
      </div>
      {/* </DropDownItem> */}
    </DropDown>
  );
}