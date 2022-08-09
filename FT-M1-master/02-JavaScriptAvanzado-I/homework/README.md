
# Homework JavaScript Avanzado I

## Scope & Hoisting

/*El scope hace referencia al contexto de la ejecucion; 
Por ejemplo, una variable definida, en el contexto de una funcion,
solo se podra acceder a ella en ese lugar; en cambio, una variable
declarada en el contexto global, se podra acceder a ella en cualquier
momento. Hay un scope global, que por ejemplo, en el chrome es window;
en el Node Js es un objeto global.
Let y const limitan el alcance por bloque (funciones, ciclos, etc) */

/* El hoisting es el comportamiento por defecto de JavaScript en el que la declaración de variables y funciones se mueve automáticamente al principio del scope (ya sea el principio del archivo, la función o el bloque). Podemos invocar una funcion antes de definirla, ya que se mueve
automaticamente al principio del scope; Las variables tambien, pero
no se inicializan por lo cual arrojara undefined.*/

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

/* Las variables declaradas con var se limitan al contexto de ejecución en el cual son declaradas. Las variables no declaradas con var siempre son globales. */

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); //10//
  console.log(a); //8//
  var f = function(a, b, c) {
    b = a;
    console.log(b); //8//
    b = c; 
    var x = 5;
  }
  f(a,b,c);
  console.log(b); //9//
}
c(8,9,10); //aca esta dando el valor de las variables//
console.log(b); //10// //aca los toma del contexto global//
console.log(x); //1// //los toma del contexto global//
```

```javascript
console.log(bar); //no esta definida//
console.log(baz); //no esta definida porque no la declaramos; solo la
ejecutamos//
foo(); //esto se ejecuta por el hoisting, una vez que ponemos
var en baz//
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";    
/*bloque; el if no abre un nuevo contexto por lo cual la variable
se sobreescribe*/
if(true) {           
    var instructor = "Franco";
}
console.log(instructor); /* la variable pasa a ser franco porque esta
sobre escrita */
```

```javascript
var instructor = "Tony";
console.log(instructor); //tony//
(function() {
   if(true) {
      var instructor = "Franco"; 
      console.log(instructor); //franco//
   }
})();
console.log(instructor); //tony//
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); //the flash//
    console.log(pm); //reverse flash//
}
//el let no se puede reasignar; da mayor precision; no tiene hoisting//
//const es constante, no se puede modificar para nada//

console.log(instructor); //the flash; el var no respeta los bloques//
console.log(pm); //Franco; el let respeta los bloques//
```


### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" //2//
"2" * "3" //6//
4 + 5 + "px" //"9px"//
"$" + 4 + 5  //"$45"//
"4" - 2 //2//
"4px" - 2 //NaN//
7 / 0 //infinity// //es un error matermatico//
{}[0] //undefined//
parseInt("09") //9//
5 && 2 //2//
2 && 5 //5//
5 || 0 //5//
0 || 5 //5//
/*cuando hay mas de 2 parametros los soluciona de 2 en 2 de izq a derecha*/

[3]+[3]-[10] //23 --> concatena los 2 primeros arrays y despues si lo resta (el - lo resta, el + concatena los arrays) //
3>2>1 // --> false //
// 3 es mayor que 2 (si) --> true es mayor que 1 (error - false)//

[] == ![] // true porque hay == (solo checa el valor y no el tipo//
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); //undefined//
   console.log(foo()); //2//

   var a = 1;
   function foo() {
      return 2;
   }
}

/* Primero se imprime undefined ya que la variable "a" esta declarada
luego de la ejecucion;
Posteriormente se imprime el numero 2 ya que se invoca a la funcion foo;

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

/* Aqui retorna "friskies" (si fuera getfood true) ya que la variable snack = "meow mix" esta
definida en un contecto global por fuera de la funcion */

getFood(false); //tira undefined //
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};
/* El output es aurelio de Rosa ya que la funcion se encuentra dentro de la prop; por ende, se encuentra dentro del contexto de ejecucion de
la prop */

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
/* Aca retorna undefined//
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

/* El orden que se muestra por consola es 1, 4, 3, 2 ya que  
el 1 y el 4 son operaciones síncronas inmediatas; el 3 tiene tiene un timeout que no tarda nada y el 2 tiene un timeout de 1000  (ambas van al call back o fila de tareas)*/

printing();
```


