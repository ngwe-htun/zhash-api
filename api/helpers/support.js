const supportedAlgorithms = {
    md5: 'hello'
};

const isSupported = (algorithm) => {
    let supported = Object.keys(supportedAlgorithms);
    let isAlgorithmExist = supported.includes(algorithm);
    return isAlgorithmExist;
}

module.exports = {
    isSupported
}