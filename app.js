// item count
function updateProduct(product,isAdd,price) {
    const productInput = document.getElementById(product + '-number');
    let  productInputNumber = productInput.value;
    if(isAdd==true){
        productInputNumber= parseInt(productInputNumber) + 1;  
    }
    else{
        if(productInputNumber>0){
            productInputNumber= parseInt(productInputNumber) - 1;
        }
    }
    productInput.value= productInputNumber;
    // update product price
    const productPrice = document.getElementById(product + '-price');
    const productPriceTotal = productInputNumber * price;
    productPrice.innerText = productPriceTotal;

    calculatePrice();
 }

function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculatePrice(){
    const phonePrice = getInputValue('phone')*1219;
    const casePrice = getInputValue('case')*59;
    const subTotal = phonePrice + casePrice;
    const tax = subTotal/10;
    const total = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total-price').innerText = total;
}

document.getElementById('case-minus').addEventListener('click',
function(){
    const itemMinus = updateProduct('case',false,59);
});

document.getElementById('case-plus').addEventListener('click',
function(){
    const itemPlus = updateProduct('case',true,59);
});

document.getElementById('phone-minus').addEventListener('click',
function(){
    const itemMinus = updateProduct('phone',false,1219);
});

document.getElementById('phone-plus').addEventListener('click',
function(){
    const itemPlus = updateProduct('phone',true,1219);
});
