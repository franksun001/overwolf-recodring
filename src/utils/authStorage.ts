const tokenStorageKey = "metafy:local:token";

export const getToken = () => {
  return localStorage.getItem(tokenStorageKey);
};

export const setToken = (token: string) => {
  return localStorage.setItem(tokenStorageKey, token);
};
