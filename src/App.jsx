import React from 'react'
import Navbar from './components/Navbar'
import Main from "./components/Main"
import { Route, Routes } from 'react-router'
import Task from './components/Task'
import About from './components/About'


const App = () => {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/" element={<iTask />} />
        <Route path="/about" element={<About />} />
        <Route path="/task" element={<Task />} />{ }
      </Routes>
    </>
  )
}

export default App
