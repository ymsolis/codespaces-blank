let image = document.querySelector(".image");
let frogName = document.querySelector(".frog-name");
let habit = document.querySelector(".habit");
let infoLink = document.querySelector(".info-link");

let add = document.querySelector(".add");

 let display=document.querySelector(".display");


let disImage=document.querySelector(".display-image");
let disName=document.querySelector(".display-name");
let disHabit=document.querySelector(".display-habit");
let dislink=document.querySelector(".display-link");
console.log(disImage);

let frog1={
   frog_image:"blue.png",
frog_name:"Blue Poison Dart Frog",
frog_habit:"Forest Islands",
info_link:"https://aqua.org/explore/animals/blue-poison-dart-frog",
  };

let frog2={
  frog_image:"eyes.png",
  frog_name:"red-eye frog",
  frog_habit:"jungles",
  info_link:"https://animaldiversity.org/accounts/Agalychnis_callidryas/",
  };


let frog3={
  frog_image:"strawberry.png",
  frog_name:"Strawberry dart frog",
  frog_habit:"lowlands",
  info_link:"https://animaldiversity.org/accounts/Oophaga_pumilio/",
  };



let collection=[frog1, frog2, frog3]



function addFrogInfo() {
  let imageValue=image.value;
  console.log(imageValue);
  let nameValue= frogName.value;
  let habitValue=habit.value;
    let linkValue=infoLink.value;

  let newFrog={
    frog_image:imageValue,
    frog_name:nameValue,
    frog_habit:habitValue,
    info_link:linkValue,
  };

  collection.push(newFrog);
    console.log(collection)
      };
//    let result = document.querySelector(".result");
// let show= collection.length;
// result.innerHTML = `there are ${show} frogs in your collection`;





function displayFrogInfo() {
  
  // collection.forEach(function(item) {
  //   disImage.insertAdjacentHTML('beforeend', `<p> <img src=${item.frog_image}></p>`);
  //   disName.insertAdjacentHTML('beforeend', `<p>${item.frog_name}</p>`);
  //   disHabit.insertAdjacentHTML('beforeend', `<p>${item.frog_habit}</p>`);
  //   dislink.insertAdjacentHTML('beforeend', `<p><a href=${item.info_link} target="_blank">Click Here</a> </p>`);
  // });

   collection.forEach(function(item) {
    display.insertAdjacentHTML('beforeend', `<div class="container">

    <img src=${item.frog_image}>
    <div class="side">
    <h4>${item.frog_name}</h4>
    <h4>${item.frog_habit}</h4>
    <a href=${item.info_link} target="_blank">Click Here</a>
     </div>
     </div>`)
   });
 }

                      
//     let result = document.querySelector(".result");
//   let show= collection.length;
//   result.innerHTML = `there are ${show} frogs in your collection`;

//   }

  


add.onclick = function() {
    emptyDisplay();
  addFrogInfo();
   displayFrogInfo();
 };

 displayFrogInfo();

function emptyDisplay() {

  display.innerHTML="";

}
