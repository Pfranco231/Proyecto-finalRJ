import { useEffect, useState } from "react";
import PhoneDetail from "../productDetail/phoneDetail";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { useParams } from "react-router-dom";


const phoneDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    let data = null; // Define la variable data

    const getProductsDB = async () => {
        try {
            const myProducts = collection(db, "phonesProducts");
            const response = await getDocs(myProducts);
            const productsList = response.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setProduct(productsList);
            setIsLoading(false);
        } catch (error) {
            console.error("Error obteniendo productos:", error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            await getProductsDB();
        };

        fetchData();
    }, [id]);

    if (product) {
        data = product.find((item) => item.id === id);
    }

    return (
        <>
            {isLoading ? <h3>Cargando Producto...</h3> : (
                <PhoneDetail
                    image={data && data.img} // Asegúrate de que data tenga un valor antes de acceder a sus propiedades
                    id={data && data.id}
                    name={data && data.name}
                    price={data && data.price}
                    descripcion={data && data.descripcion}
                    category={data && data.category}
                    stock={data && data.stock}
                />
            )}
        </>
    );
};

export default phoneDetailContainer;
