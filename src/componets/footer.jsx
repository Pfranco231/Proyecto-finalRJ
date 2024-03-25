
function footer() {

    const estilo = {
        display: 'flex',
        justifyContent: 'space-around',
        textDecoration: 'none',
        borderTop: '1px solid gray',
        padding: 10,
        alingItems: 'center',
        textAling: 'center',
    };

    const astyle = {
        color: 'black',
        textDecoration: 'none',
    };



    return (
        <div style={estilo}>
            <img src="../public/logo.png" alt="logo" height={50}/>
            <a href="" style={astyle}>Terminos y condiciones</a>
            <a href="" style={astyle}>Ayuda</a>
            <a href="" style={astyle}>Privacidad</a>


        </div>
  
    )
}

  export default footer