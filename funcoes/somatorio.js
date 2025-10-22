function somatorio(arr) {
    let soma = 0;
    
    for (let i = 0; i < arr.length; i++) {
        soma = soma + arr[i]; 
    }
    
    return soma;
}
module.exports = {somatorio};