export const getCoats = async()=>{
    let res = await fetch("http://localhost:5501/abrigo")
    let data = await res.json()
    let dataUpdate = []
    data.forEach(val =>{
        dataUpdate.push({
            name: val.nombre,
            imagen: val.imagen,
            precio: val.precio,
            id: val.id
        })
    })
    return dataUpdate
} 
export const getShirts = async()=>{
    let res = await fetch("http://localhost:5501/camiseta")
    let data = await res.json()
    let dataUpdate = []
    data.forEach(val =>{
        dataUpdate.push({
            name: val.nombre,
            imagen: val.imagen,
            precio: val.precio,
            id: val.id
        })
    })
    return dataUpdate
} 
export const getPants = async()=>{
    let res = await fetch("http://localhost:5501/pantalon")
    let data = await res.json()
    let dataUpdate = []
    data.forEach(val =>{
        dataUpdate.push({
            name: val.nombre,
            imagen: val.imagen,
            precio: val.precio,
            id: val.id
        })
    })
    return dataUpdate
} 
