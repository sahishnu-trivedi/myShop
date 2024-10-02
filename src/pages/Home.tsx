import Banner from '@/components/banner/Banner'
import Categories from '@/components/categories/Categories'
import Product from '@/components/product/Product'

export default function Home() {
  return (
    <>
      <Banner />
      <Categories title='Hot Categories' />
      <Product title='Best Selling T-Shirts for Men' />
      <Product title='Best Selling Shirts for Men' />
    </>
  )
}
