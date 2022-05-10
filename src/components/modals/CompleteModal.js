import React from "react";
import { Modal, Button } from "react-bootstrap";

const CompleteModal = ({ show, onHide, func }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Confirm</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <div className="modal"> */}
        {/* <h4>Centered Modal</h4> */}
        <p>{func}이 완료되었습니다.</p>
        {/* </div> */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CompleteModal;
