import '../../styles/components/FilterColor.css'


function FilterColor() {
  return (
    <div className="containerFilterColor">
      <h4 className='titleFormColor'>Color</h4>
      <form className='formFilterColor'>
        <label className='labelNameCheckColor'>
          <input type='checkbox' className='inputCheckColor' />
          Color
        </label>
        <label className='labelNameCheckColor'>
          <input type='checkbox' className='inputCheckColor' />
          Color
        </label>
        <label className='labelNameCheckColor'>
          <input type='checkbox' className='inputCheckColor' />
          Color
        </label>
        <label className='labelNameCheckColor'>
          <input type='checkbox' className='inputCheckColor' />
          Color
        </label>
        <label className='labelNameCheckColor'>
          <input type='checkbox' className='inputCheckColor' />
          Color
        </label>
      </form>
    </div>

  )
}

export default FilterColor