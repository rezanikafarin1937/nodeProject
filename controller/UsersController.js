import Joi from "joi";
import crypto from "crypto";
import Table from "../models/Table.js";
import bcrypt from "bcrypt";

const Register = async (req, res, next) => {
  const schema = {
    name: Joi.string().min(3).max(50).required().messages({
      "string.min": "تعداد کارکتر برای فیلد نام کم است",
    }),
    mobile: Joi.string().min(10).max(11).required(),
    password: Joi.string().min(5).max(100).required(),
    // email : Joi.string().email().required()
  };
  const validateResult = Joi.object(schema).validate(req.body);

  if (validateResult.error) {
    return res.status(400).send(validateResult.error.details[0].message);
  }

  const table = new Table("users");
  const users = await table.getByField("mobile", req.body.mobile);

  if (users.length > 0) {
    console.log('users = ',users)
    return res.status(400).send("کاربر با این مبایل وجود دارد");
  }

  //create hash password
  const hashedPassword = await bcrypt.hash(req.body.password, 12);

  // create token
  const token = crypto.randomBytes(32).toString("hex");
  // create hash token
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

  const userData = {
    ...req.body,
    password: hashedPassword,
    api_token: hashedToken,
  };

  const result = await table.insertRecord(userData);
  res.status(201).json({
    message: "User registered successfully",
    token,
  });
};

const Login = (req, res, next) => {};

export { Register, Login };
