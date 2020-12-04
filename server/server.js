const dotenv = require("dotenv");
const { promisify } = require("util");

process.on("uncaughtException", async (err) => {
  console.log(err.name, err.message, err.stack);
  console.log("UNCAUGHT EXCEPTION!!!");
  process.exit(1);
});

if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: "./config.env" });
}
const app = require("./app");

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log("Listening....");
});

process.on("unhandledRejection", async (err) => {
  console.log(err);
  console.log(err.name, err.message);
  console.log("UNHANDLED REJECTION! Shutting down...");
  await promisify(server.close);
  process.exit(1);
});
