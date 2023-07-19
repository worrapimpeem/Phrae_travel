import { useState } from 'react';
import AppSearch from '../../components/AppSearch';
import PlaceItem from '../../components/PlaceItem';
import PlacePost from '../../components/PlacePost';
import Restaurantpic from '../../data/Restaurantpic';
import Naturepic from '../../data/Naturepic';
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

    const placeItems = Restaurantpic.filter((place) => {
        return place.title.includes(searchText);
    }).map((place, index) => {
        return <PlaceItem key={index} place={place} onPlaceClick={onPlaceOpenClick} />;
    });

    const placeItems1 = Naturepic.filter((place) => {
        return place.title.includes(searchText);
    }).map((place, index) => {
        return <PlaceItem key={index} place={place} onPlaceClick={onPlaceOpenClick} />;
    });

    const placeItems2 = Templepic.filter((place) => {
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
                    <h4 className="app-home-4" >WELCOME TO PHRAE,Thailand</h4>
                    <h3 className="app-home-3" >YOU MUST VISIT ONCE TO BREATHE IN THE OZONE.</h3>
                    <button className="app-home-button" onClick={() => { onPlaceOpenClick(Templepic[5]) }}>Gastronomy</button>
                    <img className="app-home" src="/images/home1.jpg" alt='ozon' />
                    <div className="home-all">
                        <AppSearch value={searchText} onValueChange={setSearchText} />
                        <div className="app-grid">
                            {placeItems}
                            {placeItems1}
                            {placeItems2}
                        </div>
                    </div>
                </div>
            </section>
            {placePost}
        </div>
    );
}

export default NaturePage;
