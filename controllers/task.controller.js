import chalk from "chalk";
import main from "../app.js";
import { userTask } from "../models/task.model.js";
import textResources from "../database/chat.database.js";
import { error } from "console";

export const addTask = async (newTask) => {
    await new Promise((resolve, rejects) => {
        // check if the user input is empty then return warning
        if (newTask.length === 0) {
            return rejects(chalk.redBright(textResources.warningText));
        }

        resolve(userTask.activeTask.push(newTask));

        return console.log('\nAdded new task! \nnew task:', chalk.blue(newTask), '\n'); 
    }).catch(error);

    setTimeout(() => {
        main();
    }, 1000);
}

export const changeStatus = async (task) => {
    // todo: 1. add identifier for each task
    // todo: 2. user can change task status related to the identifier
    
    let status = task.split(" ").pop();
    console.log(status)
    await new Promise((resolve, rejects) => { 
    });

    setTimeout(() => {
        main();
    }, 1000);
}

export const deleteTask = () => {
    // todo
}

export const arrayToList = (arr) => {
    let taskList = "";
    for(let i = 0; i <= arr.length - 1; i++ ) {
        taskList += `${i + 1}. ` + arr[i] + "\n";
    }
    return console.log("Your current task:\n" + chalk.green(taskList));
}