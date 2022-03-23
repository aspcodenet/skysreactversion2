import React from 'react'
import { Home } from './Home'
import { Products } from './Products'

export const Main = (props) => {
  return (
    <main>
        {/* { props.activePage == 'Products' && <Products />  } */}
        { props.activePage == 'Products' ? <Products />  : '' }
        { props.activePage == 'Home' ? <Home />  : '' }
    </main>
  )
}
