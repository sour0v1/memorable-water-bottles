import { useEffect, useState } from "react";
import Bottle from "../bottle/Bottle";
import './Bottles.css'

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart ,setCart] = useState([]);

    useEffect(()=> {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])
    const handleBottles = (bottle)=>{
        // console.log(bottle);
        const newCart = [...cart, bottle];
        setCart(newCart);
        
    }
    // console.log(cart)
    return (
        <div>
            <h3>Bottles Available: {bottles.length}</h3>
            <h4>Cart : {cart.length}</h4>
            <div className="bottles-container">
            {
                bottles.map(bottle => <Bottle bottle = {bottle} handleBottles = {handleBottles} key={bottle.id}></Bottle>)
                
            }
            </div>
        </div>
    );
};

export default Bottles;