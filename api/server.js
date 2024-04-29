var express = require('express');
var app = express();

var authRouter = require('./authRouter');
var videoRouter = require('./videoRouter');

app.use(express.urlencoded({extended: true}));
app.use('/auth', authRouter);
app.use('/auth', authRouterLog);
app.use('/video', videoRouter);

app.get('/', (request,response) => {
	response.sendFile(__dirname + '/html/index.html');
});

app.listen(3000, function(){
	console.log("Server on");
});