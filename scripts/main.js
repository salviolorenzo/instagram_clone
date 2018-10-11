const grid = document.querySelector('[data-grid]')
const picturesArray = [
    {url: 'images/atom.jpeg',
    caption: 'Here is a picture'},
    {url: 'images/boss.jpeg',
    caption:'Here is another one'},
    {url: 'images/computer.png',
    caption:'Here is another'},
    {url: 'images/burial.jpeg',
    caption:'Here is another'},
    {url: 'images/computer.png',
    caption:'Here is another'},
    {url: 'images/img.png',
    caption:'Here is another'},
    {url: 'images/burial.jpeg',
    caption:'Here is another'},
    {url: 'images/boss.jpeg',
    caption:'Here is another'},
    {url: 'images/atom.jpeg',
    caption:'Here is another'},
    {url: 'images/burial.jpeg',
    caption:'Here is another'},
    {url: 'images/boss.jpeg',
    caption:'Here is another'},
    {url: 'images/atom.jpeg',
    caption:'Here is another'}
]

const elementsList = [];
const big = document.querySelector('[data-large]');



let index = 0;
// function drawRow(){
//     let row = document.createElement('div');
//     row.classList.add('rows');
//     grid.appendChild(row);
// }




function drawImages(){
    let post = picturesArray[index];
    let container = document.createElement('div');
    let image = document.createElement('img');
    let caption = document.createElement('p');
    image.setAttribute('src', post['url'] );
    image.addEventListener('click', function(){
        console.log('clicked');
    });
    image.classList.add ("gridImages");
    container.classList.add('image-container');
    caption.textContent = post['caption'];
    container.appendChild(image);
    // container.appendChild(caption);
    grid.appendChild(container);
};



// drawRow();
for(item of picturesArray){
    drawImages();
    index++;
}



