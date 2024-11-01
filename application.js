const express = require('express');
const httpProxy = require('http-proxy');

// Lista de servidores backend
const backendServers = [
    'http://localhost:8001',
    'http://localhost:8002',
    'http://localhost:8003'
];

// Crear el balanceador de carga
const app = express();
const proxy = httpProxy.createProxyServer();

// Manejar todas las solicitudes
app.all('*', (req, res) => {
    // Seleccionar servidor al azar
    const server = backendServers[Math.floor(Math.random() * backendServers.length)];
    proxy.web(req, res, { target: server });
});

// Manejar errores
proxy.on('error', (err, req, res) => {
    console.error('Error', err);
    res.status(500).send('An error has occurred on the server');
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Load Balancer started on port 3000');
});
