/* eslint-disable no-unused-vars */
function toObject(keyValuePair) {
  const result = {};
  const key = keyValuePair[0];
  const value = keyValuePair[1];
  result[key] = value;
  return result;
}
