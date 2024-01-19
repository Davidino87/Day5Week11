import { Col, Navbar } from "react-bootstrap";
import { FaBookOpen, FaHome } from "react-icons/fa";
import spotify_Logo from "../assets/logo/Spotify_Logo.png";
import { Link } from "react-router-dom";
import { clearSearchQuery } from "../redux/actions";
import { useDispatch } from "react-redux";
import { BsSearch } from "react-icons/bs";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <Col xs={2}>
      <Navbar expand="md" className="navbar-white bg-navbar fixed-left justify-content-between px-2">
        <div className="nav-container text-white">
          <Link to={"/"}>
            <img src={spotify_Logo} alt="Spotify_Logo" width="120" height="30" className="my-2" />
          </Link>

          <ul>
            <li>
              <Link
                to={"/"}
                className="nav-link"
                onClick={() => {
                  dispatch(clearSearchQuery());
                }}
              >
                <FaHome />
                Home
              </Link>
            </li>
            <li>
              <Link to={"/favorite_list/"} className="nav-link">
                <FaBookOpen /> Your Library
              </Link>
            </li>
            <li>
              <Link to={"/search_page/"} className="nav-link">
                <BsSearch /> Search
              </Link>
            </li>
          </ul>
        </div>
      </Navbar>
    </Col>
  );
};

export default Sidebar;
