"use strict"

const { request } = require("express");

module.export.register = async server => {
    server.route({
        method: "GET",
        path: "/",
        handler: async (request, h) => {
            return "Express Server!";
        }
    });

};