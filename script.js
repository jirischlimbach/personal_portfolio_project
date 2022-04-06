let project1 = document.getElementById('project1');
let project1Text = document.getElementById('project1_text');

let project2 = document.getElementById('project2');
let project2Text = document.getElementById('project2_text');

let project3 = document.getElementById('project3');
let project3Text = document.getElementById('project3_text');


function showText(event) {
    switch (event.target) {
        case project1:
            project1Text.style.display = 'block';
            project1.innerHTML = 'Show less';
            break;
        case project2:
            project2Text.style.display = 'block';
            project2.innerHTML = 'Show less';
            break;
        case project3:
            project3Text.style.display = 'block';
            project3.innerHTML = 'Show less';
            break;
        default:
            alert('invalid');
    };
};

project1.addEventListener('click', showText);
project2.addEventListener('click', showText);
project3.addEventListener('click', showText);