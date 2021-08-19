// count product and update product price
function updateProduct(product,isAdd,price){
    const productInputText = document.getElementById(product + '-number');
    let productInput = productInputText.value;
    if(isAdd){
        productInput = parseInt(productInput)+1; 
    }
    else{
        if(productInput>0){
            productInput = parseInt(productInput)-1;
        }
    }

    productInputText.value = productInput;
    // update price
    const productPrice = document.getElementById(product + '-price');
    const productPriceTotal = productInput * price;
    productPrice.innerText = productPriceTotal;
    
    calculateTotal();

}
// get input value for final calculation
function getInput(product){
    const productInput = document.getElementById(product + '-number')
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
// calculation
function calculateTotal(){
    const phonePrice = getInput('phone')*1219;
    const casePrice = getInput('case')*59;
    const subTotal = phonePrice + casePrice;
    const tax = subTotal/10;
    const total = subTotal+tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total-price').innerText = total;
}

// function calling
document.getElementById('case-plus').addEventListener('click',
function(){
    updateProduct('case',true,59);   
});
document.getElementById('case-minus').addEventListener('click',
function(){
    updateProduct('case',false,59);   
});
document.getElementById('phone-plus').addEventListener('click',
function(){
    updateProduct('phone',true,1219);   
});
document.getElementById('phone-minus').addEventListener('click',
function(){
    updateProduct('phone',false,1219);   
});