"use strict";

let basketBtns = document.querySelectorAll(".add-basket");

let basket = [];

if (JSON.parse(localStorage.getItem("basket")) != null) {
  basket = JSON.parse(localStorage.getItem("basket"));
}

basketBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    let cardImage = this.parentNode.previousElementSibling.getAttribute("src");
    let cardName = this.parentNode.firstElementChild.innerText;
    let cardDesc = this.parentNode.children[1].innerText;
    let cardPrice = this.previousElementSibling.innerText;
    let cardId = this.closest(".card").getAttribute("data-id");

    let existCard = basket.find(m => m.id == cardId);
    if (existCard != undefined) {
      existCard.count++;
    } else {
      basket.push({
        id: cardId,
        name: cardName,
        description: cardDesc,
        image: cardImage,
        price: cardPrice,
        count: 1,
      });
    }

    localStorage.setItem("basket", JSON.stringify(basket));
    getBasketCount(basket)
  });
});


function getBasketCount(arr){

  let count=0;
  for (const item of arr) {
      count+=item.count;
  }
  document.querySelector("sup").innerText=count;
}
getBasketCount(basket)


