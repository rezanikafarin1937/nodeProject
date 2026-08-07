import pool from '../database/MySqlConnect.js'

// const pool = require("../database/MySqlConnect");



class ProductsModel {
  static getAllProducts = async () => {
    const [result] = await pool.query("select * from products");
    return result;
  };

  static getProduct = async (id) => {
    const [data] = await pool.query(`select * from products where id = ?`, [id]);
    return [...data][0];
  };


static insertProduct = async (data) => {

    const fields = Object.keys(data).join(", ");
    const values = Object.values(data);
    const placeholders = values.map(() => "?").join(", ");

    const sql = `
        INSERT INTO products
        (${fields})
        VALUES (${placeholders})
    `;

    const [result] = await pool.query(sql, values);

    return result;
};


static updateProduct = async (id, data) => {

  const fields = Object.keys(data);

  const values = Object.values(data);

  const setQuery = fields
    .map(field => `${field} = ?`)
    .join(", ");

  const sql = `
    UPDATE products 
    SET ${setQuery}
    WHERE id = ?
  `;

  const [result] = await pool.query(sql, [
    ...values,
    id
  ]);

  return result;
};


  static deleteProduct = async (id) => {
    const product =  this.getProduct(id)
    if(product){
        pool.query("delete from products where id = ?", [id]);
        return product;
    }
    return null;
  };
}

// module.exports = ProductsModel;
export default ProductsModel;
