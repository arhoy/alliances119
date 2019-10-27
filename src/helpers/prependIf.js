// returns a new array with value at beginning of array, if array exists.
const prependIf = (value, array) => {
  if (array) {
    const newArray = array.slice();
    newArray.unshift(value);
    return newArray;
  } else {
    return [value];
  }
};

export default prependIf;
