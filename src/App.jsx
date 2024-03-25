import Navbar from "./componets/Navbar/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Phones from "./componets/categorias/telefonos";
import Laptops from "./componets/categorias/laptops";
import { CartContextProvider } from "./context/CartContext";
import Principal from "./componets/Principal";
import Footer from "./componets/footer";
import LaptopDetailContainer from "./componets/detailcontainer/laptopDetailContainer";
import PhoneDetailContainer from "./componets/detailcontainer/phoneDetailConteiner";
import Cart from "./componets/Navbar/cart";


function App() {

  return (
    <>
    {/* usando cartcontext para proveer los datos a todos los componenetes lo que esten fueras del cart context no van a poder consumir lo que provee cart context */}
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Principal />} />
          <Route path="/phones" element={ <Phones /> } />
          <Route path="/laptops" element={ <Laptops /> } />
          <Route path="/cart" element={ <Cart /> } />
          <Route path="laptops/laptop/:id" element={ <LaptopDetailContainer /> } />
          <Route path="phone/:id" element={ <PhoneDetailContainer /> } />
          <Route path="*" element={<center><h3>404: Pagina no encontrada</h3></center>} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
    </>

  )
}

export default App
