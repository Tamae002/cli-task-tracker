export const addTask = async () => {
    process.stdout.write('What\'s the plan for today? \n');

    let promise = new Promise((resolve) => {process.stdin.on('data', (data) => {
        userTask.activeTask.push(data.toString().trim())
        resolve(userTask)
        });
    });

    await promise
    console.log('Added new task! \n active task:', userTask.activeTask, '\n on-progress task: ')
}

export const changeStatus = () => {
    // todo
}

export const deleteTask = () => {
    // todo
}