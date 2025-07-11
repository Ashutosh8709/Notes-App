import { useState } from "react";
import Nav from "../components/Nav"
import NoteCard from "../components/NoteCard";
import axios from 'axios'
import { useEffect } from "react";
export default function Home(){
    let [notes,setNotes]=useState([]);
    let [searchNote,setSearchNote]=useState("");

    const fetchData=async()=>{
        const res=await axios.get("http://localhost:8080");
        setNotes(res.data);
    }

    useEffect(()=>{
        fetchData();
    },[])

    const deleteNote=async(id)=>{
        await axios.delete(`http://localhost:8080/delete/${id}`);
        fetchData();
    }

    const filterNotes=searchNote.trim()? notes.filter((note)=>{
        const q=searchNote.toLowerCase();
        return(
            note.title.toLowerCase().includes(q) ||
            note.content.toLowerCase().includes(q) ||
            note.category.toLowerCase().includes(q)
        );
    }):notes;

    return(
        <div>
            <Nav ifAdd={1} toDisplay={1} setSearchNote={setSearchNote} searchNote={searchNote}/>
            <div className="grid grid-cols-4 mt-2">
                {   filterNotes.length>0?(
                    filterNotes.map((note)=>(
                        <NoteCard
                        key={note._id}
                        title={note.title}
                        content={note.content}
                        category={note.category}
                        tags={note.tags}
                        id={note._id}
                        handleDelete={()=>deleteNote(note._id)}
                        />
                    ))
                ):(
          <div className="text-gray-500 mt-4">No notes found.</div>
        )};
                
            </div>
        </div>
    );
}