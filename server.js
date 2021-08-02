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
    yearly_wage_calculator: (value) => {
      return (value * 52);
    },
    current_under_hood_calculator: (value1, value2) => {
      return Math.round(value1 * value2);
    },
    dollars_under_hood_calculator: (value1, value2, value3) => {
      return Math.round((100*value1) / (value2 * value3))/100;
    },
    difference_under_hood_calculator: (value1, value2) => {
      if (((value1 * value2) - (value2 * .9)) > 0) {
        return "<h3>" + "Under hood hour difference of..." + ((value1 * value2) - (value2 * .9)) + "</h3>";
       }
    },
    potential_weekly_earnings_calculator: (value1, value2) => {
      return Math.round(100*value1 *(value2 *.91)/100);
    },
    potential_yearly_earnings_calculator: (value1, value2) => {
      return Math.round(100*value1 *(value2 *.91)/100)*52;
    },
    difference_yearly_earnings_calculator: (value1, value2, value3) => {
      return (Math.round((100*value1 *(value2 *.91)/100)*52) - (value3*52));
    },
    under_hood_calculator: function(value, options) {
      //value = {{hours}}, need to * by {{ranking}}
     options(fn({ test: value, test2 : value}))
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
