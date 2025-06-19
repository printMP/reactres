import { useState } from 'react';
import './carousel.css';
import aLogo from '/a.jpg'
import boardroom from '/boardroom.jpg'

const images = [
  aLogo,
  boardroom 
];

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? images.length - 1 : currentIndex - 1);
    };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };
    return (
        <>
            <div className="carousel">
      <button onClick={goToPrevious} className="carousel-button">❮</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button onClick={goToNext} className="carousel-button">❯</button>
    </div>
        </>
    )
}
export default Carousel