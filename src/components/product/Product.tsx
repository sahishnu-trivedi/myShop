import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import Title from '../title/Title'
import ViewMore from '../viewMore/ViewMore'
import clients from '@/lib/clients'

export default function Product({ title }) {
  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "productType"]{
        name,
        slug,
        "imageUrl": image.asset->url,
        description,
        discountedprice,
        "detailPageImageUrl1": image.asset->url,
        "detailPageImageUrl2": image.asset->url,
        "detailPageImageUrl3": image.asset->url,
        "detailPageImageUrl4": image.asset->url,
        actualprice,
        gender,
        category[]->{
          title
        }
      }`;

      try {
        const result = await clients.fetch(query);
        console.log({result})
        setAllProducts(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

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
