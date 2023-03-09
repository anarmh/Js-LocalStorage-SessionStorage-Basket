"use strict";

let products = JSON.parse(localStorage.getItem("basket"));
let tableBody = document.querySelector("tbody");
let productalert = document.querySelector(".alert-warning ");

if (products != null) {
  products.forEach((product) => {
    tableBody.innerHTML += `
      <tr data-id="${product.id}">
          <td><img src="${product.image}" alt=""></td>
           <td>${product.name}</td>
          <td>${product.description}</td>
           <td>  <div class="count">
           <button class="decrease">-</button>
           <input type="text" class="product-quantity"  min="1" value="1" disabled >
           <button class="increase">+</button>
            </div>
           </td>
           <td class="price-product">${product.price}</td>
           <td> <button class="delete-item">Remove</button></td>
      </tr>`;
  });

  let decreaseBtns = document.querySelectorAll(".decrease");
  let increaseBtns = document.querySelectorAll(".increase");
  
  
  increaseBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      let quantityInput = document.querySelector(".product-quantity");
      let priceCell = document.querySelector(".price-product")
      let quantityValue = parseInt(quantityInput.value) + 1;
      quantityInput.value = quantityValue;
      let total = parseInt(priceCell) * quantityValue;
      priceCell.innerText = total;
    });
  });

  removeProduct();
} else {
  tableBody.parentNode.classList.add("d-none");
  productalert.classList.remove("d-none");
}

function getBasketCount(arr) {
  let count = 0;
  for (const item of arr) {
    count += item.count;
  }
  document.querySelector("sup").innerText = count;
}
getBasketCount(products);

function removeProduct() {
  let productsDelete = document.querySelectorAll(".delete-item");

  productsDelete.forEach((btn) => {
    btn.addEventListener("click", function () {
      let deleteItem = this.closest("tr");
      let deletedItemId = deleteItem.getAttribute("data-id");
      deleteItem.remove();
      let itemStorageId = products.findIndex((el) => el.id == deletedItemId);
      products.splice(itemStorageId, 1);
      localStorage.setItem("basket", JSON.stringify(products));
      getBasketCount(products);
    });
  });
}
