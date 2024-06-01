import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  message: { type: String, required: true, trim: true },
});

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post;