const express=require('express');
const app=express();
const mongoose=require('mongoose');
const Notes=require('./models/Notes');
const cors=require('cors');
const corsOption={
    origin:["http://localhost:5173"],
}

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

main().then(()=>
    console.log("Connected to DB")
).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/notes');
}


app.get("/",async(req,res)=>{
    const Note=await Notes.find({});
    res.json(Note);
});


app.post('/create',async(req,res)=>{
    let updatedNotes=await Notes.insertOne(req.body);
    res.json(updatedNotes);
});

app.delete('/delete/:id',async(req,res)=>{
    const updatedNotes=await Notes.findByIdAndDelete(req.params.id);
    res.json(updatedNotes);
});

app.get('/edit/:id',async(req,res)=>{
    const Note=await Notes.findById(req.params.id);
    res.json(Note);
})

app.put('/edit/:id',async(req,res)=>{
    const updateNote=await Notes.findByIdAndUpdate(req.params.id,req.body);
    res.json(updateNote);
})












app.listen(8080,()=>{
    console.log("App is listening on port 8080");
});