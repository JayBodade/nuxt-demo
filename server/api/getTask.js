import { taskModal } from '../models/task';

export default defineEventHandler(async (event) => {
  try {
    const { id } = getQuery(event);
    const task = await taskModal.findOne({ _id: id });
    return task;
  } catch (e) {
    console.log('Something went wrong', e);
    return { success: false, message: e.message };
  }
});
