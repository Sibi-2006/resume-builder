import React from 'react'
import '../Css/home.css'
import { useNavigate } from 'react-router-dom'
import IMG1 from '../imgs/template1.png';
import IMG2 from '../imgs/template2.png';
import IMG3 from '../imgs/template3.png';
import IMG4 from '../imgs/Screenshot 2025-08-09 133414.png';
export default function Home() {
    const navigate = useNavigate();
  return (
    <div className='home'>
      <div onClick={() => navigate('/template1')} className='img-con'>
        <img src={IMG1}alt="Resume Screenshot"/>
      </div>
      <div onClick={() => navigate('/template2')} className='img-con'>
        <img src={IMG2} alt='Resume'/>
      </div>
      
      <div onClick={() => navigate('/template3')} className='img-con'>
        <img src={IMG3} alt='Resume'/>
      </div>

      <div onClick={() => navigate('/template4')} className='img-con'>
        <img src={IMG4} alt='Resume'/>
      </div>
    </div>
  )
}
