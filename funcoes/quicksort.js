function quicksort(arr) {
    if (arr.length <= 1) {
        return arr; 
    }
    
    
    const pivot = arr[0];
    
    const menor = [];
    const maior = [];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            menor.push(arr[i]);
        } else {
            maior.push(arr[i]);
        }
    }
    
    
    return [...quicksort(menor), pivot, ...quicksort(maior)];
}
module.exports = {quicksort};