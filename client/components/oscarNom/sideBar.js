import React from 'react'
import {slide as Menu} from 'react-burger-menu'

export default function sideBar() {
  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
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
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

  const categories = [
    'best-picture',
    'lead-actor',
    'lead-actress',
    'supporting-actor',
    'supporting-actress',
    'best-director',
    'animated-feature',
    'short-animted-feature',
    'adapted-screenplay',
    'origianl-screenplay',
    'cinematography',
    'documentary-feature',
    'documentary-short-subject',
    'live-action-short',
    'international-feature',
    'film-editing',
    'sound-editing',
    'sound-mixing',
    'production-design',
    'original-score',
    'original-song',
    'hair-and-makeup',
    'costume-design',
    'visual-effects'
  ]

  const capitalize = str => {
    let wordArr = str.split('-')
    console.log(wordArr)
    for (let i = 0; i < wordArr.length; i++) {
      let word = wordArr[i]
      let upperFirst = word[0].toUpperCase()
      let restofWord = word.slice(1)
      wordArr[i] = `${upperFirst}${restofWord}`
    }

    return wordArr.join(' ')
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
