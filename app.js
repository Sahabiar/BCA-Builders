// Code for see more button
const seeMore = document.getElementById('btn');
document.getElementById('hidden').style.display = 'none';


seeMore.addEventListener('click', function () {
  const hidden = document.getElementById('hidden');

  if (hidden.style.display === 'none') {
    hidden.style.display = 'block';
    seeMore.innerHTML = 'See Less';
  }
  else {
    hidden.style.display = 'none';
    seeMore.innerHTML = 'See More';
  }
});
