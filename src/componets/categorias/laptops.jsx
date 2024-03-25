import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";


const MapsMock = () => {
    const [product, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getProductsDB = () => {
        const myProducts = collection(db, "laptopsProducts");

        getDocs(myProducts).then((response) => {
            const productsList = response.docs.map((doc) => {
                const item = {
                    id: doc.id,
                    ...doc.data(),
                };
                return item;
            });

            setProducts(productsList);
            setIsLoading(false);
        }).catch(error => {
            console.error("Error obteniendo productos:", error);
            setIsLoading(false);
        });
    };

    useEffect(() => {
        setIsLoading(true);
        getProductsDB();
    }, []);

    return(
        <section className="d-flex justify-content-center flex-wrap container">
            { isLoading ? <h3>Cargando Productos...</h3> : product.map(product => (
                <div key={product.id} className="card" style={{ width: "18rem" }}>
                    <img src={product.img} className="card-img-top" alt="..." height={250} />
                    <div className="card-body" style={{ height: 220 }}>
                        <h5 className="card-title">{product.name} - {product.price}</h5>
                        <p className="card-text">{product.descripcion} - Stock: {product.stock}</p>
                        <Link to={`laptop/${product.id}`}>
                            <button className="btn btn-primary">ver mas</button>  
                        </Link>
                    </div>
                </div>
            )) }
        </section>
    );
};

export default MapsMock;