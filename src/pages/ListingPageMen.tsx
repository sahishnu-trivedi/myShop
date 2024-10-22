import Button from '@/components/button/Button'
import Checkbox from '@/components/checkbox/Checkbox'
import ProductList from '@/components/product/ProductList'
import RadioButton from '@/components/radioButton/RadioButton'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useState } from 'react'

export default function ListingPageMen() {
  const [category, setCategory] = useState();
  const [checkBoxCategory, setcheckBoxCategory] = useState<string[]>([]);
  const [selectedValue, setSelectedValue] = useState("What's New");

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

  const dropdownHandler = (value) => {
    setSelectedValue(value)
  }

  return (
    <div className='container mx-auto pt-48'>
        <div className='grid grid-cols-4 gap-4'>
          <div className="col-span-1 rounded-md border border-grey">
            <div className='flex justify-between items-center filter-box'>
              <h6 className='font-bold text-xl'>Filter</h6>
              <Button useClass='pinkBtn text-sm' buttonText='Clear All'/>
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
          <div className='col-span-3'>
            <div className='flex items-center justify-between w-full'>
              <div>
                <h5 className='text-2xl font-extrabold'>Blue T-shirt for Men</h5>
                <ul className='flex items-center w-full'>
                  <li>
                    <a href='#' className='breadcrumb-link text-xs'>Home</a>
                  </li>
                  <li>
                    <a href='#' className='breadcrumb-link ms-2 text-xs'> / Clothing</a>
                  </li>
                  <li>
                    <a href='#' className='breadcrumb-link active-breadcrumb ms-2 text-xs'> / Blue T-shirt for Men <span className='total-num text-primary'>(12024 items)</span></a>
                  </li>
                </ul>
              </div>
              <div className='flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1'>
                <span>Sort By : </span>
                <Select onValueChange={dropdownHandler}>
                  <SelectTrigger>
                    <SelectValue placeholder={selectedValue} />
                  </SelectTrigger>
                  <SelectContent className='bg-white'>
                    <SelectGroup>
                      <SelectItem value="What's New">What's New</SelectItem>
                      <SelectItem value="Recommended">Recommended</SelectItem>
                      <SelectItem value="Alphabetical">Alphabetical</SelectItem>
                      <SelectItem value="High to Low">High to Low</SelectItem>
                      <SelectItem value="Low to High">Low to High</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className='grid grid-cols-5 gap-10 mt-7'>
              <ProductList />
              <ProductList />
              <ProductList />
              <ProductList />
              <ProductList />
            </div>
          </div>
        </div>
    </div>
  )
}
