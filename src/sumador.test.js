import sumar from "./sumador.js";

describe("Calculadora de cadenas", () => {
  it("deberia retornar 0 para una cadena vacia", () => {
    expect(sumar("")).toEqual(0);
  });

  it("deberia retornar el mismo numero para una cadena con un numero", () => {
    expect(sumar("2")).toEqual(2);
  });

  it("deberia sumar dos numeros separados por coma", () => {
    expect(sumar("1,2")).toEqual(3);
  });

  it("deberia sumar varios numeros separados por coma", () => {
    expect(sumar("1,2,3")).toEqual(6);
  });

  it("deberia sumar numeros separados por coma y guion", () => {
    expect(sumar("1-2,3")).toEqual(6);
  });

  it("deberia sumar numeros usando un delimitador personalizado", () => {
    expect(sumar("//[;] 6;7;4")).toEqual(17);
  });

  it("deberia combinar el delimitador personalizado con coma y guion", () => {
    expect(sumar("//[;] 6,3-2;1")).toEqual(12);
  });

  it("deberia ignorar numeros mayores a 1000", () => {
    expect(sumar("2,1001")).toEqual(2);
  });
});