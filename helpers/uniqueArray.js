const uniqueArray = (array) => {
  const set = new Set();
  return array.filter((item) => {
    const duplicate = set.has(item.id);
    set.add(item.id);
    return !duplicate;
  });
};

export default uniqueArray;
