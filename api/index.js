// Import modules
const http = require('http');
const routes = require('../routes/index.js');
const responseHelper = require('../helpers/response.js');

// Create server
const server = http.createServer(
    (request, response) => {
        if (routes[request.url] && request.method == routes[request.url].method) {
            routes[request.url].handle(request, response);
        } else {
            responseHelper.failed(
                response, 
                404, 
                {'message': 'No route'}
            );
        }
    }
);

// Run the server
const PORT=4000;
const HOST="0.0.0.0";
server.listen(PORT, HOST, () => {
    console.info('Server is running');
});