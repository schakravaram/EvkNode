﻿
// Imports
var express = require('express'),
    app = express(), 
    favicon = require('serve-favicon');

    

// Set favicon for app
    app.use(favicon(__dirname + '/public/Images/fav.ico'));



// Makes the public folder content avaiable for clients
    app.use(express.static(__dirname + '/public'));  



// Rest API Actions
require('./NodeScripts/Rest.js')(app,express); 



// NodeJS Configuration Port & http server settings
require('./NodeScripts/nodejsConfig.js')(app);



console.log("Node Action On.......\n Running on the Port#:" + "8888");



