import pool from "../database/MySqlConnect.js";

export async function getProduct(req, res) {
  try {
    const { id } = req.params;

    // گرفتن محصول
    const [products] = await pool.execute(
      `
      SELECT 
        id,
        title,
        description,
        price,
        discount,
        catId
      FROM products
      WHERE id = ?
      `,
      [id]
    );

    // اگر محصول وجود نداشت
    if (products.length === 0) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    // گرفتن تصاویر محصول
    const [images] = await pool.execute(
      `
      SELECT 
        id,
        path
      FROM images
      WHERE product_id = ?
      ORDER BY id ASC
      `,
      [id]
    );

    // ترکیب محصول و تصاویر
    const product = {
      ...products[0],
      images,
    };

    res.status(200).json(product);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
}