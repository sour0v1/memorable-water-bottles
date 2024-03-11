import './Bottle.css'
const Bottle = ({bottle, handleBottles, bottlesLength}) => {
    // console.log(bottle)
    const {img, name, price} = bottle;
    return (
        <div className="bottle-container">
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h5>Price : {price}</h5>
            <button onClick={()=> handleBottles(bottle)}>Add to Cart</button>
        </div>
    );
};

export default Bottle;