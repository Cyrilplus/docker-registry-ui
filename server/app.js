const express = require('express');
const request = require('request-promise');
const os = require('os');
const app = express();

const eth0 = os.networkInterfaces().eth0[0];

let proxyHost = process.env.REGISTRY_HOST;
if (!proxyHost || proxyHost === 'localhost' || proxyHost.includes('127.0.0')) {
    proxyHost = eth0.address.replace(/(\d+)\.(\d.+)\.(\d+)\.(\d+)/, '$1.$2.$3.1')
}
const proxyPort = process.env.REGISTRY_PORT || 5000;

app.use(express.static('../public'));

app.use(/\/v2/, async function(req, res, next) {
    const result = await request(`http://${proxyHost}:${proxyPort}${req.originalUrl}`);
    res.contentType('json');
    res.end(result)
})

let server = app.listen(8080, function() {
    const {address: host, port} = server.address();
    console.log('docker registry ui listening at http://%s:%s', host, port);
})
