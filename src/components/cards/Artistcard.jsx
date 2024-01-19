import { Button, Col } from "react-bootstrap";
import { BsHeart, BsSuitHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../redux/actions/favoriteActions";

const ArtistCard = ({ artistData }) => {
  const dispatch = useDispatch();
  const favoriteList = useSelector((state) => state.favoriteList.artists);

  return (
    <Col md={3} className="text-center" id="img-container">
      <div className="d-flex justify-content-center align-items-center p-1">
        <div className=" text-center">
          <p className="album-title">{artistData.title}</p>
          <p className="artist-name mb-0">{artistData.name}</p>
        </div>
        <div className=" text-center">
          <Button
            variant="link"
            className="ms-auto"
            onClick={() => {
              favoriteList.some((e) => e.id === artistData.id)
                ? dispatch(removeFromFavorites(artistData.id, "artist"))
                : dispatch(addToFavorites(artistData, "artist"));
            }}
          >
            {favoriteList.some((e) => e.id === artistData.id) ? (
              <BsSuitHeartFill className="fs-2 text-secondary" />
            ) : (
              <BsHeart className="fs-2 text-secondary" />
            )}
          </Button>
        </div>
      </div>
      <img src={artistData.picture_medium} className="card-img img-fluid" alt="Album" />
    </Col>
  );
};

export default ArtistCard;
