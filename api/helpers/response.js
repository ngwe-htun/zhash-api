function success(response, data) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.end(
        JSON.stringify(data)
    );    
}

function failed(response, status, data) {
    response.statusCode = status | 500;
    response.setHeader('Content-Type', 'application/json');
    response.end(
        JSON.stringify(data)
    );
}

module.exports = {
    success,
    failed
}