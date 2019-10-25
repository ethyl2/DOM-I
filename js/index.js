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

const siteContent2 = {
  "nav": {
    "nav-item-1": "Here",
    "nav-item-2": "Are",
    "nav-item-3": "Some",
    "nav-item-4": "Jokes",
    "nav-item-5": "For",
    "nav-item-6": "You",
    "nav-item-7": "to",
    "nav-item-8": "Enjoy!",
    "img-src": "https://upload.wikimedia.org/wikipedia/commons/6/61/Joke_Alert.png"
  },
  "cta": {
    "h1": "Make Someone Smile ",
    "button": "Get Started",
    "img-src": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Funny_face_-_panoramio.jpg"
  },
  "main-content": {
    "features-h4":"Variation of a Classic",
    "features-content": "Why did half of a chicken cross the road? To get to his other side!",
    "about-h4":"From a Fun Guy",
    "about-content": "How much room is need for fungi to grow? As mushroom as possible.",
    "middle-img-src": "img/road.jpg",
    "services-h4":"Nice, Nice Kitty",
    "services-content": "What side of a cat has the most fur? The outside.",
    "product-h4":"It's the Thought that Counts",
    "product-content": "What did the bald man say when he got a comb for Christmas? Thanks, I never part with it.",
    "vision-h4":"Furnace Substitute",
    "vision-content": "If you ever get cold, why should you stand in the corner of a room for a while? They're usually 90 degrees.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "Lindon, UT, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "zzzuzz@gmail.com",
  },
  "footer": {
    "copyright" : "Copyright Heather Nuffer 2019"
  },
};

//Selectors for global elements
let body = document.getElementsByTagName("body")[0];
let h4s = document.getElementsByTagName("h4");


// ***Set src for images***
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);
let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


// ***nav***
let nav = document.getElementsByTagName("nav")[0];

let navAs = document.querySelectorAll("nav a");
let navAsText = Object.values(siteContent["nav"]);
for (let i=0; i<navAs.length; i++) {
  navAs[i].textContent = navAsText[i];
  navAs[i].style.color = "#02C927"; //green
}

//Utilize .appendChild() and .prepend() to add two new 
//items to the navigation system. You can call them whatever you want.
const newNavItem1 = document.createElement("a");
newNavItem1.textContent = "Log In";
newNavItem1.style.color = "#02C927"; //green
nav.appendChild(newNavItem1);

const newNavItem2 = document.createElement("a");
newNavItem2.textContent = "Store";
newNavItem2.style.color = "#02C927"; //green
nav.prepend(newNavItem2);


// ***cta***
let ctaH1 = document.querySelector(".cta-text h1");
ctaH1.textContent = siteContent["cta"]["h1"];
let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];

// ***main-content***
let mainSection = document.querySelector(".main-content");

//top-content
let topSection = document.querySelector(".top-content");
let featuresH4 = document.querySelector(".top-content h4");
featuresH4.textContent = siteContent["main-content"]["features-h4"];
let featuresP = document.querySelector(".text-content p");
featuresP.textContent = siteContent["main-content"]["features-content"];

let aboutH4 = document.querySelector(".top-content .text-content:last-of-type h4");
aboutH4.textContent = siteContent["main-content"]["about-h4"];
let aboutP = document.querySelector(".top-content .text-content:last-of-type p");
aboutP.textContent = siteContent["main-content"]["about-content"];

//bottom-content
let servicesH4 = document.querySelector(".bottom-content h4");
servicesH4.textContent = siteContent["main-content"]["services-h4"];
let servicesP = document.querySelector(".bottom-content p");
servicesP.textContent = siteContent["main-content"]["services-content"];

let productH4 = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4");
productH4.textContent = siteContent["main-content"]["product-h4"];
let productP = document.querySelector(".bottom-content .text-content:nth-of-type(2) p");
productP.textContent = siteContent["main-content"]["product-content"];

let visionH4 = document.querySelector(".bottom-content .text-content:last-of-type h4");
visionH4.textContent = siteContent["main-content"]["vision-h4"];
let visionP = document.querySelector(".bottom-content .text-content:last-of-type p");
visionP.textContent = siteContent["main-content"]["vision-content"];

//***contact***
let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];
let contactAddress = document.querySelector(".contact p");
contactAddress.textContent = siteContent["contact"]["address"];
let contactPhone = document.querySelector(".contact p:nth-of-type(2)");
contactPhone.textContent = siteContent["contact"]["phone"];
let contactEmail = document.querySelector(".contact p:last-of-type");
contactEmail.textContent = siteContent["contact"]["email"];

//***footer***
let footer = document.getElementsByTagName("footer")[0];
let footerCopyright = document.querySelector("footer p");
footerCopyright.textContent = siteContent["footer"]["copyright"];

// ***Add button for user to click to change styling***

const styleButton = document.createElement("button");
styleButton.textContent = "Change to Dark Appearance";
styleButton.style.cssText = "background: white; \
  border: 1px double black; \
  font-size: 1rem; \
  padding: 0.75rem 1rem; \
  margin: 1.25rem";
