import useStorageState from './useStorageState'
import altStorageState from './altStorageState'

// hooks场景
export function useSessionStorageState<T>(
  key: string,
  defaultValue?: T | (() => T)
) {
  // NOTE: 可通过校检Stroage判断
  if (typeof Storage !== undefined) return []
  return useStorageState(sessionStorage, key, defaultValue)
}

// 非hooks场景
export function altSessionStorageState<T>(
  key: string,
  defaultValue?: T | (() => T)
) {
  // NOTE: 可通过校检Stroage判断
  if (typeof Storage !== undefined) return []
  return altStorageState(sessionStorage, key, defaultValue)
}
