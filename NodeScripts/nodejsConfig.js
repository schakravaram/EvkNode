
module.exports = function (app) {
    var server = require('http').createServer(app);
    
    //,
    //    io = require('socket.io')(server);
    
    //io.on('connection', function (client) {
    //    console.log('Client connected...');
        
    //    client.on('join', function (data) {
    //        console.log(data);
    //    });
    //});
    
    server.listen("8888");
}