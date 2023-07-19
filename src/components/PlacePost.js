import './PlacePost.css';

function PlacePost(props) {
  const { place, onBgClick } = props;
  return (
    <div className="place-post">
      <div className="place-bg" onClick={onBgClick} />
      <div className="place-content">
        <img src={place.fullUrl} alt={place.title} />
        <br></br>
        <h3>{place.title2}</h3>
        <br></br>
      </div>
    </div>
  );
}

export default PlacePost;
