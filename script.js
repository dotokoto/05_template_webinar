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

function deleteCard(event) {
	event.target.closest('.list__item').remove();
}

function cloneCard(event) {
	const clonedCard = event.target.closest('.list__item').cloneNode(true);
	addCard(clonedCard);
}


function editCard(event) {
	const cardText = event.target.closest('.list__item').querySelector('.item__text');
	cardText.setAttribute('contenteditable', true);
	cardText.focus();

	function finishEditCard() {
		cardText.removeAttribute('contenteditable');
		cardText.removeEventListener('blur', finishEditCard);
	}

	cardText.addEventListener('blur', finishEditCard);
}

function addCardEventListeners (card) {
	const deleteButton = card.querySelector('.delete');
	deleteButton.addEventListener('click', deleteCard);

	const cloneButton = card.querySelector('.duplicate');
	cloneButton.addEventListener('click', cloneCard);

	const editButton = card.querySelector('.edit');
	editButton.addEventListener('click', editCard);
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
