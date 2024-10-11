import './radioButton.css'

function RadioButton({label,value, onChangeHandler, currentValue}) {
  return (
    <div className="radio">
        <input type="radio" id={"id_" + value} value={value} checked={currentValue === value} onChange={onChangeHandler} />
        <label htmlFor={"id_" + value}>{label}</label>
    </div>
  )
}

export default RadioButton