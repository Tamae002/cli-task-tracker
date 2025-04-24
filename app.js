/* TODO :
 *  1. create a file that including all to-do list method such as: add, change status, delete task
 *  2. create main function to handle all the method.
 *  3. handle user input to show spesific data.
 */
import { addTask } from "./controllers/task.controller.js";
import textResources from "./database/chat.database.js";

async function main(){
    // First interface when user start the program
    process.stdout.write(textResources.welcomeText);
    process.stdout.write(textResources.methodText + '\n\t');

    let userInputText;

    // User input that will direct to different function
    const userInput = new Promise((resolve, rejects) => {
        process.stdin.on('data', (data) => {
            userInputText = data.toString().trim()
            resolve(userInputText)
        });
    });

    await userInput

    let userCommand = userInputText.split(" ")
    let Task = userCommand.slice(1).join(" ")
    console.log(userCommand)
    switch (userCommand[0]) {
        case 'add':
            addTask(Task)
            break;

        default:
            process.exit()
            break;
    }
}
main();