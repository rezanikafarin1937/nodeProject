const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

function auth(req, res, next) {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).send("Access denied");
    }

    try {
        const decode = jwt.verify(
            token,
            process.env.SECRET_KEY
        );

        console.log("req.body = ",req.body)
        console.log("decode = ",decode)

        next();

    } catch (err) {
        return res.status(400).send(err.message);
    }
}

module.exports = auth;


