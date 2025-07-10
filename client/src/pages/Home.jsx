import { useState } from "react";
import Nav from "../components/Nav"
import NoteCard from "../components/NoteCard";
import axios from 'axios'
import { useEffect } from "react";
export default function Home(){
    let [notes,setNotes]=useState([]);

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

    return(
        <div>
            <Nav ifAdd={1}/>
            <div className="grid grid-cols-4 mt-2">
                {
                    notes.map((note)=>(
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
                }
                
            </div>
        </div>
    );
}