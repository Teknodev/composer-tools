import * as React from "react";
import { Link } from "react-router-dom";
import { editor } from "../../../App";
import { iComponent } from "../../editor-components/EditorComponent";
import { ComposerModal, ModalService } from "../modal";
import styles from "./link.module.scss";

function ComposerLink({ children, path }: any) {
  const [isLink, setIsLink] = React.useState<boolean>(true);
  const [open, setOpen] = React.useState(false);
  const [component, setComponent] = React.useState<iComponent>();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    if (!path) return;

    const modal = editor.getModals().find((el: any) => el.name == path);
    if(modal){
      setComponent(modal.getModal()[0]);
      setIsLink(false);
    }
  }, []);

  React.useEffect(() => {
    const modal = ModalService.subscribe("close", handleClose);
    return () => {
      modal.unsubscribe();
    };
  });

  return (
    <>
      {isLink ? (
        <Link
          className={styles["container"]}
          to={{
            pathname: path,
          }}
        >
          {children}
        </Link>
      ) : (
        <div onClick={handleOpen} className={styles["container"]}>
          {children}
        </div>
      )}
      <ComposerModal open={open} onClose={handleClose}>
        {component?.render()}
      </ComposerModal>
    </>
  );
}

export default ComposerLink;
