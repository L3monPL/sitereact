import React from 'react'
import './plans.css'
import {CgGym} from 'react-icons/cg'
import {AiFillCaretRight} from 'react-icons/ai'

const Plans = () => {
  return (
    <section className='plans_section' id='plans'>
        <div className="title">
            <h2>Plany karnetowe</h2>
            <h3>Cennik</h3>
        </div>
        <div className="plans_container_items">
            <article className='plans_item'>
                <div className="plans_icon">
                    <CgGym/>
                </div>
                <h2>Miesięczny</h2>
                <h3>zł 100</h3>
                <div className="plans_info_text">
                    <AiFillCaretRight className='plans_before_icon'/><p>Dostęp do klubu 24/7</p>
                </div>
                <div className="plans_info_text">
                    <AiFillCaretRight className='plans_before_icon'/><p>Strzeżony parking</p>
                </div>
                <div className="plans_info_text">
                    <AiFillCaretRight className='plans_before_icon'/><p>Plany treningowe</p>
                </div>
                <div className="plans_btn_container">
                    <a href="" className='plans_btn'>Więcej</a>
                </div>
            </article>
            <article className='plans_item'>
                <div className="plans_icon">
                    <CgGym/>
                </div>
                <h2>Kwartalny</h2>
                <h3>zł 250</h3>
                <div className="plans_info_text">
                    <AiFillCaretRight className='plans_before_icon'/><p>Dostęp do klubu 24/7</p>
                </div>
                <div className="plans_info_text">
                    <AiFillCaretRight className='plans_before_icon'/><p>Strzeżony parking</p>
                </div>
                <div className="plans_info_text">
                    <AiFillCaretRight className='plans_before_icon'/><p>Plany treningowe</p>
                </div>
                <div className="plans_btn_container">
                    <a href="" className='plans_btn'>Więcej</a>
                </div>
            </article>
            <article className='plans_item'>
                <div className="plans_icon">
                    <CgGym/>
                </div>
                <h2>Roczny</h2>
                <h3>zł 900</h3>
                <div className="plans_info_text">
                    <AiFillCaretRight className='plans_before_icon'/><p>Dostęp do klubu 24/7</p>
                </div>
                <div className="plans_info_text">
                    <AiFillCaretRight className='plans_before_icon'/><p>Strzeżony parking</p>
                </div>
                <div className="plans_info_text">
                    <AiFillCaretRight className='plans_before_icon'/><p>Plany treningowe</p>
                </div>
                <div className="plans_btn_container">
                    <a href="" className='plans_btn'>Więcej</a>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Plans