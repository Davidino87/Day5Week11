import { Col, Container, Row } from "react-bootstrap";
import Player from "../Player";
import Topbar from "../Topbar";
import AlbumCard from "../cards/AlbumCard";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedElem } from "../../redux/actions";
import Sidebar2 from "../Sidebar2";
import { SetCurentTruck, setPlayerOn } from "../../redux/actions/songInListen";

const AlbumPage = () => {
  let elementId = useParams();
  const dispatch = useDispatch();
  let albumData = useSelector((state) => state.main.selectedElement);
  const currentSong = useSelector((state) => state.currentSong.songInListen);

  useEffect(() => {
    dispatch(setSelectedElem(elementId.id, "album"));

    console.log("dispatch efettuata");
  }, [elementId.id]);
  return (
    <>
      <Container fluid>
        <Row>
          <Sidebar2 />

          <Col xs={12} lg={10} className="offset-lg-2 mainPage">
            <Topbar />

            <Row className="justify-content-center pt-3">
              {albumData && albumData.id === parseInt(elementId.id) && <AlbumCard albumData={albumData} />}
              <Col md={8} className="pe-md-5">
                <Row>
                  {albumData && albumData.id === parseInt(elementId.id) && (
                    <Col md={12} className="mb-5" id="trackList">
                      {albumData.tracks.data.map((track) => (
                        <div
                          key={"album" + track.id}
                          onClick={() => {
                            dispatch(SetCurentTruck(track.title));
                            dispatch(setPlayerOn());
                          }}
                        >
                          <div
                            className={`${
                              currentSong && track.id === currentSong.id && "bg-dark"
                            } p-3 trackHover text-white rounded-4`}
                          >
                            {track.title}

                            <small className="duration" style={{ color: "white" }}>
                              {Math.floor(parseInt(track.duration) / 60)}:
                              {parseInt(track.duration) % 60 < 10
                                ? "0" + (parseInt(track.duration) % 60)
                                : parseInt(track.duration) % 60}
                            </small>
                          </div>
                        </div>
                      ))}
                    </Col>
                  )}
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

export default AlbumPage;
