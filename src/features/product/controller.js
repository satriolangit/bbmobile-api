const repo = require("./repository");

const getProductsWithStock = async (req, res) => {
  const items = await repo.getProductsWithStock();

  res.json({
    status: "OK",
    result: items,
  });
};

module.exports = { getProductsWithStock };
