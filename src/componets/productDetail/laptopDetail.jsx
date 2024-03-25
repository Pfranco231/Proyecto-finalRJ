import { Link } from "react-router-dom";
import { ItemCount } from "../itemcount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const laptopDetail = ({image, id, name, price, category, stock, descripcion, pcGamer }) => {
    

    const { addItem } = useContext(CartContext);

    const onAdd = ( quantity ) => { 
  
      const item = {
        id,
        price,
        name
      }
       
      addItem(item, quantity)
  
     }

    return (
        <>
        <center>
        <div className="container p-3 border border-2 rounded-4 w-25">
            <div>
                <img src={image} alt="imagen del producto" height={200}/>
            </div>
            <p>ID: {id}</p>
            <p>Producto: {name}</p>
            <p>Precio: {price}</p>
            <p>Descripcion: {descripcion}</p>
            <p>Categoria: {category}</p>
            <p>Stock: {stock}</p>
            <p>Pc gamer: {pcGamer}</p>
            <ItemCount onAdd={onAdd} />
        </div>
        <div className="container p-3 w-25">
            <Link to="/laptops">
                <button className="btn btn-dark">Volver</button>
            </Link>
        </div>

        </center>
        </>
    )
}

export default laptopDetail