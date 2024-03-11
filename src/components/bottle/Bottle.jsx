import './Bottle.css'
const Bottle = ({bottle}) => {
    // console.log(bottle)
    const {img, name, price} = bottle;
    return (
        <div className="bottle-container">
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h5>Price : {price}</h5>
        </div>
    );
};

export default Bottle;