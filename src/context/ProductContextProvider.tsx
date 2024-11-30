import { useEffect, useState } from "react"
import ProductContext from "./ProductContext";
import clients from "@/lib/clients";

const ProductContextProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "productType"]{
        name,
        slug,
        "imageUrl": image.asset->url,
        description,
        discountedprice,
        actualprice,
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
    <ProductContext.Provider value={{ allProducts, setAllProducts }}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider;