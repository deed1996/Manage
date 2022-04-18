const btnhamburger = document.querySelector('#btnhamburger');

btnhamburger.addEventListener('click', function() {
    console.log('click hamburger');

    if(btnhamburger.classList.contains('open')) {
        btnhamburger.classList.remove('open');
    } else {
        btnhamburger.classList.add('open');
    }
});