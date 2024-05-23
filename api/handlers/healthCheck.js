const responseHelper = require('../helpers/response.js');

function healthCheck(request, response) {
    responseHelper.success(response, {
        'message': 'serving'
    });
}

module.exports = healthCheck;