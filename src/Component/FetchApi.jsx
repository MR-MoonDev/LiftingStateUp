import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import FetchApiDesgn from "./FetchApiDesgn";
const FetchApi = () => {
  const [data, setData] = useState([]);
  const showList = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((result) => result.json())
      .then((response) => {
        setData(response.slice(0, 10)); // Limiting to 10 items for display purposes
      });
  };
  useEffect(() => {
    showList();
  }, []);
  // Function to delete an item and update the state
  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, {
      method: "DELETE",
    })
      .then((result) => {
        if (result.ok) {
          setData(data.filter((item) => item.id !== id)); // Update the state to remove the deleted item
        } else {
          console.log("Error deleting the item.");
        }
      })
      .catch((error) => {
        console.log("Network error:", error);
      });
  };
  return (
    <div>
      <FetchApiDesgn data={data} onDelete={handleDelete} />
    </div>
  );
};
export default FetchApi;
