import React, { Component } from 'react'
import picture from './';

export default function Cards(props) {

    const { title, dis} = props;
  return(
      <div className="card" style={{ width='300px' }}>
        <img className="card-img-top" src={picture} alt="Card1" />
        <div className="card-body mr-sm-4">
            <h4 className="class-title">{title}</h4>
            <p className="card-text">{dis}</p>
        </div>
      </div>
  );
}
