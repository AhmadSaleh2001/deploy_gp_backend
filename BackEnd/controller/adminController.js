let { Admin } = require("../model/admin");
let JWT = require("jsonwebtoken");
const {
  getNewAccessToken,
  getNewRefreshToken,
  verifyRefreshToken,
} = require("../helper/WorkWithTokens");

const maxAge = 24 * 60 * 60 * 1000;

let login = async (Req, Res) => {
  const { email, password } = Req.body;
  console.log(email, password);
  try {
    const Search = await Admin.findOne({ where: { email, password } });
    // console.log(Search);
    if (!Search)
      return Res.status(401).json({ Msg: "email or password wrong" });

    const AToken = getNewAccessToken(Search);
    let RToken = getNewRefreshToken(Search);

    Res.cookie("AToken", AToken, { httpOnly: true, maxAge: 10 * 1000 });
    Res.cookie("RToken", RToken, {
      httpOnly: true,
      maxAge,
    });

    Res.status(200).json({
      Msg: "Logged In Successfully !",
      User: Search,
      AToken,
    });
  } catch (Err) {
    Res.status(406).json({ Msg: "Content Missed" });
  }
  //   console.log(Search);
};

let refresh = (Req, Res) => {
  if (!Req.cookies["RToken"]) throw new Error("Session Expired");
  let Ans = verifyRefreshToken(Req.cookies["RToken"]);
  // console.log(Ans);
  if (!Ans) throw new Error("Session Expired");

  const AToken = getNewAccessToken(Ans);
  Res.cookie("AToken", AToken, { httpOnly: true, maxAge: 10 * 1000 });
  Res.status(200).json({ AToken });
};

let logout = (Req, Res) => {
  Res.clearCookie("AToken");
  Res.clearCookie("RToken");
  Res.status(200).json({ Msg: "Successfully Logout" });
};

module.exports = {
  login,
  refresh,
  logout,
};
