import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';

const Task = () => {
    const [todos, setTodos] = useState([]);
    const [showFinished, setShowFinished] = useState(true)
    useEffect(() => {
        let todoString = localStorage.getItem("todos")
        if (todoString) {
            let todos = JSON.parse(localStorage.getItem("todos"))
            setTodos(todos)
            
        }
    }, [])
    const togglefinish=()=>{
        setShowFinished(!showFinished)
    }
   
    const handelCheckbox = (e) => {
        let id = e.target.name;
        let index = todos.findIndex(item => {
            return item.id === id;
        })
        let newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos)
    }
    return (
        <>
           <div className='bg-slate-300 w-[50%] mx-auto my-10  rounded-xl  h-full'>
            <input type="checkbox" onChange={togglefinish} name="" className='mx-3  cursor-pointer my-4' id="" checked={showFinished} />Show Finished <hr />
            <h2 className='text-xl font-bold mx-3 my-2'>Your Todos</h2>
            <div className="todos mx-3">
                {todos.length === 0 && <div className='mx-5 my-4'>No todos to display</div>}
                {todos.map(item => {
                    return (showFinished || !item.isCompleted) && (<div key={item.id} className="todo flex w-1/2 my-6 justify-between">
                        <div className='flex gap-4'>
                            <input type="checkbox" onChange={handelCheckbox} checked={item.isCompleted} name={item.id} id="" />
                            <div className={`${item.isCompleted ? "line-through" : ""} my-1`}>{item.text}
                            </div>
                        </div>
                        
                    </div>)
                })}
            </div>
            </div>
        </>
    )
}

export default Task
