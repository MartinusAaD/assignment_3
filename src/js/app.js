const quizQuestions = [
  {
    question: "How many Harry Potter books are there?",
    options: ["6", "7", "8", "9"],
    answer: "7",
  },
  {
    question: "When was the first Harry Potter movie released?",
    options: ["1997", "2001", "2003", "2006"],
    answer: "2001",
  },
  {
    question: "How do you free an enslaved house elf?",
    options: [
      "Cook them a meal",
      "Open the door for them",
      "Provide them with a piece of clothing",
      "Sing them a song",
    ],
    answer: "Give them a sock",
  },
  {
    question: "Who is referred to as the boy who lived?",
    options: [
      "Ron Weasley",
      "Tom Riddle",
      "Harry Potter",
      "Neville Longbottom",
    ],
    answer: "Harry Potter",
  },
  {
    question: "Which house is represented with the color blue?",
    options: ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin"],
    answer: "Ravenclaw",
  },
  {
    question: "Which of these are not a horcrux?",
    options: [
      "Rowena Ravenclaw's Lost Diadem",
      "Nagini",
      "Lilly's Locket",
      "Harry Potter",
    ],
    answer: "Lilly's Locket",
  },
  {
    question: "What is the name of the 3rd movie?",
    options: [
      "Half Blood Prince",
      "Prisoner of Azkaban",
      "The Chamber of Secrets",
      "Order of the Phoenix",
    ],
    answer: "Prisoner of Azkaban",
  },
  {
    question: "What creature is Buckbeak?",
    options: ["Werewolf", "Hippogryph", "Dragon", "Unicorn"],
    answer: "Hippogryph",
  },
];

// Document queries
const quizProgression = document.querySelector(".quiz-progression");
const quizQuestion = document.querySelector(".quiz-question");
const quizAlternativesInputs = document.querySelectorAll(
  ".question-alternative-input"
);
const quizAlternativesButtons = document.querySelectorAll(
  ".question-container__alternative"
);
const quizAlternativeLabels = document.querySelectorAll(
  ".question-alternative-1__label"
);

console.log(quizAlternativesButtons);

// Variable Declaration

let count = 1;

// Display Question

quizQuestion.textContent = quizQuestions[0].question;

// Display amount of questions
const questionsArray = quizQuestions.length;
quizProgression.textContent = `Question ${count} / ${quizQuestions.length}`;

// -----------------
