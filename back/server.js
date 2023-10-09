const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");

const corsOption = {
  credentials: true, //authetication cookies
  origin: "https://web.toxicsed.fr",
};

app.use(cookieParser());
app.use(cors(corsOption));

//models
const db = require("./app/models");
db.connex.sync();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "welcome" });
});
//router
require("./app/routes/product.route")(app);
require("./app/routes/user.route")(app);
require("./app/routes/checkout.route")(app);
require("./app/routes/order.route")(app);
require("./app/routes/wishlist.route")(app);

const PORT = 8008;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
