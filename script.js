//Changing the header background
function randomHeader() {
    let header = document.getElementById('header');
    let num = Math.floor(Math.random() * 5);
    
    if (num === 0) {
        header.style.backgroundImage = 'url(./images/headers/blue.svg)';
    } else if (num === 1) {
        header.style.backgroundImage = 'url(./images/headers/colorful.svg)';
    } else if (num === 2) {
        header.style.backgroundImage = 'url(./images/headers/green.svg)';
    } else if (num === 3) {
        header.style.backgroundImage = 'url(./images/headers/neon1.svg)';
    } else {
        header.style.backgroundImage = 'url(./images/headers/red.svg)';
    }
}

randomHeader();

//Show and hide the text description of project card
let project1 = document.getElementById('project1');
let project1_text = document.getElementById('project1_text');

let project2 = document.getElementById('project2');
let project2_text = document.getElementById('project2_text');

let project3 = document.getElementById('project3');
let project3_text = document.getElementById('project3_text');

function showOrHide(event) {
    if (event.target === project1) {
        if (project1_text.style.display === 'block') {
            project1_text.style.display = 'none';
            project1.innerHTML = 'Show more';
        } else {
            project1_text.style.display = 'block';
            project1.innerHTML = 'Show less';
        }
    } else if (event.target === project2) {
        if (project2_text.style.display === 'block') {
            project2_text.style.display = 'none';
            project2.innerHTML = 'Show more';
        } else {
            project2_text.style.display = 'block';
            project2.innerHTML = 'Show less';
        }
    } else if (event.target === project3) {
        if (project3_text.style.display === 'block') {
            project3_text.style.display = 'none';
            project3.innerHTML = 'Show more';
        } else {
            project3_text.style.display = 'block';
            project3.innerHTML = 'Show less';
        }
    }
}

project1.addEventListener('click', showOrHide);
project2.addEventListener('click', showOrHide);
project3.addEventListener('click', showOrHide);