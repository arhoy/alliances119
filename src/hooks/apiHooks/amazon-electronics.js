import axios from 'axios';

export const getElectronics = async () => {
  const results = await axios(
    `https://pilotjs.com/api/v1/amazon-electronics?page=2`,
  );

  // setstate of results to results obj. here results.data is the object
  return results.data;
};
