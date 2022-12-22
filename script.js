const items = [
	"Сделать проектную работу",
	"Полить цветы",
	"Пройти туториал по Реакту",
	"Сделать фронт для своего проекта",
];

const cardsContainer = document.querySelector('.list');
const cardTemplate = document
	.querySelector('.item-template')
	.content
	.querySelector('.list__item');

const form = document.querySelector('.form');
const input = document.querySelector('.form__input');
const button = document.querySelector('.form__submit');

let editableCard = null;

function deleteCard(event) {
	event.target.closest('.list__item').remove();
}

function cloneCard(event) {
	const clonedCard = event.target.closest('.list__item').cloneNode(true);
	addCard(clonedCard);
}

function switchFormToAddMode() {
	input.value = '';
	button.textContent = 'Добавить';
	form.removeEventListener('submit', editCard);
	form.addEventListener('submit', submitForm);
}

function editCard(event) {
	event.preventDefault();
	const cardText = editableCard.querySelector('.item__text');
	cardText.textContent = input.value;

	switchFormToAddMode();
}

function switchFormToEditMode(event) {
	const card = event.target.closest('.list__item');
	const cardText = card.querySelector('.item__text');
	input.value = cardText.textContent;
	button.textContent = 'Изменить';

	form.removeEventListener('submit', submitForm);
	form.addEventListener('submit', editCard);

	editableCard = card;
}

function addCardEventListeners (card) {
	const deleteButton = card.querySelector('.delete');
	deleteButton.addEventListener('click', deleteCard);

	const cloneButton = card.querySelector('.duplicate');
	cloneButton.addEventListener('click', cloneCard);

	const editButton = card.querySelector('.edit');
	editButton.addEventListener('click', switchFormToEditMode);
}

function createCard(text) {
	const card = cardTemplate.cloneNode(true);
	const cardText = card.querySelector('.item__text');
	cardText.textContent = text;
	addCardEventListeners(card);

	return card;
}

function addCard(card) {
	cardsContainer.prepend(card);
}

function renderCards() {
	items.reverse().forEach(item => {
		const cardHtml = createCard(item);
		addCard(cardHtml);
	});
}


function submitForm(event) {
	event.preventDefault();

	const newCard = createCard(input.value);
	addCard(newCard);
}


form.addEventListener('submit', submitForm);

renderCards();
