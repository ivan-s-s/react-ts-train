import { useState } from "react";
import type { FC } from "react";
import { Button, Modal } from "ui-kit";
import "./ModalPage.scss";

export const ModalPage: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModalOpen = () => {
    setIsOpenModal(true);
  }

  const handleModalClose = () => {
    setIsOpenModal(false);
  }

  const handleModalSubmit = () => {
    setIsOpenModal(false);
  }

  return (
    <section>
      <h2>Modal Page Title</h2>
      <Button onClick={handleModalOpen}>Open</Button>
      <Modal isOpen={isOpenModal} onCloseModal={handleModalClose}>
        <Modal.Header>
          <h2>Modal Title</h2>
        </Modal.Header>
        <Modal.Content>
          <div>Content of modal</div>
        </Modal.Content>
        <Modal.Footer>
          <Button onClick={handleModalSubmit} typeButton={"submit"}>Apply</Button>
        </Modal.Footer>
      </Modal>
      <div className="Box"></div>
      <div className="Box"></div>
      <div className="Box"></div>
    </section>
  );
};