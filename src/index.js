
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

const tabWrapper = document.createElement('div');
tabWrapper.setAttribute('class','wrapper');
bodySection.appendChild(tabWrapper);

const numToWords = ['one','two','three'];
for (let i = 0; i < 3; i++) {
    const radioInput = document.createElement('input');
    radioInput.setAttribute('class','radio');
    radioInput.setAttribute('id',numToWords[i]);
    radioInput.setAttribute('name','group');
    radioInput.setAttribute('type','radio');
    if (i===0) {
        radioInput.setAttribute('checked','');
    }
    tabWrapper.appendChild(radioInput);
}

const tabsClass = document.createElement('div');
tabsClass.setAttribute('class','tabs');
tabWrapper.appendChild(tabsClass);

for (let i = 0; i < 3; i++) {
    const tabClass = document.createElement('label');
    tabClass.setAttribute('class','tab');
    tabClass.setAttribute('id',`${numToWords[i]}-tab`);
    tabClass.setAttribute('for',numToWords[i]);
    tabClass.innerText = 'Find Us'
    tabsClass.appendChild(tabClass);
}


const panelsClass = document.createElement('div');
panelsClass.setAttribute('class','panels');
tabWrapper.appendChild(panelsClass);

for (let i = 0; i < 3; i++) {
    const panelClass = document.createElement('div');
    panelClass.setAttribute('class','panel');
    panelClass.setAttribute('id',`${numToWords[i]}-panel`);
    const panelTitle = document.createElement('div');
    panelTitle.setAttribute('class','panel-title');
    panelTitle.innerText = 'Find Us'
    panelClass.appendChild(panelTitle);
    const panelBody = document.createElement('p');
    panelTitle.setAttribute('class','panel-title');
    panelBody.innerText = 'Without CSS, every web page would be drab plain text and images that flowed straight down the page. With CSS, you can add color and background images and change the layout of your page — your web pages can feel like works of art!'
    panelClass.appendChild(panelTitle);
    panelClass.appendChild(panelBody);
    panelsClass.appendChild(panelClass);
}

