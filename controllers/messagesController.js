const indexRouter = require('../routers/indexRouter');

async function getMessage(req, res) {
  const { id } = req.params;
  console.log(id);
  const message = await indexRouter.getAuthorById(Number(id));
  res.render('details');
}

module.exports = { getMessage };
