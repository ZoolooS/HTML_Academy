let msgsBlock = document.querySelector('.chat-content');
let msgItem = msgsBlock.children;

let msgTemplate = document.querySelector('#message-template').content;
let msgListItem = msgTemplate.querySelector('.chat-message');

let msgSendForm = document.querySelector('.chat-form');
let msgSendInput = msgSendForm.querySelector('.chat-form-input');


function addClickHandler(message) {
  let msgDelBtn = message.querySelector('.chat-message-button');
  msgDelBtn.addEventListener('click', function () {
    message.remove();
  });
};


msgSendForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  
  let newMessage = msgListItem.cloneNode(true);
  let msgText = newMessage.querySelector('.chat-message-text');
  msgText.textContent = msgSendInput.value;

  addClickHandler(newMessage);

  msgsBlock.appendChild(newMessage);
  msgSendInput.value = '';
});


/* 

Нужно запрограммировать мессенджер. Как должна работать программа:

— Шаблон сообщения находится в теге template с идентификатором message-template.

— В блоке сообщения (класс chat-message) должен быть текст сообщения, кнопка удаления и имя пользователя.

— Новое сообщение добавляется в конец контейнера с классом chat-content.

— Чтобы добавить новое сообщение, нужно ввести текст в поле ввода (элемент с классом chat-form-input) и нажать кнопку «Отправить» (отправляет данные из формы с классом chat-form).
    
- Чтобы удалить сообщение, нужно кликнуть по кнопке с крестиком (элемент с классом chat-message-button). Эта кнопка появляется при наведении на сообщение.


*/
