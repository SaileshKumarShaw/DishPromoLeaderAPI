const http = require("http");
const express = require("express");
const morgan = require("morgan");
const bodyParsere = require("body-parser");
const dishRouter = require("./routes/dishRouter");
const promoRouter = require("./routes/promoRouter");
const leaderRouter = require("./routes/leaderRouter");

const hostName = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"));
app.use(bodyParsere.json());

app.use("/dishes", dishRouter);
app.use("/promotions", promoRouter);
app.use("/leaders", leaderRouter);

app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

const server = http.createServer(app);

server.listen(port, hostName, () => {
  console.log("Server Running at http://" + hostName + ":" + port);
});
