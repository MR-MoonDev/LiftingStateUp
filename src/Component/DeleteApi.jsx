import React from "react";
const DeleteApi = ({ userinfo, onDelete }) => {
  const handleDelete = () => {
    onDelete(userinfo); // Call the onDelete function with the item's ID
  };
  return (
    <button onClick={handleDelete} className="mt-2 text-red-500">
      Delete
    </button>
  );
};
export default DeleteApi;
