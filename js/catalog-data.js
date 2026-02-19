// ===================================
// DATOS DEL CATÁLOGO - Miami Cakes Sevilla
// Precios finales con ajuste aplicado
// ===================================

// Regla de precios:
// < 100€       → precio base + 10€
// 100 - 149€   → precio base + 15€
// 150 - 199€   → precio base + 20€
// 200 - 249€   → precio base + 25€
// "Desde X€"   → se mantiene el texto "Desde"

const products = [
    {
        id: 1,
        code: "tarta_1",
        category: "tartas-personalizadas",
        name: "La Princesa y el Sapo",
        description: "Tarta de 20 porciones con bizcocho de vainilla y relleno de Nutella. Topper de cartulina con la princesa y el sapo, mariposas en impresión comestible, cubierta y decoraciones de crema pastelera.",
        price: 105, // 95 + 10
        priceDisplay: "105€",
        image: "assets/tarta_1.webp",
        badge: "20 porciones"
    },
    {
        id: 2,
        code: "tarta_2",
        category: "tartas-personalizadas",
        name: "Sonic",
        description: "Tarta de 15 porciones con bizcocho de vainilla y relleno de dulce de leche. Los tres muñecos son topper de cartulina. Los aros dorados son filipinos de chocolate. Cubierta de crema pastelera con toques dorados.",
        price: 90, // 80 + 10
        priceDisplay: "90€",
        image: "assets/tarta_2.webp",
        badge: "15 porciones"
    },
    {
        id: 3,
        code: "tarta_3",
        category: "comuniones",
        name: "Tarta de Comunión",
        description: "Tarta de 20 a 25 porciones con bizcocho de chocolate y relleno de ganache de chocolate blanco. Cubierta de crema pastelera, flores en fondant, cruz y nombre en fondant, perlas doradas comestibles y encaje comestible rosa.",
        price: 125, // 110 + 15
        priceDisplay: "125€",
        image: "assets/tarta_3.webp",
        badge: "20-25 porciones"
    },
    {
        id: 4,
        code: "tarta_4",
        category: "tartas-personalizadas",
        name: "Revelación de Género",
        description: "Tarta de 50 porciones con bizcocho de vainilla. Relleno de nata azul (revelación) en la parte inferior y relleno de fresas con nata en la tarta superior. Cubierta de crema pastelera. Osito con globo, nubes y listones en fondant, esferas de chocolate.",
        price: 275, // 250 + 25
        priceDisplay: "275€",
        image: "assets/tarta_4.webp",
        badge: "50 porciones"
    },
    {
        id: 5,
        code: "tarta_5",
        category: "clasicas",
        name: "Tarta de Tres Leches",
        description: "Relleno a elegir: dulce de leche, Nutella o frutas. Disponible en tamaños de 10, 15 y 20–25 porciones. Una tarta esponjosa, húmeda y llena de sabor que gusta a toda la familia.",
        price: null,
        priceDisplay: "Desde 30€",
        image: "assets/tarta_5.webp",
        badge: "3 tamaños"
    },
    {
        id: 6,
        code: "tarta_6",
        category: "tartas-personalizadas",
        name: "Tarta 3D de Hamburguesa",
        description: "Tarta 3D esculpida para 15 personas. Base de bizcocho de vainilla con relleno de Nutella y trozos de galleta. Todas las decoraciones, incluyendo las patatas fritas, son 100% comestibles elaboradas en fondant.",
        price: 170, // 150 + 20
        priceDisplay: "170€",
        image: "assets/tarta_6.webp",
        badge: "15 porciones"
    },
    {
        id: 7,
        code: "tarta_7",
        category: "bodas",
        name: "Tarta de Boda – 50 Aniversario",
        description: "Tarta para 40 personas con base de bizcocho Red Velvet y relleno de queso crema. Decorada con flores comestibles, dos rosas grandes, pareja de recién casados y topper con el #50.",
        price: 225, // 200 + 25
        priceDisplay: "225€",
        image: "assets/tarta_7.webp",
        badge: "40 porciones"
    },
    {
        id: 8,
        code: "tarta_8",
        category: "tartas-personalizadas",
        name: "Tarta del Payaso Plim Plim",
        description: "Tarta para 25 personas con base de bizcocho de vainilla y relleno de dulce de leche. Cubierta de crema pastelera con bolitas de fondant. Decoraciones: topper de cartulina, cubos, nombre y estrellas en fondant comestible.",
        price: 155, // 140 + 15
        priceDisplay: "155€",
        image: "assets/tarta_8.webp",
        badge: "25 porciones"
    },
    {
        id: 9,
        code: "tarta_9",
        category: "dulces",
        name: "Galletas de Vainilla Decoradas",
        description: "Galletas decorativas para mesa de dulce. Diseño a elegir, con fina capa de fondant e impresión comestible encima. Perfectas para complementar cualquier celebración con detalle artesanal.",
        price: null,
        priceDisplay: "Desde 35€",
        image: "assets/tarta_9.webp",
        badge: "Pack de 10"
    },
    {
        id: 10,
        code: "MC-010",
        category: "dulces",
        name: "Cupcakes Decorados",
        description: "Cupcakes para mesa de dulce. Diseño a elegir en crema con impresión o con decoración en fondant. Pack de 12 cupcakes esponjosos con decoración artesanal personalizable para cada ocasión.",
        price: null,
        priceDisplay: "Desde 30€",
        image: "assets/tarta_10.webp",
        badge: "Pack de 12"
    },
    {
        id: 11,
        code: "MC-011",
        category: "dulces",
        name: "Brownies con Toppings",
        description: "Brownies con capa de chocolate. Topping a elegir: Kínder Bueno, Oreo, bolitas de chocolate o huesitos. Los toppings del catálogo no tienen coste extra. Frutas y Ferrero Rocher con valor adicional.",
        price: null,
        priceDisplay: "Desde 30€",
        image: "assets/tarta_11.webp",
        badge: "Pack de 9"
    }
];
