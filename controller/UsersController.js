import Joi from "joi";
import crypto from "crypto";
import Table from "../models/Table.js";
import bcrypt from 'bcrypt';

const Register = async (req, res, next) => {
  const schema = {
    name: Joi.string().min(3).max(50).required(),
    mobile: Joi.string().min(10).max(11).required(),
    password: Joi.string().min(5).max(100).required(),
    // email : Joi.string().email().required()
  };
  const validateResult = Joi.object(schema).validate(req.body);


  if (validateResult.error) {
    return res.status(400).send(validateResult.error.details);
  }

  //create hash password
  const hashedPassword = await bcrypt.hash(req.body.password, 12);

  // create token
  const token = crypto.randomBytes(32).toString("hex");
  // create hash token
  const hashedToken = crypto
  .createHash("sha256")
  .update(token)
  .digest("hex");



  const userData = {
    ...req.body,
    password : hashedPassword,
    api_token: hashedToken,
  };


  const table = new Table("users");
  const result = await table.insertRecord(userData);
  res.status(201).json({
    message: "User registered successfully",
    token,
  });
};

const Login = (req, res, next) => {};

export { Register, Login };
