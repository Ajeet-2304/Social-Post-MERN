import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import PostModel from './models/PostModel.js';

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/social-post');

app.post('/social-post',(req,res)=>{
    const {userName, caption, image} = req.body;
    PostModel.create({userName:userName, caption:caption, image:image}).then(result => res.json("Post Created.")).catch(err => res.json(err))
})

app.listen(8000,()=>{
    console.log('Server is running');
})
