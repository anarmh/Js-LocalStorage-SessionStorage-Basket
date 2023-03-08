"use strict";
            // <tr>
            //   <td><img src="" alt=""></td>
            //   <td>Mark</td>
            //   <td>Otto</td>
            //   <td>@mdo</td>
            // </tr>


let products=JSON.parse(localStorage.getItem("basket"))
let tableBOdy=document.querySelector("tbody")
let alertProduct=document.querySelector(".alert-warning")
if(products!=null){
    products.forEach(product => {
        tableBOdy.innerHTML+=`<tr>
         <td><img src="${product.image}"  alt=""></td>
          <td>${product.name}</td>
          <td>${product.description}</td>
          <td>${product.count}</td>
         </tr>`
    });
}
else{
    tableBOdy.parentNode.add("d-none")
    alertProduct.classList.remove("d-none")
}


function getBasketCount(arr){
    let count=0
    for (const item of arr) {
        count+=item.count;
    }
    document.querySelector("sup").innerText=count;
}
getBasketCount(products)