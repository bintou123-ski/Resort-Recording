import React from 'react';
import { RoomContext } from '../Context';
import { useContext } from 'react';
import Title from "./Title";
//get unique value
const getUnique =(items,value)=>{
    return [...new Set(items.map(item=>item[value]))]
}
export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext)
const{
    handleChange,
    price,
    type,
    capacity,
    size,
    breakfast,
    pets,
    maxPrice,
    maxSize,
    minPrice,
    minSize
}= context;

//get unique type
let types = getUnique(rooms,'type')

//add all
types = ['all',...types];
//map to jsx for types
types = types.map((item,index)=>{
    return(
         <option value={item} key={index}>{item}</option>
)
})
// get unique capacity
let capacities = getUnique(rooms,'capacity') 

//map tojsx for capacity
capacities = capacities.map((item,index)=>{
    return <option key={index} value={item}>{item}</option>
})

//map to sx foor price

    return (
        <div className="filter-container">
            <Title title="Search Room"/>
            <form className="filter-form">
            {/* select Type*/}
            <div className="form-group">
                <label htmlFor="type">room type</label>
                <select name="type" id="type" value={type}
                className="form-control"
                onChange={handleChange}>
               {types}
                </select>
            </div>
            {/*End select type */}

             {/* Guest*/}
             <div className="form-group">
                <label htmlFor="type">Guest</label>
                <select name="capacity" id="capacity" value={capacity}
                className="form-control"
                onChange={handleChange}>
               {capacities}
                </select>
            </div>
            {/*End guest */}

            {/* room price*/}
            <div className="form-group">
                <label htmlFor="type">Room Price ${price}</label>
                <input name="price" id="price" value={price}
                type="range" min={minPrice} max={maxPrice}
                className="form-control"
                onChange={handleChange}>
            
                </input>
            </div>
            {/*room price */}

             {/* size*/}
             <div className="form-group">
                <label htmlFor="size">Room size</label>
                <div className="size-inputs">
                <input name="size" id="size" value={size}
                min={minSize}
                className="size-input"
                onChange={handleChange}>
            </input>
            <input name="size" id="size" value={size}
                max={maxSize}
                className="size-input"
                onChange={handleChange}>
            </input>
            </div>
            </div>
            {/*end of size */}

             {/* breakfast*/}
             <div className="form-group">
             <div className="single-extra">
             <input name="breakfast" id="breakfast" value={breakfast}
                type="checkbox" checked={breakfast}
                onChange={handleChange}>
                </input>
                <label htmlFor="breakfast">breakfast</label>
            </div>
            {/*end of breakfast */}

             {/* pets*/}
             <div className="single-extra">
             <input name="pets" id="pets" value={pets}
                type="checkbox" checked={pets}
                onChange={handleChange}>
                </input>
                <label htmlFor="pets">pets</label>
            </div>
            </div>
            {/*end of sets */}

            </form>
        </div>
    )
}
