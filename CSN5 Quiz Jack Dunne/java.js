document.addEventListener('DOMContentLoaded', function() {
  showQuestionScreen(1); // Shows first question screen

  const repeatQuizButton = document.getElementById('repeatQuizButton');    // Repeat quiz button
  repeatQuizButton.addEventListener('click', repeatQuiz);  

  const showAnswersButton = document.getElementById('showAnswersButton');    // Show answers button
  showAnswersButton.addEventListener('click', toggleAnswerScreen);
});

const CorrectAnswers = [2, 1, 1, 2, 2, 0, 2, 2, 0, 1];    // Array for correct answers
let score = 0;

function showQuestionScreen(questionNumber) {    // Function for showing question screen
  const questionScreens = document.querySelectorAll('.questionScreen'); 
  questionScreens.forEach(function(screen) { 
    screen.style.display = 'none';    // Hides all question screens
  });

  const currentQuestionScreen = document.getElementById('questionScreen' + questionNumber);
  if (currentQuestionScreen) {  
    currentQuestionScreen.style.display = 'block';
  }
}

function ANSCheck(questionNumber, selectedAnswerIndex) {    // Function for checking answers
  const correctAnswerIndex = CorrectAnswers[questionNumber - 1];
  if (selectedAnswerIndex === correctAnswerIndex) { 
    score++;    // Increases score if answer is correct
  }

  // Shows next question screen after answering a question
  const currentQuestionScreen = document.getElementById('questionScreen' + questionNumber);  
  if (currentQuestionScreen) {
    currentQuestionScreen.style.display = 'none';
  }
  const nextQuestionNumber = questionNumber + 1;
  const nextQuestionScreen = document.getElementById('questionScreen' + nextQuestionNumber);
  if (nextQuestionScreen) {
    nextQuestionScreen.style.display = 'block';
  } else {
    // Shows the finished screen
    const finishedScreen = document.getElementById('finishedScreen');
    finishedScreen.style.display = 'block';
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `${score} / 10`; // Update the score display here
  }
}

function repeatQuiz() {

  // Hide finished screen
  const finishedScreen = document.getElementById('finishedScreen');
  finishedScreen.style.display = 'none';

  // Resets score
  score = 0;
  const scoreElement = document.getElementById('score');
  scoreElement.textContent = '0/10'; // Reset score display

  // Hides question screens
  const questionScreens = document.querySelectorAll('.questionScreen');
  questionScreens.forEach(function(screen) {
    screen.style.display = 'none';
  });

  // Show first question screen
  window.location.href = 'index.html'; //redirects user to Start screen
}

// Function answer pop-up screen
function toggleAnswerScreen() { 
  const screen = document.getElementById('AnswerScreen');
  screen.style.display = screen.style.display === 'none' ? 'block' : 'none';
}
