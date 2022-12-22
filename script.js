const items = [
	"Сделать проектную работу",
	"Полить цветы",
	"Пройти туториал по Реакту",
	"Сделать фронт для своего проекта",
];

const cardsContainer = document.querySelector('.list');

function createCard(text) {
	const card = `
<li class="list__item">
	<span class="item__text">${text}</span>
	<img class="edit" src="images/Edit.png" alt="Редактировать" />
	<img
	class="duplicate"
	src="images/Duplicate.png"
	alt="Копировать"
	/>
	<img class="delete" src="images/Delete.png" alt="Удалить" />
</li>
`;
	return card;
}

function renderCards() {
	items.forEach(item => {
		const cardHtml = createCard(item);
		cardsContainer.innerHTML += cardHtml;
	});
}

renderCards();
