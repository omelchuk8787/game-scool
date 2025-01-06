// Простая игра для детей 4-5 лет для изучения математики и литовского языка

// HTML структура (предполагается, что подключен файл index.html):
// <div id="game-container">
//   <h1>Гра для вивчення математики і литовського алфавіту</h1>
//   <div id="task-container"></div>
//   <input type="text" id="answer" placeholder="Введіть відповідь">
//   <button id="submit">Перевірити</button>
//   <div id="feedback"></div>
// </div>

const gameContainer = document.getElementById('game-container');
const taskContainer = document.getElementById('task-container');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit');
const feedback = document.getElementById('feedback');

let currentTask = {};

// Завдання для гри
const tasks = [
  { question: '2 + 2 = ?', answer: '4' },
  { question: '3 + 5 = ?', answer: '8' },
  { question: 'Яка це буква? A', answer: 'A' },
  { question: 'Яка це буква? B', answer: 'B' },
  { question: 'Скільки буде 10 - 3?', answer: '7' },
  { question: 'Назви цю літеру: C', answer: 'C' }
];

// Функція для генерації завдання
function generateTask() {
  const randomIndex = Math.floor(Math.random() * tasks.length);
  currentTask = tasks[randomIndex];
  taskContainer.innerText = currentTask.question;
  feedback.innerText = '';
  answerInput.value = '';
}

// Перевірка відповіді
submitButton.addEventListener('click', () => {
  const userAnswer = answerInput.value.trim();
  if (userAnswer.toLowerCase() === currentTask.answer.toLowerCase()) {
    feedback.innerText = 'Правильно! Молодець!';
    feedback.style.color = 'green';
  } else {
    feedback.innerText = 'Спробуй ще раз!';
    feedback.style.color = 'red';
  }
  setTimeout(generateTask, 2000); // Генеруємо нове завдання через 2 сек.
});

// Початок гри
generateTask();