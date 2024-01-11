
'use client'

import { useState } from 'react';
import './App.css';

function App() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const [mainTaks, setmainTaks] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault()
    setmainTaks([...mainTaks, {title, desc}])
    settitle("")
    setdesc("")
  }

  const deletehandler = (i) => {
     let copyTask = [...mainTaks]
     copyTask.splice(i,1)
     setmainTaks(copyTask)
  }

  let renderTask = <h2>No Task Available</h2>;

if(mainTaks.length > 0) {
  renderTask = mainTaks.map(function(t,i) {
    return (
      <li key={i}>
       <div className='flex justify-between '>
      <h5>{t.title}</h5>
      <p>{t.desc}</p>
      <button 
      onClick={() => {
        deletehandler(i)
      }}
      className='bg-red-500 p-1 text-white rounded-md'>Delete</button>
      </div>
    </li>
    )
  })

}

  return (
    <div className='w-full h-screen bg-zinc-400 text-white'>
    <h1 className='bg-zinc-900 text-center text-5xl p-4'>My TodoLists</h1>
    <form onSubmit={submitHandler}>
      <input type='text' className='border-2 text-black m-8 px-2 py-2 w-[300px] outline-none border-zinc-800' 
      placeholder='Enter Your title'
      value={title}
      onChange={(e) => {
        settitle(e.target.value)
      }}/>

        <input type='text' className='border-2 text-black m-8 px-2 py-2 w-[300px] outline-none border-zinc-800' 
        placeholder='Enter Your Discription'
        value={desc}
        onChange={(e) => {
          setdesc(e.target.value)
        }}/>

        <button className='bg-zinc-800 px-3 py-2'>ADD</button>

    </form>
    <hr/>
    <div className='p-8 bg-slate-200 text-black'>
        <ul>
          {renderTask}
        </ul>
    </div>
    </div>
  );
}

export default App;