import { Col, Row } from "react-bootstrap";

const Topbar = () => {
  return (
    <Row className="mb-3">
      <Col xs={12} className="mainLinks d-none d-md-flex">
        <a href="s">TRENDING</a>
        <a href="s">PODCAST</a>
        <a href="s">MOODS AND GENRES</a>
        <a href="s">NEW RELEASES</a>
        <a href="s">DISCOVER</a>
        <a href="s">Davide</a>
      </Col>
    </Row>
  );
};

export default Topbar;
