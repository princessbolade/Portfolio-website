import "./App.css";
import PersonalProfile from "../src/Components/get-to-know-me/get-to-know-me";
import NavBar from "./Components/Nav-Bar/Nav-bar";
import Portfolio from "./Components/portfolio/portfolio";
import LandingPage from "./Components/Landing-Page/landing-page";
import Contact from "./Components/contact-me/contact";
import Footer from "./Components/footer/footer";

function App() {
  return (
    <div>
      <NavBar />
      <LandingPage />
      <PersonalProfile />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
