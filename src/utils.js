const getScores = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1W0njeWVsvH3AXIjnMzg/scores/');
  if (response.status !== 200) {
    throw new Error('Can not fetch the data');
  }
  const data = await response.json();
  return data;
};

export const uploadScores = async (inputData) => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1W0njeWVsvH3AXIjnMzg/scores/', {
    method: 'POST',
    body: JSON.stringify(inputData),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
};

export const renderScores = async () => {
  const readyData = await getScores();
  let scoreList = null;
  scoreList = document.getElementById('scoreList');
  readyData.result.forEach((data) => {
    const listItem = `
      <li class="listItem">
        <p>Name: ${data.user} </p>
        <p>Score: ${data.score}</p>
      </li>
      `;
    scoreList.innerHTML += listItem;
  });
};

export const resetScores = () => {
  const scoreList = document.getElementById('scoreList');
  scoreList.innerHTML = '';
};
