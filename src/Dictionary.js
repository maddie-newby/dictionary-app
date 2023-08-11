import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("hello");
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
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
    axios.get(apiUrl).then(handleDictionaryResponse);

    let imagesApiKey = "d84fo7b1165495bfa04e4513f7c437tf";
    let pexelsApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imagesApiKey}`;
    axios.get(pexelsApiUrl).then(handlePexelsResponse);
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
        <Photos photos={photos} />
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
