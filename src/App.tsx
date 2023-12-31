import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import { AboutUs } from "./components/about-us/AboutUs";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { NotFound } from "./components/errors/not-found/NotFound";
import { RequestADemo } from "./components/request-a-demo/RequestADemo";
import { ToggleTheme } from "./components/toggle-theme/ToggleTheme";
import { Emergency } from "./components/emergency/Emergency";

const App: React.FC = () => {

  return (
    <Router>
      <div className="static">
        {/* Your Navbar or other common components can go here */}
        <ToggleTheme className="bg-base-300 rounded-lg fixed bottom-5 right-5"/>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about-us"
            element={<AboutUs />}
          />
          <Route path="/*" element={<NotFound />} />
          <Route
            path="/request-a-demo"
            element={<RequestADemo />}
          />
          <Route path="/emergency"
          element={<Emergency />}
          />
          {/* You can add more routes for additional pages */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
