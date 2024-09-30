import React, { useState } from 'react';
import Slider from 'react-slick';
import '../styles/Carousel.css'; // Collegamento agli stili personalizzati del carosello
import image1 from '../assets/foto1.jpg';
import image2 from '../assets/foto2.jpg';
import image3 from '../assets/quad.jpg';

const Carousel = () => {
    const images = [image1, image2, image3];

    // Usa lo stato per il controllo manuale del carosello
    const [sliderRef, setSliderRef] = useState(null);

    // Configurazioni per il carosello
    const settings = {
        customPaging: function (i) {
            return (
                <div onClick={() => handleThumbnailClick(i)}>
                    <img src={images[i]} alt={`thumb-${i}`} className="thumbnail-image" />
                </div>
            );
        },
        dots: true,
        dotsClass: 'slick-dots slick-thumb',
        infinite: true,
        speed: 300, // Velocità di transizione appropriata per una buona fluidità
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true, // Permette uno scorrimento più fluido tramite swipe
        touchThreshold: 15, // Riduce la sensibilità al tocco per rendere lo scorrimento più naturale
        ref: slider => setSliderRef(slider), // Riferimento al carosello per un controllo diretto
    };

    // Funzione per gestire il clic su una miniatura e cambiare immagine
    const handleThumbnailClick = (index) => {
        if (sliderRef) {
            sliderRef.slickGoTo(index); // Transizione più fluida con animazione mantenuta
        }
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div>
                    <img src={image1} alt="Slide 1" className="carousel-image" />
                </div>
                <div>
                    <img src={image2} alt="Slide 2" className="carousel-image" />
                </div>
                <div>
                    <img src={image3} alt="Slide 3" className="carousel-image" />
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;
