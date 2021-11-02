import React from 'react'
//import { RoomConsumer, withRoomConsumer } from '../Context';
import { withRoomConsumer } from '../Context';
import Loading from './Loading';
import RoomFilter from './RoomFilter'
import RoomList from './RoomList';


 function RoomContainer({context}) {
    const{rooms,sortedRooms,loading} = context
            if(loading){
                            return <Loading/>
                        }
                        return (
                            <div>
                               hello from RoomContainer
                               <RoomFilter rooms={rooms}/>
                              <RoomList rooms={sortedRooms}/>
                            </div>
                        );
 }
export default withRoomConsumer(RoomContainer);

/*export default function RoomContainer() {
    return (
            <RoomConsumer>
                {
                    (value)=>{
                        const{rooms,sortedRooms,loading} = value
                        if(loading){
                            return <Loading/>
                        }
                        return (
                            <div>
                               hello from RoomContainer
                               <RoomFilter rooms={rooms}/>
                              <RoomList rooms={sortedRooms}/>
                            </div>
                        )
                    }
                }
                </RoomConsumer>
       
    )
}
*/
