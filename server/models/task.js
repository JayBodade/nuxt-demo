import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title:String,
    descrpiton:String,
});

export const taskModal = mongoose.model('tasks',taskSchema);