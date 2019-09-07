import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env";

// Generates a JWT from payload
export const generateToken = (payload, expiry = "1d", options = {}) =>
  jwt.sign(payload, JWT_SECRET, { expiresIn: expiry, ...options });
// Verifies JWT token
export const verifyToken = token => jwt.verify(token, JWT_SECRET);

// Extracts JWT from header and verifies it
export const verifyAuthHeader = ({ authorization = "" }) => {
  const user = null;

  // No Auth Header
  if (!authorization) return { user };

  // Validate Bearer Auth
  const bearer = /[Bb]earer\s+(.*)$/.exec(authorization);

  // Invalid Bearer format
  if (!bearer) return { user };

  // Extract Token
  const token = bearer[1];

  try {
    // Validate token
    const decoded = verifyToken(token);
    return { user: decoded };
  } catch (e) {
    // Invalid token
    return { user };
  }
};

// Generate a dummy user with JWT capabilities
export const generateAuthUser = ({ username }) => {
  const userId = Math.ceil(Math.random() * 20);
  const token = generateToken({ name: username, id: userId });
  return {
    token,
    user: {
      id: userId,
      name: username
    }
  };
};
