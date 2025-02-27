import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "../src/components/Hero"; // Ensure correct import
import AboutUs from "../src/components/about_us"; // Ensure correct import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
