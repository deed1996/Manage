const btnhamburger = document.querySelector('#btnhamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElms = document.querySelectorAll('.has-fade');

btnhamburger.addEventListener('click', function() {
    console.log('click hamburger');

    if(header.classList.contains('open')) {
        header.classList.remove('open');
        fadeElms.forEach(function(element){
          element.classList.remove('fade-in');
          element.classList.add('fade-out');
        });
    } else {
        header.classList.add('open');
        fadeElms.forEach(function(element){
          element.classList.add('fade-in');
          element.classList.remove('fade-out');
        });
    }
});