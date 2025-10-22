function contagem(arr) {
    const frequencia = {};
    
    for (let i = 0; i < arr.length; i++) {
        const elemento = arr[i];
        
        if (frequencia[elemento]) {
            frequencia[elemento]++;
        } else {
            frequencia[elemento] = 1;
        }
    }
    
    return frequencia;
}
module.exports = {contagem};
