//BLACK SQUARE
function hideWithDisplay(){
    document.getElementById('blackSquare').style.display = 'none';
}

function removeElement(){
    const element = document.getElementById('blackSquare');
    element.parentNode.removeChild(element);
}

function hideWithClass(){
    const element = document.getElementById('blackSquare');
    element.classList.add('hidden');
}
//INPUT
function toggleVisibility(){
    const element = document.getElementById('blackSquare');
    if (element.style.display === 'none' || window.getComputedStyle(element).display === 'none'){
        element.style.display = 'flex';
    } else {
        element.style.display = 'none';
    }
}
function toggleElements() {
    const selector = document.getElementById('selectorInput').value;
    const elements = document.querySelectorAll(selector);

elements.forEach(element =>{
    if (element.style.display === 'none' || window.getComputedStyle(element).display === 'none'){
        element.style.display = 'block';
    }else {
        element.style.display = 'none';
    }
});
}

//YELLOW SQUARE
let clickCount = 0;
function showGreeting(){
    if (clickCount ===0) {
        alert("Hello!");
        clickCount++;}
    else {
        const square = document.getElementById('yellowSquare');
        square.removeEventListener('click', showGreeting);
        square.style.display = 'none';
    }
}
const yellowSquare = document.querySelector('.yellowSquare');
yellowSquare.addEventListener('click', showGreeting)

//RED SQUARE

document.addEventListener('DOMContentLoaded', () => {
    const hoverButtonRed = document.getElementById('hoverButton');
    const redSquare = document.getElementById('redSquare');

    if (hoverButtonRed && redSquare) {
        hoverButtonRed.addEventListener('mouseenter', function() {
            console.log('Mouse entered the button');
            redSquare.style.display = 'block';
        });

        hoverButtonRed.addEventListener('mouseleave', function() {
            console.log('Mouse left the button');
            redSquare.style.display = 'none';
        });
    } else {
        console.log('Red square elements not found');
    }
});

//GREEN SQUARE

document.addEventListener('DOMContentLoaded', () => {
    const selectorInput = document.getElementById('selectorInput');
    const greenRectangle = document.getElementById('greenRectangle');

    if (selectorInput && greenRectangle) {
        selectorInput.addEventListener('focus', function() {
            console.log('Input focused');
            greenRectangle.style.display = 'block';
        });

        selectorInput.addEventListener('input', function() {
            console.log('Input event');
            greenRectangle.style.display = 'none';
        });
    } else {
        console.log('Green rectangle elements not found');
    }
});

//Loading Images

document.addEventListener('DOMContentLoaded', function (){
    const imageUrlTextarea = document.getElementById('imageUrlTextarea');
    const loadImagesButton = document.getElementById('loadImagesButton');
    const imageContainer = document.getElementById('imageContainer');
    if (loadImagesButton && imageContainer) {
        loadImagesButton.addEventListener('click', function (){
            const imageUrls = imageUrlTextarea.value.split('\n').filter(url => url.trim() !=='');
            imageContainer.innerHTML = '';
            imageUrls.forEach(url => {
                const img = document.createElement('img');
                img.src = url.trim();
                img.alt = 'Loaded Image';
                imageContainer.appendChild(img);
            })
        })
    }else {
        console.log('Load image button or image container not found');
    }
});

//DEFINE THE LANGUAGE

document.addEventListener('DOMContentLoaded', function() {
    const infoBlock = document.getElementById('infoBlock');
    const languageElement = document.getElementById('language');
    const userLanguage = navigator.language;
    languageElement.textContent = `Мова: ${userLanguage}`;
    console.log(navigator.language);

    // cursor coordinates

    document.addEventListener('mousemove', function(event) {
        const x = event.clientX;
        const y = event.clientY;

        infoBlock.querySelector('#coordinates').textContent = `X: ${x}, Y: ${y}`;
    });
});

// GPS

