import React, { useState } from 'react'
import Logo from '../../image/logo.png'
import hd_icon_1 from '../../image/hd_icon_1.svg'
import hd_icon_2 from '../../image/hd_icon_2.svg'
import hd_icon_3 from '../../image/hd_icon_3.svg'
import mb_icon_1 from '../../image/mb_icon_1.svg'
import mb_icon_2 from '../../image/mb_icon_2.svg'
import mb_icon_3 from '../../image/mb_icon_3.svg'

import { Link, useLocation } from 'react-router-dom'

const HeaderMenu = [
  {
    name: "Home",
    link: ""
  },
  {
    name: "Lore",
    link: "Lore"
  },
  {
    name: "Law of the Land",
    link: "law-of-the-land"
  },
  {
    name: "Roundtable",
    link: "Roundtable"
  },
  {
    name: "Mint",
    link: "Mint"
  }
]

const Header = () => {

  const location = useLocation();

  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const [menu, setMenu] = useState(false);


  return (
    <>
      <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand" to="/">
                  <img src={Logo} />
                </Link>
                <Link to="" className='mobileMenuBtn d-inline-block d-lg-none' onClick={() => setMenu(true)}>
                  <p>Menu<div className='yl_bg'><span></span></div></p>
                </Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                    {HeaderMenu.map(m =>
                      <li className={`nav-item ${splitLocation[1] === m.link ? "active" : ""}`} key={m.name}>
                        <Link to={`/${m.link}`} className="nav-link">{m.name}</Link>
                        <div className='yl_bg'><span></span></div>
                      </li>
                    )}
                  </ul>
                  <ul className='social'>
                    <li><Link to="#"><img src={hd_icon_1} /></Link></li>
                    <li><a href="https://twitter.com/LittleKingsnft"><img src={hd_icon_2} /></a></li>
                    <li><Link to="#"><img src={hd_icon_3} /></Link></li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className={`sidebarSection ${menu ? "active" : ""}`}>
        <nav className="navbar navbar-expand-lg">
          <div className='d-flex align-items-center'>
            <Link className="navbar-brand" to="#">
              <img src={Logo} />
            </Link>
            <Link to="#" className='mobileMenuBtn ml-auto' onClick={() => setMenu(false)}>
              <h5><span>X</span>Close</h5>
            </Link>
          </div>
          <ul className='menuBar'>
            {HeaderMenu.map(m =>
              <li key={m.name} className={`${splitLocation[1] === m.link ? "active" : ""}`}><Link to={`/${m.link}`}>{m.name}</Link></li>
            )}
          </ul>
          <div className='socialMedia'>
            <h3>Social Media</h3>
            <p>Follow the journey and join the conversation on</p>
            <ul>
              <li><Link to="#"><img src={mb_icon_1} />Opensea</Link></li>
              <li><a href="https://twitter.com/LittleKingsnft"><img src={mb_icon_2} />Twitter</a></li>
              <li><Link to="#"><img src={mb_icon_3} />Discord</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header
