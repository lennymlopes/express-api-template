module.exports = (req, res) => {
  const message = req.body.message
  res.json({status: 'ok', message})
}