import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.secretkey);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ msg: "Invalid or expired token." });
  }
};
