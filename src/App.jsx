import About from "./components/AboutPart/about";
import ContactDiv from "./components/ContactPart/ContactDiv";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/HomePart/Home";
import ProjectDiv from "./components/ProjectPart/ProjectDiv";
import SkillsDiv from "./components/skills/SkillsDiv";
import WhoAmI from "./components/WhoIAm/WhoAmI";
import './components/ResponsiveStyles.css'

function App() {

  return (
    <div>
      <Header />

      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="project">
        <ProjectDiv />
      </div>

      <WhoAmI />

      <SkillsDiv />

      <div id="contact">
        <ContactDiv />
      </div>

      <Footer />
    </div>
  )
}

export default App;
