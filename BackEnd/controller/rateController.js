let { Rate } = require("../model/rate");

let add = async (Req, Res) => {
  try {
    await Rate.create({ ...Req.body });
    Res.status(200).json({ Msg: "Rate Added Successfully !" });
  } catch (Err) {
    Res.status(401).json({ Msg: Err });
  }
};

let getAll = async (Req, Res) => {
  const Data = await Rate.findAll();
  Res.status(200).json({ Data });
};

module.exports = {
  add,
  getAll,
};
