export const getKeyOrEmptyAny = (obj, key, any) => {
  if (obj == null) {
    return any;
  }

  let finalValue = any;
  if (!(key[0] in obj)) {
    return finalValue;
  }
  finalValue = obj[key[0]];
  for (let i = 1; i < key.length; i++) {
    if (finalValue == null) {
      return any;
    }

    if (!(key[i] in finalValue)) {
      return any;
    }
    finalValue = finalValue[key[i]];
  }

  return finalValue;
};

export const getKeyOrEmptyString = (obj, key) => {
  return getKeyOrEmptyAny(obj, key, "");
};

export const getKeyOrEmptyArray = (obj, key) => {
  return getKeyOrEmptyAny(obj, key, []);
};
