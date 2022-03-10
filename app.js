let btn = document.querySelector('button');
let bitcoinPrice = document.querySelector('#price');
let currency = 'USD';

btn.addEventListener('click', changeBitcoinPrice);

function changeBitcoinPrice(){
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            let date = JSON.parse(xhr.responseText);
            let price = date.bpi[currency].rate;
            bitcoinPrice.innerText = price + ' ' + currency;
       };
    };    

    let url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    xhr.open('GET', url);
    xhr.send();
};