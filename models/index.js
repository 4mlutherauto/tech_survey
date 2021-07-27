const User = require('./User');
const Answers = require('./Answers');


User.hasMany(Answers, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
  });
  
  Answers.belongsTo(User, {
    foreignKey: "user_id",
  });









module.exports = { User, Answers };