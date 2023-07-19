import React from "react";

export default function Example(props) {
  if (props.example) {
    let example = `Example: ${
      props.example.charAt(0).toUpperCase() + props.example.substr(1)
    }.`;
    return <p className="Example">{example}</p>;
  }
}
