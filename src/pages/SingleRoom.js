import React from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import { Link } from "react-router-dom";
import {RoomContext} from "../Context";
import StyledHero from "../component/StyledHero";


class SingleRoom extends React.Component {
    constructor(props){
        super(props)
       // console.log(this.props)
       this.state={
           slug:this.props.match.params.slug,
           defaultBcg
       }
    }
    static contextType = RoomContext;

    render() { 
        const{getRoom} = this.context;
        const room = getRoom(this.state.slug)
        if(!room){
            return(
                <div className="error">
                    <h3>No such room  could be found...</h3>
                    <Link to="/rooms" className="btn-primary">Back to rooms</Link>
                </div>
            )
        };
        const{name,images,description,extras,capacity,breakfast,size,price,pets} = room;
        const[mainImg,...defaultImg] =  images;
        return(
            <div>
            <StyledHero img={mainImg}>
                <Banner title={`${name} room`}>
                       <Link to="/rooms"  className="btn-primary">Back to Rooms</Link>
                </Banner>
           </StyledHero>
           <section className="single-room">
               <div className="single-room-images">
               {defaultImg.map((item,index)=>{
                   return <img  key={index} src={item} alt={name}/>
               })}
               </div>
           </section>
           <section className="single-room-info">
           <article className="desc">
                  <h3>Details</h3>
                  <p>{description}</p>
               </article>
               
               <article className="info">
                  <h3>Info</h3>
                  <h6>Price : $ {price}</h6>
                  <h6>Size : {size}</h6>
                  <h6> Max capacity:
                      {
                      capacity > 1 ? `${capacity} people`: `${capacity} person`
                      }
                  </h6>
                  <h6>
                      {pets ? "Pets Allowed":"Pets no Allowed"}
                  </h6>
                  <h6>
                      {breakfast && "Free Breakfast Included"}
                  </h6>
               </article>
           </section>
           <section className="room-extras">
               <h6>Extras</h6>
               <ul className="extras"> 
                   {extras.map((item)=>{
                      return <li key={item.id} extras={extras}>- {item}</li>
                  })}
               </ul>
           </section>
           </div>
        ) 
    }
}
 
export default SingleRoom;
