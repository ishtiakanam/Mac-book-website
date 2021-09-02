//memory
document.getElementById('first-memory').addEventListener('click',function(){
    const firstMemory = document.getElementById('memory-output');
    // const firstInput = firstMemory.innerText;
    // const memoryText = parseFloat(firstInput);
    // const memoryAmount = memoryText;
    firstMemory.innerText =  0;
})
document.getElementById('second-memory').addEventListener('click',function(){
    const secondMemory = document.getElementById('memory-output');
    const secondInput = secondMemory.innerText;
    const previousMemoryText = parseFloat(secondInput)
    secondMemory.innerText = 180;
    console.log(previousMemoryText);

})

//storage
document.getElementById('first-storage').addEventListener('click',function(){
    const firstStorage = document.getElementById('storage-output');
    firstStorage.innerText = 0;
})
document.getElementById('second-storage').addEventListener('click',function(){
    const secondStorage = document.getElementById('storage-output');
    secondStorage.innerText = 100;


})
document.getElementById('third-storage').addEventListener('click',function(){
    const thirdStorage = document.getElementById('storage-output');
    thirdStorage.innerText = 180;
})

//delivery-charge
document.getElementById('first-delivery').addEventListener('click',function(){
    const thirdStorage = document.getElementById('delivery-output');
    thirdStorage.innerText = 0;
})
document.getElementById('second-delivery').addEventListener('click',function(){
    const thirdStorage = document.getElementById('delivery-output');
    thirdStorage.innerText = 20;
})


//memrory total
document.getElementById('first-memory').addEventListener('click',function(){
    const total = document.getElementById('total-output');
    total.innerText =1299;
    
})
document.getElementById('second-memory').addEventListener('click',function(){
    const total = document.getElementById('total-output');
    const totalPrice = parseFloat(total.innerText)
    total.innerText = 180 + totalPrice;
})


//storage total
document.getElementById('first-storage').addEventListener('click',function(){
    const total = document.getElementById('total-output');
    total.innerText = 1299;
})
document.getElementById('second-storage').addEventListener('click',function(){
    const total = document.getElementById('total-output');
    total.innerText = 100+1299;
})
document.getElementById('third-storage').addEventListener('click',function(){
    const total = document.getElementById('total-output');
    const totalPrice = parseFloat(total.innerText)
    total.innerText = 180 + totalPrice;
})

//delivery total
document.getElementById('first-delivery').addEventListener('click',function(){
    const total = document.getElementById('total-output');
    total.innerText =1299;
})
document.getElementById('second-delivery').addEventListener('click',function(){
    const total = document.getElementById('total-output');
    const totalPrice = parseFloat(total.innerText)
    total.innerText = 20 + totalPrice;
})

//////extra functions
document.getElementById('first-memory').addEventListener('click',function(){
    const total = document.getElementById('total-ammount');
    total.innerText =1299;
    
})
document.getElementById('second-memory').addEventListener('click',function(){
    const total = document.getElementById('total-ammount');
    const totalPrice = parseFloat(total.innerText)
    total.innerText = 180 + totalPrice;
})


//storage total
document.getElementById('first-storage').addEventListener('click',function(){
    const total = document.getElementById('total-ammount');
    total.innerText = 1299;
})
document.getElementById('second-storage').addEventListener('click',function(){
    const total = document.getElementById('total-ammount');
    total.innerText = 100+1299;
})
document.getElementById('third-storage').addEventListener('click',function(){
    const total = document.getElementById('total-ammount');
    const totalPrice = parseFloat(total.innerText)
    total.innerText = 180 + totalPrice;
})

//delivery total
document.getElementById('first-delivery').addEventListener('click',function(){
    const total = document.getElementById('total-ammount');
    total.innerText =1299;
})
document.getElementById('second-delivery').addEventListener('click',function(){
    const total = document.getElementById('total-ammount');
    const totalPrice = parseFloat(total.innerText)
    total.innerText = 20 + totalPrice;
})



document.getElementById('apply-button').addEventListener('click',function(){
    const promoField= document.getElementById('promo-code')
    const promo =parseFloat(promoField.innerText)
    
    if(promo == 'stevekaku'){
        promoField.innerText = promo / 0.2
    }
})