footer.prepend(styleButton);
styleButton.onmouseover = function() {
  this.style.background = "black";
  this.style.color = "white";
}
styleButton.onmouseout = function() {
  this.style.background = "white";
  this.style.color = "black";
}

let dark = true;
styleButton.onclick = function() {
  navAs = document.querySelectorAll("nav a");
  
  if (dark) {
    console.log("Clicked");
    body.style.background = "black";
    body.style.color = "white";
    styleButton.textContent = "Change to Light Appearance";
    
    //add color to nav, h4, cta button, copyright
    for (let i=0; i<navAs.length; i++) { 
      navAs[i].style.color = "#F494DE";
    }
    for (let i=0; i<h4s.length; i++) { 
      h4s[i].style.color = "#F494DE";
    }
    ctaButton.style.background = "#84CF9B";
    footerCopyright.style.color = "#03C5FD";

    // put borders on imgs
    ctaImg.style.border = "1px solid white";
    ctaImg.style.borderRadius = "50%";
    midImg.style.borderTop = "1px solid white";
    midImg.style.borderBottom = "1px solid white";
    mainSection.style.borderBottom = "2px solid white";
    mainSection.style.borderTop = "2px solid white";

    dark = false;
  } else {
    // Reset everything to light appearance
    body.style.background = "white";
    body.style.color = "black";
    styleButton.textContent = "Change to Dark Appearance";
    
    mainSection.style.borderBottom = "2px solid black";
    mainSection.style.borderBottom = "2px solid white";
    for (let i=0; i<navAs.length; i++) { 
      navAs[i].style.color = "#b0b0b0";
    }
    for (let i=0; i<h4s.length; i++) { 
      h4s[i].style.color = "black";
    }
    ctaButton.style.background = "white";
    footerCopyright.style.color = "black";
    dark = true;
  }
  
}

// ***Add button for user to click to change content***

const contentButton = document.createElement("button");
contentButton.textContent = "Change Content";
contentButton.style.cssText = "background: white; \
  border: 1px double black; \
  font-size: 1rem; \
  padding: 0.75rem 1rem; \
  margin: 1.25rem auto; \
  display: block;";
  
footer.prepend(contentButton);
contentButton.onmouseover = function() {
  this.style.background = "#B0B0B0";
  this.style.color = "white";
}
contentButton.onmouseout = function() {
  this.style.background = "white";
  this.style.color = "black";
}

//Event handler for contentButton click
contentButton.onclick = function() {
  //nav
  logo.setAttribute('src', siteContent2["nav"]["img-src"]);
  navAs = document.querySelectorAll("nav a");
  navAsText = Object.values(siteContent2["nav"]);
  for (let i=0; i<navAs.length; i++) { 
    navAs[i].textContent = navAsText[i];
  }

  //cta
  ctaH1.textContent = siteContent2["cta"]["h1"];
  let smile = document.createElement("img");
  smile.src= "https://upload.wikimedia.org/wikipedia/commons/c/c7/Smile2.svg";
  ctaH1.append(smile);
  ctaImg.setAttribute('src', siteContent2["cta"]["img-src"]);
  ctaImg.style.maxWidth = "40%";
  ctaImg.style.borderRadius = "5px";

  //main-content
  featuresH4.textContent = siteContent2["main-content"]["features-h4"];
  featuresP.textContent = siteContent2["main-content"]["features-content"];
  aboutH4.textContent = siteContent2["main-content"]["about-h4"];
  aboutP.textContent = siteContent2["main-content"]["about-content"];
  midImg.setAttribute('src', siteContent2["main-content"]["middle-img-src"]);
  servicesH4.textContent = siteContent2["main-content"]["services-h4"];
  servicesP.textContent = siteContent2["main-content"]["services-content"];
  productH4.textContent = siteContent2["main-content"]["product-h4"];
  productP.textContent = siteContent2["main-content"]["product-content"];
  visionH4.textContent = siteContent2["main-content"]["vision-h4"];
  visionP.textContent = siteContent2["main-content"]["vision-content"];

  //Add a joke to top-content
  let newJoke = document.createElement("div");
  newJoke.classList.add("text-content");
  let newJokeH4 = document.createElement("h4");
  newJokeH4.textContent = "Scent Search";
  let newJokeP = document.createElement("p");
  newJokeP.textContent = "Why did the skunk cross the road? To get to the odor side.";
  newJoke.appendChild(newJokeH4);
  newJoke.appendChild(newJokeP);
  topSection.append(newJoke);

  //Adjust spacing for text-content
  let textContentDivs = document.querySelector(".text-content");
  for (let i=0; i<textContentDivs.length; i++) {
    textContentDivs[i].style.margin = "0.5rem 2rem";
  }

  //contact
  contactAddress.textContent = siteContent2["contact"]["address"];
  contactEmail.textContent = siteContent2["contact"]["email"];

  //footer
  footerCopyright.textContent = siteContent2["footer"]["copyright"];
  

}
