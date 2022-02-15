import ProductJson from '../assets/json/Products.json';


const asArray = Object.entries(ProductJson);
const filtered = asArray.filter(([key, value]) =>  key === 'category');
const justStrings = Object.fromEntries(filtered);

export default {
    filtered
}