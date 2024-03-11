import { useEffect, useState } from "react";
import Bottle from "../bottle/Bottle";
import './Bottles.css'

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    useEffect(()=> {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])
    // console.log(bottles)
    return (
        <div>
            <h3>Bottles : </h3>
            <div className="bottles-container">
            {
                bottles.map(bottle => <Bottle bottle = {bottle} key={bottle.id}></Bottle>)
                
            }
            </div>
        </div>
    );
};

export default Bottles;