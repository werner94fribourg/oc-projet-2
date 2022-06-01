'use strict';

// Variables
const cardElements = document.querySelectorAll(
  '.block.block--1 .block__content .content__item .item__img, .activity__content .content__item .item__img, .activity__content .content__item.expand .item__img, .activity__content .content__item.reduce .item__img'
);

const activityCardElements = document.querySelectorAll(
  '.activity__content .content__item'
);

// Functions
const changeCardHeight = () => {
  cardElements.forEach(card => {
    if (document.documentElement.clientWidth <= 768) {
      const newHeight = (card.clientWidth / 768) * 280;
      card.style.height = newHeight.toFixed(2) + 'px';
    } else {
      card.removeAttribute('style');
    }
  });
};

const changeActivityCardHeight = () => {
  activityCardElements.forEach(card => {
    if (document.documentElement.clientWidth > 992) {
      const cardImg = card.querySelector('.item__img');
      let newHeight;
      switch (true) {
        case card.classList.contains('expand'):
          newHeight = (cardImg.clientHeight / 500) * 400;
          break;
        case card.classList.contains('reduce'):
          newHeight = (cardImg.clientHeight / 265) * 200;
          break;
        default:
          console.log('Default');
          newHeight = (cardImg.clientHeight / 215) * 150;
          break;
      }
      cardImg.style.height = newHeight.toFixed(2) + 'px';
    } else {
      card.removeAttribute('style');
    }
  });
};

// Event Listeners
window.addEventListener('resize', changeCardHeight);
window.addEventListener('load', changeCardHeight);
/*window.addEventListener('resize', changeActivityCardHeight);
window.addEventListener('load', changeActivityCardHeight);*/
