const axios = require('axios');
const Dev = require('../model/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

//index -> listar, show -> buscar um, store -> criar, update -> atualizar, destroy -> deletar

module.exports = {
    async index(request, response) {
        const devs = await Dev.find();
        return response.json(devs);
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            const { name = login, avatar_url, bio } = apiResponse.data
            const arrayTechs = parseStringAsArray(techs);
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            };
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: arrayTechs,
                location
            });
        }
        return response.json(dev);
    },
    async update(request, response) {
        const { techs } = request.body;
        const { github_username } = request.params
        let dev = await Dev.findOne({ github_username });
        if(dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            const { name = login, avatar_url, bio } = apiResponse.data
            const arrayTechs = parseStringAsArray(techs);
            dev.name = name;
            dev.avatar_url = avatar_url;
            dev.bio = bio;
            dev = Dev.update(dev);
        }        
        return response.json(dev);
    },
    async destroy(request, response) {
        const { github_username } = request.params
        const retorno = Dev.deleteOne({github_username});
        console.log(retorno);
        return response.json({message: 'Confira o log'});
    }
}