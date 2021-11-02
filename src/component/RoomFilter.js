import React from 'react';
import { RoomContext } from '../Context';
import { useContext } from 'react';
import Title from "./Title";

export default function RoomFilter() {
    const context = useContext(RoomContext)
const{price,type,size,maxPrice,maxSize,minPrice,minSize}= context;

    return (
        <div className="filter-container">
            <Title title="Search Room"/>
            <form className="filter-form">
            {/* select Type*/}
            <div className="form-group">
                <label htmlFor="type">room type</label>
                <select type="type" id="type" value='type'></select>
            </div>
            {/*End select type */}
            </form>
        </div>
    )
}
