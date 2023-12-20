import React, { useState } from "react";

const InputForm = () => {
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
  const [lists, setLists] = useState([
    { id: 1, name: "ei", password: 1234 },
    { id: 2, name: "yun", password: 1234 },
    { id: 3, name: "kyaw", password: 1234 }
  ]);

  const SubmitHandler=(e)=>{
    e.preventDefault();
    console.log(name,password);
    
    const newList={id:Date.now(),name,password};
    setLists([...lists,newList])
  }

  return (
    <div className="">
      <div>
        <form onSubmit={SubmitHandler}>
          <div className="flex flex-col ">
            <label>Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  className="outline-none border px-2 py-1  w-96 " />
          </div>
          <div className="flex flex-col ">
            <label >Password</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="outline-none border px-2 py-1  w-96 " />
          </div>
          <button type="submit" className="bg-green-700 text-white px-2 py-1">Submit</button>
        </form>
      </div>
      {lists.map((list) => (
        <li key={list.id}>
          {list.name} - {list.password}
        </li>
      ))}
    </div>
  );
};

export default InputForm;
