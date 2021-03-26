import "./App.css";
import PersonalProfile from "../src/Components/get-to-know-me/get-to-know-me";
import NavBar from "./Components/Nav-Bar/Nav-bar";
import Portfolio from "./Components/portfolio/portfolio";
import LandingPage from "./Components/Landing-Page/landing-page";

function App() {
  return (
    <div>
      <NavBar />
      <LandingPage />
      <PersonalProfile />
      <Portfolio />
    </div>
  );
}

export default App;
