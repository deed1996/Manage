const btnhamburger = document.querySelector('#btnhamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElms = document.querySelectorAll('.has-fade');

btnhamburger.addEventListener('click', function () {
  console.log('click hamburger');

  if (header.classList.contains('open')) {
    header.classList.remove('open');
    fadeElms.forEach(function (element) {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  } else {
    header.classList.add('open');
    fadeElms.forEach(function (element) {
      element.classList.add('fade-in');
      element.classList.remove('fade-out');
    });
  }
});


const slider= tns({container:".testimonials_slider",
  loop:!0,
  items:1,
  gutter: 20,
  slideBy:"page",
  nav:true,
  navPosition: "bottom",
  autoplay:true,
  speed:800,
  autoplayButtonOutput:!1,
  mouseDrag:!0,
  controls: false,
  responsive:{
    640:{items:1},
    768:{
      items:3,
      nav: false,
      speed:1000,
      autoplayHoverPause: true,
      gutter: 20
    }
  }
  });
