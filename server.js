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
    potential_under_hood_calculator: (value1) => {
      return Math.round(value1 * .9);
    },
    dollars_under_hood_calculator: (value1, value2, value3) => {
      return Math.round((100*value1) / (value2 * value3))/100;
    },
    potential_dollars_under_hood_calculator: (ranking, hours) => {
      const uhhours = Math.round((100*hours) * .9/100);
      const weeklyearnings = Math.round(100*ranking *(uhhours)/100);
      return Math.round(weeklyearnings / uhhours);
    },

    difference_under_hood_calculator: (value1, value2, value3) => {
       return (value3 * .9)-(value1 * value2);
      // if (difference > 0) {
      //   return difference;
      //  }
    },
    potential_weekly_earnings_calculator: (value1, value2) => {
      const earnings= Math.round(100*value1 *(value2 *.9)/100);
      return (earnings).toLocaleString();
    },
    potential_yearly_earnings_calculator: (value1, value2) => {
      const yearlysalary= Math.round(100*value1 *(value2 *.9)/100)*52;
      return (yearlysalary).toLocaleString();
    },
    difference_yearly_earnings_calculator: (value1, value2, value3) => {
      const difference = (Math.round((100*value1 *(value2 *.9)/100)*52) - (value3*52));
      return (difference).toLocaleString();
    },
    under_hood_calculator: function(value, options) {
      //value = {{hours}}, need to * by {{ranking}}
     options(fn({ test: value, test2 : value}))
    },
    percent_frontend_display: (value1) => {
      const percent = value1*100;
      return percent +  "%";
    },

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
