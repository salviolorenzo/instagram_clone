const grid = document.querySelector('[data-grid]');
const body = document.querySelector('body');
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


let index = 0;
// function drawRow(){
//     let row = document.createElement('div');
//     row.classList.add('rows');
//     grid.appendChild(row);
// }

function escapeButton(){
    let button = document.createElement('button');
    button.textContent = 'X'
    button.addEventListener('click', function(){
        let parent = button.parentNode;
        parent.parentNode.removeChild(parent);
    })
    return button;
}

function createBigImage(item){
    let big = document.createElement('div');
    let bigImage = document.createElement('img');
    bigImage.setAttribute('src', item.firstChild.src);
    big.classList.add('blown-up');
    big.appendChild(escapeButton());
    big.appendChild(bigImage);
    body.appendChild(big);
    return big;
}

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
    // image.addEventListener('click', function(){
    //     creatBigImage(image);
        console.log('clicked');

    return image;
}

function imageContainer(){
    let container = document.createElement('div');
    container.classList.add('image-container');
    container.appendChild(drawImages(),caption());
    grid.appendChild(container);
    container.addEventListener('click', function(){
        createBigImage(container);
    return container;
});
}



// drawRow();
picturesArray.forEach(function(){
    imageContainer();
    index++;
});



