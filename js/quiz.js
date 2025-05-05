let currentQuestion = 0;
let scores = { A: 0, B: 0, C: 0, D: 0, E: 0 };
let timerSeconds = 15 * 60;

const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");

function startQuiz() {
  showQuestion();
  startTimer();
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    showResults();
    return;
  }

  const [opt1, text1, opt2, text2] = questions[currentQuestion];
  quizContainer.innerHTML = `
    <p><strong>Question ${currentQuestion + 1}:</strong></p>
    <button onclick="selectAnswer('${opt1}')">${text1}</button>
    <button onclick="selectAnswer('${opt2}')">${text2}</button>
  `;
}

function selectAnswer(letter) {
  scores[letter]++;
  currentQuestion++;
  showQuestion();
}

function showResults() {
  quizContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");

  const entries = Object.entries(scores);
  let dominant = entries.sort((a, b) => b[1] - a[1])[0][0];
  const { name, encourage, actions, avoid } = getLoveLanguageInfo(dominant);

  resultContainer.innerHTML = `
    <h2>Your Love Language: ${name}</h2>
    <p><strong>Scores:</strong><br>
      A: ${scores.A}, B: ${scores.B}, C: ${scores.C}, D: ${scores.D}, E: ${scores.E}
    </p>
    <p><strong>What to Encourage:</strong> ${encourage}</p>
    <p><strong>What to Do:</strong> ${actions}</p>
    <p><strong>What to Avoid:</strong> ${avoid}</p>
  `;
}

function startQuiz() {
    document.getElementById("instructions").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    document.getElementById("timer").classList.remove("hidden");
  
    showQuestion();
    startTimer();
  }
  

window.onload = startQuiz;
