import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import TechStack from "./components/TechStack/TechStack";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";

import "./i18n/config.js";

import "./App.scss";

function App() {
    return (
        <main>
            <Navbar />
            <section id="home">
                <Home />
            </section>
            <hr />
            <section id="techstack">
                <TechStack />
            </section>
            <hr />
            <section id="experience">
                <Experience />
            </section>
            <hr />
            <section id="projects">
                <Projects />
            </section>
            <hr />
            <section id="about">
                <About />
            </section>
        </main>
    );
}

export default App;
