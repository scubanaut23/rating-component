const value = 0;
const ratings = document.querySelectorAll('.star');

const ratingClick = (e) => {
  ratings.forEach((button) => {
    console.log(e);
    button.classList.remove('rating-click');
  });
  if (e.target.classList.contains('star')) {
    e.target.classList.add('rating-click');
  } else {
    e.target.parentElement.classList.add('rating-click');
  }
  value = e.target.value;
};

ratings.forEach((button) => {
  button.addEventListener('click', ratingClick);
});

const submit = document.querySelector('.button');

submit.addEventListener('click', function handleClick(event) {
  location.href = './thankyou.html';
});
