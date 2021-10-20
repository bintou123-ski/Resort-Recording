import React from "react";
import Title from "./Title";
import {FaCocktail, FaHiking,FaShuttleVan, FaBeer} from "react-icons/fa";

class Services extends React.Component {
    state={
        services:[
            {
              icon:<FaCocktail/>,
              title:"Free coocktail",
              info:" There are so many free Cocktails"
            },
            {
                icon:<FaHiking/>,
                title:"Hicking",
                info:"Hiching here"

            },
            {
                icon:<FaShuttleVan/>,
                title:"ShuttleVan",
                info:"ShuttleVan in this room"
            },
            {
              icon:<FaBeer/>,
              title:"Luxurious Beer",
              info:"There are Luxurious beer"
            }
        ]
    }
    render() { 
        return <section className="services">
            <Title title="services"/>
            <div className="services-center">
              {this.state.services.map((item,index)=>{
                  return <article key={index} className="service">
                      <span>{item.icon}</span>
                      <h6>{item.title}</h6>
                      <p>{item.info}</p>
                      </article>
              })}  

        </div>;
        </section>
    }
}
 
export default Services;