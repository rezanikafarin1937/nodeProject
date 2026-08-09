import Joi from "joi";
import Table from "../models/Table.js";

const Register = async (req, res, next) => {
  const schema = {
    username: Joi.string().min(3).max(50).required(),
    mobile: Joi.string().min(10).max(11).required(),
    password: Joi.string().min(5).max(100).required(),
    // email : Joi.string().email().required()
  };
  const validateResult = Joi.object(schema).validate(req.body);
//   res.send(validateResult)
// res.send(typeof req.body)
  if(validateResult){
    const table = new Table('users');
    const result = await table.insertRecord(req.body)
    res.send(req.body)
  }
};

const Login = (req, res, next) => {};

export { Register, Login };
