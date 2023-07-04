const showMore = document.querySelector('.all-offers__btn');
const cardsLenght = document.querySelectorAll('.offers__cards-row').length; // общее кол-во элементов
let items = 2; // начальное кол-во элементов

showMore.addEventListener('click', () => {
    items += 1;
    const array = Array.from(document.querySelector('.offers__cards').children); // массив всех элементов
    const visItems = array.slice(0, items);

    visItems.forEach(el => el.classList.add('is-visible'));

    if (visItems.length === cardsLenght) {
        showMore.style.display = 'none';
    }
}); 