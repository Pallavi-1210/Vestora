const jwt = require("jsonwebtoken"); // bcz we want jwt funcs

require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
  // Get JWT from cookie
  const token = req.cookies.token;

  // No token → user is not logged in
  if (!token) {
    return res.status(401).send("Please login first");
  }

  try {
    // Verify JWT
    const decoded = jwt.verify(token, JWT_SECRET);

    // Save decoded payload in request ie id ie 12345@ anything
    req.user = decoded;

    // Continue to next middleware/route
    next();
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
};

module.exports = { authMiddleware };
