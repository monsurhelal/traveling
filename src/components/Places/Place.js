import React from 'react';
import { Nav } from 'react-bootstrap';
import './Place.css';

const Place = (props) => {

const {name,description,img} = props.place;
    return (
        <div className="main">
            <div className="wrapper">
            <img src={img} alt=""/>
            <h1>{name}</h1>
            <p>{description}</p>
            <Nav.Link className="button" href="/book" >Book</Nav.Link>
            </div>
        </div>
    );
};

export default Place;