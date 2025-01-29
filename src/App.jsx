import "./App.css";
import HomePage from "./components/HomePage";
import JobsPage from "./components/JobsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProfilePage from "./components/ProfilePage";
import Footer from "./components/Footer";
import FavoritesPage from "./components/FavoritesPage";

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />{" "}
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
