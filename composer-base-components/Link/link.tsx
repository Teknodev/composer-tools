import * as React from "react";
import { Link } from "react-router-dom";
import { iComponent } from "../../editor-components/EditorComponent";
import { ModalService } from "../modal";
import styles from "./link.module.scss";
import {editor} from "../../../pages/project/editor/editor";

function ComposerLink({ children, path }: any) {
  const [isLink, setIsLink] = React.useState<boolean>(true);
  const [modal, setModal] = React.useState<iComponent>();

  const handleOpen = () => ModalService.emit("open", { modal });
  
  React.useEffect(() => {
    if (!path) return;

    const modal = editor.getModals().find((el: any) => el.name == path);
    if (modal) {
      setIsLink(false);
      setModal(modal.getModal()[0]);
    }
  }, []);

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
        <div
          onClick={() => {
            handleOpen();
          }}
          className={styles["container"]}
        >
          {children}
        </div>
      )}
    </>
  );
}

export default ComposerLink;
