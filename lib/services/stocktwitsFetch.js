require('dotenv').config();
const request = require('superagent');

module.exports = async(symbol) => {
  return await request
    .get(`${process.env.STOCKTWITS_URL}/${symbol}.json`);
};
