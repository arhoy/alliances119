const axios = require('axios');

// get amazon products from my published API
exports.getAmazonProducts = async () => {
  const res = await axios.get(
    `https://pilotjs.com/api/v1/amazonproducts?limit=500`,
  );

  return res.data;
};

exports.getAmazonElectronics = async () => {
  const res = await axios.get(`https://pilotjs.com/api/v1/amazon-electronics`);

  return res.data;
};
