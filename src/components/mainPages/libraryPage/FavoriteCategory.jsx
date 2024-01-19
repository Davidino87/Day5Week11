import { Col, Row } from "react-bootstrap";
import TrackCard from "../../cards/TrackCard";
import ArtistCard from "../../cards/Artistcard";
import AlbumCard from "../../cards/AlbumCard";

const FavoriteCategory = ({ categoryData, elementType }) => {
  console.log(categoryData, elementType);
  return (
    <Col xs={12}>
      <div className="text-white">
        <h2>Your Favorites {elementType}s</h2>
        <Row className="row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-5 imgLinks py-3">
          {elementType === "artist"
            ? categoryData.map((data, i) => <ArtistCard key={"artist" + data._id + i} artistData={data} />)
            : elementType === "album"
            ? categoryData.map((data, i) => <AlbumCard key={"album" + data._id + i} albumData={data} btnOff={true} />)
            : categoryData.map((data, i) => <TrackCard key={"track" + data._id + i} trackData={data} />)}
        </Row>
      </div>
    </Col>
  );
};
export default FavoriteCategory;
