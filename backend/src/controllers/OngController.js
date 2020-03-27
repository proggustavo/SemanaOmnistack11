const crypto = require('crypto');
const connection = require('../database/connection');

// o module exports está exportando esses dois métodos
// primeiro eu to fazendo a listagem das ongs
// depois esta criando as ongs

module.exports = {
    async index(request, response) {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
    },
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        return response.json({ id });
    }
};