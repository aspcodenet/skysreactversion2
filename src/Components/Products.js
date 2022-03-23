import React, {useEffect, useState} from 'react'
import { Product } from './Product'
import { fetchProducts } from './Data/ProductData'

export const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        const fetchData = async()=>{
            const result = await fetchProducts()
            setProducts(result)
          }
          fetchData()
         },
    []);

  return (
    <section className="products" id="products">
            <h1 className="heading"> <span>our</span> products </h1>
        
            <div className="productgallery">
            {products.map( p => <Product key={p.id} product={p} />  )}
            </div>
        
        </section>
  )
}
