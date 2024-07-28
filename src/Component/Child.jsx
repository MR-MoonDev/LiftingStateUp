import React, { useState } from "react";
const Child = ({ info , getdata}) => {
  const [name,setname]=useState("");
  const handlesubmit=(e)=>{
    e.preventDefault();
    getdata(name);
    setname("")
  }
  return (
    <div>
      <table className="text-center border-2  border-black">
        <thead>
          <tr>
          <th colSpan="4" className="text-xl border-2 border-black p-4">
              This data comes from Parent component
            </th>
          </tr>
          <tr>
            <th className="text-xl border-2  border-black">Id</th>
            <th className="text-xl border-2  border-black">Contact</th>
            <th className="text-xl border-2  border-black">Name</th>
            <th className="text-xl border-2  border-black">E-mail</th>
          </tr>
        </thead>
        <tbody>
          {info.map((item, index) => (
            <tr
              key={item.id}
              className={index % 2 === 0 ? "bg-green-200" : "bg-gray-200"}
            >
              <td className="p-4 border-2 border-black text-sm">{item.id}</td>
              <td className="p-4 border-2 border-black text-sm">{item.name}</td>
              <td className="p-4 border-2 border-black text-sm">{item.phone}</td>
              <td className="p-4 border-2 border-black text-sm">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handlesubmit} className="mt-2 w-max bg-slate-400 rounded-md p-2 ">
         <h2 className="text-sm ml-1">This data goes to Parent component</h2>
         <div className=" flex gap-1 items-center mt-1 ">
         <input className="border-blue-800 rounded-md border-2 p-2 text-sm" type="text" value={name} placeholder="write some thing...." onChange={(e)=>{setname(e.target.value)}}/>
         <button className="bg-blue-800 text-white rounded-md border-2  p-2 text-sm" >Submit</button>
         </div>
       
      </form>
    </div>
  );
};
export default Child;
