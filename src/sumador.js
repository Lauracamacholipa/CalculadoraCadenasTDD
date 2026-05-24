function sumar(cadena) {
  if (cadena === "") {
    return 0;
  }

  const numeros = cadena.split(/[,-]/);

  return numeros.reduce((suma, numero) => suma + Number(numero), 0);
}

export default sumar;