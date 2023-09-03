import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-tempalte-string', () =>{
  test('getSaludo debe retornar Hola Diego', () => {
    const name = "Diego";
    const message =  getSaludo(name);

    expect(message).toBe(`Hola ${name}`);
  })
});