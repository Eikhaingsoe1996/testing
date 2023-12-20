import React, { useState } from 'react'

const Count = () => {
    const [add,setAdd]=useState(true)
    console.log(add);
    const [change,setChange]=useState(true);

    
  return (
    <div>
        <h1>{add?"hi":"hello"}</h1>
        <button onClick={()=>setAdd(!add)} className='bg-red-500 mb-5 text-white px-2 py-1'>change</button>
        <button onClick={()=>setChange(!change)} className={`outline outline-1 outline-green-900 px-2 py-1 ${change?"text-green-800":"bg-green-800 text-white"}`}>{change?"ADD to Cart":"Added"}</button>
        
    </div>
  )
}

export default Count