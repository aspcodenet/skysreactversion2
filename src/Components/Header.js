import React from 'react'
import { HeaderMenuItem } from './HeaderMenuItem'

export const Header = (props) => {
  return (
    <header className="siteheader">
        <div className="logo">
            <i className='bx bxs-cat logoicon'></i>
            Cat<span className="logopart2">Lovers</span>                
        </div>
        <nav>
            <ul className="navmenu">
                <HeaderMenuItem onChangeActivePage={props.onChangeActivePage} activePage={props.activePage} menuText="Home"  />
                <HeaderMenuItem onChangeActivePage={props.onChangeActivePage} activePage={props.activePage} menuText="Services"  />
                <HeaderMenuItem onChangeActivePage={props.onChangeActivePage} activePage={props.activePage} menuText="Products"/>
                <HeaderMenuItem onChangeActivePage={props.onChangeActivePage} activePage={props.activePage} menuText="About" />
                <HeaderMenuItem onChangeActivePage={props.onChangeActivePage} activePage={props.activePage} menuText="Contact" />
            </ul>
        </nav>
        <ul className="navicons">
        <li><a className="navanchor" href="#"><i className='bx bx-search-alt navicon'></i></a></li> 
        <li><a className="navanchor" href="#"><i className='bx bx-menu navicon' ></i></a></li> 
        </ul>
    </header>
  )
}
