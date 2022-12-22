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

function createCard(text) {
	const card = cardTemplate.cloneNode(true);
	const cardText = card.querySelector('.item__text');
	cardText.textContent = text;

	return card;
}

function renderCards() {
	items.forEach(item => {
		const cardHtml = createCard(item);
		cardsContainer.append(cardHtml);
	});
}

renderCards();
