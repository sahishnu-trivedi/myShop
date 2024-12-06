import IMAGES from '@/assets/Images'
// import ProductDetailPage from '@/pages/ProductDetailPage'
import { Link } from 'react-router-dom'
import { PortableText } from '@portabletext/react' // For when adding product Description

export default function ProductList({selectedFilter, setLimit}) {
  
  const limitedProducts = setLimit ? selectedFilter.slice(0, setLimit) : selectedFilter;

  return (
    <>
      {limitedProducts ? (
        limitedProducts.map((product) => (
          <div key={product.slug.current}>
            <Link to={`/productDetail/${product.slug.current}`} className='productBlock'>
              <div className='relative'>
                  {product.imageUrl &&
                    <div className='productImg'><img src={product.imageUrl} alt={product.name} className='w-full rounded-xl h-full object-cover'/></div>
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
                      {/* <PortableText value={product.description} /> */}
                    </div>
                  </div>
                  <h2 className='mb-2 text-black font-bold text-lg'>{product.name}</h2>
                  <div className='flex items-center font-bold'>
                    <h3 className='text-black text-lg mr-2'>&#8377; {product.discountedprice}</h3>
                    <p className='text-secondary text-base'><span className='line-through'>&#8377; {product.actualprice}</span> ({Math.round(((product.actualprice - product.discountedprice) / product.actualprice) * 100)}% off)</p>
                  </div>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </>
  )
}
