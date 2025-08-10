import { useEffect, useState } from "react";
import api from "../api";
function Home(){
    const [note,setNote] = useState([]);
    const [content,setContent] = useState("");
    const [title,setTitle] = useState(""); 

    useEffect(()=>{
        getNotes();
    },[])

    const getNotes = () => {
        api
        .get("/api/notes/")
        .then((res) => res.data)
        .then((data) => {setNote(data);console.log(data)})
        .catch((err)=> alert(err))
    }
    const deleteNote = () => {}
    return <div>Home</div>
}

export default Home;