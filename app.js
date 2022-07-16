$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  autoplay: true,
  animateOut: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    700: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
AOS.init();

function myFunction(x) {
  x.classList.toggle("change");
}

var backToTop = document.getElementById("back-to-top");
console.log(backToTop);

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 250
  ) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
}
