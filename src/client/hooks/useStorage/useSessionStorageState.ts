import useStorageState from './useStorageState'
import altStorageState from './altStorageState'

declare var sessionStorage
// hooks场景
export function useSessionStorageState<T>(key: string, defaultValue?: T | (() => T)) {
  if(sessionStorage === void 0) return []
  return useStorageState(sessionStorage, key, defaultValue)
}

// 非hooks场景
export function altSessionStorageState<T>(key: string, defaultValue?: T | (() => T)) {
  if(sessionStorage === void 0) return []
  return altStorageState(sessionStorage, key, defaultValue)
}
