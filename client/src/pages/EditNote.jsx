import {useNavigate,useParams} from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Nav from '../components/Nav';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import Button from '@mui/joy/Button';
import axios from 'axios';
import { useEffect } from 'react';


export default function EditNote(){
    const navigate=useNavigate();
    const [form, setForm] = useState({title: "",content: "",category: "",tags: []});
    const [tagInput, setTagInput] = useState("");
    const categories = ["Ideas","Work","Study","Personal","To-Do","Projects","Inspiration","Meeting Notes","Plans","Journal","Drafts"];
    const {id}=useParams();

    useEffect(()=>{const fetchData =async() => {
        await axios.get(`http://localhost:8080/edit/${id}`).then((res) => {
            console.log(res.data);
          setForm(res.data);
        });
      }; fetchData();
    }, [id]);

    const handleTagKeyDown = (e) => {
        if (e.key === "Enter" && tagInput.trim()) {
        e.preventDefault();
        if (!form.tags.includes(tagInput.trim())) {
        setForm({ ...form, tags: [...form.tags, tagInput.trim()] });
        setTagInput("");

    }
  }
};

    const removeTag = (tagToRemove) => {
    setForm({...form,tags: form.tags.filter(tag => tag !== tagToRemove)});
};
    const handleChange = (e) => {
    ;
    setForm({...form,[e.target.name]:e.target.value});
};
    const handleSubmit=async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/edit/${id}`,form);
        setForm({title: "",content: "",category: ""})
        navigate("/");
    }


    return(
        <div>
            <Nav/>
            <div className="flex flex-wrap justify-center mt-15">
            <div className="w-100 bg-gradient-to-br from-yellow-400 to-pink-600 text-center mt-8 text-white rounded">
                <p className="text-5xl font-extrabold my-4">Edit Note</p>
            <Box component="form" onSubmit={handleSubmit}
            sx={{ '& > :not(style)': { m: 1 } }} noValidate autoComplete="off">
            <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
            <Select labelId="demo-simple-select-helper-label" id="demo-simple-select-helper" value={form.category} label="Age" name='category' onChange={handleChange} className='w-90 bg-white rounded' placeholder="Select Categories">
            <MenuItem value=""><em>None</em></MenuItem>
            {categories.map((con)=>(
                <MenuItem key={con} value={con}>{con}</MenuItem>
            ))}
            </Select>
            </FormControl>
            <TextField id="outlined-basic" label="Title" name='title' variant="outlined" value={form.title} placeholder='Enter Title' className='w-90 bg-white rounded' onChange={handleChange}/>
            <TextField id="outlined-multiline-flexible" name='content' label="Content" value={form.content} multiline maxRows={4} placeholder='Enter Content' className='w-90 bg-white rounded' onChange={handleChange}/>
            <TextField id="outlined-basic" label="Tag" variant="outlined" placeholder="Enter tag and press Enter" className='w-90 bg-white rounded' value={tagInput} onChange={(e) => setTagInput(e.target.value)} onKeyDown={handleTagKeyDown}/>
            <div className="flex flex-wrap gap-2 mt-2 ml-4">
                {form.tags.map((tag, index) => (
                <span key={index} className="bg-gray-700 text-white px-2 py-1 rounded-full cursor-pointer" onClick={() => removeTag(tag)}>
                    {tag} ✕
                </span>))}
            </div>
            <Button className='w-90 h-13' color='success' type='submit' onClick={()=>navigate('/')}>Edit Note</Button>
            </Box>
            
        </div>
        </div>
        </div>
    );
}