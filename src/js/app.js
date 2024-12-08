const quizQuestionsArray = [
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
    answer: "Provide them with a piece of clothing",
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
const form = document.querySelector("form");
const quizProgression = document.querySelector(".quiz-progression");
const quizQuestion = document.querySelector(".quiz-question");
const quizAlternativesButtons = document.querySelectorAll(
  ".question-container__alternative"
);
const quizAlternativesInputs = document.querySelectorAll(
  ".question-alternative-input"
);

const quizAlternativeLabels = document.querySelectorAll(
  ".question-alternatives-label"
);
const progressButton = document.querySelector(".button__progress-button");

// Variable Declaration
let count = 0;
let answersCorrect = 0;

// Button Click
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (count < quizQuestionsArray.length) {
    const selectedInput = document.querySelector(
      ".question-alternative-input:checked" // Suggested variable from chatGPT
    );

    // Checks if answered correct
    if (selectedInput.value === quizQuestionsArray[count].answer) {
      answersCorrect++;
      count++;
      insertQuestion();
    }

    // Increases count value on incorrect
    else {
      count++;
      insertQuestion();
    }
  } else {
    location.reload();
    answersCorrect = 0;
  }
  form.reset();
});

quizAlternativesButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const radioInput = button.querySelector(".question-alternative-input");
    if (radioInput) {
      radioInput.checked = true;
    }
  });
});

// Inserting Text
insertQuestion();

function insertQuestion() {
  if (count < quizQuestionsArray.length) {
    for (
      let index = 0;
      index < quizQuestionsArray[count].options.length;
      index++
    ) {
      // Insert Question
      quizQuestion.textContent = quizQuestionsArray[count].question;

      // Insert Question Progression
      quizProgression.textContent = `Question ${count + 1} / ${
        quizQuestionsArray.length
      }`;
      // Insert Question Alternatives
      quizAlternativeLabels[index].textContent =
        quizQuestionsArray[count].options[index];

      // Insert Question Value
      quizAlternativesInputs[index].value =
        quizQuestionsArray[count].options[index];

      // Change button text last question
      if (count === quizQuestionsArray.length - 1) {
        progressButton.textContent = "See Results";
      }
    }
  }
  // Quiz Results Tab
  else if (count === quizQuestionsArray.length) {
    quizProgression.textContent = "Quiz Results";
    quizQuestion.textContent = `You had ${answersCorrect} correct out of ${quizQuestionsArray.length} questions`;
    progressButton.textContent = "Restart Quiz";
  }
}
