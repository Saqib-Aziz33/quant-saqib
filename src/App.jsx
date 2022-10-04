import {useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import News from './pages/News'
// layout
import Base from "./components/layouts/Base";
// aos
import AOS from 'aos';
import 'aos/dist/aos.css';
// other
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js'
import "./app.scss";

function App() {
  useEffect(() => {
    AOS.init({})
  }, [])
  return (
    <BrowserRouter>
      <Base>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Base>
    </BrowserRouter>
  );
}
export default App;
