const {quicksort} = require('../funcoes/quicksort'); 

describe('Algoritmo Quicksort (Ordenação)', () => {
    // Teste 1: Ordenação de um array desordenado
    test('Deve ordenar corretamente um array de inteiros', () => {
        const arr = [5, 2, 9, 1, 6];
        expect(quicksort(arr)).toEqual([1, 2, 5, 6, 9]);
    });
    
    // Teste 2: Lidar com array com elementos duplicados
    test('Deve ordenar corretamente um array com números duplicados', () => {
        const arr = [4, 1, 4, 3, 1, 2];
        expect(quicksort(arr)).toEqual([1, 1, 2, 3, 4, 4]);
    });
});