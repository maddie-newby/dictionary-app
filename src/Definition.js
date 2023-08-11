import React from "react";

export default function Definition(props) {
  if (props.definition) {
    let definition = `Example: ${
      props.definition.charAt(0).toUpperCase() + props.definition.substr(1)
    }.`;
    return <p className="Definition">{definition}</p>;
  }
}
