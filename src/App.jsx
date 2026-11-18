
import { Routes, Route } from "react-router";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Suggest from "./pages/Suggest";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/women"
          element={<Collection gender="women" />}
        />

        <Route
          path="/men"
          element={<Collection gender="men" />}
        />

        <Route
          path="/suggest"
          element={<Suggest />}
        />


        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

    </div>
  );
}

export default App;
