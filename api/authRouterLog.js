const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

router.use(express.urlencoded({extended:true}));

router.get('/login', (request,response) => {
	response.sendFile(__dirname + '/html/login.html');
});

db_usage = __dirname + "/database/db.json";

loadDatabase = require("./database/fs");
global.db = loadDatabase(db_usage, db_schema);

function checkingLogin (username, password) {
	const allUser = db.model.entry;
	const user = allUser.find(user => user.username === username);

	if(user && user.password === password) {
		return true;
	} 
	else {
		return false;
	}
}

function sessionCreation(username) {
	const session = sessionId();
	const session = {
		username: username,
		session: session
	};

	return session;
}

function sessionId() {
	const timestamp = new Date.()getTime();
	const randomNum = Math.floor(Math.random() * 1000000);
	const sessionId = timestamp + '_' + randomNum;

	return sessionId;
}

router.post('/login/', (request, response) => {
	const {username, password} = request.body;

	if(!username || !password) {
		return res.status(400).send('Error Retype')
	}

	if(checkingLogin(username, password)) {
		const session = sessionCreation(username);

		response.redirect('/video/dashboard?session=' + session);
	}
	else {
		response.send("<h2>Wrong username or password try again.</h2><br/><a href='/'>Main Menu</a>");
	}
});

module.exports = (db) => {
	const checkingLogin = (username, session) => {
		if(!request.session) {
			return false;
		}

		const user = db.getEntry('allUser', username);

		if(!user) {
			return false;
		}

		if(user.session !== session) {
			return false;
		}

		return {
			username: username,
			session: session
		}
	}
};

module.exports = router;