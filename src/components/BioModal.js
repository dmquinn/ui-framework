import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import "../stylesheets/BioModal.css";

const BioModal = ({ show, closeModal }) => {
  const handleClose = () => {
    closeModal();
  };

  useEffect(() => {
    console.log("modal", show);
  }, [show]);
  return (
    <>
      {" "}
      <Modal show={show} onHide={handleClose}>
        <button onClick={handleClose}>x</button> <p></p>
      </Modal>
    </>
  );
};

export default BioModal;
