'use strict';

var firstImageIndex;
var seconedImageIndex;
var thirdImageIndex;

var firstElement = document.getElementById('st-image');
var secondElement = document.getElementById('nd-image');
var thirdElement = document.getElementById('rd-image');

var maxAttempts = 25;
var userCount = 0
var items = [];
// var presented = [];

function ItemImages(ImageName, imagepath) {
    this.ImageName = ImageName;
    this.imagepath = imagepath;
    this.votes = 0;
    this.numDisplayed = 0
    items.push(this);
}


new ItemImages('Bag', 'img/bag.jpg');
new ItemImages('Banana', 'img/banana.jpg');
new ItemImages('Bathroom', 'img/bathroom.jpg');
new ItemImages('boots', 'img/boots.jpg');
new ItemImages('Breakfast', 'img/breakfast.jpg');
new ItemImages('Bubblegum', 'img/bubblegum.jpg');
new ItemImages('Cthulhu', 'img/cthulhu.jpg');
new ItemImages('Dog-duck', 'img/dog-duck.jpg');
new ItemImages('Dragon', 'img/dragon.jpg');
new ItemImages('Pen', 'img/pen.jpg');
new ItemImages('Pet-sweep', 'img/pet-sweep.jpg');
new ItemImages('Scissors', 'img/scissors.jpg');
new ItemImages('Sweep', 'img/sweep.png');
new ItemImages('Tauntaun', 'img/tauntaun.jpg');
new ItemImages('Unicorn', 'img/unicorn.jpg');
new ItemImages('usb', 'img/usb.gif');
new ItemImages('water-can', 'img/water-can.jpg');
new ItemImages('wine-glass', 'img/wine-glass.jpg');
new ItemImages('Chair', 'img/chair.jpg');
new ItemImages('shark', 'img/shark.jpg');

// console.log(items[0].imagepath);

// create random number
function randomIndex() {
    var randomly = Math.floor(Math.random() * items.length);
   
    return randomly;
};

// function render 3 random images


function renderthreeRandomImages() {
    firstImageIndex = randomIndex();
    // console.log((firstImageIndex));
  
    
    do {
       seconedImageIndex = randomIndex();
        thirdImageIndex = randomIndex();
    } while (firstImageIndex === seconedImageIndex && firstImageIndex === thirdImageIndex && thirdImageIndex === seconedImageIndex);

    // console.log('hello faten ');
    firstElement.setAttribute('src', items[firstImageIndex].imagepath);
    secondElement.setAttribute('src', items[seconedImageIndex].imagepath);
    thirdElement.setAttribute('src', items[thirdImageIndex].imagepath);

    items[firstImageIndex].numDisplayed++;
    items[seconedImageIndex].numDisplayed++;
    items[thirdImageIndex].numDisplayed++;
};
renderthreeRandomImages();
// console.log('indixdisplayed ',items)

var imageSection = document.getElementById('images-Section');
imageSection.addEventListener('click', userClick);

function userClick(event) {
    event.preventDefault()
    userCount=userCount+1
    console.log('event', event);
   if(userCount <= maxAttempts){
    if (event.target.img === 'st-image'){
        items[firstImageIndex].votes++;
    }else{
        if (event.target.img === 'nd-image'){
            items[seconedImageIndex].votes++;
        }else{
            if (event.target.img === 'rd-image'){
                items[thirdImageIndex].votes++; 
            } 
        }
    }
    renderthreeRandomImages();
   }else{
       var finlaResult = document.getElementById('Final-List');
       var imageResult;
       for(var i = 0; i<items.length;i++){
           imageResult=document.createElement('li')
           imageResult.textContent=items[i].ImageName + ' has '+items[i].votes + ' votes, and was seen '+ items[i].numDisplayed +' times.'
       };
       imageSection.removeEventListener('click', userClick);
   }
   

}