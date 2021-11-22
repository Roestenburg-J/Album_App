const cloudinary = require('cloudinary').v2;
const config = require('../config/config');

cloudinary.config({
    cloud_name: config.cloudinary.cloudname,
    api_key: config.cloudinary.apikey,
    api_secret: config.cloudinary.apisecret
})

module.exports = cloudinary;