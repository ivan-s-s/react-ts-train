import { useState } from "react";
import { FC } from "react";
import { Hr } from "components";
import { Button, DocumentViewer, Modal } from "ui-kit";
import { template } from "./template";

import "./DocumetViewerPage.scss";

export const DocumentViewerPage: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModalOpen = () => {
    setIsOpenModal(true);
  };

  const handleModalClose = () => {
    setIsOpenModal(false);
  };

  return (
    <div className="DocumentViewerPage">
      <h2>IFrame</h2>
      <iframe title="IFrame" srcDoc={template} frameBorder="0" />
      <Hr />
      <h2>Document Viewer</h2>
      <Button onClick={handleModalOpen}>Open Modal Window</Button>
      <Modal
        className="DocumentViewerPage-Modal"
        isOpen={isOpenModal}
        onCloseModal={handleModalClose}
      >
        <DocumentViewer template={template}/>
      </Modal>
    </div>
  );
};