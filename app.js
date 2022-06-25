$('.owl-carousel').owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});
AOS.init();

function myFunction(x) {
  x.classList.toggle('change');
}

var backToTop = document.getElementById('back-to-top');
console.log(backToTop);

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 250
  ) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
}
