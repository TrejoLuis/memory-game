import React from 'react'
import ghIcon from '../assets/github-mark.png'

export default function Footer () {
  return (
    <footer>
      <p>&copy; 2023 Luis Trejo &nbsp;
        <a href="https://github.com/TrejoLuis/memory-game">
          <img src={ghIcon} alt="github logo" width='24px'/>
        </a>
    </p>
    </footer>
  )
}
