import React, { useState, useEffect, useRef } from 'react';
import '../styles/Testimoni.css'; // Importa lo stile personalizzato
import raf from '../assets/TestimoneRaffaele.jpg';
import gab from '../assets/TestimoneGabriele.jpg';
import mar from '../assets/TestimoneMarco.jpg';
import noe from '../assets/TestimoneNoemi.jpg';
import ila from '../assets/TestimoneIlaria.jpg';
import giu from '../assets/TestimoneGiuditta.jpg';

const testimoni = [
    { id: 1, name: "Raffaele Cucè", type: "Sposo", image: raf, parent: "Il fratello dello sposo" },
    { id: 2, name: "Gabriele Luciani", type: "Sposo", image: gab, parent: "Il cugino dello sposo" },
    { id: 3, name: "Marco Figliolini", type: "Sposo", image: mar, parent: "L'amico dello sposo" },
    { id: 4, name: "Noemi Giuri", type: "Sposa", image: noe, parent: "La sorella della sposa" },
    { id: 5, name: "Ilaria Giuri", type: "Sposa", image: ila, parent: "La sorella della sposa" },
    { id: 6, name: "Giuditta Salza", type: "Sposa", image: giu, parent: "L'amica della sposa" },
];

const Testimoni = () => {
    const [flippedCards, setFlippedCards] = useState({}); // Stato per le carte capovolte
    const [isVisible, setIsVisible] = useState(false); // Stato per l'animazione della sezione
    const sectionRef = useRef(null); // Riferimento alla sezione

    // Usa IntersectionObserver per rilevare quando la sezione è visibile
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false); // Nasconde le carte quando la sezione non è visibile
                    }
                });
            },
            { threshold: 0.2 } // La sezione è considerata visibile quando il 20% di essa è nel viewport
        );

        const currentSectionRef = sectionRef.current;

        if (currentSectionRef) {
            observer.observe(currentSectionRef);
        }

        return () => {
            if (currentSectionRef) {
                observer.unobserve(currentSectionRef);
            }
        };
    }, []);

    // Funzione per capovolgere una carta
    const handleCardClick = (id) => {
        setFlippedCards((prevState) => ({
            ...prevState,
            [id]: !prevState[id], // Gira la carta
        }));
    };

    return (
        <div ref={sectionRef} className={`testimoni-section ${isVisible ? 'visible' : ''}`}>
            <h2>Testimoni</h2>
            <p>Scopri chi sono!</p>

            <div className="cards-container">
                {testimoni.map((testimone) => (
                    <div
                        key={testimone.id}
                        className={`card ${flippedCards[testimone.id] ? 'flipped' : ''}`} // Aggiunge la classe 'flipped' se la carta è girata
                        onClick={() => handleCardClick(testimone.id)}
                    >
                        <div className="card-inner">
                            {/* Retro della carta */}
                            <div className="card-back">
                                <h3>{testimone.type}</h3>
                            </div>
                            {/* Fronte della carta */}
                            <div className="card-front">
                                <h3>{testimone.name}</h3>
                                <img src={testimone.image} alt={testimone.name} />
                                <p>{testimone.parent}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimoni;