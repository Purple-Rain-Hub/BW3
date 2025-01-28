import NavBar from "./Components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProfilePage from "./components/ProfilePage";
import JobsPage from "./components/JobsPage";

function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <JobsPage />
      <ProfilePage />
      <Footer />
    </>
  );
}

export default App;
