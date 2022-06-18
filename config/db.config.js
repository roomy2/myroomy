const { DB_USERNAME, DB_PASSWORD } = require("./config");

module.exports = {
  url: "mongodb://localhost/myroomy",
  urlCloud: `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.ho2zb.mongodb.net/?retryWrites=true&w=majority`
};
