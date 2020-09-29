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

const navOne = document.querySelector('a:nth-of-type(1)') // 1st a
navOne.textContent='Services'
const navTwo = document.querySelector('a:nth-of-type(2)') // 2nd a...
navTwo.textContent='Product'
const navThree = document.querySelector('a:nth-of-type(3)')
navThree.textContent='Vision'
const navFour = document.querySelector('a:nth-of-type(4)')
navFour.textContent='Features'
const navFive = document.querySelector('a:nth-of-type(5)')
navFive.textContent='About'
const navSix = document.querySelector('a:nth-of-type(6)')
navSix.textContent='Contact'



const topImage = document.querySelector('#cta-img')
topImage.setAttribute('src', 'img/header-img.png') // "img-src": "img/logo.png"

const h1 = document.querySelector('h1')
h1.textContent='DOM is Awesome!'

const button = document.querySelector('button')
button.textContent='Get Started'




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