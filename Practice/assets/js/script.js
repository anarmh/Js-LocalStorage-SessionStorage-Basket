"use strict";

// localStorage.setItem("name","Anar");
// console.log(localStorage.getItem("name"));

// localStorage.setItem("surname","Huseynov");

// console.log(localStorage.getItem("surname"))

// localStorage.removeItem("surname")

// let names=["Anar","Tunar","Elnar","Atilla","Nihat"];

// localStorage.setItem("names",JSON.stringify(names))
// let names1=JSON.parse(localStorage.getItem("names")) ;

// for (const name of names1) {
//     console.log(name);
// }

// let stu1={
//     name:"Anar",
//     surname:"Huseynov"
// }
// let stu2={
//     name:"Tunar",
//     surname:"Huseynli"
// }
// let stu3={
//     name:"Elnar",
//     surname:"Huseynli"
// }

// let students=[stu1,stu2,stu3];

// localStorage.setItem("students",JSON.stringify(students));

// let students1=JSON.parse(localStorage.getItem("students"));

// students1.forEach(stu => {
//     console.log(stu.name+" "+ stu.surname);
// });

let basketBtns = document.querySelectorAll(".add-basket");

let basket = [];
if (JSON.parse(localStorage.getItem("basket")) != null) {
  basket = JSON.parse(localStorage.getItem("basket"));
}

basketBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    let cardDesc = this.previousElementSibling.innerText;
    let cardImage = this.parentNode.previousElementSibling.getAttribute("src");
    let cardName = this.parentNode.firstElementChild.innerText;
    let cardId = parseInt(this.closest(".card").getAttribute("data-id"));

    let existCard = basket.find((m) => m.id == cardId);
    if (existCard != undefined) {
      existCard.count++;
    } else {
      basket.push({
        id: cardId,
        name: cardName,
        description: cardDesc,
        image: cardImage,
        count: 1,
      });
    }

    localStorage.setItem("basket", JSON.stringify(basket));
  });
});
