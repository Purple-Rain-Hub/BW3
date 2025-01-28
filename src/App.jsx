import NavBar from "./Components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <ProfilePage />
      <Footer />
    </>
  );
}

export default App;
