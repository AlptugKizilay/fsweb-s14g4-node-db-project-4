const tarifModel = require("./tarif-model");

const checkTarifId = async function (req, res, next) {
  try {
    const isExist = await tarifModel.idyeGoreGetir(req.params.id);
    if (!isExist || isExist.length == 0) {
      res
        .status(404)
        //.message({ message: `${req.params.id} id'li tarif bulunamadı` })
        ;
    } else {
      req.tarif = isExist;
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  checkTarifId,
};