const Dev = require('../model/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response){
        console.log(request.query);
        const { latitude, longitude, techs } = request.query;
        const arrayTechs = parseStringAsArray(techs);
        const devs = await Dev.find({
            techs: {
                $in: arrayTechs,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000,
                }
            }
        });
        //Buscar todos os devs num raio de 10km
        //Filtrar por tecnologias
        return response.json(devs);
    }
};
