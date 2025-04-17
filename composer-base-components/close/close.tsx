import * as React from "react";
import { ModalService } from "../modal";

interface iComposerModalClose {
  children: React.ReactNode;
}
function ComposerModalClose({ children }: iComposerModalClose) {
  const handleClose = () => {
    ModalService.emit("close", true);
  };
  return <div onClick={handleClose}>{children}</div>;
}

export default ComposerModalClose;
