require("dotenv").config();
const express = require("express");
const massive = require('massive');
const session = require("express-session")
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process;
const ctrl = require("./controller");
const favCtrl = require("./favController");

const app = express();

app.use(express.json());

app.use(session({
	resave: false,
   saveUninitialized: true,
	secret: SESSION_SECRET,
	cookie: {
		maxAge: 1000 * 60 * 60 * 24 * 365
	}
}))

// massive({
// 	connectionString: CONNECTION_STRING,
// 	ssl: {rejectUnauthorized: false}
// })
// .then(db => {
// 	app.set("db", db);
// 	console.log("db connected");
// 	app.get(SERVER_PORT, () =>
// 		console.log(`Server running on ${SERVER_PORT}`)
// 	);
// });

massive({
	connectionString: CONNECTION_STRING,
	ssl: {rejectUnauthorized: false}
})
.then (db => {
	app.set('db', db);
	console.log('db connected');
	app.listen(SERVER_PORT, () => 
		console.log(`Server listening on port ${SERVER_PORT}`)
	);
})

// ENDPOINTS
// app.get("/api/memes/:id", ctrl.getMeme);
// app.get("/api/memse", ctrl.getAllMemes);
// app.post("/api/memes", ctrl.addMeme);
// app.post("/api/favorites", favCtrl.addFav)
// app.put("/api/memes/:id", ctrl.updateMeme);
// app.delete("/api/favorites/:id", favCtrl.deleteFav);
// app.delete("/api/memes", ctrl.deleteMeme);