function getFaqBlock(question, answer) {
  const faqBlock = `
  <details class="faq__block">
    <summary class="faq__question">${question}</summary>
    <p class="faq__answer">${answer}</p>
  </details>
  `;
  return faqBlock;
}

const faqContainer = document.querySelector('.faq');
const data = fetch('./data.json')
  .then(async (response) => {
    if (!response.ok || response.type === 'error') return;

    const data = await response.json();

    data.forEach((faqData, index) => {
      const { question, answer } = faqData;
      const faqBlock = getFaqBlock(question, answer);
      faqContainer.insertAdjacentHTML('beforeend', faqBlock);
      faqContainer.insertAdjacentHTML('beforeend', '<hr />');
    });

    const faq = document.querySelectorAll('.faq__block');

    // block.open returns 'false' when accordion is open, and 'true' when it is closed.
    faq.forEach((block) => {
      block.addEventListener('click', () => {
        if (block.open) return;
        faq.forEach((detail) => (detail.open = false));
      });
    });

    // the above function avoids a flickering effect caused by logic below.
    //

    // const faqBlocks = document.querySelectorAll('.faq__block');
    // faqBlocks.forEach((block) => {
    //   block.addEventListener('toggle', (e) => {
    //     if (!block.open) return;
    //
    //     faqBlocks.forEach((detail) => {
    //       if (detail.open && detail !== block) {
    //         detail.open = false;
    //       }
    //     });
    //   });
    // });
  })
  .catch((error) => error);
