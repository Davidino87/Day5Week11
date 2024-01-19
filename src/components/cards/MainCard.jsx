import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainCard = ({ dataCard }) => {
  return (
    <Col className="text-center">
      <Link to={`/album_page/${dataCard.album.id}`}>
        <img className="img-fluid" src={dataCard.album.cover_medium} alt="1" />

        <p className="mb-0">
          Album:
          {dataCard.album.title.length < 16 ? dataCard.album.title : dataCard.album.title.substring(0, 16) + "..."}
          <br></br>
        </p>
      </Link>
      <Link to={`/artist_page/${dataCard.artist.id}`}>
        <p>Artist: {dataCard.artist.name}</p>
      </Link>
    </Col>
  );
};
export default MainCard;
