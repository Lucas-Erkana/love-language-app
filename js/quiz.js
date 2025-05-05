let currentQuestion = 0;
let scores = { A: 0, B: 0, C: 0, D: 0, E: 0 };
let timerSeconds = 15 * 60;
let timerInterval;
let paused = false;

const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const timerDisplay = document.getElementById("timer");
const topBar = document.getElementById("top-bar");
const pauseBtn = document.getElementById("pause-btn");

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
  clearInterval(timerInterval);
  quizContainer.classList.add("hidden");
  topBar.classList.add("hidden");
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
  quizContainer.classList.remove("hidden");
  resultContainer.classList.add("hidden");
  topBar.classList.remove("hidden");

  resetState();
  showQuestion();
  startTimer();
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (!paused) {
      const minutes = Math.floor(timerSeconds / 60);
      const seconds = timerSeconds % 60;
      timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      timerSeconds--;

      if (timerSeconds < 0) {
        clearInterval(timerInterval);
        showResults();
      }
    }
  }, 1000);
}

function togglePause() {
  paused = !paused;
  if (paused) {
    quizContainer.classList.add("hidden");
    pauseBtn.textContent = "▶ Resume";
  } else {
    quizContainer.classList.remove("hidden");
    pauseBtn.textContent = "⏸ Pause";
  }
}

function quitQuiz() {
  clearInterval(timerInterval);
  resetState();

  document.getElementById("instructions").classList.remove("hidden");
  quizContainer.classList.add("hidden");
  resultContainer.classList.add("hidden");
  topBar.classList.add("hidden");
}

function resetState() {
  currentQuestion = 0;
  scores = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  timerSeconds = 15 * 60;
  paused = false;
  pauseBtn.textContent = "⏸ Pause";
  timerDisplay.textContent = "15:00";
}

// Show instruction page on load
window.onload = () => {
  document.getElementById("instructions").classList.remove("hidden");
  quizContainer.classList.add("hidden");
  resultContainer.classList.add("hidden");
  topBar.classList.add("hidden");
};
