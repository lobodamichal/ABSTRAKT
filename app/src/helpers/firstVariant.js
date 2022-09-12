const firstVariant = (variants, key) => {
  const first = variants.reduce((prevVar, currVar) =>
    prevVar[key] > currVar[key] ? currVar : prevVar
  );
  return first
};

export default firstVariant
