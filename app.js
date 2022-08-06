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

var dropdown = document.querySelector(".dropdown-toggle");
if (dropdown && !dropdown.classList.contains("active")) {
  $(".navbar-nav > li > .dropdown-toggle").click(function () {
    window.location = $(this).attr("href");
  });
}

// Blog navs
let blogNav = document.querySelector(".nav-horizontal");
let links = document.querySelectorAll(".nav-horizontal .dropdown-item");
let blogs = document.querySelectorAll(".blog-posts");

if (links != null) {
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
}

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
  } else {
    backToTop.style.display = "none";
  }
}
