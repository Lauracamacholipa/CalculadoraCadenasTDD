function sumar(cadena) {
  if (cadena === "") {
    return 0;
  }

  let numeros;

  if (cadena.startsWith("//[")) {
    const posicionCierre = cadena.indexOf("]");
    const delimitador = cadena.slice(3, posicionCierre);
    const secuenciaNumeros = cadena.slice(posicionCierre + 1).trim();

    const secuenciaNormalizada = secuenciaNumeros
      .split(delimitador)
      .join(",");

    numeros = secuenciaNormalizada.split(/[,-]/);
  } else {
    numeros = cadena.split(/[,-]/);
  }

  return numeros.reduce((suma, numero) => suma + Number(numero), 0);
}

export default sumar;