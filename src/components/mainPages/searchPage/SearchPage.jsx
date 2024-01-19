import { Container, Row } from "react-bootstrap";
import Player from "../../Player";
import SearchForm from "./SearchForm";
import Sidebar2 from "../../Sidebar2";

const SearchPage = () => {
  return (
    <>
      <Container fluid>
        <Row className="flex-column-reverse">
          <Sidebar2 />
          <SearchForm />
        </Row>
      </Container>

      <Player />
    </>
  );
};

export default SearchPage;
