import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const PostModal = ({ show, onHide, onSaveData }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveData(form);
    setForm({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          게시글 작성하기
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <div className="text-xl font-bold mt-5 mb-2 text-center">
          게시글 추가하기
        </div> */}
        <form onSubmit={handleSubmit} className="mt-3">
          <div className="md:flex-row mb-1">
            <label
              htmlFor="username"
              className="w-full flex-1 mx-2 text-xs font-semi bold text-gray-600 uppercase"
            >
              Name
              <input
                className="w-full py-3 px-1 mt-1 text-gray-800 appearance-none border-2 border-gray-100 focus:text-gray-500 focus:outliine-none focus:border-gray-200"
                required
                placeholder="이름을 입력해주세요"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </label>
            <label
              htmlFor="email"
              className="w-full flex-1 mx-2 text-xs font-semi bold text-gray-600 uppercase"
            >
              제목
              <input
                className="w-full py-3 px-1 mt-1 text-gray-800 appearance-none border-2 border-gray-100 focus:text-gray-500 focus:outliine-none focus:border-gray-200"
                required
                placeholder="제목을 입력해주세요"
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </label>
            <label
              htmlFor="phone"
              className="w-full flex-1 mx-2 text-xs font-semi bold text-gray-600 uppercase"
            >
              내용
              <input
                className="w-full py-20 px-1 mt-1 text-gray-800 appearance-none border-2 border-gray-100 focus:text-gray-500 focus:outliine-none focus:border-gray-200"
                required
                placeholder="내용을 입력해주세요"
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="text-center">
            <button
              className="bg-blue-400 py-2 text-center px-10 md:px-12 md:py-3 text-white rounded text-x1 md:text-base mt-4"
              type="submit"
              onClick={onHide}
            >
              저장
            </button>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PostModal;
