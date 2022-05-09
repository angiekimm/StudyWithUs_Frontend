import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Tr from "./Tr";
import Post from "./Post";
import Modal from "./Modal";
import PostModal from "./PostModal";

const Board = () => {
  const [info, setInfo] = useState([]);
  const [selected, setSelected] = useState("");
  const [modalOn, setModalOn] = useState(false);

  const nextId = useRef(11);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSave = (data) => {
    if (data.id) {
      setInfo(
        info.map((row) =>
          data.id === row.id
            ? {
                id: data.id,
                name: data.name,
                email: data.email,
                phone: data.phone,
              }
            : row
        )
      );
    } else {
      setInfo((prev) => {
        return [
          {
            id: nextId.current,
            name: data.name,
            email: data.email,
            phone: data.phone,
          },
          ...prev,
        ];
      });
      nextId.current += 1;
    }
  };

  const handleRemove = (id) => {
    setInfo((info) => info.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setModalOn(true);
    const selectedData = {
      id: item.id,
      name: item.name,
      email: item.email,
      phone: item.phone,
    };
    setSelected(selectedData);
  };

  const handleCancel = () => {
    setModalOn(false);
  };

  const handleEditSubmit = (item) => {
    console.log(item);
    handleSave(item);
    setModalOn(false);
  };

  const [postModalOn, setPostModalOn] = useState(false);

  return (
    <>
      <PostModal
        show={postModalOn}
        onHide={() => setPostModalOn(false)}
        onSaveData={handleSave}
      />
      <div className="board">
        <div className="container max-w-screen-lg mx-auto topMargin">
          <div className="text-xl font-bold mt-5 mb-3 text-center">
            자유게시판
          </div>
          <table className="min-w-full table-auto text-gray-800 topMargin">
            <thead className="fustify-between">
              <tr className="bg-gray-800">
                <th className="text-gray-300 px-4 py-3">No</th>
                <th className="text-gray-300 px-4 py-3">제목</th>
                <th className="text-gray-300 px-4 py-3">글쓴이</th>
                <th className="text-gray-300 px-4 py-3">작성시간</th>
                <th className="text-gray-300 px-4 py-3">Edit</th>
                <th className="text-gray-300 px-4 py-3">Delete</th>
              </tr>
            </thead>
            <Tr
              info={info}
              handleRemove={handleRemove}
              handleEdit={handleEdit}
            />
          </table>
          <div className="text-center">
            <button
              className="bg-blue-400 py-2 text-center px-10 md:px-12 md:py-3 text-white rounded text-x1 md:text-base mt-4"
              type="submit"
              onClick={() => setPostModalOn(true)}
            >
              글작성
            </button>
          </div>
          {/* <Post onSaveData={handleSave} /> */}
          {modalOn && (
            <Modal
              selectedData={selected}
              handleCancel={handleCancel}
              handleEditSubmit={handleEditSubmit}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Board;
