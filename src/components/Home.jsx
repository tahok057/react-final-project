import '../App.css';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  return (
   <div className='home-container'>
      <h1 className='text'>University search by taha kamel</h1>
      <div className='image-container'>
        <img className="rounded float-start images" src="https://footprints-tours.com/wp-content/uploads/2018/03/All-Souls-1.jpg"/>
        <img className="rounded images" src="https://acnntv.com/wp-content/uploads/2023/06/university-on-the-niger.jpg"/>
        <img className="rounded images" src="https://edusokouniversity.edu.ng/assets/images/slider/gate_v.jpg"/>
        <img className="rounded images" src="https://www.zuckerman-scholars.org/wp-content/uploads/2022/08/Ariel_University_Web.jpg"/>
        <img className="rounded images" src="https://res.cloudinary.com/globes/image/upload/t_desktop_article_content_header_800%2A392/v1629085694/direct/shutterstock_1717011127_qnm8lj.jpg"/>
      </div>
   </div>
  )
}

export default Home