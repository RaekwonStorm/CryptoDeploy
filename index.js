var connect = require('connect');
var serveStatic = require('serve-static');
var app = connect();

app.use(serveStatic(__dirname + '/public'));
app.listen(process.env.PORT || 3333, function(){
    console.log('Server running on 3333...');
});
