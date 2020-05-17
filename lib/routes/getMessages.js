const { Router } = require('express');
const stockTwitsApi = require('../services/stocktwitsFetch');

module.exports = Router()
  .get('/:symbol', async(req, res, next) => {
    const { symbol } = req.params;
    try {
      const stockTwitsApiResponse = await stockTwitsApi(symbol);
      res.send(stockTwitsApiResponse.body);
    } catch(e) {
      console.error(e);
      next(e);
    }
  });
