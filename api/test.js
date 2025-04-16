// api/test.js

module.exports = async (req, res) => {
  res.status(200).json({ message: 'Test route is working!' });
};
