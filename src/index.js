// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
let result = {};
let coins ={ 
    H:50,
    Q:25,
    D:10,
    N:5,
    P:1
}

if(currency > 10000){
    result.error = "You are rich, my friend! We don't have so much coins for exchange";
    return result
}

for(let coin in coins){
    while(currency >= coins[coin]){
        if(!result[coin]) result[coin]=0; 
        result[coin]++;
        currency-=coins[coin];
    } 
}
return result
}
