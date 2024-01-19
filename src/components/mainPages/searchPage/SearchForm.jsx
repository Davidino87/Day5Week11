import { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { handleSearch } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import { BsArrowDownCircle, BsBell, BsPerson, BsSearch } from "react-icons/bs";
import SearchResultsList from "./SearchResultsList";

const SearchForm = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(handleSearch(searchQuery));
  };

  return (
    <Col xs={12} md={10} className="offset-md-2  mainPage py-2">
      <Row className="justify-content-between">
        <Col xs={12} md={3}>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <InputGroup>
              <InputGroup.Text className="rounded-5 rounded-end-0 border-end-0 bg-secondary text-white">
                <BsSearch />
              </InputGroup.Text>
              <Form.Control
                className="rounded-start-0 rounded-5 border-start-0 bg-secondary text-white"
                id="searchField"
                placeholder="Search"
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                }}
              />
            </InputGroup>
          </Form>
        </Col>
        <Col xs="auto" className="d-none d-md-block">
          <Button className="bg-black text-white rounded-5 border-0">
            <BsArrowDownCircle /> Download app
          </Button>
          <Button className="bg-black text-white rounded-circle border-0 ">
            <BsBell className="align-baseline" />
          </Button>
          <Button className="bg-black text-white rounded-circle border-0 ">
            <BsPerson className="align-baseline" />
          </Button>
        </Col>
      </Row>
      <SearchResultsList />
    </Col>
  );
};
export default SearchForm;
