var userTask = []

const addTask = async function addTask(){
    process.stdout.write('To-do list: ');

    process.stdin.on('data', (data) => {
    userTask = [data.toString().trim()];
    process.exit();
    })
}
addTask()

