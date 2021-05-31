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

const navbarList = document.getElementById('navbar__list');
const mainContainer = document.querySelector('main');

// List of sections prsent
const sections = mainContainer.querySelectorAll("section");
// console.log(navbarList);

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

function buildMenu(sectionsList, navbar) {
  for (let section of sectionsList) {
    const link = document.createElement('a');
    const linkText = document.createTextNode(section.dataset.nav);

    link.appendChild(linkText);
    link.setAttribute('href', "#" + section.id);
    link.setAttribute('class', 'menu__link');

    navbar.appendChild(link);
  }
}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
window.addEventListener('load', () => buildMenu(sections, navbarList));

// Scroll to section on link click
// navbarList.children.forEach((item, i) => {
//   item.addEventListener('click', e => console.log('clicked'));
// });


// Set sections as active
