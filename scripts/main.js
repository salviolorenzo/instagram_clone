const grid = document.querySelector('[data-grid]');
const body = document.querySelector('body');
const bigImage = document.querySelector('[data-large]');
const bigImageThing = document.querySelector('[data-large-img]');
const picturesArray = [
    {url: 'images/cosmos01.jpg',
    caption: 'Here is a picture'},
    {url: 'images/cosmos02.jpg',
    caption:'Here is another one'},
    {url: 'images/cosmos03.jpg',
    caption:'Here is another'},
    {url: 'images/cosmos04.jpg',
    caption:'Here is another'},
    {url: 'images/cosmos05.jpg',
    caption:'Here is another'},
    {url: 'images/cosmos07.jpg',
    caption:'Here is another'},
    {url: 'images/atom.jpeg',
    caption:'Here is another'},
    {url: 'images/cosmos08.jpg',
    caption:'Here is another'},
    {url: 'images/cosmos09.jpg',
    caption:'Here is another'},
];


let index = 0;
function escapeButton(){
    let button = document.createElement('button');
    button.textContent = 'X'
    button.addEventListener('click', function(){
        let parent = button.parentNode;
        parent.parentNode.removeChild(parent);
    });
    return button;
}

// function createBigImage(item){
//     let big = document.createElement('div');
//     let bigImage = document.createElement('img');
//     bigImage.setAttribute('src', item);
//     big.classList.add('blown-up');
//     big.appendChild(escapeButton());
//     big.appendChild(bigImage);
//     body.appendChild(big); 
//     return big;
// }

function caption(){
    let caption = document.createElement('p');
    caption.textContent = picturesArray[index]['caption'];
    return caption;
}

function drawImages(){
    let post = picturesArray[index];
    let image = document.createElement('img');
    image.setAttribute('src', post['url'] );
    image.classList.add ("gridImages");

    image.addEventListener('click', function(event){
        bigImageThing.setAttribute('src', event.target.src);
        bigImage.classList.remove('blown-up-hidden');
        bigImage.addEventListener('click', function(){
            bigImage.classList.add('blown-up-hidden');
        });
        // bigImage.appendChild(escapeButton());
    });

    return image;

}


function imageContainer(){
    let container = document.createElement('div');
    container.classList.add('image-container');
    container.appendChild(drawImages(), caption());
    grid.appendChild(container);
    return container;
}

function drawImagesFromRemote(){
    picturesArray.forEach(function(){
        imageContainer();
        index++;
    });
}

drawImagesFromRemote();


// let data = fetch('/scripts/imageData.json')
//                     .then(r=>r.json())
//                     .then(drawImagesFromRemote);

if (bigImage.classList.includes('blown-up-hidden')){
    bigImage.addEventListener('keydown', function(event){
        if (event.keyCode === 37){
            console.log('pressed');
            bigImageThing.setAttribute('src', (post-1)['url'] );
        }
    });
}