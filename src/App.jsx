import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import JobsPage from "./components/JobsPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/jobs" element={<JobsPage />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
