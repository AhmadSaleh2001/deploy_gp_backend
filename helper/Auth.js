const {
  getNewAccessToken,
  verifyAccessToken,
  verifyRefreshToken,
} = require("./WorkWithTokens");
let isAuth = (Req, Res, Nxt) => {
  let AuthHeader = Req.headers.authorization;
  //   console.log(AuthHeader);
  if (!AuthHeader) throw new Error("Not Authorized");
  AuthHeader = AuthHeader.split(" ");
  //   console.log(AuthHeader[0]);
  if (AuthHeader[0] !== "CatchMeIfYouCan") {
    // console.log("why !!");
    throw new Error("Not Authorized");
  }
  if (!verifyAccessToken(AuthHeader[1])) {
    throw new Error("Not Authorized");
  }

  Nxt();
};

module.exports = {
  isAuth,
};
