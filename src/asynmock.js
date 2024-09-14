const misProductos= [
    {id: 1, nombre: "Cucha redonda chica", precio: 30000, img: "./img/cucharedondachica.jpg"},
    {id: 2, nombre: "Cucha redonda grande", precio: 50000, img: "./img/cucharedondagrande.jpg"},
    {id: 3, nombre: "Cucha cuadrada chica", precio: 40000, img: "./img/cuchacuadradachica.jpg"},
    {id: 4, nombre: "Cucha cuadrada grande", precio: 80000, img: "./img/cuchacuadradagrande.jpg"},
]

export const getProductos = () =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(misProductos)
        }, 2000);
    })
}


 export const getUnProducto = (id) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id)
            resolve (producto)
        }, 2000)
    })
}