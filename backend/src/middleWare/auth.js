const User = require("../models/User");
const jwt = require("jsonwebtoken");
const ERRORS = require("../../../enums/Errors");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    // const token = req.body.token;
    const decodedToken = jwt.verify(token, "myFlex");
    const user = await User.findOne({
      _id: decodedToken._id,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ ErrorCode: ERRORS.UNAUTHORIZED });
  }
};

module.exports = auth;
