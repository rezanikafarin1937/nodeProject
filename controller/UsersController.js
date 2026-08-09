import Joi from "joi";

const Register = (req, res, next) => {
  const schema = {
    username: Joi.string().min(3).max(50).required(),
    mobile: Joi.string().min(10).max(11).required(),
    password: Joi.string().min(5).max(100).required(),
    // email : Joi.string().email().required()
  };
  const validateResult = Joi.object(schema).validate(req.body);
  console.log(validateResult)
  res.send(validateResult)
//   res.send('reza nikafarin')
};

const Login = (req, res, next) => {};

export { Register, Login };
