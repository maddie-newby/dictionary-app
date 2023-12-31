import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        {props.photos.map(function (photo, index) {
          return (
            <div key={index} className="Photo">
              <a
                href={photo.src.original}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src={photo.src.landscape}
                  className="img-fluid"
                  alt={photo.alt}
                />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
