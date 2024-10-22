import IMAGES from '@/assets/Images'
import Button from '@/components/button/Button'
import React from 'react'

function ProductDetailPage() {
  return (
    <div className='container mx-auto pt-48'>
        <div className='grid grid-cols-3 gap-4'>
          <div className="col-span-1">
            <div className='grid grid-cols-2 gap-4'>
                <div className='productDetailImgBlock'>
                    <img src={IMAGES.productImg1} alt='Product Image' className='w-full rounded-xl h-full object-cover'/>
                </div>
                <div className='productDetailImgBlock'>
                    <img src={IMAGES.productImg1} alt='Product Image' className='w-full rounded-xl h-full object-cover'/>
                </div>
                <div className='productDetailImgBlock'>
                    <img src={IMAGES.productImg1} alt='Product Image' className='w-full rounded-xl h-full object-cover'/>
                </div>
                <div className='productDetailImgBlock'>
                    <img src={IMAGES.productImg1} alt='Product Image' className='w-full rounded-xl h-full object-cover'/>
                </div>
                <div className='productDetailImgBlock'>
                    <img src={IMAGES.productImg1} alt='Product Image' className='w-full rounded-xl h-full object-cover'/>
                </div>
            </div>
          </div>
          <div className='col-span-2'>
            <div className='flex justify-between align-center'>
                <div className='bg-primary text-white px-3 py-2 rounded-md'>53&#37; off</div>
                <div className='flex align-center'>
                  <ul className='ratingStarList flex items-center justify-self-end'>
                    <li className='ratingStarListItem text-primary'><i className="icofont-star"></i></li>
                    <li className='ratingStarListItem text-primary'><i className="icofont-star"></i></li>
                    <li className='ratingStarListItem text-primary'><i className="icofont-star"></i></li>
                    <li className='ratingStarListItem text-primary'><i className="icofont-star"></i></li>
                    <li className='ratingStarListItem text-grey'><i className="icofont-star"></i></li>
                  </ul>
                  <div className='bg-primary text-white px-3 py-2 rounded-md ms-3'>30 Reviews</div>
                </div>
            </div>
            <p className='text-grey font-extrabold mt-10 mb-8'>Doozy Woozy</p>
            <h3 className='text-borderBlack font-bold text-2xl mb-8'>Blue T-shirt for Men</h3>
            <p className='text-borderBlack mb-8'>White solid casual shirt, has a mandarin collar, a button placket, 1 pocket, long sleeves<br /> with roll-up tab features, curved hem</p>
            <h2 className='text-secondary text-4xl font-bold mb-8'>&#8377; 499 <span className='text-xl text-grey'>MRP <span className='line-through'>1299</span></span> </h2>
            <p className='text-grey text-xl mb-8'>Select size</p>
            <div className='size-radio-button'>
              <form className="flex align-center select_time_wrapper boxed">
                <input type="radio" id="medium" name="skills" value="M" />
                <label htmlFor="medium">M</label>

                <input type="radio" id="large" name="skills" value="L" />
                <label htmlFor="large">L</label>
                
                <input type="radio" id="xtraLarge" name="skills" value="XL" />
                <label htmlFor="xtraLarge">XL</label>

                <input type="radio" id="xtraXLarge" name="skills" value="XXL" disabled/>
                <label htmlFor="xtraXLarge">XXL</label>
              </form>
            </div>
            <div className='mt-8 flex items-center'>
              <Button useClass='border-secondary border-2 text-secondary py-5 px-24 inline-block rounded-full font-bold text-sm' buttonText='Add to Cart'/>
              <div className='flex items-center ms-4'>
                <IMAGES.blueHeartSvg />
                <Button useClass='text-primary inline-block font-bold text-sm ms-2' buttonText='Add to Wishlist'/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductDetailPage