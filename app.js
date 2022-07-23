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

// Blog navs
let blogNav = document.querySelector(".nav-horizontal");
let links = document.querySelectorAll(".nav-horizontal .nav-item .nav-link");
let blogs = document.querySelectorAll(".blog-posts");

links.forEach((link) => {
  link.addEventListener("click", () => {
    // remove active from all the divs
    links.forEach((element) => {
      element.classList.remove("active");
    });

    // handle display for blogs
    blogs.forEach((blog) => {
      if (blog.dataset.id === link.dataset.id) {
        blog.classList.remove("d-none");
      } else {
        blog.classList.add("d-none");
      }
    });

    // add active on current item
    link.classList.add("active");
  });
});

function myFunction(x) {
  x.classList.toggle("change");
}

var backToTop = document.getElementById("back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 250
  ) {
    backToTop.style.display = "block";
    document.querySelector(".navbar").classList.add("d-none");
    blogNav.classList.add("shadow-sm");
    blogNav.classList.add("at-top");
  } else {
    backToTop.style.display = "none";
    document.querySelector(".navbar").classList.remove("d-none");
    blogNav.classList.remove("shadow-sm");
    blogNav.classList.remove("at-top");
  }
}
