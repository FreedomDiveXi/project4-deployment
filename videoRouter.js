var express = require('express');
var router = express.Router();

router.use(express.urlencoded({extended:true}));

const login = require('./authRouterLog');

router.get('/dashboard', (request,response) => {
	response.sendFile(__dirname + '/html/dashboard.html');
});

router.get('/dashboard/allVideo', (request,response) => {
	response.sendFile(__dirname + '/database/db2.json');
});

router.get('/newVod', (request,response) => {
	response.sendFile(__dirname + '/html/newVod.html');
});

router.post('/newVod', (request,response) => {
	const title = request.body.title;
	const url = request.body.url;
	const db2 = loadDatabase2(__dirname + "/database/db2.json");

	db2.addCollection({title:title, url:url});
	db2.update();

	response.send("<h2>Upload Complete</h2><br/><a href='/video/dashboard'>Return</a>")
});

dbUsage = __dirname + "/database/db2.json";
loadDatabase2 = require("./database/fs.json");
global.db2 = loadDatabase(dbUsage, db_schema);

module.exports = router;