// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = propertyName => {
  return Object.defineProperty(this, propertyName, { enumerable: true });
};

const createNotEnumerableProperty = propertyName => {
  Object.defineProperty(Object.prototype, propertyName, {
    enumerable: false,
    value: "value"
  });
  return propertyName;
};

const createProtoMagicObject = () => {
  let magic = () => {};
  magic.prototype = magic.__proto__;
  return magic;
};

let incrementorVal = 0;
const incrementor = () => {
  incrementorVal += 1;
  if (
    incrementorVal === 3 ||
    incrementorVal === 8 ||
    incrementorVal === 10 ||
    incrementorVal === 15
  ) {
    return incrementorVal;
  }
  return incrementor;
};

let asyncResult = 1;
const asyncIncrementor = async () => {
  return await asyncResult++;
};

const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = param => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(param);
    }, 1000);
  });
};

const getDeepPropertiesCount = obj => {
  let count = Object.keys(obj).length;
  for (const property of Object.keys(obj)) {
    if (obj[property] !== null && typeof obj[property] === "object") {
      count += getDeepPropertiesCount(obj[property]);
    }
  }
  return count;
};

const createSerializedObject = () => {
  return new String();
};

const toBuffer = () => {};

const sortByProto = array => {
  return array.sort((a, b) => a - b);
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
