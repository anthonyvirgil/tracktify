const lastMonthButton = document.getElementById('last-month-button');
const sixMonthsButton = document.getElementById('six-months-button');
const allTimeButton = document.getElementById('all-time-button');

const lastMonthTracktDiv = document.getElementById('last-month-trackt-div');
const sixMonthsTracktDiv = document.getElementById('six-months-trackt-div');
const allTimeTracktDiv = document.getElementById('all-time-trackt-div');

lastMonthButton.addEventListener('click', () => {
  lastMonthButton.classList.add('trackt-button-clicked');
  lastMonthTracktDiv.style.display = 'block';

  sixMonthsButton.classList.remove('trackt-button-clicked');
  sixMonthsTracktDiv.style.display = 'none';

  allTimeButton.classList.remove('trackt-button-clicked');
  allTimeTracktDiv.style.display = 'none';
});

sixMonthsButton.addEventListener('click', () => {
  sixMonthsButton.classList.add('trackt-button-clicked');
  sixMonthsTracktDiv.style.display = 'block';

  lastMonthButton.classList.remove('trackt-button-clicked');
  lastMonthTracktDiv.style.display = 'none';

  allTimeButton.classList.remove('trackt-button-clicked');
  allTimeTracktDiv.style.display = 'none';
});

allTimeButton.addEventListener('click', () => {
  allTimeButton.classList.add('trackt-button-clicked');
  allTimeTracktDiv.style.display = 'block';

  lastMonthButton.classList.remove('trackt-button-clicked');
  lastMonthTracktDiv.style.display = 'none';

  sixMonthsButton.classList.remove('trackt-button-clicked');
  sixMonthsTracktDiv.style.display = 'none';
});