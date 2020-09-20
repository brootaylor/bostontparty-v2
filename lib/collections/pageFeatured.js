module.exports = collection => {
  return collection.getFilteredByTag('featured').reverse();
};
