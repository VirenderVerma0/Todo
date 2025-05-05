import React, { useEffect, useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';

const Main = () => {
    const [text, settext] = useState("");
    const [todos, setTodos] = useState([]);
    const [showFinished, setShowFinished] = useState(true)

    useEffect(() => {
        let todoString = localStorage.getItem("todos")
        if(todoString){
            let todos= JSON.parse(localStorage.getItem("todos"))
            setTodos(todos)
        }
    }, [])
    const togglefinish=()=>{
        setShowFinished(!showFinished)
    }

    const saveToLs = () => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }

    const handelChange = (e) => {
        settext(e.target.value)
    }
    const handelAdd = () => {
        setTodos([...todos, { id: uuidv4(), text, isCompleted: false }])
        settext("")
        saveToLs();
       
        
    }
    const handelEdit = (e, id) => {
        let t = todos.filter(i => i.id === id)
        settext(t[0].text)
        let newTodos = todos.filter(item => {
            return item.id !== id;
        });
        setTodos(newTodos)
        saveToLs();

    }
    const handelDelete = (e, id) => {

        let newTodos = todos.filter(item => {
            return item.id !== id;
        });
        setTodos(newTodos)
        saveToLs();
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
            <div className="  bg-violet-100 mx-5 md:mx-auto my-10 rounded-[15px] min-h-[70vh] md:w-[50%]">
                <h1 className='text-xl font-bold text-center pt-5 '>iTask-Manage your todos here</h1>
                <div className=" text-xl font-bold mx-4 my-3 ">
                    <h2>Add Todo</h2>
                </div>
                <div className="">
                    <input type="text" name="" value={text} id="" className='bg-white mx-3 w-2/3 rounded-lg p-1 ' onChange={handelChange} />
                    <button onClick={handelAdd} disabled={text.length<=2}  className='text-sm bg-violet-600 rounded px-3 py-1 disabled:bg-violet-500 mx-3 hover:bg-violet-800 text-white font-bold cursor-pointer'>Save</button>
                </div>
                <input type="checkbox" onChange={togglefinish} name="" className='mx-3  cursor-pointer my-4' id="" checked={showFinished} />Show Finished
                <hr />
                <h2 className='text-xl font-bold mx-3 my-2'>Your Todos</h2>
                <div className="todos mx-3">
                    {todos.length === 0 && <div className='mx-5 my-4'>No todos to display</div>}
                    {todos.map(item => {
                        return (showFinished||!item.isCompleted) && (<div key={item.id} className="todo flex md:w-2/3 my-6  justify-between">
                            <div className='flex gap-4'>
                                <input  type="checkbox" onChange={handelCheckbox} checked={item.isCompleted} name={item.id} id="" />
                                <div className={`${item.isCompleted ? "line-through" : ""} my-2 `}>{item.text}
                                </div>
                            </div>
                            <div className="button flex  h-full">
                                <button onClick={(e) => { handelEdit(e, item.id) }} className='text-sm bg-violet-600 rounded px-4 my-2 mx-1  hover:bg-violet-800 text-white font-bold cursor-pointer'><FaEdit /></button>
                                <button onClick={(e) => { handelDelete(e, item.id) }} className='text-sm bg-violet-600 rounded px-4 py-1 my-2 hover:bg-violet-800 text-white font-bold cursor-pointer '><MdDeleteForever /></button>
                            </div>
                        </div>)
                    })}
                </div>
            </div>



        </>
    )
}

export default Main
