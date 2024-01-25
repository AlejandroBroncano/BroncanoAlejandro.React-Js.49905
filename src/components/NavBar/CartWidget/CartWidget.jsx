import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

const CartWidget = () => {
    const { count } = useContext(CartContext);
    console.log(count)

    return(
        <div style={{display: "flex", width: 35, justifyContent: "space-between", alignItems: "center"}}>
            <FontAwesomeIcon style={{color: "darkblue"}} icon={faCartShopping} />
            {/* <span style={{fontWeight: "bold", fontSize: "15px", color: "black"}}>{count}</span> */}
        </div>
    )

}

export default CartWidget;