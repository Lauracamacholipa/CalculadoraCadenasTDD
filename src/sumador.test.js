import sumar from "./sumador.js";

describe("Calculadora de cadenas", () => {
  it("deberia retornar 0 para una cadena vacia", () => {
    expect(sumar("")).toEqual(0);
  });
});