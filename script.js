const container = document.querySelector('.container');
container.style.display = 'flex';
container.style.FlexDirection = 'row';
container.style.background = 'white';

const content = document.querySelector('.content');
content.style.backgroundImage = "url('bg-pattern-desktop.svg')";
content.style.backgroundRepeat = ('no-repeat');
content.style.padding = ('100px 200px');

const text = document.querySelector('h1');
text.style.fontSize = '70px';
text.style.textTransform = 'uppercase';
text.style.letterSpacing = '15px';

const title = document.querySelector('span')
title.style.color = ('hsl(0, 36%, 70%)');
title.style.fontWeight = '100';

const paragraph = document.querySelector('p');
paragraph.style.color=('hsl(0, 36%, 70%)');
paragraph.style.fontSize = '19px';
paragraph.style.marginTop = '-30px';
paragraph.style.lineHeight = ('2');

const button = document.querySelector('.input');
button.style.display = 'flex';
button.style.justifyContent = 'space-between';
button.style.ilignItems = 'center';
button.style.paddingLeft = '10px';
button.style.border = '1px #cccccc solid';
button.style.borderRadius  = '30px';
button.style.marginTop = '30px';

const input = document.querySelector('.email');
input.style.border = 'none';
input.style.padding = '10px 20px';

const image = document.querySelector('.button');
image.style.backgroundColor = '#ef9e9b';
image.style.padding = '10px 30px';
image.style.borderRadius = '30px';

document.querySelector('.button').addEventListener("click", function() {
    let error = document.querySelector('.error');
    error.style.display = 'block';
});

const box = document.querySelector('.maintext');
box.style.marginLeft = '-50px';

