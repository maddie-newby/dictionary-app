import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  if (props.phonetics.audio && props.phonetics.text) {
    return (
      <div className="PhoneticLine">
        <h2 className="Phonetic">{props.phonetics.text}</h2>
        <button className="PlayLink">
          <ReactAudioPlayer src={props.phonetics.audio} controls />
        </button>
      </div>
    );
  }
  if (props.phonetics.text && !props.phonetics.audio) {
    return (
      <div className="PhoneticLine">
        <h2 className="Phonetic mt-2">{props.phonetics.text}</h2>
      </div>
    );
  } else {
    return null;
  }
}
