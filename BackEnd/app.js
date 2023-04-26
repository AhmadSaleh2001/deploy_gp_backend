const Express = require("express");
var cors = require("cors");
const cookieParser = require("cookie-parser");

const App = Express();
App.use(cors({ origin: "http://localhost:3000", credentials: true }));
App.use(Express.urlencoded({ extended: true }));
App.use(Express.json());
App.use(cookieParser());

const { Conn, Connect } = require("./DB/Connection");
let { Admin } = require("./model/admin");
let { Url } = require("./model/url");
let { Model } = require("./model/model");
let { Rate } = require("./model/rate");

let urlRoutes = require("./routes/url");
App.use("/url", urlRoutes);

let rateRoutes = require("./routes/rate");
App.use("/rate", rateRoutes);

let adminRoutes = require("./routes/admin");
App.use("/admin", adminRoutes);

App.listen(1212, async () => {
  try {
    await Connect();
    await Conn.authenticate();
    console.log("DB Connected");

    await Admin.sync();
    console.log("Admin Table Created");

    await Url.sync();
    console.log("URL Table Created");

    await Model.sync();
    console.log("Model Table Created");

    await Rate.sync();
    console.log("Rate Table Created");

    await Model.create({
      name: "Linear SVM",
    });

    await Admin.create({
      f_name: "Ahmad",
      m_name: "Mohammad",
      l_name: "Saleh",
      email: "ahmadmfsaleh@gmail.com",
      password: "ahmad123",
    });

    await Rate.create({
      url: "www.google.com",
      feedback: "good classification",
      rate_from_5: 5,
    });
  } catch (error) {
    console.log(error);
    console.log("There is Some Error When Connect To DB");
  }

  console.log("Running ...");
});

App.use((Err, Req, Res, Nxt) => {
  Res.status(401).json({ Msg: Err.toString() });
});
