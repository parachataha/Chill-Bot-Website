const closeOne = document.querySelector('div.modal span.close');
const modalOne = document.querySelector('div.modal')

const closeTwo = document.querySelector('div.modal-2 span.close');
const modalTwo = document.querySelector('div.modal-2')

closeOne.addEventListener('click', () => {
    modalOne.style.display = 'none';
    modalTwo.style.bottom = '0px';
})

closeTwo.addEventListener('click', () => {
    modalTwo.style.display = 'none';
})