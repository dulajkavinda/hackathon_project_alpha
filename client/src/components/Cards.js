import React, { Component } from "react";
export default function Cards(props) {
  const { title, dis, picture, loc, type } = props;
  return (
    <div className="card">
      <img src={picture} className="card-img-top" alt="Card1" />
      <div className="card-body mr-sm-4">
        <h4 className="class-title">{title}</h4>
        <a href="/">View on Map</a>
        <p className="card-text">{type}</p>
        <p className="card-text">{loc}</p>
        <p className="card-text">{dis}</p>
      </div>
    </div>
  );
}
