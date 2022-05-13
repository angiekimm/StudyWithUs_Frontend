import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AccountModal = ({ show, onHide, data, comment }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">RESULT</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {data ? (
          <p>
            찾으시는 아이디는 <span className="bold">{data}</span> 입니다.
          </p>
        ) : (
          <p>{comment}</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Link to="/account/login">
          <Button onClick={onHide}>Close</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default AccountModal;
