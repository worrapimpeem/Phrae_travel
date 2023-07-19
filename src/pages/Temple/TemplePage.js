import { useState } from 'react';
import AppSearch from '../../components/AppSearch';
import PlaceItem from '../../components/PlaceItem';
import PlacePost from '../../components/PlacePost';
import Templepic from '../../data/Templepic';
import './../../App.css';

function NaturePage() {
    // useState
    // const textInput = <input type="text" />;
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [searchText, setSearchText] = useState('');

    function onPlaceOpenClick(place) {
        setSelectedPlace(place);
    }

    function onPlaceCloseClick() {
        setSelectedPlace(null);
    }

    const placeItems = Templepic.filter((place) => {
        return place.title.includes(searchText);
    }).map((place, index) => {
        return <PlaceItem key={index} place={place} onPlaceClick={onPlaceOpenClick} />;
    });

    let placePost = null;
    if (!!selectedPlace) {
        placePost = <PlacePost place={selectedPlace} onBgClick={onPlaceCloseClick} />;

    }
    return (
        <div className="app">
            <section className="app-section">
                <div className="app-container">
                    <AppSearch value={searchText} onValueChange={setSearchText} />
                    <div className="app-grid">
                        {placeItems}
                    </div>
                </div>
            </section>
            {placePost}
        </div>
    );
}

export default NaturePage;
