import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing/Landing";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <MainContent />
        <Footer />
      </Router>
    </div>
  );
}

const MainContent = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <main className={!isLandingPage ? "content-below-navbar" : ""}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

export default App;