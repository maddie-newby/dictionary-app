import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="app-header">Maddie's Dictionary</header>
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
        and hosted on Netlify
      </footer>
    </div>
  );
}

export default App;
