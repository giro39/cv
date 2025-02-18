import { useEffect, useState } from "react";
import "./App.scss";

function App() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    useEffect(() => {
        document.documentElement.setAttribute("theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <main>
            <div>Initial commit</div>
            <button onClick={toggleTheme}>Zmień motyw</button>
        </main>
    );
}

export default App;
