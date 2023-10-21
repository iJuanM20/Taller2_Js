function crearNodo(tipoNodo) {
    var nodo = document.createElement(tipoNodo);
    return nodo;
}

function crearNodoTexto(tipoNodo, texto) {
    var nodo = document.createElement(tipoNodo);
    var textoNodo = document.createTextNode(texto);
    nodo.appendChild(textoNodo);
    return nodo;
}



function adicionarNodoContenedor(contenedor, nodo) {
    contenedor.appendChild(nodo);
}

function crearNodoA(texto, href) {
    var nodo = crearNodoTexto("a", texto);
    nodo.href = href
    return nodo;
}



function adicionarNodoBody(nodo) {
    document.body.appendChild(nodo);
}

function crearTabla() {

    var rutasDeImagen = [
        '../recursos/imagenes/Audifonos.webp',
        '../recursos/imagenes/Camara.webp',
        '../recursos/imagenes/Monitor.webp',
        '../recursos/imagenes/Nintendo.webp',
        '../recursos/imagenes/Cafetera.webp',
        '../recursos/imagenes/Bicicleta.webp'
    ];
    
    

    var tabla = document.createElement('table');

    for (var i = 0; i < 2; i++) {
        var fila = tabla.insertRow();

        for (var j = 0; j < 3; j++) {
            var celda = fila.insertCell();

            var imagen = document.createElement('img');
            imagen.src = rutasDeImagen[i * 3 + j];
            imagen.alt = 'Imagen';

            var botonComprar = document.createElement('button');
            botonComprar.textContent = 'Comprar';

            var botonMasInfo = document.createElement('button');
            botonMasInfo.textContent = 'Más Información';

            var botonAgregarCarrito = document.createElement('button');
            botonAgregarCarrito.textContent = 'Añadir al Carrito';

            celda.appendChild(imagen);
            celda.appendChild(botonComprar);
            celda.appendChild(botonMasInfo);
            celda.appendChild(botonAgregarCarrito);
        }
    }
    document.body.appendChild(tabla);
}