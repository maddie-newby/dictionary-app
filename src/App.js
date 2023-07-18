import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="app-header">Dictionary</header>
      <main>
        <Dictionary />
      </main>
      <footer>
        This project was coded by Maddie Newby and is{" "}
        <a
          href="https://github.com/maddie-newby/dictionary-app"
          target="_blank"
          className="footer-link"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://www.netlify.com/"
          target="_blank"
          className="footer-link"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
