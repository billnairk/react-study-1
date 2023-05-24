import Home from "./routes/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Detail from "./routes/Detail";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}
