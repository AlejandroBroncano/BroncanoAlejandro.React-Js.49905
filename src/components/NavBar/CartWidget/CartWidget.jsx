import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {

    return(
        <div style={{display: "flex", width: 35, justifyContent: "space-between", alignItems: "center"}}>
            <FontAwesomeIcon style={{color: "darkblue"}} icon={faCartShopping} />
            <span style={{fontWeight: "bold", fontSize: "15px", color: "black"}}>3</span>
        </div>
    )

}

export default CartWidget;