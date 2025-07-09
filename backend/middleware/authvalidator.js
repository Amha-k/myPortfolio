// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']; // Expected format: 'Bearer TOKEN'
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token, process.env.ACCESS_SECRET_TOKEN || 'default-secret', (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid or expired token' });

    req.user = user; // Save decoded payload to request
    next();
  });
};

module.exports = authenticateToken;
