/**
 * Datos oficiales de las Guarderías Ebor Querétaro
 * Códigos, teléfonos y configuración visual de cada plantel
 */
const guarderias = [
    {
        id: "bernardo-quintana",
        nombre: "Bernardo Quintana",
        codigo: "U-0131",
        telefono: "4422216428",
        telefonoFormato: "(442) 221-6428",
        colorNombre: "Verde",
        colorHex: "#2e7d32",
        colorBg: "#e8f5e9",
        colorBorde: "#a5d6a7",
        imagen: "assets/guarderias/BernardoQuintana.png",
        imagenDetalle: "../assets/guarderias/BernardoQuintana.png",
        direccion: "Av. Las Misiones, Parque Industrial Bernardo Quintana, Qro., C.P. 76246.",
        googleMaps: "https://maps.app.goo.gl/vptgti4Lck47uo9G8",
        descripcion: `Ubicada en el Parque Industrial Bernardo Quintana, Querétaro, nuestra guardería ofrece un ambiente cálido, seguro y cercano para el desarrollo de niñas y niños. Nuestro objetivo es acompañar a cada familia con atención personalizada, respeto y tranquilidad en las etapas iniciales del crecimiento.

La ubicación estratégica del plantel representa una opción práctica para familias que viven o trabajan cerca de la zona industrial de Querétaro.`,
        galeria: [
            { src: "../assets/galerias/BQpatio.jpeg", titulo: "Patio del plantel" },
            { src: "../assets/galerias/BQjuegos.jpeg", titulo: "Área de juegos" }
        ],
        videos: []
    },
    {
        id: "acambaro",
        nombre: "Acámbaro",
        codigo: "U-1199",
        telefono: "4171728595",
        telefonoFormato: "(417) 172-8595",
        colorNombre: "Rosa",
        colorHex: "#d81b60",
        colorBg: "#fce4ec",
        colorBorde: "#f48fb1",
        imagen: "assets/guarderias/Acambaro.png",
        imagenDetalle: "../assets/guarderias/Acambaro.png",
        direccion: "Av. 16 de Septiembre #37, Acámbaro, Guanajuato, C.P. 38600.",
        googleMaps: "https://maps.app.goo.gl/gP4jAwnZpLbECYio6",
        descripcion: `En Guardería Acámbaro buscamos ofrecer un ambiente cálido, seguro y cercano para cada pequeña y pequeño. El enfoque del plantel está centrado en brindar acompañamiento, estabilidad y confianza a las familias que requieren atención infantil de calidad en la zona.

La ubicación del plantel facilita el acceso a familias de Acámbaro y sus alrededores, apoyando una atención cercana y cercana a la comunidad.`,
        galeria: [],
        videos: []
    },
    {
        id: "carrillo",
        nombre: "Felipe Carrillo Puerto",
        codigo: "U-0039",
        telefono: "4422203467",
        telefonoFormato: "(442) 220-3467",
        colorNombre: "Azul",
        colorHex: "#0288d1",
        colorBg: "#e1f5fe",
        colorBorde: "#81d4fa",
        imagen: "assets/guarderias/Carrillo.png",
        imagenDetalle: "../assets/guarderias/Carrillo.png",
        direccion: "Prolongación 5 de Febrero #110, Col. Felipe Carrillo Puerto, Santiago de Querétaro, Qro., C.P. 76138.",
        googleMaps: "https://maps.app.goo.gl/PVGiDuFmFvKD3Hhx8",
        descripcion: `En Guardería Felipe Carrillo Puerto, nuestro propósito es ofrecer un espacio seguro, tranquilo y cercano para el cuidado de niñas y niños. Acompañamos a las familias con un trato atento y respetuoso, apoyando cada etapa del desarrollo con calidez y confianza.

El plantel está ubicado en una zona accesible para familias del sur de Santiago de Querétaro.`,
        galeria: [],
        videos: []
    },
    {
        id: "cerrito",
        nombre: "Cerrito Colorado",
        codigo: "U-0804",
        telefono: "4422257210",
        telefonoFormato: "(442) 225-7210",
        colorNombre: "Morado",
        colorHex: "#7b1fa2",
        colorBg: "#f3e5f5",
        colorBorde: "#ce93d8",
        imagen: "assets/guarderias/CerritoColorado.png",
        imagenDetalle: "../assets/guarderias/CerritoColorado.png",
        direccion: "Calle San Antonio #7, Santiago de Querétaro, Qro., C.P. 76117.",
        googleMaps: "https://maps.app.goo.gl/s7ZXzY9CiJjRqXEF9",
        descripcion: `Ubicada en Cerrito Colorado, Santiago de Querétaro, nuestra guardería ofrece un ambiente seguro, cálido y cercano, orientado al cuidado, bienestar y desarrollo integral de las niñas y los niños.

Nos comprometemos a brindar una atención cercana y afectuosa, respetando las necesidades y el ritmo de aprendizaje de cada pequeño. Queremos acompañar a cada familia con confianza y tranquilidad en cada etapa del crecimiento infantil.`,
        galeria: [],
        videos: []
    },
    {
        id: "olvera",
        nombre: "San José de los Olvera",
        codigo: "U-1641",
        telefono: "4426291101",
        telefonoFormato: "(442) 629-1101",
        colorNombre: "Azul turquesa",
        colorHex: "#00897b",
        colorBg: "#e0f2f1",
        colorBorde: "#80cbc4",
        imagen: "assets/guarderias/SanJoseDeLosOlvera.png",
        imagenDetalle: "../assets/guarderias/SanJoseDeLosOlvera.png",
        direccion: "Calle Monterrey #265, Col. San José de los Olvera, Corregidora, Qro., C.P. 76904.",
        googleMaps: "https://maps.app.goo.gl/scvPeN53kNtzxLbZ8",
        descripcion: `En Guardería San José de los Olvera buscamos crear un entorno tranquilo, seguro y cercano para cada niña y niño. El objetivo del plantel es ofrecer atención de calidad, acompañamiento constante y una experiencia de cuidado que favorezca la confianza de las familias.

Nuestra ubicación ayuda a facilitar el acceso a familias de Corregidora y zonas aledañas.`,
        galeria: [],
        videos: []
    },
    {
        id: "moises",
        nombre: "Moisés Solana",
        codigo: "U-1217",
        telefono: "4426290003",
        telefonoFormato: "(442) 629-0003",
        colorNombre: "Amarillo",
        colorHex: "#b4533c",
        colorBg: "#fff1ed",
        colorBorde: "#fdbaaa",
        imagen: "assets/guarderias/MoisesSolana.png",
        imagenDetalle: "../assets/guarderias/MoisesSolana.png",
        direccion: "Tomasa Estévez #50, Col. Vista Habitacional, Santiago de Querétaro, Qro., C.P. 76090.",
        googleMaps: "https://maps.app.goo.gl/g1tLVcn31XMWoost5",
        descripcion: `En Guardería Moisés Solana, buscamos ofrecer un ambiente cálido, ordenado y seguro para el desarrollo de niñas y niños. El plantel está orientado a fortalecer la confianza de las familias con una atención cercana, respetuosa y acompañada.

Su ubicación en la zona de Vista Habitacional facilita un acceso práctico para familias del entorno de Santiago de Querétaro.`,
        galeria: [
            { src: "../assets/galerias/MoisesPatio.jpeg", titulo: "Patio del plantel" },
            { src: "../assets/galerias/MoisesJuegos.jpeg", titulo: "Área de juegos" }
        ],
        videos: []
    }
];

if (typeof module !== "undefined" && module.exports) {
    module.exports = guarderias;
}
