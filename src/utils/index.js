export function storage(key, data = null) {
  if (!data) {
    return JSON.parse(localStorage.getItem(key));
  }
  localStorage.setItem(key, JSON.stringify(data));
}

export const delay = (timeout) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

export function has(object, key) {
  return object ? hasOwnProperty.call(object, key) : false;
}
