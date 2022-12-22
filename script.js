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

function deleteCard(event) {
	event.target.closest('.list__item').remove();
}

function addCardEventListeners (card) {
	const deleteButton = card.querySelector('.delete');
	deleteButton.addEventListener('click', deleteCard);
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
