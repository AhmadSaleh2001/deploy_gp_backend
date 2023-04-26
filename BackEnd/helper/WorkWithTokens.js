const JWT = require("jsonwebtoken");
let getNewAccessToken = (Search) => {
  let AToken = JWT.sign({ Search }, "AhmadSalehAccessToken2001", {
    expiresIn: "10s",
  });

  return AToken;
};

let getNewRefreshToken = (Search) => {
  let RToken = JWT.sign({ Search }, "AhmadSalehRefreshToken2001", {
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
