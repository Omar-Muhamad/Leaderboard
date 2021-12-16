import './style.css';
import { uploadScores, renderScores, resetScores } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  renderScores();
});

const refreshBtn = document.getElementById('refreshBtn');
refreshBtn.addEventListener('click', () => {
  resetScores();
  renderScores();
});

const myForm = document.getElementById('AddScoreForm');
const yourName = document.getElementById('yourName');
const yourScore = document.getElementById('yourScore');

myForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const inputData = {
    user: yourName.value,
    score: yourScore.value,
  };
  uploadScores(inputData);
});
