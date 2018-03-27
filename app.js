var btn = document.querySelector('button');
var bitcoinPrice = document.querySelector('#price');
var currency = 'EUR';

btn.addEventListener('click', changeBitcoinPrice);

function changeBitcoinPrice(){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var date = JSON.parse(xhr.responseText);
            var price = date.bpi[currency].rate;
            bitcoinPrice.innerText = price + ' ' + currency;
       };
    };    

    var url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    xhr.open('GET', url);
    xhr.send();
};