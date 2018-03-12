const express = require('express');
var path = require('path');

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Eleve = require('./models/eleve.model');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket) {
    // console.log(socket);
    console.log('a user connected');
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
    socket.on('hello', function(msg) {
        console.log(msg);
        console.log(msg.salut);
        console.log('a user say hello');

    });
    socket.emit('hellofromserver', 'world');

});

mongoose.connect('mongodb://localhost:27017/testIFA2');

app.use('/assets', express.static('client/static'));
app.use('/app', express.static('client/app'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/index.html'));
});
app.get('/api/liste', function(req, res) {
    Eleve.find({}, function(err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        } else {
             io.emit("liste", docs);
            return res.json(docs);

        }
    });
});
app.put('/api/liste/:id', function(req, res) {
   Eleve.findOneAndUpdate({
        _id: req.params.id
    }, req.body, { new: true }, function(err, objedite) {
        if (err) return handleError(err);
        console.log('The objedite response from Mongo was ', objedite);
        io.emit("updateUser", objedite);
        return res.json(objedite);
    });
});
app.get('/api/liste/:id', function(req, res) {
    Eleve.findOne({_id : req.params.id}, function(err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        } else {
             io.emit("liste", docs);
            return res.json(docs);

        }
    });
});
app.delete('/api/liste/:id', function(req, res) {
    Eleve.findByIdAndRemove(req.params.id, (err, todo) => {
        var response = {
            message: "User successfully deleted",
            id: todo._id
        };
        io.emit("deleteUser", response);
        res.status(200).send(response);
    });
});
app.route('/:url(api|auth|components|app|bower_components|assets)/*')
    .get(function(){
        res.status(404);
});

// All other routes should redirect to the index.html
app.route('/*').get(function(req, res) {
    res.sendFile(path.join(__dirname + '/client/index.html'));
});

http.listen(3001);