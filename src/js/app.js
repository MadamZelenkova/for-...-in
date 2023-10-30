export default function orderByProps(obj, arr) {
  const result = [];

  for (const prop of arr) {
    if (Object.hasOwnProperty.call(obj, prop)) {
      result.push({ key: prop, value: obj[prop] });
      delete obj[prop];
    } else {
      throw new Error("Передано неверное значение");
    }
  }

  const otherProp = {};
  for (const prop in obj) {
    otherProp[prop] = obj[prop];
  }

  const sortedKeys = Object.keys(otherProp).sort();
  for (const prop of sortedKeys) {
    result.push({ key: prop, value: otherProp[prop] });
  }
  return result;
}
