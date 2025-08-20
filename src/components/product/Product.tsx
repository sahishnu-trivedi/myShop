import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import Title from '../title/Title'
import ViewMore from '../viewMore/ViewMore'
import clients from '@/lib/clients'

export default function Product({ title, bestSellingProduct }) {
  const [allProducts, setAllProducts] = useState([])
  
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "productType" && "${bestSellingProduct}" in category[] -> title ]{
        name,
        slug,
        "imageUrl": image.asset->url,
        description,
        quantity,
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
        // console.log('homepage query', query)
        // console.log('homepage result', allProducts)
        setAllProducts(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [bestSellingProduct]);

  return (
    <div className='container mx-auto'>
        <Title titleText= {title} />
        <div className='grid grid-cols-5 gap-10'>
          <ProductList selectedFilter={allProducts} setLimit={4} />
          <ViewMore />
        </div>
    </div>    
  )
}
