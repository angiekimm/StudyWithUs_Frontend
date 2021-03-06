import React from "react";
import { Link } from "react-router-dom";

const Td = ({ item, handleRemove, handleEdit }) => {
  const onRemove = () => {
    handleRemove(item.id);
  };
  const onEdit = () => {
    handleEdit(item);
  };
  return (
    <>
      <tr className="bg-white border-2 border-gray-200">
        <td className="px-4 py-3">{item.id}</td>
        <td className="px-4 py-3">
          <Link to="/board/detail">{item.email}</Link>
        </td>
        <td className="px-4 py-3">{item.name}</td>
        <td className="px-4 py-3">{item.phone}</td>
        <td
          onClick={onEdit}
          className="text-center text-purple-400 cursor-pointer show-modal"
        >
          <i className="far fa-edit"></i>
        </td>
        <td
          onClick={onRemove}
          className="text-center text-purple-400 cursor-pointer"
        >
          <i className="far fa-trash-alt"></i>
        </td>
      </tr>
    </>
  );
};

export default Td;
