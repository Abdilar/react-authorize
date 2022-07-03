export const hasPermission = (permissions, check) => {
  if (Array.isArray(permissions) && permissions.length) {
    if (Array.isArray(check)) {
      return check.every(check => permissions.some(permission => permission === check))
    } else {
      return (check === "" || permissions.some(permission => permission === check));
    }
  }
  return false;
};

export const hasPermissionInLocalStorage = (localStorageKey, check) => {
  if (isEmptyString(localStorageKey)) return true;
  const permissions = JSON.parse(localStorage.getItem(localStorageKey));
  return hasPermission(permissions, check);
};

export function isEmptyString(data) {
  return !(isString(data) ? data : false);
}

export function isString(data) {
  return typeof data === 'string';
}
