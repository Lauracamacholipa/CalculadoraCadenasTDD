import sumar from "./sumador.js";

describe("Calculadora de cadenas", () => {
  it("deberia retornar 0 para una cadena vacia", () => {
    expect(sumar("")).toEqual(0);
  });

  it("deberia retornar el mismo numero para una cadena con un numero", () => {
    expect(sumar("2")).toEqual(2);
  });
});