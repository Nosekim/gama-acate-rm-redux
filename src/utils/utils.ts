const findPositionById = (id: string, arr: string[]) => {
  return arr.findIndex((character) => character === id);
};

export { findPositionById };
