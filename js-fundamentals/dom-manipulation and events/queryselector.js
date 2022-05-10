const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para1= document.createElement('p');
para1.classList.add('p1');
para1.style.cssText = 'color:red;background:white';
para1.textContent= "Hey I'm red!";

container.appendChild(para1);

const header1= document.createElement('h3');
header1.classList.add('header1');
header1.style.cssText = 'color:blue;background:white'; 
header1.textContent= "I'm a blue h3!";

container.appendChild(header1);