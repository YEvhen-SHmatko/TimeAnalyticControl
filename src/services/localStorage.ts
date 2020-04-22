export const setToLocalStorage = (key: string, value: string) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    throw new Error(error);
  }
};
export const getWithLocalStorage = (key: string) => {
  try {
    const items = localStorage.getItem(key);
    return items ? JSON.parse(items) : null;
  } catch (error) {
    throw new Error(error);
  }
};
