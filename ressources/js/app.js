const portrait = document.getElementsByClassName('portrait');
const portraitContainer = document.getElementsByClassName('portraitcontainer');
const portraitNameAndAgeContainer = document.getElementsByClassName('nameandagecontainer');
const closeButton = document.getElementsByClassName('closebutton');

const description = document.getElementsByClassName('description');

const profiles = document.getElementsByClassName('profile');
// Profile Counter

let profileCounter = 0;

function profileCounterIncrement() {
    if (profileCounter < 2) {
        profileCounter++
    } else {
        profileCounter = 0;
    }
}
// Initialise the first profile 
profiles[profileCounter].style.display = 'block';

// Arrows Assignements 

const arrows = document.getElementsByClassName('Arrow');
const topArrow = arrows[0];
const bottomArrow = arrows[1];


// Arrows Event listeners Assignements 
const mouseEnterArrow = function(event) {
    event.target.style.cursor = 'pointer';
}

topArrow.addEventListener('mouseenter', mouseEnterArrow);
bottomArrow.addEventListener('mouseenter', mouseEnterArrow);


    // I learned about reflow today :)
const mouseClickTopArrow = function() {
    portraitContainer[profileCounter].style.animation = '';
    void portraitContainer[profileCounter].offsetWidth;
    portraitContainer[profileCounter].style.animation = 'swipe-up 1s ease-in-out forwards';
    profileCounterIncrement();
    profileLogic();
    profiles[profileCounter].style.display = 'block';
    portraitContainer[profileCounter].style.animation = 'come-up 1s ease-in-out';
    
}

topArrow.addEventListener('click', mouseClickTopArrow);

// Handles all profile Logic
const profileLogic = function() {
    //Mouse-over portrait[profileCounter] functions

    const mouseEnterPortrait = function() {
        portraitNameAndAgeContainer[profileCounter].style.bottom = '20px';
        portrait[profileCounter].style.cursor = 'pointer';
    }

    const mouseLeavesPortrait = function() {
        portraitNameAndAgeContainer[profileCounter].style.bottom = '60px';
    }

    portrait[profileCounter].addEventListener('mouseenter', mouseEnterPortrait);
    portrait[profileCounter].addEventListener('mouseleave', mouseLeavesPortrait);
    

    //Mouse-over close button functions

    const mouseEnterCloseButton = function() {
        closeButton[profileCounter].style.cursor = 'pointer';
    }

    //Click close button function

    const clickCloseButton = function() {
        portraitContainer[profileCounter].style.top = '50%';
        portrait[profileCounter].addEventListener('mouseenter', mouseEnterPortrait);
        portrait[profileCounter].addEventListener('mouseleave', mouseLeavesPortrait);
        description[profileCounter].style.animation = 'disappear 0.5s ease forwards';
        closeButton[profileCounter].style.animation = 'disappear 0.25s ease forwards';
        portraitNameAndAgeContainer[profileCounter].style.bottom = '60px';
        closeButton[profileCounter].removeEventListener('click', clickCloseButton);
        topArrow.style.animation = 'appear 0.25s ease forwards';
        bottomArrow.style.animation = 'appear 0.25s ease forwards';

    }

    //What happends when you click the portrait

    portrait[profileCounter].addEventListener('click', function() {
        portraitContainer[profileCounter].style.top = '250px';
        description[profileCounter].style.animation = 'appear 1s ease forwards';

        portrait[profileCounter].removeEventListener('mouseenter', mouseEnterPortrait);
        portrait[profileCounter].removeEventListener('mouseleave', mouseLeavesPortrait);
        portrait[profileCounter].style.cursor = 'initial';

        closeButton[profileCounter].style.display = 'block';
        closeButton[profileCounter].style.animation = 'appear 0.25s ease forwards';
        closeButton[profileCounter].addEventListener('mouseover', mouseEnterCloseButton);
        closeButton[profileCounter].addEventListener('click', clickCloseButton);
        topArrow.style.animation = 'disappear 0.25s ease forwards';
        bottomArrow.style.animation = 'disappear 0.25s ease forwards';
    })

}

profileLogic();