'use strict';

var firstImageIndex;
var seconedImageIndex;
var thirdImageIndex;

var imgdiv1 = document.getElementById('imagetitle1')
var firstImgTitle = document.createElement('h2');
var firstElement = document.getElementById('st-image');

var imgdiv2 = document.getElementById('imagetitle2')
var secondImgTitle = document.createElement('h2');
var secondElement = document.getElementById('nd-image');

var imgdiv3 = document.getElementById('imagetitle3')
var thirdElement = document.getElementById('rd-image');
var thirdImgTitle = document.createElement('h2');

var maxAttempts = 25;
var userCount = 0
var items = [];


var imageSection = document.getElementById('images-Section');
var userRounds = document.getElementById ('maxuserinput')
var ShowResult= document.getElementById ('submitbtn1')
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

imageSection.addEventListener('click', userClick);
userRounds.addEventListener('submit', maxUserRound)
ShowResult.addEventListener('click', lastList)


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
    } while (firstImageIndex === seconedImageIndex || firstImageIndex === thirdImageIndex || thirdImageIndex === seconedImageIndex);

    // console.log('hello faten ');
    firstImgTitle.textContent = items[firstImageIndex].ImageName;
    imgdiv1.appendChild(firstImgTitle);
    secondImgTitle.textContent = items[seconedImageIndex].ImageName;
    imgdiv2.appendChild(secondImgTitle);
    thirdImgTitle.textContent = items[thirdImageIndex].ImageName;
    imgdiv3.appendChild(thirdImgTitle);
    console.log(firstImgTitle);

    firstElement.setAttribute('src', items[firstImageIndex].imagepath);
    secondElement.setAttribute('src', items[seconedImageIndex].imagepath);
    thirdElement.setAttribute('src', items[thirdImageIndex].imagepath);

    items[firstImageIndex].numDisplayed++;
    items[seconedImageIndex].numDisplayed++;
    items[thirdImageIndex].numDisplayed++;
};
renderthreeRandomImages();
// console.log('indixdisplayed ',items)


// function number of image votes
function userClick(event) {
    event.preventDefault()
    
    console.log('event', event);
   if(userCount < maxAttempts){
    if (event.target.id === 'st-image'){
        items[firstImageIndex].votes++;
        userCount=userCount+1
    }else{
        if (event.target.id === 'nd-image'){
            items[seconedImageIndex].votes++;
            userCount=userCount+1
        }else{
            if (event.target.id === 'rd-image'){
                items[thirdImageIndex].votes++; 
                userCount=userCount+1
            } 
        }
    }
    renderthreeRandomImages();
   }else{
       imageSection.removeEventListener('click', userClick);
       ShowResult.removeAttribute('disabled')
   }
   

}
// function number of user vote input
function maxUserRound(event){
    event.preventDefault();
    maxAttempts=event.target.userInput.value
}
// function show result button
function lastList (){
    
    var finalResult = document.getElementById('Final-List');
    var imageResult;
    for(var i = 0; i<items.length;i++){
        imageResult=document.createElement('li')
        imageResult.textContent=items[i].ImageName + ' has '+items[i].votes + ' votes, and was seen '+ 
        items[i].numDisplayed +' times.'
        finalResult.appendChild(imageResult);
    };
}