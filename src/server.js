const express = require("express");
const app = express();
const morgan = require("morgan");
const router = require("./routes/router");
const bodyParser = require("body-parser");
const errorHandler = require("./helpers/errorHandler");
const config = require("./configs/config");
const authRouter = require("./routes/authRouter");
const verifyToken = require("./modules/check-token");

const startServer = async (port) => {
  app
    .set("superSecret", config.secret)
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(morgan("dev"))
    .use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
    })
    .use("/", authRouter)
    .use(verifyToken)
    .use("/", router)
    .use("*", errorHandler);

  app.listen(port);

  console.log("Server was started at http://localhost:" + port);
};

module.exports = startServer;
