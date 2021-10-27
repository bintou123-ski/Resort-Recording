import React from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import { Link } from "react-router-dom";
import {RoomContext} from "../Context";


class SingleRoom extends React.Component {
    constructor(props){
        super()
        console.log(props);
       this.state={
           slug:this.props.match.params.slug,
           defaultBcg
       }
    }
    static contextType = RoomContext;

    render() { 
        const{getRoom} = this.context;
        const room = getRoom(this.state.slug)
        return <div>
        hello from single room
        </div>;
    }
}
 
export default SingleRoom;
