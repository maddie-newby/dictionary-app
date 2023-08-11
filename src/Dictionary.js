import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("hello");
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input
            autoFocus
            type="search"
            className="fontAwesome"
            name="emailAddress"
            placeholder="&#xF002; Search"
            onChange={handleKeywordChange}
          />
        </form>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input
            autoFocus
            type="search"
            className="fontAwesome"
            name="emailAddress"
            placeholder="&#xF002; Search"
            onChange={handleKeywordChange}
          />
        </form>
      </div>
    );
  }
}
