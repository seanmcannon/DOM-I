const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// nav

const navOne = document.querySelector('.container a:nth-of-type(1)') // 1st a
navOne.textContent='Services'
const navTwo = document.querySelector('.container a:nth-of-type(2)') // 2nd a...
navTwo.textContent='Product'
const navThree = document.querySelector('.container a:nth-of-type(3)')
navThree.textContent='Vision'
const navFour = document.querySelector('.container a:nth-of-type(4)')
navFour.textContent='Features'
const navFive = document.querySelector('.container a:nth-of-type(5)')
navFive.textContent='About'
const navSix = document.querySelector('.container a:nth-of-type(6)')
navSix.textContent='Contact'

function createNavItem(name) {
  let a = document.createElement('a');
  a.textContent = name;
  return a;
}


const navBar = document.querySelector('.container nav');
// add Nav items
navBar.prepend(createNavItem('HotDogs'));
navBar.appendChild(createNavItem('Keik'));
navBar.prepend(createNavItem('Pai'));

const navigationLinks = document.querySelectorAll('.container nav a');
navigationLinks[0].style.color = 'green'
navigationLinks[1].style.color = 'green'
navigationLinks[2].style.color = 'green'
navigationLinks[3].style.color = 'green'
navigationLinks[4].style.color = 'green'
navigationLinks[5].style.color = 'green'
navigationLinks[6].style.color = 'green'
navigationLinks[7].style.color = 'green'
navigationLinks[8].style.color = 'green'


// hero

const topImage = document.querySelector('#cta-img')
topImage.setAttribute('src', 'img/header-img.png') // "img-src": "img/logo.png"

const h1 = document.querySelector('h1')
h1.textContent='DOM is Awesome!'

const button = document.querySelector('button')
button.textContent='Get Started'


// top

const middleImage = document.querySelector('.middle-img')  // id="middle-img" src="img/mid-page-accent.jpg"
middleImage.setAttribute('src', 'img/mid-page-accent.jpg')

const featuresH4 = document.querySelector('.top-content .text-content:nth-of-type(1) h4')
featuresH4.textContent = 'Features'

const featuresP = document.querySelector('.top-content .text-content:nth-of-type(1) p');
featuresP.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const aboutH4 = document.querySelector('.top-content .text-content:nth-of-type(2) h4')
aboutH4.textContent = 'About'

const aboutP = document.querySelector('.top-content .text-content:nth-of-type(2) p');
aboutP.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

// bottom 

const servicesH4 = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4')
servicesH4.textContent = 'Services'

const servicesP = document.querySelector('.bottom-content .text-content:nth-of-type(1) p');
servicesP.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'


const productH4 = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4')
productH4.textContent = 'Product'

const productP = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
productP.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'


const visionH4 = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4')
visionH4.textContent = 'Vision'

const visionP = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');
visionP.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

// contact

const contactOne = document.querySelector('.contact h4')
contactOne.textContent = 'Contact'

const contactPOne = document.querySelector('.contact p:nth-of-type(1)')
contactPOne.textContent = '123 Way 456 Street Somewhere, USA'

const contactPTwo = document.querySelector('.contact p:nth-of-type(2)')
contactPTwo.textContent = '1 (888) 888-8888'

const contactPThree = document.querySelector('.contact p:nth-of-type(3)')
contactPThree.textContent = 'sales@greatidea.io'

//footer

const footerOne = document.querySelector('footer p')
footerOne.textContent ='Copyright Great Idea! 2020'


