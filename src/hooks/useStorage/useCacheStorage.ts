import useStorageState from './useStorageState'
import altStorageState from './altStorageState'

class mapStorage {
  private storage = new Map()

  length = 0
  
  getItem(key: string) {
    return this.storage.has(key) && this.storage.get(key)
  }

  setItem(key:string, value: any) {
    this.storage.set(key, value)
    this.updateLength()
  }

  removeItem(key: string) {
    this.storage.delete(key)
    this.updateLength()
  }

  clear() {
    this.storage.clear()
    this.updateLength()
  }

  updateLength() {
    this.length = this.storage.size
  }

  key(index: number) {
    const keys = this.storage.keys()
    let key: string | null = null
    if (index > this.storage.size) {
      return key
    }
    for (let i = 0; i < this.storage.size; i++) {
      const result = keys.next()
      if (i === index) {
        key = result.value
        break
      }
    }
    return key
  }

}

const cache = new mapStorage()

// hooks场景
export function usecacheStorageState<T>(key: string, defaultValue?: T | (() => T)) {
  return useStorageState(cache, key, defaultValue)
}

// 非hooks场景
export function altCacheStorageState<T>(key: string, defaultValue?: T | (() => T)) {
  return altStorageState(cache, key, defaultValue)
}
