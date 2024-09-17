const misProductos= [
    {id: 1, nombre: "Cucha redonda chica", precio: 30000, img: "../img/cucharedondachica.jpg", idCat: "cuchas"},
    {id: 2, nombre: "Cucha redonda grande", precio: 50000, img: "../img/cucharedondagrande.jpg", idCat: "cuchas"},
    {id: 3, nombre: "Cucha cuadrada chica", precio: 40000, img: "../img/cuchacuadradachica.jpg", idCat: "cuchas"},
    {id: 4, nombre: "Cucha cuadrada grande", precio: 80000, img: "../img/cuchacuadradagrande.jpg", idCat: "cuchas"},
    {id: 5, nombre: "Arnes", precio: 20000, img: "../img/arnes.png", idCat: "correas"},
    {id: 6, nombre: "Plato", precio: 5000, img: "../img/plato.jpg", idCat: "platos"},
]

export const getProductos = () =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(misProductos)
        }, 100);
    })
}


export const getUnProducto = (id) => {
    return new Promise (resolve =>{
        setTimeout(()=>{
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        }, 100)
    })

}

export const getProductosPorCategorias = (idCategoria) => {
    return new Promise(resolve =>{
        setTimeout(() => {
            const producto = misProductos.filter(item => item.idCat === idCategoria)
            resolve(producto)
        }, 100);

    })

}