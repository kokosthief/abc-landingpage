export const getParsedParams = (params) => {
  const paramsMap = {};

  for (const [key, value] of new URLSearchParams(params)) {
    paramsMap[key] = value;
  }

  return paramsMap;
};
