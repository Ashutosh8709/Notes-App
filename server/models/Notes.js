const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const NotesSchema=new Schema({
    title:String,
    content:String,
    tags:[String],
    category:String,
    createdAt:{type:Date , default: Date.now}
});

const Notes=mongoose.model('Notes',NotesSchema);
module.exports=Notes;