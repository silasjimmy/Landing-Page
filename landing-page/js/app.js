/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/

const navbar = document.querySelector('.navbar__menu');
const navbarLinks = navbar.querySelector('#navbar__list');
const main = document.querySelector('main');
const sections = main.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

function buildNav() {
  for (let section of sections) {
    const link = document.createElement('a');
    const linkText = document.createTextNode(section.dataset.nav);

    link.appendChild(linkText);
    link.setAttribute('href', "#" + section.id);
    link.setAttribute('class', 'menu__link');

    navbarLinks.appendChild(link);
  }
}

// Add class 'active' to section when near top of viewport

function addActiveClass(scrollEvent) {
  // Listen to scroll event.
  // If a section's Y position nears the top of viewport:
  //   add class active
  // Add scroll event to each section.
  return;
}

// Scroll to anchor ID using scrollTO event

function scrollToSection(sectionIdLink) {
  // Get the Y position of the section.
  // Scroll to the position.

  let section = main.querySelector(sectionIdLink);
  console.log(section.clientHeight);
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

document.addEventListener('DOMContentLoaded', () => buildNav());

// Scroll to section on link click

navbar.addEventListener('click', e => {
  e.preventDefault();

  // Obtain the section's Id whose link was clicked
  let sectionIdLink = e.target.hash;

  scrollToSection(sectionIdLink);
})


// Set sections as active
