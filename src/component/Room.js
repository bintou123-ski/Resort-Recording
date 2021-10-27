import React from 'react'
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function Room({room}) {
    console.log(room);
    const{name,images,slug,price}=room;
    return (
       <section className="room">
           <div className="img-container">
               <img src={images[0]} alt ="single room"/>
               <div className="price-top">
                   <h6>${price}</h6>
                   <h6>By Day</h6>
               </div>
               <Link to={`/rooms/${slug}`} 
               className="btn-primary room-link">Click to access SingleRoom</Link>
           </div>
           <p className="room-info">{name}</p>
       </section>
    )
}

export default Room;

Room.propTypes ={
    room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired

    })
}