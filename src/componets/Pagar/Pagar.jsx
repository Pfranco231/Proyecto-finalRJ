import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { Link } from "react-router-dom";

function Pagar() {
  const { cart, total, clearCart } = useContext(CartContext);
  const [formCheckout, setFormCheckout] = useState({
    name: "",
    phone: 0,
    email: "",
  });
  const [orderId, setOrderId] = useState(null);

  const nombre = (e) => {
    setFormCheckout({
      ...formCheckout,
      name: e.target.value,
    });
  };

  const telefono = (e) => {
    setFormCheckout({
      ...formCheckout,
      phone: e.target.value,
    });
  };

  const mail = (e) => {
    setFormCheckout({
      ...formCheckout,
      email: e.target.value,
    });
  };

  const extra = (e) => {
    setFormCheckout({
      ...formCheckout,
      info: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    const newOrder = {
      buyer: formCheckout,
      items: cart,
      total,
      date: serverTimestamp(), // Método de firebase par guardar la fecha
    };

    // Agregar la orden de compra en la base de datos
    const order = await addDoc(collection(db, "orders"), newOrder);

    // Vaciar formulario
    setFormCheckout({
      name: "",
      phone: 0,
      email: "",
    });
    clearCart();
    setOrderId(order.id);

  };

  if (orderId) {
    return (
      <>
        <center>
        <h3 className="ms-2 mt-2">Su numero de pedido es: <strong>{orderId}</strong></h3>
        <h5><strong style={{ color: '#FF0000' }}>ADVERTENCIA:</strong> Guarda su codigo porque al la hora de que llegue su pedido le van a pedir el ID(osea el numero de pedido)</h5>
        <Link to="/cart">
          <button className="ms-2 mb-2 m btn btn-success">Volver al carrito</button>
        </Link>

        </center>
      </>
    );
  }
  

  return (
    <div className="container d-flex justify-content-center m-5">
      <form onSubmit={submit}>
        <label htmlFor="">Nombre <strong style={{ color: '#FF0000' }}>*</strong></label>
        <input type="text" className="form-control" value={formCheckout.name} onChange={nombre} required />
        <label htmlFor="">Teléfono <strong style={{ color: '#FF0000' }}>*</strong></label>
        <input type="number" className="form-control" value={formCheckout.phone} onChange={telefono} required />
        <label htmlFor="">Email <strong style={{ color: '#FF0000' }}>*</strong></label>
        <input type="email" className="form-control" value={formCheckout.email} onChange={mail} required />
        <label htmlFor="">Datos extra</label>
        <textarea rows="4" cols="50" className="form-control" onChange={extra} />
        <input type="submit" className="mt-3 btn btn-success" value="Terminar la compra" />
        <label htmlFor="" className="ms-5">Los <strong style={{ color: '#FF0000' }}>*</strong> son obligatorios</label>
      </form>
    </div>
  );
};

export default Pagar