import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
// layout
import Base from "./components/layouts/Base";
// other
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  return (
    <BrowserRouter>
      <Base>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Base>
    </BrowserRouter>
  );
}
export default App;
