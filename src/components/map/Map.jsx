import React from 'react'
import './map.css'
import {GrLocation} from 'react-icons/gr'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'

const Map = () => {
  return (
    <section id='map'>
        <div className="title">
            <h2>Kontakt</h2>
            <h3>Mapa</h3>
        </div>
        <div class="map_container">
            <div class="gmap_canvas">
                <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Warszawa%202&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
        </div>
        <div className="map_container_info">
            <div className="map_info_item">
                <GrLocation className='map_info_icon'/>
                <p>Warszawa, Wyględów 2</p>
            </div>
            <div className="map_info_item">
                <AiOutlineMail className='map_info_icon map_icon_map'/>
                <p>strongman.gym@gmail.com</p>
            </div>
            <div className="map_info_item">
                <AiOutlinePhone className='map_info_icon map_icon_phone'/>
                <p>+8801234567890</p>
            </div>
        </div>
    </section>
  )
}

export default Map