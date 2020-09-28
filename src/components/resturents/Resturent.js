import React from 'react';
import './resturents.css';

const Resturent = (props) => {
    const {description,img} = props.place
    return (
        <div className="mainBox">
            <div className="image"><img src={img} alt=""/></div>
            <div className="content"><p>{description}</p></div>
        </div>
    );
};

export default Resturent;