let project1 = document.getElementById('project1');
let project1Text = document.getElementById('project1_text');
let project1Hide = document.getElementById('project1Hide');

let project2 = document.getElementById('project2');
let project2Text = document.getElementById('project2_text');

let project3 = document.getElementById('project3');
let project3Text = document.getElementById('project3_text');


function showText(event) {
    switch (event.target) {
        case project1:
            project1Text.style.display = 'block';
            project1.style.display = 'none';
            project1Hide.style.display = 'block';
            project1Hide.style.cursor = 'pointer';
            break;
        case project2:
            project2Text.style.display = 'block';
            project2.style.display = 'none';
            project2Hide.style.display = 'block';
            project2Hide.style.cursor = 'pointer';
            break;
        case project3:
            project3Text.style.display = 'block';
            project3.style.display = 'none';
            project3Hide.style.display = 'block';
            project3Hide.style.cursor = 'pointer';
            break;
        default:
            alert('invalid');
    };
};

function hideText(event) {
    switch (event.target) {
        case project1Hide:
            project1Text.style.display = '';
            project1.style.display = '';
            project1Hide.style.display = '';
            break;
        case project2Hide:
            project2Text.style.display = '';
            project2.style.display = '';
            project2Hide.style.display = '';
            break;
        case project3Hide:
            project3Text.style.display = '';
            project3.style.display = '';
            project3Hide.style.display = '';
            break;
        default:
            alert('invalid');
    }
}

project1.addEventListener('click', showText);
project1Hide.addEventListener('click', hideText);

project2.addEventListener('click', showText);
project2Hide.addEventListener('click', hideText);

project3.addEventListener('click', showText);
project3Hide.addEventListener('click', hideText);