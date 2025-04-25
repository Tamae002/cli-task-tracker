/* TODO :
 *  1. create a file that including all to-do list method such as: add, change status, delete task
 *  2. create main function to handle all the method.
 *  3. handle user input to show spesific data.
 */

import { addTask, arrayToList } from "./controllers/task.controller.js";
import textResources from "./database/chat.database.js";
import { userTask } from "./models/task.model.js";

process.stdout.write(textResources.welcomeText);

async function main(){
    let userInputText;

    // First interface when user start the program
    process.stdout.write(textResources.methodText + textResources.confirmText);

    // User input that will direct to different function
    const userInput = new Promise((resolve, rejects) => {
        process.stdin.on('data', (data) => {
            userInputText = data.toString().trim();
            resolve(userInputText);
        });
    });

    await userInput
    
    let userCommand = userInputText.split(" ");
    let Task = userCommand.slice(1).join(" ");

    switch (userCommand[0].toLowerCase()) {
        case 'add':
            await addTask(Task);
            arrayToList(userTask.activeTask);
            break;

        case 'change':
            break;
        
        case 'delete':
            break;
            
        default:
            main();
            break;
    }
}
main();


export default main;