import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { NavLink } from "react-router-dom";

const Cartwidget = () => {
    const { totalItems } = useContext(CartContext);

    return(
        <div style={{display: "flex", alignItems: "center", marginLeft: '70vw'}}>
            <NavLink to="/cart">
            <img src="../public/Carrito.svg" alt="Logo Carrito"  height={50}/>
                    
            </NavLink>
            <h5>{totalItems}</h5>
            {/* uso cualquiera del usocontext */}
            {/* <h5>hola {name} {lastname} el carrito esta vacio</h5> */}
        </div>
    )
}

export default Cartwidget