import Header from "./components/Header/Header";
import "./app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Catagory from "./components/Catagory";
import Home from "./components/home/Home";
import SearchHome from "./components/searchHome/SearchHome";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="grid divider">
              <aside>
                <Sidebar />
              </aside>
              <main>
                <Catagory />
                <Home />
              </main>
            </div>
          }
        />
        <Route
          exact
          path="/search/:input"
          element={
            <div className="grid divider">
              <aside>
                <Sidebar />
              </aside>
              <main>
                <SearchHome />
              </main>
            </div>
          }
        />
        <Route exact path="/video/:videoId" element={<VideoPlayer />} />
      </Routes>
    </Router>
  );
}

export default App;
