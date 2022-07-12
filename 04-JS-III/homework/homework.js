// No cambies los nombres de las funciones.

const TemplatePassthroughManager = require("@11ty/eleventy/src/TemplatePassthroughManager");

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
return array[0]

}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array .length -1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var arrayincremetado=[];
  for(var i=0 ; i<array.length;i++){
  arrayincrementado.push(array[i]+1)
}
return (arrayincrementado); 
  
  
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
    return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshitft(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join("")

}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(i =0 ; i<array.length; i++)
  if(array[i]===elemento){
    return true;}
  
    return false;
  
  }


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let sumaenteros=0;
  for(i=0; i<numeros.length; i++){
      sumaenteros = sumaenteros + numeros[i]; 
    }
    return sumaenteros;
}
let sumar = [4,4,6,7,10,5]

console.log("La suma del arreglo es: " + agregarNumeros(sumar))


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una array de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  let promedioPuntaje= 0
  for(i = 0; i < resultadosTest.length; i++){
    promedioPuntaje = (promedioPuntaje + resultadosTest[i])
   
  }

  return promedioPuntaje/i
}

let arraySPromedio = [2,5,1,2]
console.log("El promedio es: " + promedioResultadosTest(arraySPromedio))


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var caja=0;
  for(var i=o; i<numeros.length; i++){
    if(numeros[i] > caja);
    caja=numeros[i]
  }
  return caja;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var acumulador=1;
if(arguments.length===0){
  return o;
}
  else if(arguments.length===1){
    return arguments[0];
  }else{
    for(var i=0; i<arguments.length;i++){
        acumulador=acumulador*arguments[i]
    }
    }
    return acumulador;
  }
   
    
      return 0;

  
function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var contador=0;
  for(var i=0; i<arreglo.length; i++){
if(arreglo[i]>18){
  contador+=1}
}
return contador;

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu codigo aqui
  
  if(numeroDeDia===1|| numeroDeDia===7){
    return "es fin de semana";
  }else if(numeroDeDia>1 &&numeroDeDia<7){
      return "dia laboral";
    }
    
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var numerostring=n.tostring
  if(numerostring[0] ==9);{
    return true;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for(var i=0; i<arreglo.length -1;++i){
    if(arreglo[i]!==arreglo[i+1]){
      return false;
    }
  }
return true;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var meses=[];
  for(var i=o; i<array.length;i++){
    if(array[i]==="enero"||array[i]==="marzo" ||array[i]==="noviembre"){
    meses.push(array[i]);
    
    } 
  }
  if(meses.length===3){
    return meses;
  }else{
    return "nose encontraron los meses pedidos";
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoarray=[];
  for(var i=0; i<array.length;i++){
    if(array[i]>100){
  nuevoarray.push(array[i])
}
  }
  return nuevoarray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var arraydenumeros=[];
  var suma=numero
  for(var i=o; i<10; i++){
   suma=suma+2;
   if(suma===i){
      break;
   }else{
    arraydenumeros.push(suma);
   }
  }
  if(arraynumeros<10){
  return "se interrumpio la ejecucion;"
  }else if(arraydenumeros===0){
    return arraydenumeros;
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando elnp número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var arraynuevo=[];
  var suma=numero
  for(var i=o; i<10; i++){
    if(i===5){
      continue;
    }else{
      suma=suma+2
      arraynnuevo.push(suma);
    }
    return arraynuevo;
  }  
    
  }
}


// No modificar nada debajo de esta líneama=numero-------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
