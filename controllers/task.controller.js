import { userTask } from "../models/task.model.js";

export const addTask = async (newTask) => {
    let promise = new Promise((resolve, rejects) => {
        resolve(userTask.activeTask.push(newTask))
    })

    await promise
    console.log('Added new task! \nactive task:', userTask.activeTask)
}

export const changeStatus = () => {
    // todo
}

export const deleteTask = () => {
    // todo
}