import inquirer from "inquirer";
let todos = [];
let looping = true;
while (looping) {
    let todosQues = await inquirer.prompt([{
            name: "FirstQuest",
            type: "input",
            message: "add todos "
        },
        {
            name: "SecondQuest",
            type: "confirm",
            message: "add more in your todos? ",
            default: true
        }
    ]);
    todos.push(todosQues.FirstQuest);
    console.log(todos);
    looping = todosQues.SecondQuest;
}
