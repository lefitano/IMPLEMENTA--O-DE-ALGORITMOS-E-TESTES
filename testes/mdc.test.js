const {mdc} = require('../funcoes/mdc'); 

describe('Algoritmo de Máximo Divisor Comum (MDC)', () => {
    // Teste 1: MDC de números com divisores comuns
    test('Deve calcular o MDC de 54 e 24 como 6', () => {
        expect(mdc(54, 24)).toBe(6);
    });
    
    // Teste 2: MDC de números primos entre si (resultado sempre 1)
    test('Deve retornar 1 para números primos entre si (17 e 23)', () => {
        expect(mdc(17, 23)).toBe(1);
    });
});