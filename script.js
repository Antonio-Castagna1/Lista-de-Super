
let listaDeSuper = [];

listaDeSuper[0] = "sal";
listaDeSuper[1] = "huevos";
listaDeSuper[2] = "pan";
console.log(listaDeSuper);
console.log("La cantidad de elementos dentro del array es: " + listaDeSuper.length);
console.log("El primer elemento del array es: " + listaDeSuper[0]);

let ultimoElemento = listaDeSuper.length - 1;

console.log("El último elemento del array es: " + listaDeSuper[listaDeSuper.length - 1]);
console.log("El último elemento usando la variable es: " + listaDeSuper[ultimoElemento]);

listaDeSuper.push("leche");
listaDeSuper.push("galletitas");

console.log(listaDeSuper);


listaDeSuper.unshift("arroz");
listaDeSuper.unshift("fideos");

console.log(listaDeSuper);

console.log("La cantidad total de productos es: " + listaDeSuper.length);


let noHabia = listaDeSuper.pop();

console.log("El producto que no había es: " + noHabia);


let comprado = listaDeSuper.shift();

console.log("El producto comprado es: " + comprado);

console.log("El tamaño final de la lista es: " + listaDeSuper.length);

console.log(listaDeSuper);


function logItems(arreglo) {
    let listaEnPagina = document.getElementById("productos");
    listaEnPagina.replaceChildren();

    arreglo.forEach(function(producto, indice) {
        console.log(indice + ": " + producto);

        let elemento = document.createElement("li");
        elemento.textContent = indice + ": " + producto;
        listaEnPagina.appendChild(elemento);
    });
}

let comando = "";

while (comando !== "salir") {
    comando = prompt(
        "Ingresá un comando:\n" +
        "nuevo: agregar un producto\n" +
        "listar: mostrar la lista\n" +
        "borrar: eliminar un producto\n" +
        "salir: finalizar"
    );

    if (comando === "nuevo") {
        let productoNuevo = prompt("¿Qué producto querés agregar?");

        if (productoNuevo !== null && productoNuevo !== "") {
            listaDeSuper.push(productoNuevo);
            console.log("Producto agregado: " + productoNuevo);
        }

    } else if (comando === "listar") {
        console.log("Lista de Súper:");
        logItems(listaDeSuper);

    } else if (comando === "borrar") {
        logItems(listaDeSuper);

        let respuesta = prompt(
            "Ingresá el índice del producto que querés borrar:"
        );

    
        let indice = Number(respuesta);

        if (
            respuesta !== null &&
            respuesta !== "" &&
            indice >= 0 &&
            indice < listaDeSuper.length &&
            indice % 1 === 0
        ) {
            let productoBorrado = listaDeSuper[indice];

            listaDeSuper.splice(indice, 1);

            console.log("Producto eliminado: " + productoBorrado);
        } else {
            console.log("Índice incorrecto.");
        }

    } else if (comando === "salir" || comando === null) {
        comando = "salir";
        console.log("Programa finalizado.");

    } else {
        console.log("Comando incorrecto. Intentá nuevamente.");
    }
}