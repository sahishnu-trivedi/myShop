import IMAGES from '@/assets/Images';
import { addToCart } from '@/features/CartProductSlice';
import { useDispatch, useSelector } from 'react-redux'

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
      <div className='grid grid-cols-5 md:grid-cols-4 gap-10'>
      {
        cartProducts ?
        cartProducts.map((cartProduct) => (
          <div key={cartProduct.slug.current}>
            <div className='productBlock'>
              <div className='relative'>
                {cartProduct.imageUrl &&
                  <div className='productImg'><img src={cartProduct.imageUrl} alt={cartProduct.name} className='w-full rounded-xl h-full object-cover'/></div>
                }
                <a href='#' className='heartIcon w-10 h-10 rounded-xl border border-secondary inline-block flex justify-center items-center bg-white absolute top-4 right-4 hover:bg-secondary hover:border-white'>
                  <IMAGES.heartSvg />
                  {/* <i className="icofont-heart"></i> */}
                </a>
                <div className='grid grid-cols-2 justify-between my-2'>
                  <p className='text-grey'>T-shirt</p>
                  <ul className='ratingStarList flex items-center justify-self-end'>
                    <li className='ratingStarListItem text-primary'><i className="icofont-star"></i></li>
                    <li className='ratingStarListItem text-primary'><i className="icofont-star"></i></li>
                    <li className='ratingStarListItem text-primary'><i className="icofont-star"></i></li>
                    <li className='ratingStarListItem text-primary'><i className="icofont-star"></i></li>
                    <li className='ratingStarListItem text-grey'><i className="icofont-star"></i></li>
                    <li className='ratingStarListItem text-grey ml-1'>(369)</li>
                  </ul>
                  <div>
                    {/* <h3>Description:</h3> */}
                    {/* Use PortableText to render block content */}
                    {/* <PortableText value={cartProduct.description} /> */}
                  </div>
                </div>
                <h2 className='mb-2 text-black font-bold text-lg'>{cartProduct.name}</h2>
                <div className='flex items-center font-bold'>
                  <h3 className='text-black text-lg mr-2'>&#8377; {cartProduct.discountedprice}</h3>
                  <p className='text-secondary text-base'><span className='line-through'>&#8377; {cartProduct.actualprice}</span> ({Math.round(((cartProduct.actualprice - cartProduct.discountedprice) / cartProduct.actualprice) * 100)}% off)</p>
                </div>
                <div>
                  <a href='javascript:void(0)' className='bg-secondary text-white text-secondary py-1 px-3 inline-block rounded font-bold'>-</a>
                  <p className='inline-block mx-3'>{cartProduct.quantity}</p>
                  <a href='javascript:void(0)' onClick={() => handleIncrementClick(cartProduct)} className='bg-secondary text-white text-secondary py-1 px-3 inline-block rounded font-bold'>+</a>
                </div>
              </div>
            </div>
          </div>
        ))
        : <p>The Cart is empty</p>
      }
      </div>
    </div>
  )
}

export default Cart