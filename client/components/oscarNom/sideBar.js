import React from 'react'
import {slide as Menu} from 'react-burger-menu'
import {categories, capitalize} from './utilities'

export default function sideBar() {
  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px'
      // top: '36px'
    },
    bmBurgerBars: {
      background: '#f0e800'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.3em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#ffffff',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

  return (
    <Menu styles={styles}>
      {categories.map(category => {
        return (
          <a key={category} className="menu-item" href={`#${category}`}>
            {capitalize(category)}
          </a>
        )
      })}
    </Menu>
  )
}
