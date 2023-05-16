import * as React from "react";
import styles from "./modal.module.scss";

interface iComposerModal {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}
function ComposerModal({ children, open, onClose }: iComposerModal) {
  if (!open) {
    return null;
  }

  return (
    <div onClick={onClose} className={styles["custom-modal"]}>
      <div onClick={(event: any) => event.stopPropagation()}>{children}</div>
    </div>
  );
}

export default ComposerModal;
