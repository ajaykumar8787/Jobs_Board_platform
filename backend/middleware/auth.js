const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  let authHeader = req.headers.authorization;  // lowercase

  if (!authHeader)
    return res.status(401).json({ message: "Access Denied. No token provided." });

  // Extract Bearer token
  const token = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : authHeader;

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};
