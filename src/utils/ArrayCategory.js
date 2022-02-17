import ProductJson from '../assets/json/Products.json';


const nuevoArray = ProductJson;

nuevoArray.reduce((allSize, size)=>{
    return Array.from(new Set([...allSize, ...size.size]))
}, [])

console.log(nuevoArray)

export default {
    nuevoArray
}