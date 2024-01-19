import { Button, Col, Container, Row } from "react-bootstrap";
import Player from "../Player";
import Topbar from "../Topbar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedElem } from "../../redux/actions";
import Sidebar2 from "../Sidebar2";
import TrackCard from "../cards/TrackCard";
import { addToFavorites, removeFromFavorites } from "../../redux/actions/favoriteActions";

const ArtistPage = () => {
  let elementId = useParams();
  const dispatch = useDispatch();
  let artistData = useSelector((state) => state.main.selectedElement);
  let currentTracksList = useSelector((state) => state.main.currentTracks);
  const favoriteList = useSelector((state) => state.favoriteList.artists);
  useEffect(() => {
    dispatch(setSelectedElem(elementId.id, "artist"));
    console.log("dispatch effettuata ");
  }, [elementId]);

  return (
    <>
      <Container fluid>
        <Row>
          <Sidebar2 />

          <Col xs={12} md={10} className="offset-md-2 mainPage">
            <Topbar />
            <Row>
              {artistData && (
                <Col xs={12} className="mt-5">
                  <h2 className="titleMain">{artistData.name}</h2>
                  <div id="followers">{artistData.nb_fan} followers</div>
                  <div className="d-flex justify-content-center gap-2" id="button-container">
                    <Button className="btn-success mainButton" id="playButton">
                      PLAY
                    </Button>
                    <Button
                      className={`${
                        favoriteList.some((e) => e.id === artistData.id) ? "bg-white text-black" : "bg-transparent"
                      }  mainButton`}
                      id="followButton"
                      onClick={() => {
                        favoriteList.some((e) => e.id === artistData.id)
                          ? dispatch(removeFromFavorites(artistData.id, "artist"))
                          : dispatch(addToFavorites(artistData, "artist"));
                      }}
                    >
                      FOLLOW
                    </Button>
                  </div>
                </Col>
              )}
            </Row>
            <Row className="mb-3">
              <Col xs={12}>
                <div className="mt-5 ms-3 text-center">
                  <h2 className="text-white font-weight-bold">Tracks</h2>
                </div>

                <Row className="apiLoaded justify-content-center row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-5">
                  {currentTracksList &&
                    currentTracksList.map((track) => <TrackCard key={"track" + track.id} trackData={track} />)}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Player />
    </>
  );
};

export default ArtistPage;
