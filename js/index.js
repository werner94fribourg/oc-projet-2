const changeCardHeight = () => {
  var cardElements = document.querySelectorAll(
    '.block.block--1 .block__content .content__item .item__img'
  );
  cardElements.forEach(card => {
    if (document.documentElement.clientWidth <= 768) {
      const newHeight = (card.clientWidth / 768) * 280;
      card.style.height = newHeight.toFixed(2) + 'px';
    } else {
      card.removeAttribute('style');
    }
  });
};

changeCardHeight();
window.addEventListener('resize', changeCardHeight);
