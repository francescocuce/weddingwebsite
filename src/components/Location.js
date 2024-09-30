import React from 'react';
import '../styles/Location.css'; // Stili specifici per la sezione Location
import chiesaImg from '../assets/chiesa.jpg'; // Immagine della chiesa
import mappaChiesa from '../assets/mappaChiesa.png'; // Immagine della mappa della chiesa
import ricevimentoImg from '../assets/ricevimento.png'; // Immagine del ricevimento
import mappaRicevimento from '../assets/mappaRicevimento.png'; // Immagine della mappa del ricevimento
import cliccaIcon from '../assets/click.gif'; // GIF animata per il clic

const Location = () => {
    return (
        <div className="location-container">
            <h2>Location</h2>

            {/* Sezione Cerimonia */}
            <div className="location-section">
                <h3>Cerimonia</h3>
                <p>Ci ritroveremo alle ore 15 alla Chiesa San Benedetto Giuseppe Labre per celebrare insieme il nostro matrimonio!</p>

                <div className="location-content">
                    {/* Immagine della chiesa a sinistra */}
                    <div className="location-image">
                        <img src={chiesaImg} alt="Chiesa San Benedetto Giuseppe Labre" className="image" />
                    </div>

                    {/* Immagine della mappa della chiesa a destra */}
                    <div className="location-map">
                        <a href="https://maps.app.goo.gl/Nkmr6VPArYmQWcGaA?g_st=com.google.maps.preview.copy" target="_blank" rel="noopener noreferrer">
                            <div className="map-container">
                                <img src={mappaChiesa} alt="Mappa Chiesa" className="map-image" />
                                <img src={cliccaIcon} alt="Clicca qui" className="click-icon" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Sezione Ricevimento */}
            <div className="location-section">
                <h3>Ricevimento</h3>
                <p>Dopo la cerimonia, festeggeremo insieme presso Scuderie San Giorgio</p>

                <div className="location-content">
                    {/* Immagine del ricevimento a sinistra */}
                    <div className="location-image">
                        <img src={ricevimentoImg} alt="Ricevimento Villa XYZ" className="image" />
                    </div>

                    {/* Immagine della mappa del ricevimento a destra */}
                    <div className="location-map">
                        <a href="https://maps.app.goo.gl/hbH5AhRsjfr3WBqu6?g_st=com.google.maps.preview.copy" target="_blank" rel="noopener noreferrer">
                            <div className="map-container">
                                <img src={mappaRicevimento} alt="Mappa Ricevimento" className="map-image" />
                                <img src={cliccaIcon} alt="Clicca qui" className="click-icon" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;
