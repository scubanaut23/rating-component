const ratings = document.querySelectorAll('.star');

ratings.forEach((element) => {
  element.addEventListener('click', function handleClick(event) {
    element.setAttribute(
      'style',
      'background-color:  hsl(25, 97%, 53%); color: hsl(0, 0%, 100%);'
    );
  });
});

const submit = document.querySelector('.button');

submit.addEventListener('click', function handleClick(event) {
  location.href = './thankyou.html';
});
