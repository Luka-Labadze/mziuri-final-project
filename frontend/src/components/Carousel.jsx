import React, { useState } from 'react'
import SingleCarousel from './SingleCarousel'
import carouselImg1 from '../assets/images/10001.png'
import carouselImg2 from '../assets/images/10002.png'
import carouselBg from '../assets/images/10033.jpg'
import prevClick from '../assets/icons/left.png'
import nextClick from '../assets/icons/right.png'
function Carousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    
    const slides = [
    {
    id: 1,
    img: carouselImg1,
    subtitle1: "Best Products",   
    title: "Mount Carved 2200XD",
    subtitle2: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
    
    },
    {
    id: 2,
    img: carouselImg2,
    subtitle1: "Best Products",   
    title: "Mount Carved 2200XD",
    subtitle2: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
    }
    ]

    const handleNextClick = () => {
        if(currentImageIndex < slides.length -1){
            setCurrentImageIndex(currentImageIndex + 1)
        }else{
            setCurrentImageIndex(0)
        }
    }

    const handlePrevClick = () => {
        if(currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex -1)
        }else{
            setCurrentImageIndex(slides.length - 1)
        }
    }

    const currentImage = slides[currentImageIndex]

  return (
    <div className='carousel'>
        <img src={carouselBg} alt="carouselBgImg" className='carouselBg'/>
        
        <button onClick={handlePrevClick} className='carouselPrevClick' ><span className='carouselBtns'>&lt;</span></button>
        <div>
            <SingleCarousel key={currentImage.id} title={currentImage.title} img={currentImage.img} subtitle1={currentImage.subtitle1} subtitle2={currentImage.subtitle2}/>
        </div>
        <button onClick={handlePrevClick}  className='carouselPrevClick' ><span className='carouselBtns'>&gt;</span></button>
    </div>
  )
}

export default Carousel