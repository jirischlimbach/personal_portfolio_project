let project1 = document.getElementById('project1');
let project1Text = document.getElementById('project1_text');

function showText() {
    project1Text.style.display = 'block';
};

project1.addEventListener('click', showText);