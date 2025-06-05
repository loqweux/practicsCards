import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Information, Error } from "./pages/";
import { Header } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/About" element={<About />} />
          <Route path="/info" element={<Information />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
