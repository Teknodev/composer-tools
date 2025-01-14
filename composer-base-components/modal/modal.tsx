import * as React from "react";
import styles from "./modal.module.scss";
import usePlaygroundResize from "composer-tools/custom-hooks/playground-resize";

interface iComposerModal {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}
function ComposerModal({ children, open, onClose }: iComposerModal) {
  const { style } = usePlaygroundResize();

  if (!open) {
    return null;
  }

  return (
    <div style={style} onClick={onClose} className={styles["custom-modal"]}>
      <div onClick={(event: any) => event.stopPropagation()}>{children}</div>
    </div>
  );
}

export default ComposerModal;
