const orderArray = (array) => {
  return array.sort();
};

const orderNumericArray = (array) => {
  return array.sort((a, b) => {
    return a - b;
  });
};

const orderObjectArray = (array, property) => {
  if (!isNaN(array[0][property])) {
    return array.sort(function (a, b) {
      return a[property] - b[property];
    });
  }

  if (isNaN(array[0][property])) {
    return array.sort((a, b) => {
      if (a[property] < b[property]) {
        return -1;
      }
      if (a[property] > b[property]) {
        return 1;
      }
      return 0;
    });
  }
};

module.exports = { orderArray, orderNumericArray, orderObjectArray };
