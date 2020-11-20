var readLineSync = require("readline-sync");
var chalk = require("chalk")

var score = 0;

var name = readLineSync.question("What's Your Name? ");
console.log(chalk.bgMagenta("Hello, " + name + " Welcome to the game! " ));

console.log(chalk.bgBlue("Let's Get started with a small quiz on the Universe :-) "))

function play(question, answer){
    var userAnswer = readLineSync.question(question);

    if(userAnswer.toUpperCase() === answer.toUpperCase()){
        console.log(chalk.green("You are right!"))
        score = score + 1;
    }
    else{
        console.log(chalk.red("Sorry! You are wrong"));
    }
    console.log(chalk.black.bgGreen.bold("current score: ", score));
    console.log("-------------")

}

var questions = [{
    question: "Which is the largest planet?\n",
    answer: "Jupiter"
},{
    question: "Which is the third planet from the sun?\n",
    answer: "Earth"
}, {
    question: "Where are the northern lights visible?\n",
    answer: "Antarctica"
}, {
    question: "Where is the sun located?\n",
    answer: "Milky way"
}, {
    question: "Which plane has rings around it?\n",
    answer: "Saturn"
}, {
    question: "What is earth's satellite called?\n",
    answer: "Moon"
}, {
    question: "What is the force which binds the world called?\n",
    answer: "Gravity"
}, {
    question: "The hottest planet is: ______\n",
    answer: "Venus"
}, {
    question: "The uppermost layer of the earth's atmosphere is called _______\n",
    answer: "Stratosphere"
}, {
    question: "While playing this game if you are not flying the reason is ?\n",
    answer: "Gravity"
}
]

for(var i = 0; i < questions.length; i++){
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
}

console.log(chalk.black.bgYellow.bold("Game over!"));
console.log(chalk.black.bgMagentaBright.bold("Your score is: "+ score));