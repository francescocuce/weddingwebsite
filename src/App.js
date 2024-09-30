import React from 'react';
import './App.css'; // Stili globali dell'app
import Carousel from './components/Carousel'; // Import del componente carosello
import Testimoni from './components/Testimoni'; // Import del componente Testimoni
import Location from './components/Location'; // Import del componente Testimoni

function App() {
    // Funzione per aggiungere l'evento a Google Calendar
    const addToGoogleCalendar = (e) => {
        e.preventDefault(); // Previene l'azione predefinita del link

        const event = {
            start: '20250503T130000Z', // Data e ora di inizio in formato UTC
            end: '20250503T210000Z', // Data e ora di fine in formato UTC
            title: 'Matrimonio di Francesco e Sara',
            description: 'Unisciti a noi per celebrare il nostro matrimonio!',
            location: 'Parrocchia San Benedetto Giuseppe Labre',
        };

        // Crea l'URL per aggiungere l'evento a Google Calendar
        const googleCalendarUrl = `https://calendar.google.com/calendar/r/eventedit?dates=${event.start}/${event.end}&text=${encodeURIComponent(event.title)}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;

        // Apre Google Calendar in una nuova scheda o finestra
        window.open(googleCalendarUrl, '_blank');
    };

    return (
        <div className="App">
            {/* Barra superiore */}
            <div className="navbar">
                <h1>Francesco e Sara</h1>
            </div>

            {/* Testo Save the Date */}
            <div className="save-the-date">
                <h2>Save the Date</h2>
                <p>03/05/2025</p>

                <button className="calendar-button" onClick={addToGoogleCalendar}>
                    Aggiungi al Calendario
                </button>
            </div>

            {/* Carosello */}
            <Carousel />

            {/* Sezione Testimoni */}
            <Testimoni />

            {/* Sezione Location */}
            <Location />
        </div>
    );
}

export default App;
