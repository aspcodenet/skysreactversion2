import React, {useEffect, useState} from 'react'
import { Product } from './Product'
import { fetchProducts } from './Data/ProductData'

export const Products = () => {

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])


    const onSearchChange = (e)=>{
        console.log(e.target.value)
        const filtered = products.filter( p => p.title.includes(e.target.value)   )
        setFilteredProducts(filtered)
    }


    useEffect(()=>{
        fetchProducts().then( result => {
            setProducts(result)
            setFilteredProducts(result)}
             )
        
        // const fetchData = async()=>{
        //     const result = await fetchProducts()
        //     setProducts(result)
        //   }
        //   fetchData()
         }
        ,
    []);




  return (
    <section className="products" id="products">
            <h1 className="heading"> <span>our</span> products </h1>
            <input name="search" onChange={onSearchChange} />
            <div className="productgallery">
            {filteredProducts.map( p => <Product key={p.id} product={p} />  )}
            </div>
        
        </section>
  )
}
