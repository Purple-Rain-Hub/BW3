import CentralSection from "./components/CentralSection";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <HomePage />
      <CentralSection />

      <Footer />
    </div>
  );
}

export default App;
