import IMAGES from '@/assets/Images';
import Button from '@/components/button/Button';
import clients from '@/lib/clients';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PortableText } from '@portabletext/react' // For when adding product Description
import { log } from 'console';

function ProductDetailPage() {

  const {slug} = useParams();
  const [allProducts, setAllProducts] = useState();

  // Fetching All Products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "productType" && slug.current == "${slug}"]{
        name,
        slug,
        "imageUrl": image.asset->url,
        description,
        discountedprice,
        images[]{
          "url": asset->url,
          alt
        },
        actualprice,
        gender,
        category[]->{
          title
        }
      }`;

      try {
        const result = await clients.fetch(query);
        setAllProducts(result);
        console.log('allProducts', result)
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [slug]);
  // Fetching All Products from Sanity

  return (
    <>
      {allProducts ?
      <div className='container mx-auto pt-48'>
        <div className='grid grid-cols-4 gap-4'>
          <div className="col-span-2">
            <div className='grid grid-cols-2 gap-10'>
              {allProducts[0].images.map((productDetailImage) => (
                <div className='productDetailImgBlock'>
                  <img src={productDetailImage.url} alt={productDetailImage.alt} className='w-full rounded-3xl h-full object-cover'/>
              </div>
              ))}
                {/* <div className='productDetailImgBlock'>
                    <img src={allProducts[0].imageUrl} alt='Product Image' className='w-full rounded-3xl h-full object-cover'/>
                </div>
                <div className='productDetailImgBlock'>
                    <img src={allProducts[0].detailPageImageUrl1} alt='Product Image' className='w-full rounded-3xl h-full object-cover'/>
                </div>
                <div className='productDetailImgBlock'>
                    <img src={allProducts[0].detailPageImageUrl2} alt='Product Image' className='w-full rounded-3xl h-full object-cover'/>
                </div>
                <div className='productDetailImgBlock'>
                    <img src={allProducts[0].detailPageImageUrl3} alt='Product Image' className='w-full rounded-3xl h-full object-cover'/>
                </div>
                <div className='productDetailImgBlock'>
                    <img src={allProducts[0].detailPageImageUrl4} alt='Product Image' className='w-full rounded-3xl h-full object-cover'/>
                </div> */}
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
            <div className='py-10 border-b border-grey'>
              <p className='text-grey font-extrabold mt-10 mb-8'>Doozy Woozy</p>
              <h3 className='text-borderBlack font-bold text-2xl mb-8'>{allProducts[0].name}</h3>
              {/* <p className='text-borderBlack mb-8'>White solid casual shirt, has a mandarin collar, a button placket, 1 pocket, long sleeves<br /> with roll-up tab features, curved hem</p> */}
              <p className='text-borderBlack mb-8'>
                <PortableText value={allProducts[0].description} />
              </p>
              <h2 className='text-secondary text-4xl font-bold mb-8'>&#8377; {allProducts[0].discountedprice} <span className='text-xl text-grey'>MRP <span className='line-through'>{allProducts[0].actualprice}</span></span> </h2>
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
            <div className='py-10 border-b border-grey'>
              <div className='flex justify-start align-center'>
                <a href='#' className='selected-product-color selected'>
                  <img src={IMAGES.productImg1} alt='Product Image' className='w-full h-full object-cover'/>
                </a>
                <a href='#' className='selected-product-color'>
                  <img src={IMAGES.productImg1} alt='Product Image' className='w-full h-full object-cover'/>
                </a>
                <a href='#' className='selected-product-color disabled'>
                  <img src={IMAGES.productImg1} alt='Product Image' className='w-full h-full object-cover'/>
                </a>
                <a href='#' className='selected-product-color'>
                  <img src={IMAGES.productImg1} alt='Product Image' className='w-full h-full object-cover'/>
                </a>
              </div>
            </div>
            <div className='py-10 border-b border-grey'>
              <div className='flex items-center'>
                <h6 className='text-grey text-xl font-bold'>Check Delivery Availability</h6>
                <input className='border border-grey rounded-full py-2.5 px-5 mx-10 w-1/3 text-sm' placeholder='Enter PINCODE' />
                <Button useClass='pinkBtn py-2.5 px-10 rounded-full' buttonText='Check'/>
              </div>
              <div>
                <ul className='delivery-text mt-7 text-borderBlack'>
                  <li className='mb-2.5'><IMAGES.checkMarkPinkSvg /> Your location is available for Delivery.</li>
                  <li><IMAGES.checkMarkPinkSvg /> Get it by 24th June (Monday)</li>
                </ul>
              </div>
            </div>
            <div className='py-10 border-b border-grey flex'>
              <div className='payment-options border border-grey rounded-3xl w-40 h-40 flex justify-center items-center flex-col text-center mr-7'>
                <IMAGES.checkMarkGreenSvg />
                <span className='inline-block mt-3'>COD<br />Available</span>
              </div>
              <div className='payment-options border border-grey rounded-3xl w-40 h-40 flex justify-center items-center flex-col text-center mr-7'>
                <IMAGES.checkMarkGreenSvg />
                <span className='inline-block mt-3'>10 Days Return Available</span>
              </div>
              <div className='payment-options border border-grey rounded-3xl w-40 h-40 flex justify-center items-center flex-col text-center'>
                <IMAGES.cancelSvg />
                <span className='inline-block mt-3'>Return not Available</span>
              </div>
            </div>
            <div className='py-10'>
              <h3 className='text-borderBlack text-2xl font-bold mb-2'>Product Details</h3>
              <p>White solid casual shirt, has a mandarin collar, a button placket, 1 pocket, long sleeves with roll-up tab features, curved hem</p>
              <h4 className='text-xl mb-2 mt-10 font-bold'>Size &amp; Fit</h4>
              <p>White solid casual shirt, has a mandarin collar, a button placket, 1 pocket, long sleeves with roll-up tab features, curved hem</p>
              <h4 className='text-xl mb-2 mt-10 font-bold'>Material</h4>
              <p>White solid casual shirt, has a mandarin collar, a button placket, 1 pocket, long sleeves with roll-up tab features, curved hem</p>
              <h4 className='text-xl mb-2 mt-10 font-bold'>Specifications</h4>
              <div className='w-3/5'>
                <div className='grid grid-cols-2 gap-4 border-b border-grey py-3'>
                  <div>
                    <span className='text-sm'>Distress</span>
                    <p className='bold'>Clean Look</p>
                  </div>
                  <div>
                    <span className='text-sm'>Distress</span>
                    <p className='bold'>Clean Look</p>
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-4 border-b border-grey py-3'>
                  <div>
                    <span className='text-sm'>Fade</span>
                    <p className='bold'>No Fade</p>
                  </div>
                  <div>
                    <span className='text-sm'>Shade</span>
                    <p className='bold'>Dark</p>
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-4 border-b border-grey py-3'>
                  <div>
                    <span className='text-sm'>Fit</span>
                    <p className='bold'>Straight Fit</p>
                  </div>
                  <div>
                    <span className='text-sm'>Length</span>
                    <p className='bold'>Regular</p>
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-4 border-b border-grey py-3'>
                  <div>
                    <span className='text-sm'>Number of Pockets</span>
                    <p className='bold'>1</p>
                  </div>
                  <div>
                    <span className='text-sm'>Stretch</span>
                    <p className='bold'>Non Stretchable</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='p-7 rounded-3xl border border-grey'>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center'>
                    <div className='bg-secondary text-white rounded-lg py-2.5 px-5 text-center me-3'>
                      <span className='text-sm'>Total Ratings</span>
                      <p className='bold text-3xl'>4.5</p>
                      <div className='flex align-center justify-center'>
                        <ul className='ratingStarList flex items-center justify-self-end'>
                          <li className='ratingStarListItem text-white'><i className="icofont-star"></i></li>
                          <li className='ratingStarListItem text-white'><i className="icofont-star"></i></li>
                          <li className='ratingStarListItem text-white'><i className="icofont-star"></i></li>
                          <li className='ratingStarListItem text-white'><i className="icofont-star"></i></li>
                          <li className='ratingStarListItem text-grey'><i className="icofont-star"></i></li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h5 className='text-xl bold'>Reviews &amp; Ratings</h5>
                      <p className='text-xl text-grey'>(56 Reviews)</p>
                    </div>
                  </div>
                  <div>
                    <Button useClass='bg-primary py-2.5 px-10 rounded-full text-white' buttonText='Write Review'/>
                  </div>
                </div>
                <div className='border-b border-grey py-7'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada ligula feugiat erat interdum, sit amet fringilla ligula pretium. Nam purus nibh</p>
                  <div className='flex items-center'>
                    <ul className='ratingStarList flex items-center justify-self-end'>
                      <li className='ratingStarListItem text-secondary'><i className="icofont-star"></i></li>
                      <li className='ratingStarListItem text-secondary'><i className="icofont-star"></i></li>
                      <li className='ratingStarListItem text-secondary'><i className="icofont-star"></i></li>
                      <li className='ratingStarListItem text-secondary'><i className="icofont-star"></i></li>
                      <li className='ratingStarListItem text-white'><i className="icofont-star"></i></li>
                    </ul>
                    <p className='bold text-sm text-borderBlack'>S. K. Shah - <span className='text-xs text-grey'>23 Jan 2021</span></p>
                  </div>
                </div>
                <div className='border-b border-grey py-7'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada ligula feugiat erat interdum, sit amet fringilla ligula pretium. Nam purus nibh</p>
                  <div className='flex items-center'>
                    <ul className='ratingStarList flex items-center justify-self-end'>
                      <li className='ratingStarListItem text-secondary'><i className="icofont-star"></i></li>
                      <li className='ratingStarListItem text-secondary'><i className="icofont-star"></i></li>
                      <li className='ratingStarListItem text-secondary'><i className="icofont-star"></i></li>
                      <li className='ratingStarListItem text-secondary'><i className="icofont-star"></i></li>
                      <li className='ratingStarListItem text-white'><i className="icofont-star"></i></li>
                    </ul>
                    <p className='bold text-sm text-borderBlack'>S. K. Shah - <span className='text-xs text-grey'>23 Jan 2021</span></p>
                  </div>
                </div>
                <div className='border-b border-grey py-7'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada ligula feugiat erat interdum, sit amet fringilla ligula pretium. Nam purus nibh</p>
                  <div className='flex items-center'>
                    <ul className='ratingStarList flex items-center justify-self-end'>
                      <li className='ratingStarListItem text-secondary'><i className="icofont-star"></i></li>
                      <li className='ratingStarListItem text-secondary'><i className="icofont-star"></i></li>
                      <li className='ratingStarListItem text-secondary'><i className="icofont-star"></i></li>
                      <li className='ratingStarListItem text-secondary'><i className="icofont-star"></i></li>
                      <li className='ratingStarListItem text-white'><i className="icofont-star"></i></li>
                    </ul>
                    <p className='bold text-sm text-borderBlack'>S. K. Shah - <span className='text-xs text-grey'>23 Jan 2021</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      : <p>Loading Product</p>
    }
    </>
  )
}
export default ProductDetailPage