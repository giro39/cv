import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import TechStack from "./components/TechStack/TechStack";
import Experience from "./components/Experience/Experience.js";
import Projects from "./components/Projects/Projects.js";

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
            <div>Something</div>
            <div>Something</div>
            <div>Something</div>
            <div>Something</div>
            <div>Something</div>
            <div>Something</div>
            <div>Something</div>
            <div>Something</div>
            <div>Something</div>
            <div>Something</div>
        </main>
    );
}

export default App;
