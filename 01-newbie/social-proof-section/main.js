function getRatingCard(rating, from) {
  let result =
    `
  <div class="ratings__card">
    <div class="ratings__card--stars">\n` +
    `<img
        src="./images/icon-star.svg"
        alt="yellow five pointed star icon"
      />\n`.repeat(rating) +
    `</div>
    <p class="ratings__description">Rated ${rating} Stars in ${from}</p>
  </div>
  `;
  return result;
}

function getReviewsCard(name, image, review) {
  return `
  <div class="review__card">
    <div class="review__card--profile">
      <img 
         class="review__card--image"
         src="./images/${image}" alt="colton's profile image"
      />
      <span class="review__card--user">
        <span class="review__card--name">${name}</span>
        <span class="review__card--verified">Verified Buyer</span>
      </span>
    </div>
    <q class="review__card--text">${review}</q>
  </div>
  `;
}

const ratingsElement = document.querySelector('.social__ratings');
const reviewsElement = document.querySelector('.social__reviews');

fetch('./data/ratings.json')
  .then(async (response) => {
    const ratings = await response.json();
    ratings.forEach((_rating) => {
      let { rating, from } = _rating;
      ratingsElement.insertAdjacentHTML(
        'beforeend',
        getRatingCard(rating, from)
      );
    });
  })
  .catch((error) => console.log(error));

fetch('./data/reviews.json')
  .then(async (response) => {
    const reviews = await response.json();
    reviews.forEach((_review) => {
      let { name, review, image } = _review;
      reviewsElement.insertAdjacentHTML(
        'beforeend',
        getReviewsCard(name, image, review)
      );
    });
  })
  .catch((error) => console.log(error));
