const btnhamburger = document.querySelector('#btnhamburger');
const header = document.querySelector('.header');

btnhamburger.addEventListener('click', function() {
    console.log('click hamburger');

    if(header.classList.contains('open')) {
        header.classList.remove('open');
    } else {
        header.classList.add('open');
    }
});