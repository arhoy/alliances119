import axios from 'axios';

export const getElectronics = async (page, limit) => {
  const results = await axios(
    `https://pilotjs.com/api/v1/amazon-electronics?page=${page ||
      1}&limit=${limit || 25}`,
  );

  // setstate of results to results obj. here results.data is the object
  return results.data;
};
