import pool from "../database/MySqlConnect.js";
import { glasses } from "./db/products/glasses.js";

class FakeData {
  static seedProducts = async () => {
    try {
      const sql = `
      INSERT INTO products
      (title, description, price, discount, catId)
      VALUES ?
    `;

      const values = glasses.map((product) => [
        product.title,
        product.description,
        product.price,
        product.discount,
        product.catId,
      ]);

      await pool.query(sql, [values]);

      console.log(`${glasses.length} محصول با موفقیت ذخیره شد.`);
    } catch (error) {
      console.error("خطا در ذخیره محصولات:", error);
    }
  };

  static truncate = async () => {
    try {
      await pool.query("TRUNCATE TABLE products");

      console.log("تمام محصولات و شمارنده ID پاک شدند.");
    } catch (error) {
      console.error("خطا:", error);
    }
  };
}
export default FakeData;
