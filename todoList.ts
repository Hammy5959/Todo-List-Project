#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

async function welcome() {
  let title = chalkAnimation.rainbow(
    "-Develp by SHEIKH HAMID-\nLet's start Todo List"
  );
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  title.stop();
}
await welcome();
async function todoList() {
  let todos: string[] = [];
  let loop = true;
  while (loop) {
    const answers: {
      TODO: string;
      addMore: boolean;
    } = await inquirer.prompt([
      {
        type: "input",
        name: "TODO",
        message: chalk.underline.bold.white.italic("what do you want to add in your todo?"),
      },
      {
        type: "confirm",
        name: "addMore",
        message:chalk.underline.bold.italic( "do you want to add more todo?"),
        default: false,
      },
    ]);

    const { TODO, addMore } = answers;
    console.log(answers);
    loop = addMore;
    if (TODO) {
      todos.push(TODO);
    } else {
      console.log(chalk.red("Kindly add valid input"));
    }
  }

  if (todos.length > 0) {
    console.log(chalk.overline.italic.bold.underline.cyanBright("Your Todo List:"));
    todos.forEach((todo) => {
      console.log(todo);
    });
  } else {
    console.log("No todos found");
  }
}
todoList();
