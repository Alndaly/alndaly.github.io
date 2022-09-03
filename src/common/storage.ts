/**
 * 本地缓存
 */
export function setLocalStorage(key: string, value: string) {
    window.localStorage.setItem(key, value);
}
export function getLocalStorage(key: string) {
    return window.localStorage.getItem(key);
}
