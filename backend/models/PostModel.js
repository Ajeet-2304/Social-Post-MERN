import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    userName: String,
    caption: String,
    image: String
});

const PostModel = mongoose.model('social-post',PostSchema);


export default  PostModel;