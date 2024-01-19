import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/mainPages/home/Home";
import SearchPage from "./components/mainPages/searchPage/SearchPage";
import AlbumPage from "./components/mainPages/AlbumPage";
import ArtistPage from "./components/mainPages/ArtistPage";
import MyLibrary from "./components/mainPages/libraryPage/MyLibrary";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search_page/" element={<SearchPage />} />
        <Route path="/album_page/:id" element={<AlbumPage />} />
        <Route path="/artist_page/:id" element={<ArtistPage />} />
        <Route path="/favorite_list/" element={<MyLibrary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
