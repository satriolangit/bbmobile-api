const db = require("../../config/db");

const getProductsWithStock = async () => {
  const sql = `SELECT item.ItemID, item.ItemCode, item.ItemName, item.SellPrice, item.Currency, IFNULL(item.Image, '-') AS itemPhoto,
            COUNT(stock.ItemStockID) AS ItemStock
        FROM ms_itm_item item LEFT JOIN ms_itm_itemstock stock ON stock.ItemID = item.ItemID  
        GROUP BY item.ItemID, item.ItemCode, item.ItemName, item.SellPrice, item.Currency`;

  const [rows] = await db.query(sql);

  return rows;
};

module.exports = { getProductsWithStock };
