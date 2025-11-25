//para contar quantos numeros estao entre o primeiro elemento e o valor passado de N
function contagem(arr, N) {
    // contador para os numeros entre
    let count = 0;
    
    // for pra percorrer o array
    for (let i = 0; i < arr.length; i++) {
        const elemento = arr[i];
        
        // verifica se os numeros estao entre o primeiro elemento e o N
        // arr[0] é o limite inferior do intervalo
        // N é o limite superior do intervalo
        if (elemento >= arr[0] && elemento <= N) {
            count++; // incrementando no cnotador caso estiver de acordo com o intervalo
        }
    }
    
    // Retorna a quantidade de números no intervalo
    return count;
}

module.exports = {contagem};