import chalk from "chalk";
import main from "../app.js";
import { userTask } from "../models/task.model.js";

export const addTask = async (newTask) => {
    let promise = new Promise((resolve, rejects) => {
        resolve(userTask.activeTask.push(newTask))
    })

    await promise

    console.log('\nAdded new task! \nnew task:', newTask, '\n')
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

export const arrayToList = (arr) => {
    let taskList = "";
    for(let i = 0; i <= arr.length - 1; i++ ) {
        taskList += `${i + 1}. ` + arr[i] + "\n"
    }
    return console.log("Your current task:", chalk.green(taskList))
}