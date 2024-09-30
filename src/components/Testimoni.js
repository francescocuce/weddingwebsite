import React, { useState } from 'react';
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
    const [flippedCards, setFlippedCards] = useState({}); // Stato per tracciare le carte girate

    // Funzione per gestire il clic su una carta
    const handleCardClick = (id) => {
        setFlippedCards((prevState) => ({
            ...prevState,
            [id]: !prevState[id], // Gira la carta al click
        }));
    };

    return (
        <div className="testimoni-section">
            <h2>Testimoni</h2>
            <p>Scopri chi sono!</p>

            <div className="cards-container">
                {testimoni.map((testimone) => (
                    <div
                        key={testimone.id}
                        className={`card ${flippedCards[testimone.id] ? 'flipped' : ''}`}
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
                                <img src={testimone.image} alt={testimone.name}/>
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
