import React from 'react'
import { Link } from 'react-router-dom'
import hd_icon_1 from '../../image/hd_icon_1.svg'
import hd_icon_2 from '../../image/hd_icon_2.svg'
import hd_icon_3 from '../../image/hd_icon_3.svg'

const Footer = () => {
  return (
    <>
      <section className='footerSection'>
        <p>&copy; All rights reserved by <Link to="#">TheLittleKings.com</Link></p>
        <ul className='social d-block d-lg-none'>
          <li><Link to="#"><img src={hd_icon_1} /></Link></li>
          <li><Link to="#"><img src={hd_icon_2} /></Link></li>
          <li><Link to="#"><img src={hd_icon_3} /></Link></li>
        </ul>
      </section>
    </>
  )
}

export default Footer