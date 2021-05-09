
module.exports = collection => {
  return collection.getFilteredByTag('news').reverse();
};
