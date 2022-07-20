import React from 'react'
import hd_icon_1 from '../../image/hd_icon_1.svg'
import hd_icon_2 from '../../image/hd_icon_2.svg'
import hd_icon_3 from '../../image/hd_icon_3.svg'

const Footer = () => {
  return (
    <>
      <section className='footerSection'>
        <p>&copy; All rights reserved by TheLittleKings.Vip</p>
        <ul className='social d-block d-lg-none'>
          {/* Discord */}
          <li><a href="https://discord.com" target="_blank"><img src={hd_icon_1} /></a></li>
          {/* Twitter */}
          <li><a href="https://twitter.com/littlekingsnft" target="_blank"><img src={hd_icon_2} /></a></li>
          {/* OpenSea */}
          <li><a href="https://opensea.io" target="_blank"><img src={hd_icon_3} /></a></li>
        </ul>
      </section>
    </>
  )
}

export default Footer
