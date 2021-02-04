
const contentSection = document.getElementById('content');

const headingSection = document.createElement('div');
contentSection.appendChild(headingSection);
headingSection.setAttribute('id','heading-section');

const logoSection = document.createElement('img');
logoSection.setAttribute('src','../img/canva-black-with-utensils-icon-restaurant-logo-cKWpOK2DXM4.jpg');
headingSection.appendChild(logoSection);

const heroSection = document.createElement('div');
contentSection.appendChild(heroSection);
heroSection.setAttribute('id','hero-section');

const heroSectionHeading = document.createElement('h1');
heroSection.appendChild(heroSectionHeading);
heroSectionHeading.setAttribute('id','hero-section-heading');
heroSectionHeading.innerText = "Come Eat Amazing Food in a Relaxed Environment";


const bodySection = document.createElement('div');
contentSection.appendChild(bodySection);
bodySection.setAttribute('id','body-section');

