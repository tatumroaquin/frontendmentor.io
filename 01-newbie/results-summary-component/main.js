async function getData() {
  const response = await fetch('data.json');

  if (!response.ok || response.type === 'error') {
    console.log('failed to retrieve data.json');
    return;
  }

  const data = await response.json();
  return data;
}

function getSummaryEntry(category, score, icon) {
  let element = `
  <div class="${category} summary__item">
    <div class="summary__heading">
      <img src="${icon}" alt="${category} icon"/>
      <span>${category.charAt(0).toUpperCase() + category.slice(1)}</span>
    </div>
    <span class="summary__score"
      >${score}<span class="score__denominator">&nbsp;&nbsp;/ 100</span></span
    >
  </div>
  `;
  return element;
}
getData()
  .then((results) => {
    const summary__items = document.querySelector('.summary__items');
    for (let result of results) {
      const { category, score, icon } = result;
      const entry = getSummaryEntry(category.toLowerCase(), score, icon);
      summary__items.insertAdjacentHTML('afterbegin', entry);
    }
  })
  .catch((error) => {
    alert(error);
  });
