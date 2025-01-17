"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree (value) {
this.value = value;
this.right = null;
this.left = null
}

BinarySearchTree.prototype.insert = function (valueToInsert) {
  if (this.value > valueToInsert) {
if (!this.left) {
  this.left = new BinarySearchTree (valueToInsert);
} else {
    this.left.insert (valueToInsert); 
  };
}
    else {
    if (!this.right) {
      this.right = new BinarySearchTree (valueToInsert);}
else {
  this.right.insert (valueToInsert);
};
    };
  };



/* Hacerlo con recursion -->      function suma () let count = 0;
  return function () {
    return count++};
*/

BinarySearchTree.prototype.contains = function (value) {
if (this.value === value) return true;

if (this.left) {
if (this.left.contains (value)) return true;
}
if (this.right) {
  if (this.right.contains (value)) return true;
}
return false;
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, 
  order = "in-order") {
switch (order) {
case "in-order": {
  this.left?.depthFirstForEach (cb, order);
  cb (this.value);
  this.right?.depthFirstForEach (cb, order);
  break;
}
case "pre-order": {
  cb (this.value);
  this.left?.depthFirstForEach (cb, order);
  this.right?.depthFirstForEach (cb, order);
  break;
}
case "post-order": {
  this.left?.depthFirstForEach (cb, order);
  this.right?.depthFirstForEach (cb, order);
  cb (this.value);
  break;
}
}
  };

BinarySearchTree.prototype.breadthFirstForEach = function (cb, queue = []) {
cb (this.value);
if (this.left) queue.push (this.left)
if (this.right) queue.push (this.right);
if (queue.length) {queue.shift(). breadthFirstForEach (cb, queue)}
};

BinarySearchTree.prototype.size = function () {
  let count = 1;
  if (this.left) count += this.left.size ();
  if (this.right) count += this.left.size ();
  return count;
};



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
