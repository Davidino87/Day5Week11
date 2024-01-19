import { Col } from "react-bootstrap";
import Topbar from "../../Topbar";
import GenreCategory from "./GenreCategory";

const MainContainer = () => {
  let rockArtists = ["queen", "u2", "thepolice", "eagles", "thedoors", "oasis", "thewho", "bonjovi"];

  let popArtists = ["maroon5", "coldplay", "onerepublic", "jamesblunt", "katyperry", "arianagrande"];

  let hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];
  return (
    <Col xs={12} lg={10} className="offset-lg-2 mainPage">
      <Topbar />

      <GenreCategory genre="rock" categoryTitle="Rock Classics" artists={rockArtists} />
      <GenreCategory genre="pop" categoryTitle="Pop" artists={popArtists} />
      <GenreCategory genre="hiphop" categoryTitle="#HipHop" artists={hipHopArtists} />
    </Col>
  );
};

export default MainContainer;
