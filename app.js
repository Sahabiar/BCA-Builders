// Code for see more button
const seeMore = document.getElementById('btn');
const hidden = document.getElementById('hidden');

seeMore.addEventListener('click', () => {
  hidden.classList.toggle('hidden');
});
