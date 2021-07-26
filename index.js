const app = require('fastify')({
    logger: true
})

app.get('/', (res, reply) => {
    reply.send({home: "world"})
})

const distroRoutes = require('./routes/routes')
distroRoutes.forEach((route) => {
    app.route(route)
})

app.listen(3000)