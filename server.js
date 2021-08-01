const path = require("path");
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const exphbs = require("express-handlebars");
const models = require('./models');
const session = require('express-session');

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({
  helpers: {
    get_array: () => {
      const parsingtest = Math.random();
      let book = "blue"
      if (parsingtest > 0.7) {
        book = "red"
      }
      else if (parsingtest >0.4) {
        book = "yellow";
      }
      return `<span>${book}</span>`
    }
    }
});

const sess = {
  secret: "Super secret secret",
  cookie: { secure: false },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
// exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

//force true to drop/recreate table(s) on every sync
sequelize.sync({force: false}).then(() => {
  app.listen(PORT, () => console.log('Now listening on PORT: ' + PORT));
});
