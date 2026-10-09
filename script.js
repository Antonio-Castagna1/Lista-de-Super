
let listadeSuper = [];

listadeSuper[0] = "Leche";
listadeSuper[1] = "Huevos";
listadeSuper[2] = "Pan";

console.log(listadeSuper);

console.log("La cantidad de elementos dentro del array es: " + listadeSuper.length);

console.log("Primer elemento: " + listadeSuper[0]);

let ultimoElemento = listadeSuper.length - 1;

console.log("Último elemento: " + listadeSuper[ultimoElemento]);

listadeSuper.push("Galletitas");
listadeSuper.push("Arroz");

console.log(listadeSuper);

listadeSuper.unshift("Fideos");
listadeSuper.unshift("Sal");

console.log(listadeSuper);

console.log("La cantidad total de productos es: " + listadeSuper.length);

let noHabia = listadeSuper.pop();

console.log("El producto que no había es: " + noHabia);

let comprado = listadeSuper.shift();

console.log("El producto comprado es: " + comprado);

console.log("El tamaño final de la lista es: " + listadeSuper.length);

console.log(listadeSuper);


function logItems(arreglo) {
    arreglo.forEach(function(producto, indice) {
        console.log(indice + ": " + producto);
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
            listadeSuper.push(productoNuevo);
            console.log("Producto agregado: " + productoNuevo);
        }

    } else if (comando === "listar") {
        console.log("Lista de Súper:");
        logItems(listadeSuper);

    } else if (comando === "borrar") {
        logItems(listadeSuper);

        let respuesta = prompt(
            "Ingresá el índice del producto que querés borrar:"
        );

        let indice = Number(respuesta);

        if (
            respuesta !== null &&
            respuesta !== "" &&
            indice >= 0 &&
            indice < listadeSuper.length &&
            indice % 1 === 0
        ) {
            let productoBorrado = listadeSuper[indice];

            listadeSuper.splice(indice, 1);

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