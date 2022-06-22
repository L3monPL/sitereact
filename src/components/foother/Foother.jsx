import React from 'react'
import './foother.css'
import img1 from '../../assets/4.png'
import {TiSocialFacebook} from 'react-icons/ti'
import {TiSocialInstagram} from 'react-icons/ti'
import {TiSocialTwitter} from 'react-icons/ti'

const Foother = () => {
  return (
    <section id='foother'>
        <div className="foother_container">
            <img src={img1} alt="" />
            <ul className='foother_icons_list'>
                <li><a href=""><TiSocialFacebook/></a></li>
                <li><a href=""><TiSocialInstagram/></a></li>
                <li><a href=""><TiSocialTwitter/></a></li>
            </ul>
            <h2>+48000666000</h2>
            <h2>strongman.gym@gmail.com</h2>
            <p>Designed by <a className='foother_auth' href="https://github.com/L3monPL">Mikołaj Andrzejewski</a></p>
        </div>
    </section>
  )
}

export default Foother