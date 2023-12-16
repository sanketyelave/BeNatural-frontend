console.log("Hello world!");

const myName = "Sanket yelave";
const h1 = document.querySelector(".heading-primary");
console.log(myName);
console.log(h1);


// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});


const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");


    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });


    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});


const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  const flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  const isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();


document.addEventListener('DOMContentLoaded', function () {

  const signUpForm = document.forms['sign-up'];


  signUpForm.addEventListener('submit', function (event) {

    event.preventDefault();


    const fullName = signUpForm['full-name'].value;
    const email = signUpForm['email'].value;
    const whereFrom = signUpForm['select-where'].value;

    if (!fullName || !email || !whereFrom) {
      alert('Please fill in all details before submitting the form.');
      return; // Stop further execution if any field is empty
    }
    else {
      alert(`***DETAILS SAVED*** \n Name:  ${fullName}\n Email:  ${email}\n Source:  ${whereFrom}`)
    }


    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Where From:', whereFrom);
  });
});

