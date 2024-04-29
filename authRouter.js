const express = require('express');
const router = express.Router();

router.use(express.urlencoded({extended:true}));

router.get('/register', (request, response) => {
	response.sendFile(__dirname + '/html/register.html');
});

db_usage = __dirname + "/database/db.json";

db_schema = {};

loadDatabase = require("./database/fs");
global.db = loadDatabase(db_usage, db_schema);

router.post('/register/:email/:username/:password', (request, response) => {
	if(!request.body) {
		return response.status(400).send('No request body');
	}

	const {email, username, password} = request.body;

	if(!email || !username || !password) {
		return response.status(400).send('Missing component');
	}

	if(!db.model) {
		db.model = {};
	}

	if(!db.model.entry) {
		db.model.entry = []
	}

	entry = {
		email : email,
		username : username,
		password : password
	}

	db.model.entry.push(entry);
	db.update();
	response.send("<h2>Newly registration added to database</h2><br/><a href='/auth/login'>Login</a>");
});

router.get('/register/retrieve', (request, response) => {
	registration = db.model;
	res.json(registration);
});

module.exports = router;