import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Home from "./pages/Home";
import Header from "./components/Header";
import './style.css';
function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
