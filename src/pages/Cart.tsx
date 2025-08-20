import IMAGES from '@/assets/Images';
import Button from '@/components/button/Button';
import { removeFromCart, incrementQuantity, calculateTotalQty } from '@/features/CartProductSlice';
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
  let totalQuantity = useSelector((state) => state.allCart.totalQuantity)
  // const quantity = useSelector((state) => state.allCart.quantity)
  
  const dispatch = useDispatch()
  
  console.log('cartProducts : ', cartProducts);

  const handleIncrementClick = (product, updatedQuantity) => {
    console.log('handleIncrementClick updatedQuantity', updatedQuantity);
    dispatch(incrementQuantity({product, quantity: updatedQuantity}));
  }
  const handleRemoveProduct = (removeProduct) => {
    console.log('removeProduct : ', removeProduct);
    dispatch(removeFromCart(removeProduct));
  }

  const handleTotalQty = (totalqty) => {
    console.log('totalqty : ', totalqty);
    dispatch(calculateTotalQty(totalqty));
  }

  const quantityArray = [1, 2, 3, 4, 5, 6];

  const calculatePrice = cartProducts.map((cartPrice) => cartPrice.actualprice * cartPrice.quantity).reduce((acc, curr) => acc + curr, 0);

  const cartTotalQuantity =  cartProducts.map((cartTotalQty) => cartTotalQty.quantity).reduce((acc, curr) => acc + curr, 0)
  handleTotalQty(cartTotalQuantity);
  console.log('totalQuantity : ', handleTotalQty(cartTotalQuantity));

  const calculateDiscountedPrice = cartProducts.map((cartDiscountedPrice) => cartDiscountedPrice.discountedprice * cartDiscountedPrice.quantity).reduce((acc, curr) => acc + curr, 0);

  const couponDiscount = 120; // Assuming a fixed coupon discount for simplicity

  const deliveryCharges = 0; // Assuming free delivery for simplicity

  const totalPrice = calculatePrice - calculateDiscountedPrice - couponDiscount - deliveryCharges;

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
          <h6 className='my-10 text-2xl text-secondary font-bold'>Cart <span className='text-black'>({cartProducts ? cartProducts.length : 0} items)</span></h6>
          {
            cartProducts ?
            cartProducts.map((cartProduct) => (
              <div  key={cartProduct.slug} className='border border-grey rounded-3xl p-8 mt-5'>
                <div className='flex items-center w-full'>
                  <div className='w-36 h-36 rounded-xl bg-quad'>
                  {cartProduct.imageUrl &&
                    <div className='w-36 h-36 rounded-xl bg-quad'><img src={cartProduct.imageUrl} alt={cartProduct.name} className='w-full rounded-xl h-full object-cover'/></div>
                  }
                  </div>
                  <div className='flex-1 ms-7'>
                    <div className='flex justify-between items-cente mb-2'>
                      <h5 className='mb-0 text-black text-2xl font-bold'>{cartProduct.name}</h5>
                      {/* <Button useClass='pinkBtn text-sm px-5 py-2' onClickHandler={handleRemoveProduct} buttonText={<IMAGES.deleteSvg />}/> */}
                      <a href='#' className='pinkBtn text-sm px-5 py-2' onClick={() => handleRemoveProduct(cartProduct)}>{<IMAGES.deleteSvg />}</a>
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
                        <SelectContent className='bg-white'>
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
                      <Select onValueChange={(value) => handleIncrementClick(cartProduct.slug.current, parseInt(value))}>
                        <SelectTrigger className="bg-primary text-white px-2 ms-3">
                          <SelectValue placeholder={`Qty: ${cartProduct.quantity}`} />
                        </SelectTrigger>
                        <SelectContent className='bg-white'>
                          <SelectGroup>
                            <SelectLabel>Qty: 1</SelectLabel>
                            {quantityArray.map((qty) => (
                              <SelectItem key={qty} value={qty}>Qty: {qty}</SelectItem>
                            ))}
                            {/* <SelectItem value="1">Qty: 1</SelectItem>
                            <SelectItem value="2">Qty: 2</SelectItem>
                            <SelectItem value="3">Qty: 3</SelectItem>
                            <SelectItem value="4">Qty: 4</SelectItem>
                            <SelectItem value="5">Qty: 5</SelectItem>
                            <SelectItem value="6">Qty: 6</SelectItem> */}
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
          <div className='grid grid-cols-3 gap-10 mt-16'>
            <div className='text-center'> 
              <div className='w-40 h-40 shadow-[0_0_15px_0_rgba(0,0,0,0.1)] rounded-full flex justify-center items-center bg-white mx-auto'>{<IMAGES.securePaymentSvg />}</div>
              <p className='text-grey text-xl uppercase mt-4'>SECURE PAYMENT</p>
            </div>
            <div className='text-center'>
              <div className='w-40 h-40 shadow-[0_0_15px_0_rgba(0,0,0,0.1)] rounded-full flex justify-center items-center bg-white mx-auto'> {<IMAGES.easyReturnSvg />} </div>
              <p className='text-grey text-xl uppercase mt-4'>EASY RETURN</p>
            </div>
            <div className='text-center'>
              <div className='w-40 h-40 shadow-[0_0_15px_0_rgba(0,0,0,0.1)] rounded-full flex justify-center items-center bg-white mx-auto'> {<IMAGES.qualityAssuranceSvg />} </div>
              <p className='text-grey text-xl uppercase mt-4'>EASY RETURN</p>
            </div>
          </div>
        </div>
        <div className='col-span-1'>
          <div className='bg-secondary text-white p-7 rounded-3xl'>
            <h6 className='mb-8 text-2xl font-bold'>Price Summary</h6>
            <p className='flex justify-between align-center text-xl mb-2'>
              <span>Total MRP (Inc. all taxes)</span>
              <span>&#8377; {calculatePrice}</span>
            </p>
            <p className='flex justify-between align-center text-xl mb-2'>
              <span>Sales Discount</span>
              <span>- &#8377; {calculateDiscountedPrice}</span>
            </p>
            <p className='flex justify-between align-center text-xl mb-2'>
              <span>Coupon Discount</span>
              <span>- &#8377; {couponDiscount}</span>
            </p>
            <p className='flex justify-between align-center text-xl mb-3'>
              <span>Delivery Charges</span>
              <span>{deliveryCharges}</span>
            </p>
            <p className='flex justify-between align-center text-xl border-t border-dashed pt-3'>
              <span>Subtotal</span>
              <span>&#8377; {totalPrice}</span>
            </p>
          </div>
          <div className='bg-primary p-7 rounded-3xl mt-5 text-white flex justify-between items-center'>
            <span> {<IMAGES.discountCelebrationSvg />} </span>
            <p className='text-2xl ms-8'>Congratulations..!! You got ₹ 1420 off on this order</p>
          </div>
          <div className='p-7 rounded-3xl mt-5 border border-grey'>
            <h6 className='mb-8 text-2xl font-bold text-secondary'>Coupons &amp; Offers</h6>
            <p className='text-xl'>Appy Coupon Code</p>
            <div className='flex justify-between items-center border border-grey rounded-xl w-full py-5 ps-5 pe-3 pl-1 mt-5'>
              <input type="text" className="text-md placeholder:text-gray-400 focus:outline-none flex-1" placeholder="Enter Code"></input>
              <Button useClass='text-sm text-secondary ms-2' buttonText='Apply' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart