const mongoose = require("mongoose");
const connect = () => {
  const db = process.env.DATABASE.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
  );
  mongoose
    .connect(db)
    .then(() => {
      console.log("Connectd to database");
    })
    .catch((err) => {
      console.log("Database connection failed!");
    });
};
module.exports = connect;
