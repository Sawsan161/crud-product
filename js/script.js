


let productNameInput = document.querySelector("#product-name");
let productPriceInput = document.querySelector("#product-price");
let productImgInput = document.querySelector("#product-img");
let productCategoryInput = document.querySelector("#product-category");
let productDescriptionInput = document.querySelector("#description");



let productList = [];
if(localStorage.getItem("produtContainer")!==null){
    productList=JSON.parse(localStorage.getItem("produtContainer"));
    displayData();
}


function addProduct(){


   let  product = {
        name: productNameInput.value,
        price:  productPriceInput.value,
        category : productCategoryInput.value,
        description : productDescriptionInput.value,
      
    }
    productList.push(product);
localStorage.setItem("productContainer", JSON.stringify(productList) );


    displayData()

    clearList ()
    console.log(productList)
   
//console.log(productNameInput,productPriceInput, productImgInput,productDescriptionInput, productCategoryInput, )
 }
function clearList (){
    productNameInput.value=null;
    productPriceInput.value=null;
    productCategoryInput.value=null;
    productDescriptionInput.value=null;
}
function displayData(){
    let data = '';
    for (let i = 0; i < productList.length; i++){
        data += ` <tr>
                <td>${i}</td>
                <td>${productList[i].name}</td>
                <td>${productList[i].price}</td>
                <td>${productList[i].category}</td>
                <td>${productList[i].description}</td>
                <td><img src="" alt=""></td>
                <td>
                    <button class="btn btn-warning">Update</button>
                    <button onClick="deleteItem(${i})"  class="btn btn-danger">Delete</button>
                </td>
            </tr>`
    }
    document.getElementById("table-data").innerHTML = data;

}
function deleteItem(indexItem){
    productList.splice(indexItem, 1);
    localStorage.setItem("productContaine", JSON.stringify(productList));
    displayData()
    
}
let text = "sawsan"
Text.replaceAll()







