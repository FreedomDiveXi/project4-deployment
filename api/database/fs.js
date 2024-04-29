const fs = require('fs');

var loadDatabase = (db_usage, schema = {}) => {
	if(!fs.existsSync(db_usage)) {
		fs.writeFileSync(db_usage, JSON.stringify(schema));
	}

	let model = require(db_usage);

	var db = {
		model : model,
		filename : db_usage,
		update : () => {
			fs.writeFileSync(db_usage, JSON.stringify(model));
		},
		addCollection : (collection) => {
			model['collection'] = [];
		}
	}

	return db;
}

module.exports = loadDatabase;

var loadDatabase2 = (db_usage2, schema2 = {}) => {
	if(!fs.existsSync(db_usage2)) {
		fs.writeFileSync(db_usage2, JSON.stringify(schema2));
	}

	let model2 = require(db_usage2);

	var db2 = {
		model : model2,
		filename : db_usage2,
		update : () => {
			fs.writeFileSync(db_usage2, JSON.stringify(model2));
		},
		addCollection : (collection) => {
			model['collection'] = [];
		}
	}

	return db2;
}

module.exports = loadDatabase2;