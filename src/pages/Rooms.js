import React from "react";
import Hero from "../component/Hero";
import {Link} from "react-router-dom";
import Banner from "../component/Banner";



function Rooms() {
    return (
        <div>
           <Hero hero="roomsHero">
             <Banner title="Our Rooms" subtitle="something">
                 <Link to="/" className="btn-primary"> Return Home</Link>
             </Banner>
            </Hero>
        </div>
    )
}

export default Rooms
