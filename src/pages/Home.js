import React from "react";
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import {Link} from "react-router-dom";
import Services from "../component/Services";
import FeaturedRooms from "../component/FeaturedRooms";
import StyledHero from "../component/StyledHero";




function Home() {
    return (
        <>
           <Hero hero="defaultHero">
               <Banner  title="Luxurious room starting at $255" subtitle="deluxe something">
                   <Link to="/rooms" className="btn-primary">Our Rooms</Link>
                   </Banner>
           </Hero>
           <Services/>
           <FeaturedRooms/>
         <StyledHero/>
         
        </>
    )
}

export default Home
