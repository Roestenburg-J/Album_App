"use strict"

const express = require('express');
const routes = require('./routes');

const app = async config => {
    const { host, port } = config;

    const server = express.server({ host, port });

    server.app.config = config;

    await routes.register(server);

    return server;
};

module.exports = app;
