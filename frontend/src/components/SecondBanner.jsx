import 'react'
import {Link} from 'react-router-dom'

import SecondBannerImg from '../assets/staticImages/10027.jpg'
function SecondBanner() {
  return (
    <div className='secondBanner'> 
    <Link to="/products">
        <img src={SecondBannerImg} alt="secondBannerImg"  className='secondBannerImg'/>
    </Link>
    </div>
  )
}

export default SecondBanner