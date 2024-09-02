import { taskModal } from "../models/task"
export default defineEventHandler(async (event) => {
  if(event.node.req.method == 'POST'){
    const body = await readBody(event);
    console.log("this is boduy",body);
    const task = await taskModal.create(body);
    return {success:true,task};
  }else{
    return {success:false,message:"This is only availabe for Post request"};
  }
})
