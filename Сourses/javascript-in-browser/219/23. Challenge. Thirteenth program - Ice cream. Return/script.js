var cardsData = [
  {
    inStock: true,
    imgUrl: 'gllacy/choco.jpg',
    text: 'Сливочно-кофейное с кусочками шоколада',
    price: 310,
    isHit: true,
    specialOffer: 'Двойная порция сиропа бесплатно!'
  },
  {
    inStock: false,
    imgUrl: 'gllacy/lemon.jpg',
    text: 'Сливочно-лимонное с карамельной присыпкой',
    price: 125,
    isHit: false
  },
  {
    inStock: true,
    imgUrl: 'gllacy/cowberry.jpg',
    text: 'Сливочное с брусничным джемом',
    price: 170,
    isHit: false
  },
  {
    inStock: true,
    imgUrl: 'gllacy/cookie.jpg',
    text: 'Сливочное с кусочками печенья',
    price: 250,
    isHit: false
  },
  {
    inStock: true,
    imgUrl: 'gllacy/creme-brulee.jpg',
    text: 'Сливочное крем-брюле',
    price: 190,
    isHit: false
  }
];

function createElement(tagName, className, text) {
  let element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

function createCard(cardData) {
  let cardsItem = createElement('li', 'good');
  let availabilityClass = 'good--available';
  if (!cardData.inStock) {
    availabilityClass = 'good--unavailable';
  }
  cardsItem.classList.add(availabilityClass);
    
  let itemDesc = createElement('h2', 'good__description');
  itemDesc.textContent = cardData.text;
  
  let itemImg = createElement('img', 'good__image');
  itemImg.src = cardData.imgUrl;
  itemImg.alt = cardData.text;
  
  let itemPrice = createElement('p', 'good__price');
  itemPrice.textContent = cardData.price + '₽/кг';
  
  cardsItem.appendChild(itemDesc);
  cardsItem.appendChild(itemImg);
  cardsItem.appendChild(itemPrice);
  
  if (cardData.isHit) {
    cardsItem.classList.add('good--hit');
    let specialOffer = createElement('p', 'good__special-offer');
    specialOffer.textContent = cardData.specialOffer;
    cardsItem.appendChild(specialOffer);
  }
  
  return cardsItem;
};

function renderCards(cardsData) {
  let parent = document.querySelector('.goods');
  for (let i = 0; i < cardsData.length; ++i) {
    parent.appendChild(createCard(cardsData[i]));
  }
};

renderCards(cardsData);


/* Техническое задание

Мяу! Помнишь магазин мороженого? Нужно создать карточки товаров, основываясь на данных, полученных с сервера.

Данные — массив объектов cardsData, один элемент соответствует одному товару. У каждого объекта есть следующие свойства:

- inStock — доступность товара. Если значение true — товар доступен (для такого продукта верстальщик подготовил класс good--available), если false — продукта нет в наличии (товар с классом good--unavailable).
- imgUrl — ссылка на изображение товара.
- text — название продукта.
- price — цена.
- isHit — является ли товар хитом продаж. Если значение true — продукт «хитовый». Для такого товара подготовлен класс good--hit.
- specialOffer — специальное предложение, которое есть только у хита продаж. Должно находиться в абзаце с классом good__special-offer и быть самым последним дочерним элементом в карточке.

Вот пример вёрстки одной карточки в каталоге:

<ul class="goods">
  <li class="good">
    <h2 class="good__description">Сливочно-кофейное с кусочками шоколада</h2>
    <img class="good__image" src="gllacy/choco.jpg" alt="Сливочно-кофейное с кусочками шоколада">
    <p class="good__price">110₽/кг</p>
  </li>
  ...
</ul>

Обрати внимание, что текст в атрибуте alt у изображения должен быть таким же, как и название товара.

Создай функцию renderCards, которая будет принимать на вход массив данных, вызови её, передав cardsData, и отрисуй на странице карточки мороженого.

*/