function showPosition(position) {
    const latitude = position.coords.latitude.toFixed(6);
    const longitude = position.coords.longitude.toFixed(6);
    const latitudeElement = document.getElementById('latitude');
    const longitudeElement = document.getElementById('longitude');

    latitudeElement.textContent = latitude;
    longitudeElement.textContent = longitude;
}
function showError(error) {
    console.error('Error getting location:', error);
    const coordinatesBlock = document.getElementById('coordinatesBlock');
    coordinatesBlock.textContent = 'Unable to determine location';
}
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        console.error('Geolocation is not supported by this browser.');
        const coordinatesBlock = document.getElementById('coordinatesBlock');
        coordinatesBlock.textContent = 'Geolocation is not supported by this browser';
    }
}
document.addEventListener('DOMContentLoaded', () => {
    getLocation();
});

//3 storage blocks
// Block 1: LocalStorage
document.addEventListener('DOMContentLoaded', () => {
    const block1 = document.getElementById('block1');
    if (localStorage.getItem('block1Text')) {
        block1.innerText = localStorage.getItem('block1Text');
    }
    block1.addEventListener('input', () => {
        localStorage.setItem('block1Text', block1.innerText);
    });

    // Block 2: Cookies
    const block2 = document.getElementById('block2');
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };
    if (getCookie('block2Text')) {
        block2.innerText = getCookie('block2Text');
    }
    block2.addEventListener('input', () => {
        document.cookie = `block2Text=${block2.innerText}; path=/; max-age=${60 * 60 * 24 * 30}`;
    });

    // Block 3: SessionStorage
    const block3 = document.getElementById('block3');
    if (sessionStorage.getItem('block3Text')) {
        block3.innerText = sessionStorage.getItem('block3Text');
    }
    block3.addEventListener('input', () => {
        sessionStorage.setItem('block3Text', block3.innerText);
    });
});


    // Scroll to top button
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

// TWO SQUARES: INNER AND OUTER

document.addEventListener('DOMContentLoaded', () => {
    const outerBlock = document.querySelector('.outer-block');
    const innerBlock = document.querySelector('.inner-block');

    outerBlock.addEventListener('click', () => {
        alert('Alert from a large block');
    });

    innerBlock.addEventListener('click', (event) => {
        alert('Alert from a small block');
        event.stopPropagation();
    });
});


// BIG GREY SQUARE, STOP SCROLLING
document.addEventListener('DOMContentLoaded', function() {
    const overlayButton = document.getElementById('overlayButton');
    const overlay = document.getElementById('overlay');

    overlayButton.addEventListener('click', function() {
        overlay.classList.add('visible');
        document.body.style.overflow = 'hidden';
    });

    overlay.addEventListener('click', function() {
        overlay.classList.remove('visible');
        document.body.style.overflow = '';
    });
});

//STOP BUTTON "GO"
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Form submitted!');
    });
});

// INPUT THE IMG

const fileInput = document.getElementById('fileInput');
const fileInputLabel = document.querySelector('.file-input__label');

fileInputLabel.addEventListener('dragover', function(e) {
   //prevents the browser from performing typical drag-and-drop actions
   // that might affect the page's default behavior when dragging files
    e.preventDefault();
    fileInputLabel.classList.add('dragover');
});

fileInputLabel.addEventListener('dragleave', function(e) {
    e.preventDefault();
    fileInputLabel.classList.remove('dragover');
});

fileInputLabel.addEventListener('drop', function(e) {
    e.preventDefault();
    fileInputLabel.classList.remove('dragover');

    const files = e.dataTransfer.files;
    if (files.length > 0) {
        fileInput.files = files;
        updateFileText();
    }
});

fileInput.addEventListener('change', function() {
    updateFileText();
});

function updateFileText() {
    const fileName = fileInput.files[0].name;
    const fileTextElement = document.querySelector('.file-input__text');
    fileTextElement.textContent = `File selected: ${fileName}`;
}
