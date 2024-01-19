import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import AlbumCard from "../../cards/AlbumCard";
import TrackCard from "../../cards/TrackCard";

const SearchResultsList = () => {
  const songs = useSelector((state) => state.main.searchResults);

  return (
    songs.length !== 0 && (
      <Row>
        <Col xs={12}>
          <div id="searchResults">
            <h2>Search Results</h2>
            <Row className="row-cols-2 row-cols-sm-3 row-cols-lg-4  row-cols-xl-5 imgLinks py-3">
              {songs && songs.map((song, i) => <TrackCard key={"song" + song._id + i} trackData={song} />)}
            </Row>
          </div>
        </Col>
      </Row>
    )
  );
};
export default SearchResultsList;
