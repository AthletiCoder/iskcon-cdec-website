import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gita from "./pages/Gita";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Service from "./pages/Service";
import Schedule from "./pages/Schedule";
import NotFound from "./pages/NotFound";
import Donate from "./pages/Donate";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gita" element={<Gita />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/service" element={<Service />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;