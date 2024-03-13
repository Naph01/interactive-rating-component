const mainContainer = document.querySelector('.rate-us');
const thanksContainer = document.querySelector('.thank-you');
const submit = document.querySelector('.submit');
const rating = document.querySelector('#rating');
const buttons = document.querySelectorAll('.btn');

const removeClass = () => {
    thanksContainer.classList.remove('hidden');
    mainContainer.classList.add('hidden');
}

submit.addEventListener('click', removeClass);


for(let i = 0; i < buttons.length; i++){
    const button = buttons[i];

    button.addEventListener('click', () => {
        rating.innerHTML = button.innerHTML;
    })
}