const close = document.querySelector('span.close');
const modal = document.querySelector('div.modal')

close.addEventListener('click', () => {
    modal.style.display = 'none'
})