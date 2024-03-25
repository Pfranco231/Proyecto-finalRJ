const productsList = [
    {
        id: 1,
        name: 'Iphone 15 pro',
        price: 1500,
        category: 'telefono',
        img: 'https://http2.mlstatic.com/D_NQ_NP_924631-MLA71783367058_092023-O.webp',
        stock: 'Disponible',
        descripcion: '6gb/128gb Pantalla oled de 60hz...'
    },
    {
        id: 2,
        name: 'Samsung s22 ultra',
        price: 1200,
        category: 'telefono',
        img: 'https://d22fxaf9t8d39k.cloudfront.net/1a9694293a5964fe1d8d4d68b082bbaac0a64f1d65f293b389c98f8f57067d2b155135.jpg',
        stock: 'Disponible',
        descripcion: '8gb/128gb Pantalla Oled de 120hz...'
    },
    {
        id: 3,
        name: 'Motorola G32',
        price: 700,
        category: 'telefono',
        img: 'https://www.tucompu.com.ar/8616-thickbox_default/celular-motorola-g32-4gb-128gb-soft-silver.jpg',
        stock: 'Disponible',
        descripcion: '4gb/64gb Pantalla lcd de 60hz...'
    },
    {
        id: 4,
        name: 'Nokia 1100',
        price: 100,
        category: 'telefono',
        img: 'https://http2.mlstatic.com/D_NQ_NP_824610-MLA52950921338_122022-O.webp',
        stock: 'Disponible',
        descripcion: 'Telefono irrompible y incluye la viborita...'
    },
    {
        id: 5,
        name: 'huawei p30 lite',
        price: 900,
        category: 'telefono',
        img: 'https://http2.mlstatic.com/D_NQ_NP_828343-MLA49087800820_022022-O.webp',
        stock: 'Disponible',
        descripcion: '8gb/256gb Pantalla Oled de 120hz...'
    },
    {
        id: 6,
        name: 'Xiaomi Note 11',
        price: 1400,
        category: 'telefono',
        img: 'https://ockam-cloud-dr.imgix.net/imagenes-s/productos/celular-xiaomi-redmi-note-11-643-4gb-128gb-grap-23332.jpg?auto=format',
        stock: 'Disponible',
        descripcion: '8gb/128gb Pantalla Oled de 120hz...'
    },
]

export const getProducts = () => {
    return new Promise( (resolve, reject) => {
        if(productsList.length > 0) {
            setTimeout( () => {
                resolve(productsList);

            }, 2000)
        } else {
            reject("No hay productos");
        }
    } )
    
}
