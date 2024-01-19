import { Container, Row } from "react-bootstrap";
import MainContainer from "./MainContainer";
import Player from "../../Player";
import Sidebar2 from "../../Sidebar2";

const Home = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Sidebar2 />
          <MainContainer />
        </Row>
      </Container>
      <Player />
    </>
  );
};
export default Home;
