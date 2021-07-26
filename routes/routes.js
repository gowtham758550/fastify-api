const distroController = require('../controller/distros')

const routes = [
    {
        method: 'GET',
        url: '/api/distros',
        handler: distroController.getAllDistros
    },
    {
        method: 'GET',
        url: '/api/distros/:id',
        handler: distroController.getDistro
    }
]

module.exports = routes