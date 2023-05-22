
// Importa la librería axios para realizar solicitudes HTTP
const axios = require('axios');

// Clave de API de FatSecret
const apiKey = 'TU_CLAVE_DE_API_AQUÍ';

// Función para realizar una solicitud a la API de FatSecret
async function searchFood(query) {
    try {
        // Realiza una solicitud GET a la API de FatSecret
        const response = await axios.get('https://platform.fatsecret.com/rest/server.api', {
            params: {
                method: 'foods.search',
                format: 'json',
                max_results: 10,
                search_expression: query,
                oauth_consumer_key: apiKey,
            },
        });

        // Obtiene los resultados de la búsqueda de alimentos
        const results = response.data.foods;

        // Maneja los resultados como desees
        console.log(results);
    } catch (error) {
        console.error('Error al realizar la solicitud a la API de FatSecret:', error);
    }
}

// Ejemplo de uso: realiza una búsqueda de alimentos
searchFood('manzana');

