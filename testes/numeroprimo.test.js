const {numeroprimo} = require('../funcoes/numeroprimo'); 

describe('Algoritmo de Número Primo', () => {
    // Teste 1: Números primos verdadeiros
    test('Deve retornar true para números primos (7 e 13)', () => {
        expect(numeroprimo(7)).toBe(true);
        expect(numeroprimo(13)).toBe(true);
    });
    
    // Teste 2: Números que não são primos 
    test('Deve retornar false para números que não são primos (4, 9)', () => {
        expect(numeroprimo(4)).toBe(false); // Divisível por 2
        expect(numeroprimo(9)).toBe(false); // Divisível por 3
        
    });
});