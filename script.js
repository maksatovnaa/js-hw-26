const container = document.querySelector('.container');
container.style.display = 'flex';
container.style.FlexDirection = 'row';
container.style.background = 'white';

const content = document.querySelector('.content');
content.style.backgroundImage = "url('bg-pattern-desktop.svg')";
content.style.backgroundRepeat = ('no-repeat');
content.style.padding = ('100px 200px');

const heading = document.querySelector('h1');
heading.style.fontSize = '70px';
heading.style.textTransform = 'uppercase';
heading.style.letterSpacing = '15px';

const title = document.querySelector('span')
title.style.color = ('hsl(0, 36%, 70%)');
title.style.fontWeight = '100';

const paragraph = document.querySelector('p');
paragraph.style.color=('hsl(0, 36%, 70%)');
paragraph.style.fontSize = '19px';
paragraph.style.marginTop = '-30px';
paragraph.style.lineHeight = ('2');

const inner = document.querySelector('.input');
inner.style.display = 'flex';
inner.style.justifyContent = 'space-between';
inner.style.ilignItems = 'center';
inner.style.paddingLeft = '10px';
inner.style.border = '1px #cccccc solid';
inner.style.borderRadius  = '30px';
inner.style.marginTop = '30px';

const input = document.querySelector('.email');
input.style.border = 'none';
input.style.padding = '10px 20px';

const image = document.querySelector('.button');
image.style.backgroundColor = '#ef9e9b';
image.style.padding = '10px 30px';
image.style.borderRadius = '30px';

const box = document.querySelector('.maintext');
box.style.marginLeft = '-50px';