
const handlers = require('../handlers/index.js');

const routes = {
    "/":{
        "method": "GET",
        "handle": (request, response) => handlers.healthCheckHandler(request, response)
    },
    "/hash": {
        "method": "POST",
        "handle": (request, response) => handlers.hashHandler(request, response)
    }
};

module.exports = routes;