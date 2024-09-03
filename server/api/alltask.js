import { taskModal } from "../models/task"
export default defineEventHandler(async (event) => {
  if(event.node.req.method == 'GET'){
    const tasks = await taskModal.find();
    return tasks;
  }else{
    return [];
  }
   
})
