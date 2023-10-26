import React from 'react'

function Tasks({setDate, setText , date, text ,  onClick}) {
  return (
    <div style={{display: "flex", justifyContent:"space-evenly", 
    borderBottom:"1px solid gray",
    paddingBottom: 10,
    width:"100%"}}>

        <input 
        type="date" 
        className='datetime-local'
        onChange={setDate}
        value={date}/>

        <input 
        type="text" 
        className='text'
        onChange={setText}
        value={text}
        placeholder='Specify the task...'/>
        

        <button 
        className='add'
        onClick={onClick}>Add+</button>
    </div>
  )
}

export default Tasks