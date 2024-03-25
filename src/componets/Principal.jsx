import Itemlist from "./Itemlist"
import Phones from "./categorias/telefonos";

function Principal() {

    return (

        <div> 
            <center> 
            <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://pfranco231.github.io/ElevaHome/imgs/anuncio2.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://pfranco231.github.io/ElevaHome/imgs/Anuncio.png" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            <Itemlist text={"Bienvenido a nuestra pagina web" }/> 
            <h3>Oferton de CELULARES</h3> 
            </center> 
            <Phones /> 
        </div>
  
    )
}

  export default Principal