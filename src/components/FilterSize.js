import '../../styles/components/FilterSize.css';
import ProductJson from '../assets/json/Products.json'

function FilterSize({ prodCat }) {

  const filterItems = ProductJson.filter(item => item.category == prodCat);
  console.log(filterItems, 'aca')

  const nuevoArray = filterItems;


  nuevoArray.reduce((allSize, size) => {
    return Array.from(new Set([...allSize, ...size.name]))
  }, [])

  console.log(nuevoArray)
  

  return (
    <div className="containerFilterSize">
      <h4 className='titleFormSize'>Talle</h4>
      <form className='formFilterSize'>
        {filterItems.map(item =>
          <label className='labelNameCheckSize'>
            <input type='checkbox' className='inputCheckSize' />
            {item.size}
          </label>

        )}
      </form>
    </div>

  )
}

export default FilterSize