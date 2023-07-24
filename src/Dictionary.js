import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [phonetics, setPhonetics] = useState(null);

  function handlePhoneticResponse(response) {
    setPhonetics(response.data[0].phonetics[0]);
  }

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = "d84fo7b1165495bfa04e4513f7c437tf";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    let phoneticApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    axios.get(phoneticApiUrl).then(handlePhoneticResponse);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          autoFocus
          type="search"
          className="fontAwesome"
          name="emailAddress"
          placeholder="&#xF002; Search"
          onChange={handleKeywordChange}
        />
      </form>
      <Results results={results} phonetics={phonetics} />
    </div>
  );
}
