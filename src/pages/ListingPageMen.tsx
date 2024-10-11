import Button from '@/components/button/Button'
import Checkbox from '@/components/checkbox/Checkbox'
import RadioButton from '@/components/radioButton/RadioButton'
import React, { useState } from 'react'

export default function ListingPageMen() {
  const [category, setCategory] = useState();
  const [checkBoxCategory, setcheckBoxCategory] = useState<string[]>([]);

  const onOptionChange = (e:any) => {
    setCategory(e.target.value)
  }

  const onCheckChangeHandler = (e) => {
    const checkboxCategoryValue = e.target.value;

    checkBoxCategory.includes(checkboxCategoryValue)
    ? setcheckBoxCategory([...checkBoxCategory.filter((category) => category !== checkboxCategoryValue)])
    : setcheckBoxCategory([...checkBoxCategory, checkboxCategoryValue]) 
    
    // const checkedValue = e.target.value
    // if(checkBoxCategory.includes(checkedValue)) {
    //   setcheckBoxCategory([...checkBoxCategory.filter((category) => category !== checkedValue)])
    // } else {
    //   setcheckBoxCategory([...checkBoxCategory, checkedValue])
    // }
  }

  return (
    <div className='container mx-auto pt-32'>
        <div className='grid grid-cols-3 gap-4'>
          <div className="rounded-md border border-grey">
            <div className='flex justify-between items-center filter-box'>
              <h6 className='font-bold text-xl'>Filter</h6>
              <Button className='pinkBtn' fontSize='text-sm'/>
            </div>
            <div className='filter-box'>
              <form>
                <RadioButton label="All" value="all" onChangeHandler={onOptionChange} currentValue={category}/>
                <RadioButton label="Men" value="men" onChangeHandler={onOptionChange} currentValue={category}/>
                <RadioButton label="Women" value="women" onChangeHandler={onOptionChange} currentValue={category}/>
              </form>
            </div>
            <div className='filter-box'>
              <h6 className='font-bold text-xl mb-2.5'>Categories</h6>
              <Checkbox label="T-shirts" value="tshirts" checkBoxHandler={onCheckChangeHandler} />
              <Checkbox label="Shirts" value="shirts" checkBoxHandler={onCheckChangeHandler} />
              <Checkbox label="Hoodies" value="hoodies" checkBoxHandler={onCheckChangeHandler} />
              <Checkbox label="Sweatshirts" value="sweatshirts" checkBoxHandler={onCheckChangeHandler} />
              <Checkbox label="Accessories" value="accessories" checkBoxHandler={onCheckChangeHandler} />
            </div>
            <div className='filter-box'>
              <h6 className='font-bold text-xl mb-2.5'>Price</h6>
              <Checkbox label="Rs. 300 to Rs. 899" value="300-899" checkBoxHandler={onCheckChangeHandler} />
              <Checkbox label="Rs. 900 to Rs. 1199" value="900-1199" checkBoxHandler={onCheckChangeHandler} />
              <Checkbox label="Rs. 1200 to Rs. 2199" value="1200-2199" checkBoxHandler={onCheckChangeHandler} />
              <Checkbox label="Rs. 2200 to Rs. 2999" value="2200-2999" checkBoxHandler={onCheckChangeHandler} />
            </div>
            <div className='filter-box color-filter-box'>
              <h6 className='font-bold text-xl mb-2.5'>Colors</h6>
              <Checkbox label="Black" value="black" checkBoxHandler={onCheckChangeHandler} className="color-cirlce black" />
              <Checkbox label="Blue" value="blue" checkBoxHandler={onCheckChangeHandler} className="color-cirlce blue" />
              <Checkbox label="Green" value="green" checkBoxHandler={onCheckChangeHandler} className="color-cirlce green" />
              <Checkbox label="Yellow" value="yellow" checkBoxHandler={onCheckChangeHandler} className="color-cirlce yellow" />
              <Checkbox label="Mustered Yellow" value="musteredYellow" checkBoxHandler={onCheckChangeHandler} className="color-cirlce musteredYellow" />
              <Checkbox label="Carrot Red" value="carrotRed" checkBoxHandler={onCheckChangeHandler} className="color-cirlce carrotRed" />
              <Checkbox label="Violate" value="violate" checkBoxHandler={onCheckChangeHandler} className="color-cirlce violate" />
              <Checkbox label="White" value="white" checkBoxHandler={onCheckChangeHandler} className="color-cirlce white" />
            </div>
          </div>
          <div>
            <h5 className='text-2xl font-extrabold'>Blue T-shirt for Men</h5>
            <div>
              <ul className='flex items-center'>
                <li>
                  <a href='#' className='breadcrumb-link ms-2 text-xs'>Home</a>
                </li>
                <li>
                  <a href='#' className='breadcrumb-link ms-2 text-xs'> / Clothing</a>
                </li>
                <li>
                  <a href='#' className='breadcrumb-link active-breadcrumb ms-2 text-xs'> / Blue T-shirt for Men <span>(12024 items)</span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}
