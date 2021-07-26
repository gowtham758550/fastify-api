var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
var server_host = process.env.YOUR_HOST || '0.0.0.0';

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

app.listen(server_port, server_host)
