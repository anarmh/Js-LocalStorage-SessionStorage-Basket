"use strict";

let products = JSON.parse(localStorage.getItem("basket"));
let tableBody = document.querySelector("tbody");
let productalert=document.querySelector(".alert-warning ")


if(products!=null){
    products.forEach((product) => {
        tableBody.innerHTML += `
      <tr>
          <td><img src="${product.image}" alt=""></td>
           <td>${product.name}</td>
              <td>${product.description}</td>
           <td>  <div class="count">
           <button class="decrease">-</button>
           <input type="number" value="1" min="1" disabled>
           <button class="increase">+</button>
            </div>
           </td>
      </tr>`;
      });
}
else{
    tableBody.parentNode.classList.add("d-none");
    productalert.classList.remove("d-none")
}


function getBasketCount(arr){

    let count=0;
    for (const item of arr) {
        count+=item.count;
    }
    document.querySelector("sup").innerText=count;
}
getBasketCount(products)

