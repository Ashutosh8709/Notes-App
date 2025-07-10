import NoteForm from "../components/NoteForm";
import Nav from "../components/Nav";
export default function CreateNote(){
    return(
        <div>
            <Nav ifAdd={0}/>
            <NoteForm/>
        </div>
    )
}