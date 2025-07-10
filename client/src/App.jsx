import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoteForm from './components/NoteForm';
import EditNote from './pages/EditNote';
import CreateNote from './pages/CreateNote';

function App() {
  

  return (
    <div className="bg-black min-h-screen">
      <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/create" element={<CreateNote/>}/>
              <Route path="/edit/:id" element={<EditNote/>}/>
      </Routes>
    </div>
  )
}


export default App;
