import './PlaceItem.css';

function PlaceItem(props) {
  const { place, onPlaceClick } = props;
  return (
    <div className="card-item">
      <div className="place-item">
        <img src={place.thumbnailUrl} onClick={() => onPlaceClick(place)} alt={place.title} />
        <br></br>
        <h4 className="app-item-h4">{place.title}</h4>
      </div>
    </div>
  );
}

export default PlaceItem;
