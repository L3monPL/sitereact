import React from 'react'
import './header.css'
import img1 from '../../assets/4.png'

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className="container_header">
          <div className="header_title">
            <div className="header_box_text">
              <h1>Siłownia Strongman</h1>
              <p>Sprawdz nasze ceny karnetów, jesteśmy najwiekszą społecznością w okolicy. Przyjmujemy karnet sport +</p>
              <div className="header_buttons_container">
                <a href="#plans" className='header_btn header_btn_1 header_btn_hover'>Cennik</a>
                <a href="#map" className='header_btn header_btn_1_hover'>Dojazd</a>
              </div>
            </div>  
          </div>
          <div className="header_image">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header