import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

import Sidebar2 from "../../Sidebar2";
import Topbar from "../../Topbar";
import Player from "../../Player";
import FavoriteCategory from "./FavoriteCategory";

const MyLibrary = () => {
  const tracks = useSelector((state) => state.favoriteList.tracks);
  const albums = useSelector((state) => state.favoriteList.albums);
  const artists = useSelector((state) => state.favoriteList.artists);

  return (
    <>
      <Container fluid>
        <Row>
          <Sidebar2 />
          <Col xs={12} lg={10} className="offset-lg-2 mainPage">
            <Topbar />
            <Row>
              {tracks.length > 0 && <FavoriteCategory categoryData={tracks} elementType="track" />}
              {albums.length > 0 && <FavoriteCategory categoryData={albums} elementType="album" />}
              {artists.length > 0 && <FavoriteCategory categoryData={artists} elementType="artist" />}
            </Row>
          </Col>
        </Row>
      </Container>
      <Player />
    </>
  );
};

export default MyLibrary;
