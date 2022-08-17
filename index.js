const ratings = document.querySelectorAll('.star');
const rated = document.querySelector('.class-rate');
const submit = document.querySelector('.button');
let value = 3;
const cardRating = document.querySelector('.cardRate');
const card_1 = document.querySelector('.card');
const card_2 = document.querySelector('.card-content2');
submit.addEventListener('click', onSubmit);

function onSubmit() {
  card_1.classList.add('hide');
  cardRating.textContent = value;
  card_2.classList.remove('hide');
}

const ratingClick = (e) => {
  ratings.forEach((button) => {
    button.classList.remove('rating-click');
  });
  if (e.target.classList.contains('star')) {
    e.target.classList.add('rating-click');
  } else {
    e.target.parentElement.classList.add('rating-click');
  }
  value = e.target.textContent;
  console.log(value);
};

ratings.forEach((button) => {
  button.addEventListener('click', ratingClick);
});
