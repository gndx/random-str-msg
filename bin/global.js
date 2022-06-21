#!/usr/bin/env node
const { exec } = require("node:child_process"); // Module for executing system commands.
const prompts = require("prompts"); // An user-friendly interactive prompts.
const random = require("../src/index.js");
const chalk = require("chalk"); // A better way to change the style of messages

const args = process.argv.slice(2); // Getting the arguments.

// Initialization of variables, which store the response and the random message respectively.
let response = "";
let quote = "";

// Main function.
if (args[0] === "--commit") {
  (async () => {
    // Show the title.
    console.log(chalk.green.bgBlue.bold(" Random Commit Msg "));
    // Shows the basic instructions of use.
    console.log(
      chalk.yellow(
        "Type 'no' if you want another quote or 'yes' to do the commit.\nType 'exit' to get out."
      )
    );

    // As long as the answer is different from 'yes' generate a new random message
    // or if the answer is 'exit' end the program.
    while (response != "yes" && response != "exit") {
      // Generates a new message on each execution.
      quote = random.funnyCommit();
      const question = await prompts({
        type: "text",
        name: "response",
        message: `quote: ${chalk.blue(quote)}`,
      });
      response = question.response;
    }

    // It checks if the answer was 'yes' and executes the commit code.
    if (response == "yes") {
      // Run the git commit command using exec
      exec(`git commit -m "${quote}"`, (err, output) => {
        // once the command has completed, the callback function is called.
        if (err) {
          // log and return if we encounter an error.
          console.log(err);
          return;
        }
        // log the output received from the git commit command .
        console.log(`${chalk.magenta("Commit Succesfully:")} \n${output}`);
      });
    } else if (response == "exit") {
      // If the answer was 'exit' terminal execution of the program.
      console.log(chalk.cyan("Good bye."));
    }
  })();
} else {
  console.log(chalk.blue(random.funnyCommit()));
}
