import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-md transition duration-300 bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
        >
            {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
    );
};

export default ThemeToggle;
