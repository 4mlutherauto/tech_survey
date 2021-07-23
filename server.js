const path = require("path");
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const exphbs = require("express-handlebars");

const Pay = require('./models/pay');
const Hours = require('./models/hours');

const app = express();
const PORT = process.env.PORT || 3001;

// const hbs = exphbs.create({});

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

//force true to drop/recreate table(s) on every sync
sequelize.sync({force: false}).then(() => {
  app.listen(PORT, () => console.log('Now listening on PORT: ' + PORT));
});
