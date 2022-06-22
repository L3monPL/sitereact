import React from 'react'
import './service.css'
import img1 from '../../assets/gym1.png'

const Service = () => {
  return (
    <section id='service'>
      <div className="service_container">
        <div className="service_text_container">
          <h2>Klub fitness</h2>
          <div className="service_border_container">
            <div className="service_border"></div>
          </div>
          <p>Chcesz osiągać kolejne cele? Marzysz o idealnej sylwetce, a może 
            po prostu uprawiasz ruch dla zdrowia? Nasz klub to idealna propozycja 
            dla Ciebie. Dostęp non stop, 24/7, wysoka jakość sprzętu klasy premium oraz 
            szeroka jego dostępność, rozbudowane strefy treningowe-od treningu siłowego 
            po strefę cardio-zajęcia grupowe w cenie karnetu oraz szeroki ich wachlarz.</p>
        </div>
        <div className="service_image_container">
          <img src={img1} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Service