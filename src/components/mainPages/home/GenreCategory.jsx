import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getGenre } from "../../../redux/actions/genreActions";
import MainCard from "../../cards/MainCard";

const GenreCategory = ({ genre, categoryTitle, artists }) => {
  const dispatch = useDispatch();
  const songsArray = useSelector((state) => state.genre[genre]);

  useEffect(() => {
    songsArray.length < 4 && dispatch(getGenre(genre, artists));
  }, []);

  return (
    <Row>
      <Col xs={12}>
        <div id={genre}>
          <h2>{categoryTitle}</h2>
          <Row className="row-cols-2 row-cols-sm-4 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
            {songsArray && songsArray.map((album, i) => <MainCard key={"album" + album._id + i} dataCard={album} />)}
          </Row>
        </div>
      </Col>
    </Row>
  );
};
export default GenreCategory;
