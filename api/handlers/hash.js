const support = require('../helpers/support.js');
const responseHelper = require('../helpers/response.js');

function hashHandler(request, response) {
    let body;

    request.on('data', (data) => {
        body =  JSON.parse(data.toString());
    });

    request.on('end', () => {
        support.isSupported(body.algorithm);
        responseHelper.success(response, body)
    });

    
}

module.exports = hashHandler;