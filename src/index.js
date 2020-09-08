const express = require("express");
const helmet = require("helmet");
// const config = require("config");
const indexRoute = require("./routes/index.route");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRoute);
app.use(helmet());

const PORT = 2212;
app.listen(PORT, () => {
  console.log("server running on port: " + PORT);
  // console.log(`server running in  ${config.get("env")} mode`);
});
