const { RateLimiterMemory } = require('rate-limiter-flexible');

const rateLimiter = new RateLimiterMemory({
    points: 1,
    duration: 60,
});

function getClientIp(request) {
    let forwarded = request.headers['x-forwarded-for'];
    if (forwarded) {
        let ips = forwarded.split(',');
        return ips[0].trim();
    }
    return request.socket.remoteAddress;
}

const rateLimitMiddleware = (request, response, next) => {
    let ip = getClientIp(request);
    rateLimiter.consume(ip)
        .then(() => {
            
        })
        .catch(err => {

        });
}