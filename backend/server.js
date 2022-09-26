const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//HANDLING UNCAUGHT EXCEPTION
process.on("uncaughtException", (error) => {
  console.log(error.message);
  console.log(`shutting down the server dut to uncaughtException`);

  process.exit(1);
});

//CONFIG
dotenv.config({ path: "backend/config/config.env" });

//DATABASE CONNECTION
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

//UNHANDLED PROMISE REJECTION
process.on("unhandledRejection", (error) => {
  console.log(error.message);
  console.log(`shutting down the server dut to unhandledRejection`);

  server.close(() => {
    process.exit(1);
  });
});
