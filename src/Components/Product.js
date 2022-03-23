import React from 'react'

export const Product = ({product}) => {
  return (
    <div className="productgallery_card">
    <div className="productgallery_card_container">
        <img src={product.image} alt="cookies" className="hero-image"/>
        <div className="information">

            <div className="name">{product.title}</div>

            <div className="store">{product.category}</div>

            <a href="#" className="storebutton">Purchase Product</a>

        </div>
    </div>
</div>

  )
}
