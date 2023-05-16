import React from 'react'
import { Home } from './Home'
import { Game } from './Game'
import { Stats } from './Stats'

export const Main = (props) => {
  return (
    <main>
        {/* { props.activePage == 'Products' && <Products />  } */}
        { props.activePage == 'Stats' ? <Stats />  : '' }
        { props.activePage == 'Game' ? <Game />  : '' }
        { props.activePage == 'Home' ? <Home />  : '' }
    </main>
  )
}
