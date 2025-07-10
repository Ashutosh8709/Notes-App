const mongoose=require('mongoose');
const Notes=require('../models/Notes');
const initData=require('./data');

main().then(()=>
    console.log("Connected to DB")
).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/notes');
}


const initDB=async()=>{
    await Notes.deleteMany({});
    await Notes.insertMany(initData.data);
    console.log("Data inserted in Database");
};

initDB();