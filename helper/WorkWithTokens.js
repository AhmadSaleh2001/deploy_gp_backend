const JWT = require("jsonwebtoken");
let getNewAccessToken = (User) => {
  let AToken = JWT.sign({ User }, "AhmadSalehAccessToken2001", {
    expiresIn: "10s",
  });

  return AToken;
};

let getNewRefreshToken = (User) => {
  let RToken = JWT.sign({ User }, "AhmadSalehRefreshToken2001", {
    expiresIn: "1d",
  });

  return RToken;
};

let verifyAccessToken = (Token) => {
  try {
    return JWT.verify(
      Token,
      "AhmadSalehAccessToken2001",
      function (Err, Decoded) {
        if (Err) return null;
        return Decoded;
      }
    );
  } catch (Err) {
    return false;
  }
};

let verifyRefreshToken = (Token) => {
  try {
    return JWT.verify(
      Token,
      "AhmadSalehRefreshToken2001",
      function (Err, Decoded) {
        if (Err) return null;
        return Decoded;
      }
    );
  } catch (Err) {
    return false;
  }
};

module.exports = {
  getNewAccessToken,
  getNewRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
};
