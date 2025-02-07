import IMAGES from '@/assets/Images';
import Button from '@/components/button/Button';
import { addToCart } from '@/features/CartProductSlice';
import { useDispatch, useSelector } from 'react-redux';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { PortableText } from '@portabletext/react';

function Cart() {
  const cartProducts = useSelector((state) => state.allCart.cart)
  const quantity = useSelector((state) => state.allCart.quantity)
  const dispatch = useDispatch()
  
  console.log('quantity : ', quantity)
  console.log('cartProducts : ', cartProducts);

  const handleIncrementClick = (addProduct) => {
    dispatch(addToCart(addProduct))
  }

  return (
    <div className='container mx-auto pt-48'>
      <div className='flex justify-center items-center'>
        <p className='text-secondary text-xl mb-0 pe-9'>Cart</p>
        <span className='inline-block w-48 h-px bg-black horizontal-line relative'></span>
        <p className='text-black text-xl mb-0 px-9'>Address</p>
        <span className='inline-block w-48 h-px bg-black horizontal-line relative'></span>
        <p className='text-black text-xl mb-0 ps-9'>Payment</p>
      </div>
      <div className='grid grid-cols-4 gap-10 mt-12'>
        <div className='col-span-3'>
          <div className='border border-grey rounded-3xl p-8'>
            <div className='flex justify-between items-center'>
              <h5 className='mb-0 text-secondary text-2xl font-bold'>Deliver to</h5>
              <Button useClass='pinkBtn text-sm' buttonText='Change Address'/>
            </div>
            <h6 className='mb-0 mt-10 text-2xl font-bold'>Divya Patel - 390019</h6>
            <p className='mb-0 mt-3 text-xl'>D-116, Vallabh Vihar-B, Nr. Mahavir Hall, Ajwa Road, Vadodara, Gujarat, 390019.</p>
          </div>
          <h6 className='my-10 text-2xl text-secondary font-bold'>Cart <span className='text-black'>(3 items)</span></h6>
          {
            cartProducts ?
            cartProducts.map((cartProduct) => (
              <div  key={cartProduct.slug.current} className='border border-grey rounded-3xl p-8 mt-5'>
                <div className='flex items-center w-full'>
                  <div className='w-36 h-36 rounded-xl bg-quad'>
                  {cartProduct.imageUrl &&
                    <div className='w-36 h-36 rounded-xl bg-quad'><img src={cartProduct.imageUrl} alt={cartProduct.name} className='w-full rounded-xl h-full object-cover'/></div>
                  }
                  </div>
                  <div className='flex-1 ms-7'>
                    <div className='flex justify-between items-cente mb-2'>
                      <h5 className='mb-0 text-black text-2xl font-bold'>{cartProduct.name}</h5>
                      <Button useClass='pinkBtn text-sm px-5 py-2' buttonText={<IMAGES.deleteSvg />}/>
                    </div>
                    {/* <p className='text-sm mt-2'>Slim fit - long sleeve</p> */}
                    <div>
                      {/* <h3>Description:</h3> */}
                      {/* Use PortableText to render block content */}
                      <PortableText value={cartProduct.description} />
                    </div>
                    <div className='flex items-center my-3'>
                      <Select>
                        <SelectTrigger className="bg-primary text-white px-2">
                          <SelectValue placeholder="Size: 42" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Size: 42</SelectLabel>
                            <SelectItem value="size:44">Size: 32</SelectItem>
                            <SelectItem value="banana">Size: 34</SelectItem>
                            <SelectItem value="blueberry">Size: 36</SelectItem>
                            <SelectItem value="grapes">Size: 40</SelectItem>
                            <SelectItem value="pineapple">Size: 42</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger className="bg-primary text-white px-2 ms-3">
                          <SelectValue placeholder="Qty: 1" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Qty: 1</SelectLabel>
                            <SelectItem value="size:44">Qty: 2</SelectItem>
                            <SelectItem value="banana">Qty: 3</SelectItem>
                            <SelectItem value="blueberry">Qty: 4</SelectItem>
                            <SelectItem value="grapes">Qty: 5</SelectItem>
                            <SelectItem value="pineapple">Qty: 6</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className='flex justify-between items-center'>
                      <h2 className='text-borderBlack font-bold text-xl'>&#8377; {cartProduct.discountedprice} <span className='text-grey ms-2 line-through'>&#8377; {cartProduct.actualprice}</span></h2>
                      <div className='flex items-center'>
                        <p className='px-5 py-2.5 border border-borderBlack rounded-md'><span className='inline-block align-middle'>{<IMAGES.blueCheckmarkSvg />}</span> Delivery in 5 Days</p>
                        <p className='px-5 py-2.5 border border-borderBlack rounded-md ms-5'><span className='inline-block align-middle'>{<IMAGES.blueCheckmarkSvg />}</span> 15 Days return available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
            : <p>The Cart is empty</p>
          }
          
        </div>
        <div className='col-span-1'>
          <p>Price</p>
        </div>
      </div>
    </div>
  )
}

export default Cart