function sumar(cadena) {
  if (cadena === "") {
    return 0;
  }

  let secuenciaNumeros = cadena;
  let delimitadores = [",", "-"];

  if (cadena.startsWith("//[")) {
    const coincidencia = cadena.match(/^\/\/((?:\[[^\]]+\])+)\s*(.*)$/);

    const definicionDelimitadores = coincidencia[1];
    secuenciaNumeros = coincidencia[2];

    const delimitadoresPersonalizados = [
      ...definicionDelimitadores.matchAll(/\[([^\]]+)\]/g),
    ].map((resultado) => resultado[1]);

    delimitadores = [...delimitadores, ...delimitadoresPersonalizados];
  }

  delimitadores.forEach((delimitador) => {
    secuenciaNumeros = secuenciaNumeros.split(delimitador).join(",");
  });

  const numeros = secuenciaNumeros.split(",");

  return numeros.reduce((suma, numero) => {
    const valor = Number(numero);

    if (valor > 1000) {
      return suma;
    }

    return suma + valor;
  }, 0);
}

export default sumar;