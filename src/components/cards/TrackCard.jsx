import { Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SetCurentTruck, setPlayerOn } from "../../redux/actions/songInListen";
import { BsHeart, BsSuitHeartFill } from "react-icons/bs";
import { addToFavorites, removeFromFavorites } from "../../redux/actions/favoriteActions";

const TrackCard = ({ trackData }) => {
  const dispatch = useDispatch();
  const favoriteList = useSelector((state) => state.favoriteList.tracks);
  return (
    <Col className="text-center text-white">
      <img
        className="img-fluid"
        src={trackData.album.cover_medium}
        alt="1"
        onClick={() => {
          dispatch(SetCurentTruck(trackData.title));
          dispatch(setPlayerOn());
        }}
      />
      <div className="d-flex justify-content-center align-items-center">
        <div>
          <p className="mb-0">
            {trackData.title.length < 16 ? trackData.title : trackData.title.substring(0, 16) + "..."}
            <br></br>
          </p>
          <Link to={`/album_page/${trackData.album.id}`} className="nav-link text-white">
            <p>
              {trackData.album.title.length < 16
                ? trackData.album.title
                : trackData.album.title.substring(0, 16) + "..."}
            </p>
          </Link>
        </div>
        <Button
          variant="link"
          className="p-1"
          onClick={() => {
            favoriteList.some((e) => e.id === trackData.id)
              ? dispatch(removeFromFavorites(trackData.id, "track"))
              : dispatch(addToFavorites(trackData, "track"));
          }}
        >
          {favoriteList.some((e) => e.id === trackData.id) ? (
            <BsSuitHeartFill className="fs-2 text-secondary" />
          ) : (
            <BsHeart className="fs-2 text-secondary" />
          )}
        </Button>
      </div>
    </Col>
  );
};
export default TrackCard;
