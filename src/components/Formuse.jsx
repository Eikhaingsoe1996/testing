import React, { useState } from 'react'

const Formuse = () => {
    const [lists,setLists]=useState([
        {id:1,name:"kyaw",password:123},
        {id:2,name:"ei",password:456},
        {id:3,name:"kyaw",password:789},
    ])

    const [name,setName]=useState("");
    const [password,setPassword]=useState("");

    const SubmitHandler=(e)=>{
        e.preventDefault();
        console.log(name,password);
        const newList={id:Date.now(),name,password};
        setLists([...lists,newList]);
    }
  return (
    <div>
        <div>
            <form onSubmit={SubmitHandler} >
                <div className='flex flex-col mb-2'>
                    <label >Name</label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className='outline-none border w-96' 
                     />
                </div>
                <div className='flex flex-col mb-2'>
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='outline-none border w-96' 
                     />
                </div>
                <button type='submit' className='bg-purple-800 text-white px-2 py-1 '>Submit</button>
            </form>
        </div>
        <div>
            {
                lists?.map(list=>
                    <li key={list.id}>{list.name} - {list.password}</li>
                    )
            }
        </div>
    </div>
  )
}

export default Formuse