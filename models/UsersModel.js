import pool from '../database/MySqlConnect.js'


class UsersModel {
  static getAllUsers = async () => {
    const [result] = await pool.query("select * from users");
    return result;
  };

  static getUser = async (id) => {
    const [data] = await pool.query(`select * from users where id = ?`, [id]);
    return [...data][0];
  };


static insertUser = async (data) => {

    const fields = Object.keys(data).join(", ");
    const values = Object.values(data);
    const placeholders = values.map(() => "?").join(", ");

    const sql = `
        INSERT INTO users
        (${fields})
        VALUES (${placeholders})
    `;

    const [result] = await pool.query(sql, values);

    return result;
};


static updateUser = async (id, data) => {

  const fields = Object.keys(data);

  const values = Object.values(data);

  const setQuery = fields
    .map(field => `${field} = ?`)
    .join(", ");

  const sql = `
    UPDATE users 
    SET ${setQuery}
    WHERE id = ?
  `;

  const [result] = await pool.query(sql, [
    ...values,
    id
  ]);

  return result;
};


  static deleteUser = async (id) => {
    const user =  this.getUser(id)
    if(user){
        pool.query("delete from users where id = ?", [id]);
        return user;
    }
    return null;
  };
}

export default UsersModel;
