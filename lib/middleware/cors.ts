// lib/middleware/cors.js
export function cors(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust this as needed
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }
  
    next();
  }
  