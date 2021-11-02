import React, { Component } from 'react';
import loadingGif from "../images/gif/loading-arrow.gif"
const Loading = () => {
    return (
        <div className="loading">
            <h4>Rooms data Lading</h4>
            <img src = {loadingGif} alt="Loading"/>
        </div>
     );
}
 
export default Loading;