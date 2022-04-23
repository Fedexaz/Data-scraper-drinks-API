const axios = require('axios');
const fs = require('fs');

const abecedario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'll', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const cargarBebidas = async () => {
    try {
        let datos = [];
        for (let i = 0; i < abecedario.length; i++) {
            const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${abecedario[i]}`);
            
            if(response.data) {
                response.data.drinks ? datos = [...datos, ...response.data.drinks] : null;
            }

            console.log(`Bebidas con la letra ${abecedario[i]} obtenidas.`);
        }
        fs.writeFileSync(__dirname + '/bebidas.json', JSON.stringify(datos), 'utf-8');
        console.log('Bebidas cargadas correctamente');
    } catch (error) {
        console.log(error);
    }
};

cargarBebidas();