import main from "../app.js";
import { userTask } from "../models/task.model.js";

export const addTask = async (newTask) => {
    let promise = new Promise((resolve, rejects) => {
        resolve(userTask.activeTask.push(newTask))
    })

    await promise

    console.log('\nAdded new task! \nactive task:', userTask.activeTask, '\n')
    setTimeout(() => {
        main()
    }, 1000);
}

export const changeStatus = () => {
    // todo
}

export const deleteTask = () => {
    // todo
}