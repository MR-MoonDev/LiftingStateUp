import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const info = [
    {
      id: "1",
      name: "Muneeb",
      phone: "0301380184",
      email: "muneeb@gmail.com",
    },

    {
      id: "2",
      name: "Areeb",
      phone: "0301380184",
      email: "areeb@gmail.com",
    },
    {
      id: "3",
      name: "Raza",
      phone: "0301380184",
      email: "raza@gmail.com",
    },
    {
      id: "4",
      name: "nazir",
      phone: "0301380184",
      email: "nazir@gmail.com",
    },
    {
      id: "5",
      name: "arshad",
      phone: "0301380184",
      email: "arshad@gmail.com",
    },
  ];

  const [data, setData] = useState("");

  const getdata = (data) => {
    setData(data);
  };

  return (
    <div>
      <Child  info={info} getdata={getdata} />
      <p>
        Here your result:
        <span className="text-blue-800 text-2px">{data}</span>
      </p>
    </div>
  );
};

export default Parent;
