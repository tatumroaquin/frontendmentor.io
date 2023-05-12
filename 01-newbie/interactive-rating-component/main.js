const ratingCard = document.querySelector('#rating__card');
const thankyouCard = document.querySelector('#thankyou__card');

const submitButton = document.querySelector('.button__submit');
const rateButtons = document.querySelectorAll('.rate__rangeitem');

const ratingValue = document.querySelector('.rating__value');

submitButton.addEventListener('click', (e) => {
  thankyouCard.classList.remove('hidden');
  ratingCard.classList.add('hidden');
});

rateButtons.forEach((button) => {
  button.addEventListener('click', () => {
    ratingValue.innerHTML = button.innerHTML;
  });
});

thankyouCard.addEventListener('click', () => {
  thankyouCard.classList.add('hidden');
  ratingCard.classList.remove('hidden');
});
