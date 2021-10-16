import '@testing-library/jest-dom'
import { getSaludo } from "../../base/02-template-string"

describe('Pruebas en 02-templates-string', () => {

    test('getSaludo debe retornar hola Pietro! ', () => {
        const nombre = 'Pietro';
        const saludo = getSaludo(nombre);
        
        expect(saludo).toBe('Hola ' + nombre + '!');

    })
    
    // Get saludo debe retornar Hola Carlos! si no hay argumento en el nombre
    test('debe retornar Hola Carlos! si no le asignamos un nombre ', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos!');
    })
    
})
