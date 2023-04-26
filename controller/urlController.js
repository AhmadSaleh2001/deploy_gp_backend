let { Url } = require("../model/url");

let add = async (Req, Res) => {
  try {
    await Url.create({ ...Req.body });
    Res.status(200).json({ Msg: "Url Added Successfully !" });
  } catch (Err) {
    Res.status(406).json({
      Msg: "Please Send All Information About URL To Add",
    });
  }
};

let getAll = async (Req, Res) => {
  const Data = await Url.findAll();
  Res.json({ Data });
};

module.exports = {
  add,
  getAll,
};
