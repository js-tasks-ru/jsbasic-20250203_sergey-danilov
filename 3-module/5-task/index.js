function getMinMax(str) {
  let a = str.split(" ").map(Number).filter(item => !isNaN(item)).sort((a, b) => a - b);
  const result = {min: a[0], max: parseInt(a.slice(-1), 10)};
  return result;
}
